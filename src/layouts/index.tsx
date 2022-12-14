import dynamic from "next/dynamic";
import React from "react";
// import Loader from "../loader/Loader";
const Header = dynamic(() => import("../components/common/Header"), {
	// suspense: true,
	// ssr: false,
});

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
