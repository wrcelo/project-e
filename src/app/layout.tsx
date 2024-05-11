import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavMenu from "@/components/NavMenu";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Projeto E",
	description: "Reescrita de um sistema.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			suppressHydrationWarning
		>
			<SessionProvider>
				<body className={`${inter.className} overflow-hidden`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<ScrollArea className="h-[calc(100dvh-80px)]">
							<main>{children}</main>
						</ScrollArea>

						<NavMenu />
					</ThemeProvider>
				</body>
				<Toaster />
			</SessionProvider>
		</html>
	);
}
