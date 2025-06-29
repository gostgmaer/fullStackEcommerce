import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import authService from "@/helper/network/services/auth";
import {
  baseurl,
  githubClient,
  githubSecret,
  googleClient,
  googleSecret,
  secret,
} from "@/config/setting";

async function refreshAccessToken(token) {
  try {
    const response = await fetch(`${baseurl}/user/auth/session/refresh/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });
    const refreshedTokens = await response.json();
    if (!response.ok) throw new Error("Failed to refresh token");
    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000,
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const res = await authService.userLogin(payload);
        // if (credentials?.["callbackUrl"]) {
        //   res.callbackUrl = credentials["callbackUrl"];
        // }
        // console.log(res);

        // console.log("Response from authService:", res);

        if (res && res.status == "OK" && res.accessToken) return res;
        return null;
      },
    }),
    GitHubProvider({
      clientId: githubClient || "",
      clientSecret: githubSecret || "",
    }),
    GoogleProvider({
      clientId: googleClient || "",
      clientSecret: googleSecret || "",
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
    signIn: "/auth/signin",
    signOut: "/",
  },

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github" && profile?.email) {
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
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  socialID: user.id,
                  email: profile.email,
                  profilePicture: user.image,
                  username: profile.email,
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
      return !!user?.accessToken;
    },

    async jwt({ token, user, account, profile, trigger, isNewUser, session }) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          id_token: user.id_token,
          token_type: user.token_type,
          accessTokenExpires: Date.now() + 60 * 60 * 1000, // 1 hour
        };
      }
      // Return previous token if the access token has not expired yet
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }
      // Access token has expired, try to refresh it
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.id_token = token.id_token;
      session.token_type = token.token_type;
      return session;
    },

  async redirect({ url, baseUrl }) {
  if (url.startsWith("/")) return url;
  if (new URL(url).origin === baseUrl) return url;
  return baseUrl;
}

    // async redirect({ url, baseUrl }) {
    //   // Allow relative URLs, otherwise redirect to baseUrl
    //   if (url.startsWith("/")) return url;
    //   if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
  },
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: process.env.NODE_ENV === "production",
  //     },
  //   },
  // },

  // events: {
  //   async signIn(message) {
  //     // Called on successful sign in
  //     // console.log("User signed in:", message);
  //   },
  //   async signOut(message) {
  //     // Called on sign out
  //     console.log("User signed out:", message);
  //   },
  //   async error(message) {
  //     // Error handling
  //     console.error("NextAuth error:", message);
  //   },
  // },

  // logger: {
  //   error(code, ...message) {
  //     console.error("NextAuth error:", code, ...message);
  //   },
  //   warn(code, ...message) {
  //     console.warn("NextAuth warning:", code, ...message);
  //   },
  //   debug(code, ...message) {
  //     console.debug("NextAuth debug:", code, ...message);
  //   },
  // },

  theme: {
    colorScheme: "auto",
    brandColor: "",
    logo: "/vercel.svg",
  },

  debug: process.env.NODE_ENV === "development",
};
