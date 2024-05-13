import "@/styles/globals.css";
import Header from "@/components/header/header";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};