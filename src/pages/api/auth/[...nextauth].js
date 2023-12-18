import { baseurl, secret } from "@/config/setting";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(baseurl + "/user/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await response.json();

          if (user.access_token) {
            const access_token = jwtDecode(user.access_token);
            const refresh_token = jwtDecode(user.refresh_token);
            const userInfo = jwtDecode(user.id_token);
            const mappedUser = {
              id: access_token["user_id"], // Assuming 'sub' is the user ID in your JWT
              name: `${userInfo["firstName"]} ${userInfo["lastName"]}`, // Change this to the appropriate property in your JWT
              email: userInfo["email"],
              username: userInfo["username"],
            };

           // return Promise.resolve(mappedUser);
             return userInfo;
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

  },

  pages: {
    signIn: "/auth/signin", // Your sign-in page URL
    error: "/auth/signin", // Your error page URL
  },
});

