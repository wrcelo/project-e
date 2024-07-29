"use client";
import React, { useState } from "react";
import LinkNavMenu from "./LinkNavMenu";
import { Home, ClipboardList, ArchiveIcon, LineChartIcon, Wallet, Menu, LayoutList } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import MenuVertical from "./MenuVertical";
import { Separator } from "./ui/separator";
import Settings from "./Settings";

const MenuMobile = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setIsMenuOpen(false);
	};
	return (
		<div className="flex h-full px-4 justify- items-center md:hidden border-t md:border-none">
			<div className="grid grid-cols-5 w-full">
				<LinkNavMenu
					path={"cadastros"}
					displayName={"Cadastros"}
					icon={<LayoutList className="w-4 h-4" />}
				/>

				<LinkNavMenu
					path={"relatorios"}
					displayName={"Relatórios"}
					icon={<LineChartIcon className="w-4 h-4" />}
				/>
				<LinkNavMenu
					path={"dashboard"}
					displayName={"Dashboard"}
					icon={<Home className="w-4 h-4" />}
				/>
				<LinkNavMenu
					path={"financeiro"}
					displayName={"Financeiro"}
					icon={<Wallet className="w-4 h-4" />}
				/>
				<div className="md:hidden">
					<Drawer
						open={isMenuOpen}
						onOpenChange={setIsMenuOpen}
					>
						<DrawerTrigger asChild>
							<div className="transition-all duration-150 ease-in-out h-12  flex-col  rounded-full flex items-center justify-center w-full">
								<Menu className="h-4" />
								<span className="md:hidden md:text-sm text-[10px] mt-2">Menu</span>
							</div>
						</DrawerTrigger>
						<DrawerContent className="min-h-[80dvh] ">
							<div className="px-4 h-[60dvh]">
								<h2 className="text-lg font-semibold px-3 mt-8">Menu</h2>
								<MenuVertical onSelect={handleMenuClick} />
							</div>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</div>
	);
};

export default MenuMobile;
