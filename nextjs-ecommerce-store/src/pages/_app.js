import CartBlock from "@/components/cart";
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/globalContext";
import { fetcher } from "@/lib/helper";
import { store } from "@/store";
import "@/styles/globals.css";

import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

import { Provider } from "react-redux";
import { SWRConfig } from "swr";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <SWRConfig  value={{ fetcher }}>
        <Provider store={store}>
          <AppProvider>
            <AuthProvider>
              <CssBaseline />
              <NextNProgress
                color="#03C6C7"
                height={3}
                startPosition={0.1}
                stopDelayMs={50}
                showOnShallow={true}
              />

              <Component {...pageProps}></Component>
              <CartBlock />
            </AuthProvider>
          </AppProvider>
        </Provider>
      </SWRConfig>
    </SessionProvider>
  );
}
