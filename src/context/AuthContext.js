"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import { setToken, storeCookiesOfObject } from "@/helper/functions";
import authService from "@/helper/network/services/auth";

export const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);

  const [authError, setAuthError] = useState(undefined);
  const [userId, setUserId] = useState(null);

  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {



    if (session) {
      const currentsession = session;
      if (session["accessToken"]) {
        const token = session["accessToken"].split(".");
        setToken("headerPayload", `${token[0]}.${token[1]}`, session["exp"]);
        setToken("signature", `${token[2]}`, session.user?.["exp"]);
      }
      storeCookiesOfObject(currentsession);
    }

    if (!session) {
      const cookies = Cookies.get();
      for (const cookie in cookies) {
        Cookies.remove(cookie);
      }



    }
  }, [session]);



  const handleLoginAuth = async (body) => {
    try {
      const res = await authService.userLogin(body);
      if (res?.statusCode !== 200 || !res?.accessToken) {
        setAuthError(res);
      } else {
        const decoded = jwtDecode(res.accessToken);
        const decodedrefersh = jwtDecode(res.refreshToken);
        setToken(
          "accessToken",
          res.accessToken,
          decoded["exp"],
          "ACCESS_TOKEN"
        );
        setToken("refreshToken", res.refreshToken, decodedrefersh["exp"]);
        setUserId(decoded);
        setUser(res.user || {});
        setAuthError(undefined);
        router.push("/dashboard");
      }
    } catch (err) {
    }
  };

  const Logout = async () => {
    try {
      const res = await authService.userLogout();
      if (res?.success || res?.statusCode === 200 || res?.statusCode === "200") {
        router.push("/auth/login");
        window.sessionStorage.clear();
        window.localStorage.clear();
        const cookies = Cookies.get();
        for (const cookie in cookies) {
          Cookies.remove(cookie);
        }
        setUser(undefined);
        setUserId(undefined);

        setAuthError(undefined);
      } else {
        setAuthError(res);
      }
    } catch (error) { }
  };

  // const unsubscribe = async () => {
  //   const cookiesData = Cookies.get();
  //   try {
  //     if (cookiesData["headerPayload"]) {
  //       const decodedToken = jwtDecode(
  //         cookiesData["headerPayload"] + "." + cookiesData["signature"]
  //       );

  //       if (decodedToken["user_id"]) {
  //         const res = await post("/user/auth/verify/session");

  //         const decoded = jwtDecode(res.accessToken);
  //         setToken(
  //           "accessToken",
  //           res.accessToken,
  //           decoded["exp"],
  //           "ACCESS_TOKEN"
  //         );
  //         setUserId(decoded);
  //         setUser(jwtDecode(res.id_token));
  //       }
  //     }
  //     setAuthError(undefined);
  //   } catch (error) {
  //     setUser(undefined);
  //     setUserId(undefined);
  //     setAuthError(error.message);
  //   }
  // };

  const getToken = async () => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        const res = await authService.verifyToken({ refreshToken });
        const decoded = jwtDecode(res.accessToken);
        setToken(
          "accessToken",
          res.accessToken,
          decoded["exp"],
          "ACCESS_TOKEN"
        );
        setUserId(decoded);
      }
    } catch (error) {
      setUser(undefined);
      setUserId(undefined);

    }
  };

  useEffect(() => {
    const getTokenFresh = async () => {
      try {
        const refreshToken = Cookies.get("refreshToken");
        if (refreshToken) {
          const res = await authService.verifyToken({ refreshToken });
          const decoded = jwtDecode(res.accessToken);
          setToken(
            "accessToken",
            res.accessToken,
            decoded["exp"],
            "ACCESS_TOKEN"
          );
          setUserId(decoded);
        }
      } catch {
        setUser(undefined);
        setUserId(undefined);
      }
    };

    const tokenRefreshInterval = setInterval(getTokenFresh, 10 * 60 * 1000);
    return () => clearInterval(tokenRefreshInterval);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, handleLoginAuth, Logout, userId, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
