"use client";
import { Bell, Menu, Search } from "lucide-react";
import React, { useState } from "react";
import Notifications from "./Notifications";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchInput from "./SearchInput";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import MenuVertical from "./MenuVertical";
import Settings from "./Settings";

const PageHeader = ({ title }: { title: string }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setIsMenuOpen(false);
	};
	return (
		<div className="flex justify-between items-center w-full mb-6 sticky top-0 left-0 p-6 py-5 border-b">
			<div className="flex gap-4 items-center">
				<h3 className="font-semibold text-md">{title}</h3>
			</div>
			<div>
				<Drawer
					open={isMenuOpen}
					onOpenChange={setIsMenuOpen}
				>
					<DrawerTrigger asChild>
						<div className="cursor-pointer transition-all duration-150 ease-in-out text-foreground flex items-center justify-center bg-transparent">
							<Menu className="h-4" />
							<span className="hidden md:block text-sm mt-[1px] md:text-sm">Menu</span>
						</div>
					</DrawerTrigger>
					<DrawerContent className="min-h-[80dvh] ">
						<div className="px-4">
							<h2 className="text-lg font-semibold px-3 mt-8">Menu</h2>
							<MenuVertical onSelect={handleMenuClick} />
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

export default PageHeader;
