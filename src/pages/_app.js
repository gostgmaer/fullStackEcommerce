import { AuthContextProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/globalContext";
import { store } from "@/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <AuthContextProvider>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </AuthContextProvider>
      </Provider>
    </SessionProvider>
  );
}
