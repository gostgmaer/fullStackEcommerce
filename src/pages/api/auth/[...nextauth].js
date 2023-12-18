import { baseurl, secret } from "@/config/setting";
import { setToken } from "@/helper/function";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,headers) {
        try {
          const response = await fetch(baseurl + "/user/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
       
          // console.log(apiCookies);
          const user = await response.json();
       
          
          

          if (user.access_token) {
            const access_token = jwtDecode(user.access_token);
            const userInfo = jwtDecode(user.id_token);
            // console.log(access_token,userInfo);
            const userSession = {
              ...user,
              ...userInfo,
              ...access_token,
              image: userInfo["profilePicture"],
              name: `${userInfo["firstName"]} ${userInfo["lastName"]}`,
            };
           

            return Promise.resolve({ ...userSession });
          } else {
            console.error("Authentication failed:", response.statusText);
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          return Promise.resolve(null);
        }
      },
    }),
    // Add other providers as needed
  ],

  debug: true,
  secret: secret,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // async session({ session, token, user }) {
    //   // Set cookies in the response
    //   // console.log(session, token, user);
    //   session["cookies"] = [
    //     {
    //       name: 'cookie1',
    //       value: 'value1',
    //       options: {
    //         path: '/',
    //         httpOnly: true,
    //       },
    //     },
    //     {
    //       name: 'cookie2',
    //       value: 'value2',
    //       options: {
    //         path: '/',
    //         httpOnly: true,
    //       },
    //     },
    //   ];

    //   return session;
    // },
  
  },  
  pages: {
    signIn: "/auth/signin", // Your sign-in page URL
    error: "/auth/signin", // Your error page URL
  },
});
