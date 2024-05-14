"use client";
import React, { useState } from "react";
import LinkNavMenu from "./LinkNavMenu";
import { Home, ClipboardList, ArchiveIcon, LineChartIcon, Wallet, Menu, LayoutList } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import MenuDesktop from "./MenuDesktop";
import { Separator } from "./ui/separator";
import Settings from "./Settings";

const MenuMobile = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setIsMenuOpen(false);
	};
	return (
		<div className="flex h-full px-5 w-full justify-between items-center md:hidden">
			<div
				className="grid grid-cols-5 justify-center items-center"
				onClick={handleMenuClick}
			>
				<LinkNavMenu
					path={"dashboard"}
					displayName={"Dashboard"}
					icon={<Home className="w-4 h-4" />}
				/>
				<LinkNavMenu
					path={"cadastros"}
					displayName={"Cadastros"}
					icon={<LayoutList className="w-4 h-4" />}
				/>
				<LinkNavMenu
					path={"arquivos"}
					displayName={"Arquivos"}
					icon={<ArchiveIcon className="w-4 h-4" />}
				/>
				<LinkNavMenu
					path={"relatorios"}
					displayName={"Relatórios"}
					icon={<LineChartIcon className="w-4 h-4" />}
				/>
				<LinkNavMenu
					path={"financeiro"}
					displayName={"Financeiro"}
					icon={<Wallet className="w-4 h-4" />}
				/>
			</div>
			<Separator
				orientation="vertical"
				className="h-10"
			/>
			<div>
				<Drawer
					open={isMenuOpen}
					onOpenChange={setIsMenuOpen}
				>
					<DrawerTrigger asChild>
						<div className="cursor-pointer transition-all w-full duration-150 ease-in-out h-12 text-muted-foreground flex items-center justify-center bg-transparent">
							<Menu className="w-10 h-4" />
							<span className="hidden md:block text-sm mt-[1px] md:text-sm">Menu</span>
						</div>
					</DrawerTrigger>
					<DrawerContent className="min-h-[80dvh] ">
						<div className="px-4">
							<h2 className="text-lg font-semibold px-3 mt-8">Menu</h2>
							<MenuDesktop onSelect={handleMenuClick} />
						</div>
						<div className="px-6">
							<h2 className="text-lg  font-semibold  mt-8">Configurações</h2>

							<Settings />
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</div>
	);
};

export default MenuMobile;
