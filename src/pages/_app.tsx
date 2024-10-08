/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { useRouter } from "next/router";
import theme from "../theme/theme";
import dynamic from "next/dynamic";
import Head from "next/head";
import Loader from "../components/common/Loader";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});
interface Props extends AppProps {
	type: string;
	color: string;
}

function MyApp({ Component, pageProps }: Props): JSX.Element {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [pageLoad, setPageLoad] = useState(true);

	useEffect(() => {
		setPageLoad(false);
	}, []);

	// useEffect(() => {
	// 	const handleStart = (url: any) => {
	// 		if (window.Tawk_API) {
	// 			window.Tawk_API.hideWidget();
	// 		}
	// 		return url !== router.asPath && setLoading(true);
	// 	};
	// 	const handleComplete = (url: any) => {
	// 		window.Tawk_API.showWidget();
	// 		setLoading(false);
	// 	};
	// 	router.events.on("routeChangeStart", handleStart);
	// 	router.events.on("routeChangeComplete", handleComplete);
	// 	router.events.on("routeChangeError", handleComplete);
	// 	return () => {
	// 		router.events.off("routeChangeStart", handleStart);
	// 		router.events.off("routeChangeComplete", handleComplete);
	// 		router.events.off("routeChangeError", handleComplete);
	// 	};
	// }, [router.events, router.asPath]);
	return (
		<ChakraProvider theme={theme} resetCSS>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter initial={true}>
					{pageLoad ? (
						<motion.div key="loader">
							<Loader />
						</motion.div>
					) : (
						<>
							{loading ? (
								<motion.div key="loader">
									<Loader />
								</motion.div>
							) : (
								<>
									<Head>
										<meta charSet="utf-8" />
										<meta
											name="viewport"
											content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
										/>
										<meta
											name="description"
											content="Portfolio of a software engineer, curpra code developer.... code it, debug it."
										/>
										<meta name="keywords" content="Keywords" />
										<title>Curtis Developer || Portfolio</title>

										<link rel="manifest" href="/manifest.json" />
										<link
											href="/icon-192x192.png"
											rel="icon"
											type="image/png"
											sizes="16x16"
										/>
										<link
											href="/icon-192x192.png"
											rel="icon"
											type="image/png"
											sizes="32x32"
										/>
										<link
											rel="apple-touch-icon"
											href="/icon-192x192.png"
										></link>
									</Head>
									<Component {...pageProps} />
									<AnimatedCursor />
									{/* <Script id="tawk" strategy="lazyOnload">
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
									</Script> */}
									<Script
										id="snowify"
										strategy="afterInteractive"
										src="https://gauravkrp.com/snowify.min.js"
									/>
									<Script
										id="snowify-init"
										strategy="lazyOnload"
										dangerouslySetInnerHTML={{
											__html: `initSnowify({
      snowColor: 'offWhite',
      snowCount: 120,
      });`,
										}}
									/>
								</>
							)}
						</>
					)}
				</AnimatePresence>
			</AnimateSharedLayout>
		</ChakraProvider>
	);
}

export default MyApp;
