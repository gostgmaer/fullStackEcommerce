import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Extends the built-in Session type to include `accessToken`.
   * This matches the session callback in authOptions.js:
   *   session.accessToken = token.accessToken;
   */
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    id_token?: string;
    token_type?: string;
    user: {
      id?: string;
      role?: string;
    } & DefaultSession["user"];
  }

  /** Extends the built-in User type if needed */
  interface User {
    accessToken?: string;
    refreshToken?: string;
    id_token?: string;
    token_type?: string;
    userId?: string;
    role?: string;
    image?: string | null;
    user?: {
      id?: string;
      role?: string;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  /**
   * Extends the JWT type to include `accessToken` and expiry fields
   * used by the jwt callback in authOptions.js.
   */
  interface JWT {
    accessToken?: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    id_token?: string;
    token_type?: string;
    userId?: string;
    role?: string;
    image?: string | null;
    error?: string;
  }
}
