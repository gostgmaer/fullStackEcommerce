import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

import {
  baseurl,
  githubClient,
  githubSecret,
  googleClient,
  googleSecret,
  secret,
} from "@/config/setting";
async function refreshAccessToken(token) {
  // console.log(token);

  try {
    const response = await fetch(`${baseurl}/user/auth/session/refresh/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
      }),
    });
    //  console.log("Refreshed Tokens:", response);
    const refreshedTokens = await response.json();

    if (!response.ok) throw new Error("Failed to refresh token");

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000, // expiresIn in seconds
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    // console.error("Error refreshing access token:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(baseurl + `/user/auth/login`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: githubClient,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleClient,
      clientSecret: googleSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  secret,
  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },

  session: {
    strategy: "jwt", // type: "jwt" as const
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        try {
          const response = await fetch(`${baseurl}/user/auth/checkUser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: profile.email,
              email: profile.email,
            }),
          });

          let userData = await response.json();

          if (userData["statusCode"] === "404") {
            const createUserResponse = await fetch(
              `${baseurl}/user/auth/social-register`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  socialID: user.id,
                  email: profile.email,
                  profilePicture: user.image,
                  username: profile.email,
                  firstName: profile.login,
                }),
              }
            );

            userData = await createUserResponse.json();
          }

          user.accessToken = userData.accessToken;
          user.refreshToken = userData.refreshToken;
          user.id_token = userData.id_token;
          user.token_type = userData.token_type;

          return true;
        } catch (error) {
          console.error("Error during GitHub sign-in:", error);
          return false;
        }
      }

      // For credentials provider
      if (user?.accessToken) return true;
      return false;
    },

    async jwt({ token, user }) {
      if (user)
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expires: Date.now() + 1 * 24 * 60 * 1000, // 5 minutes
          accessTokenExpires: Date.now() + 7 * 24 * 60 * 1000, // 5 minutes
          id_token: user.id_token,
          token_type: user.token_type,
        };
      // return token;

      // console.log(token.exp * 1000, Date.now(), token.accessTokenExpires);
      // console.log(Date.now() < token.exp * 1000);

      if (Date.now() < token.exp) {
        return token;
      } else {
        return await refreshAccessToken(token);
      }

      // Access token has expired, try to refresh it
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.id_token = token.id_token;
      session.token_type = token.token_type;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  theme: {
    colorScheme: "auto",
    brandColor: "",
    logo: "/vercel.svg",
  },

  debug: process.env.NODE_ENV === "development",
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
