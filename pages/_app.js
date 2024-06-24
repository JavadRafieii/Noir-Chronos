import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import store from "@/reduxConfiguration/store";
import { Provider } from "react-redux";
import { fetchCartProducts } from "@/reduxConfiguration/basketSlice";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(fetchCartProducts());
  }, []);

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
};