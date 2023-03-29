import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}
