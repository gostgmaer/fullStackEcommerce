import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/github";
import Cookies from "js-cookie";
import NextAuth from "next-auth";
import {
  baseurl,
  githubClient,
  githubSecret,
  googleClient,
  googleSecret,
  secret,
} from "@/config/setting";
import { jwtDecode } from "jwt-decode";
export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
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

        try {
          const user = await res.json();

          if (res.ok && user) {
            return user;
          }
        } catch (error) {
          console.log("Error:", error);
          throw new Error(error);
        }
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
    // ...add more providers here
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account,profile,session }) {
      if (user && account) {
        console.log("user && account",user, account,token,profile,session);
        
      } 

      // if (account && user) {
      //   const access_token = jwtDecode(user["access_token"]);
      //   const userInfo = jwtDecode(user["id_token"]);

      //   Cookies.set('access_token', user["access_token"]);
      //   Cookies.set('refresh_token', user["refresh_token"]);
      //   return {
      //     ...token,
      //     accessToken: user["access_token"],
      //     refreshToken: user["refresh_token"],
      //     idToken: user["id_token"], id: access_token["user_id"], email: userInfo["email"], image: userInfo["profilePicture"], name: `${userInfo["firstName"]} ${userInfo["lastName"]}`
      //   }
      // }

      return token
    },
    async session({ session, token,user }) {
      // Add the access token to the session object

      // console.log(token);

      if (token.accessToken) {
        session["accessToken"] = token.accessToken;
      }
      if (token.id) {
        session.user["id"] = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },

    // async signIn({ user, account }) {
    //   if (account.provider === 'google') {
    //     try {
      
    //       const { name, email } = user;
    //       const reqBody = {
    //         name,email
    //       }
    //       const res = await fetch(baseurl + `/user/auth/login`, {
    //         method: "POST",
    //         body: JSON.stringify(name, email),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
  
    //       try {
    //         const user = await res.json();
  
    //         if (res.ok && user) {
    //           return user;
    //         }
    //       } catch (error) {
    //         console.log("Error:", error);
    //         throw new Error(error);
    //       }

    //       return false; // Failure to create user

    //     } catch (error) {
    //       console.error('Error during sign in:', error);
    //       return false; // Indicate failure
    //     }
    //   }

    //   // Default return for other providers
    //   return true;
    // },

   
    


  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code #33FF5D
    logo: "/vercel.svg", // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
