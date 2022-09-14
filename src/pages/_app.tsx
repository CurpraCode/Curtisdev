import { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { useRouter } from "next/router";
import theme from "../theme/theme";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: any) => {
      if (window.Tawk_API) {
        Tawk_API.hideWidget();
      }
      return url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url: any) => {
      // return url === router.asPath && setLoading(false);
      Tawk_API.showWidget();
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, router.asPath]);
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
      <AnimatedCursor />
      <Script id="tawk" strategy="lazyOnload">
        {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/631f4e5b54f06e12d894375d/1gcp4k5sh';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
      `}
      </Script>
    </ChakraProvider>
  );
}

export default MyApp;
