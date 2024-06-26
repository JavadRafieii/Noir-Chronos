import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import store from "@/reduxConfiguration/store";
import { Provider } from "react-redux";
import { fetchCartProducts } from "@/reduxConfiguration/basketSlice";
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {

    store.dispatch(fetchCartProducts());

    const handleRouteChange = (url) => {
      if (url === '/checkout') {
        document.body.classList.add('checkout-page');
      } else {
        document.body.classList.remove('checkout-page');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    handleRouteChange(router.pathname);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [router.events, router.pathname]);

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