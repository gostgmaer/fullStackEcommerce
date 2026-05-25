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

/**
 * @param {import("next-auth/jwt").JWT & {
 *   refreshToken?: string;
 *   accessTokenExpires?: number;
 * }} token
 */
async function refreshAccessToken(token) {
  try {
    const response = await fetch(`${baseurl}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });
    const refreshedTokens = await response.json();
    if (!response.ok) throw new Error("Failed to refresh token");
    const tokenData = refreshedTokens?.data || refreshedTokens;
    return {
      ...token,
      accessToken: tokenData.accessToken,
      accessTokenExpires: tokenData.expiresAt ? new Date(tokenData.expiresAt).getTime() : Date.now() + 60 * 60 * 1000,
      refreshToken: tokenData.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

/** @type {import("next-auth").NextAuthOptions} */
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

        if (res && res.status === "OK" && res.accessToken) return res;
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
      const provider = account?.provider;

      if (provider && ["github", "google"].includes(provider) && profile?.email) {
        try {
          const response = await fetch(`${baseurl}/auth/social-auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              provider,
              providerId: account?.providerAccountId || user.id,
              identifier: profile.email,
              email: profile.email,
              name: profile.name || user.name,
              profile,
            }),
          });
          const userData = await response.json();
          const payload = userData?.data || {};
          const tokens = payload.tokens || {};
          const socialUser = payload.user || {};

          user.accessToken = tokens.accessToken;
          user.refreshToken = tokens.refreshToken;
          user.id_token = tokens.idToken;
          user.token_type = tokens.tokenType;
          user.userId = socialUser.id;
          user.role = socialUser.role;
          user.email = socialUser.email;
          user.image = socialUser.image;
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
          userId: user.user?.id || user.userId,
          role: user.user?.role || user.role,
          email: user.user?.email || user.email,
          image: user.user?.image || user.image,
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
      session.user = {
        ...session.user,
        id: token.userId,
        role: token.role,
        email: token.email || session.user?.email,
        image: token.image || session.user?.image,
      };
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return url;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

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
  //   },
  //   async signOut(message) {
  //     // Called on sign out
  //   },
  //   async error(message) {
  //     // Error handling
  //   },
  // },

  // logger: {
  //   error(code, ...message) {
  //   },
  //   warn(code, ...message) {
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
