/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
	interface Window {
		Tawk_API: any;
		gtag: (...args: any[]) => void;
	}
}

declare module "@iconscout/react-unicons";
declare module "react-animated-cursor";
