import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"
import {
  DbURL,
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "@/utils/config";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/auth/signin',
  
  },
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({      
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text'},
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
   
          const payload = {
            email: credentials.email,
            password: credentials.password,
          };

          const url = `http://localhost:3000/api/auth/login`
             
          const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
          })
          
          const user = await res.json()
                  
          
          if (res.ok && user) {
            return user;
          }
        
        
          return null;
      
      }
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    // })
  ],
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "authDatabase",
  }),
  database: DbURL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "asdjhasdef",
  },
};

// @ts-ignore
export default NextAuth(authOptions);
