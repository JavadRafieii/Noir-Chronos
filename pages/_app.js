import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import store from "@/reduxConfiguration/store";
import { Provider } from "react-redux";
import { fetchCartProducts } from "@/reduxConfiguration/basketSlice";
import { fetchWishlist } from "@/reduxConfiguration/wishlistSlice";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: true,
    });

    store.dispatch(fetchCartProducts());
    store.dispatch(fetchWishlist());

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