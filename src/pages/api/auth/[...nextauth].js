import { baseurl, secret } from "@/config/setting";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
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

            return Promise.resolve(mappedUser);
            // return userInfo;
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
 
  callbacks: {
    // async redirect(url, baseUrl) {
    //   const parsedUrl = new URL(url, baseUrl);
    //   const callbackUrlParam = parsedUrl.searchParams.get("callbackUrl");
    //   const decodedCallbackUrl = callbackUrlParam
    //     ? decodeURIComponent(callbackUrlParam)
    //     : "/";

    //   // Redirect the user to the decoded callbackUrl after authentication
    //   return decodedCallbackUrl;
    // },
  },

  pages: {
    signIn: "/auth/signin", // Your sign-in page URL
    error: "/auth/signin", // Your error page URL
  },
});

// // const callbacks = {
// //     jwt: async ({ token, user }) => {
// //     if (user) {
// //     // This will only be executed at login. Each next invocation will skip this part.
// //     token.accessToken = user.data.accessToken;
// //     token.accessTokenExpiry = user.data.accessTokenExpiry;
// //     token.refreshToken = user.data.refreshToken;
// //     }
// //     const shouldRefreshTime = Math.round((token["accessTokenExpiry"] - 60 * 60 * 1000) - Date.now());
// //     if (shouldRefreshTime > 0) {
// //     return Promise.resolve(token);
// //     }
// //     token = refreshAccessToken(token);
// //     return Promise.resolve(token);
// //     },
// //     session: async ({ session, token }) => {
// //     session.accessToken = token.accessToken;
// //     session.accessTokenExpiry = token.accessTokenExpiry;
// //     session.error = token.error;
// //     return Promise.resolve(session);
// //     },
// //     }

// import { baseurl, secret } from "@/config/setting";
// import { jwtDecode } from "jwt-decode";
// import NextAuth from "next-auth";
//  import Cookies from 'cookies'; // Import the 'cookies' module
// import Credentials from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           const response = await fetch(baseurl + "/user/auth/login", {
//             method: "POST",
//             body: JSON.stringify(credentials),
//             headers: { "Content-Type": "application/json" },
//           });

//           if (response.ok) {
//             const user = await response.json();
//             const access_token = jwtDecode(user.access_token);
//             const refresh_token = jwtDecode(user.refresh_token);
//             const userInfo = jwtDecode(user.id_token);

//             // Set cookies for access and refresh tokens
//             const cookies = new Cookies();
//             cookies.set('access_token', user.access_token, { httpOnly: true });
//             cookies.set('refresh_token', refresh_token, { httpOnly: true });

//             // Map user information to the standard properties expected by NextAuth
//             const mappedUser = {
//               id: access_token["user_id"], // Assuming 'sub' is the user ID in your JWT
//               name: `${userInfo["firstName"]} ${userInfo["lastName"]}`, // Change this to the appropriate property in your JWT
//               email: userInfo["email"],
//               username: userInfo["username"],
//             };

//             return Promise.resolve(mappedUser);
//           } else {
//             console.error("Authentication failed:", response.statusText);
//             return Promise.resolve(null);
//           }
//         } catch (error) {
//           console.error("Error during authentication:", error);
//           return Promise.resolve(null);
//         }
//       },
//     }),
//     // Add other providers as needed
//   ],
//   callbacks: {
//     // Implement any callbacks you need
//   },
//   debug: true,
//   secret: secret,
//   session: {
//     maxAge: 24 * 60 * 60, // 1 day (in seconds)
//   },
//   pages: {
//     error: "/auth/signin", // Redirect to the 'my-account' page if an error occurs
//     signIn: "/auth/signin", // Redirect to the 'my-account' page for sign-in
//   },
// });
