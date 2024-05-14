"use client";
import React, { useState } from "react";
import LinkNavMenu from "./LinkNavMenu";
import { Home, ClipboardList, ArchiveIcon, LineChartIcon, Wallet, Menu, LayoutList } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import MenuVertical from "./MenuVertical";
import { Separator } from "./ui/separator";
import Settings from "./Settings";

const MenuMobile = () => {
	return (
		<div className="flex h-full px-4 justify- items-center md:hidden">
			<div className="grid grid-cols-4 w-full">
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
		</div>
	);
};

export default MenuMobile;
