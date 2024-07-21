import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "3D Outfit Customizer | Built by Nick ",
	description: "3D Outfit Customizer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={""}>{children}</body>
		</html>
	);
}
