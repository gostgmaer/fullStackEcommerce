
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/globalContext";
import "@/styles/globals.css";

import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <SessionProvider session={pageProps.session}>
        <AuthProvider>
          <CssBaseline />
          <NextNProgress
          color="#03C6C7"
          height={3}
          startPosition={0.1}
          stopDelayMs={50}
          showOnShallow={true}
        />
          <Component {...pageProps} ></Component>
        </AuthProvider>
      </SessionProvider>
    </AppProvider>
  );
}
