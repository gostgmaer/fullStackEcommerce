/* eslint-disable react-hooks/exhaustive-deps */
import { getToken } from "@/lib/helper";
import React, { useContext, useEffect, useState } from "react";
import { API, BEARER } from "../../constant";
const AuthContext = React.createContext(null);
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { productData } from "@/assets/mock/product";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const routing = useRouter();
  //   const [authToken, setauthToken] = useState(getToken());

  const logoutHandler = (params) => {
    routing.push("/api/auth/signout");
    signOut();
  };

  let authToken = null;
  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    authToken = getToken();
    // console.log(productData);
  }, [authToken]);
  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  const protectedRouteCheck = async () => {
    const session = await getSession();
   
    if (!session) {
      signIn();
    } else {
      setPageLoading(false);
    }
  };
  // useEffect(() => {
    
  //   protectedRouteCheck()
  // }, []);

  return (
    <AuthContext.Provider
      value={{ user, logoutHandler, setUser, protectedRouteCheck, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
