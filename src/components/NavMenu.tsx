"use client";
import { ArchiveIcon, ClipboardList, CopyCheck, File, FileIcon, Home, LineChart, LineChartIcon, Menu, Wallet } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Settings from "./Settings";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import LinkNavMenu from "./LinkNavMenu";
import Notifications from "./Notifications";
import SearchInput from "./SearchInput";
import MenuMobile from "./MenuMobile";
import MenuVertical from "./MenuVertical";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const NavMenu = () => {
	const pathname = usePathname();

	return (
		<>
			{pathname != "/" && (
				<div className="h-20 w-full bg-secondary/10 md:w-96 md:h-dvh md:py-6 md:border-r">
					<MenuMobile />
					<MenuVertical />

					<Separator
						orientation="vertical"
						className="h-10 w-[1px] sm:hidden"
					/>
					<div className="md:hidden"></div>
				</div>
			)}
		</>
	);
};

export default NavMenu;
