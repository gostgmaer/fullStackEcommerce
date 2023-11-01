import { AppProvider } from "@/context/globalContext";
import { store } from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}
