"use client";
import { Bolt, CopyCheck, File, Home, LineChart, Menu, WalletCards } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Settings from "./ui/Settings";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const NavMenu = () => {
	const pathname = usePathname();
	return (
		<>
			<div className="h-20 w-full border-t bg-background">
				<div className="grid grid-cols-5 gap-4 items-center h-full px-8">
					<Link
						href={"/dashboard"}
						className={`h-12 w-12 flex items-center justify-center rounded-full ${
							pathname == "/dashboard" ? "!text-primary bg-primary/5 border-primary/35 border" : "bg-transparent"
						}`}
					>
						<Home className="" />
					</Link>
					<Link
						href={"/cadastros"}
						className={`h-12 w-12 flex items-center justify-center rounded-full ${
							pathname == "/cadastros" ? "!text-primary bg-primary/5 border-primary/35 border" : "bg-transparent"
						}`}
					>
						<CopyCheck className="" />
					</Link>
					<Link
						href={"/arquivos"}
						className={`h-12 w-12 flex items-center justify-center rounded-full ${
							pathname == "/arquivos" ? "!text-primary bg-primary/5 border-primary/35 border" : "bg-transparent"
						}`}
					>
						<File className="" />
					</Link>
					<Link
						href={"/relatorios"}
						className={`h-12 w-12 flex items-center justify-center rounded-full ${
							pathname == "/relatorios" ? "!text-primary bg-primary/5 border-primary/35 border" : "bg-transparent"
						}`}
					>
						<LineChart className="" />
					</Link>

					<Drawer>
						<DrawerTrigger asChild>
							<div className="h-12 w-12 flex items-center justify-center rounded-full">
								<Menu className="" />
							</div>
						</DrawerTrigger>
						<DrawerContent>
							<Settings />
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</>
	);
};

export default NavMenu;
