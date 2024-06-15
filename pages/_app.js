import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};