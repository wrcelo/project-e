"use client";
import { ArchiveIcon, ClipboardList, CopyCheck, File, Home, LineChart, LineChartIcon, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Settings from "./ui/Settings";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import LinkNavMenu from "./LinkNavMenu";

const NavMenu = () => {
	const pathname = usePathname();
	return (
		<>
			<div className="h-20 w-full border-t bg-secondary/10 md:w-96 md:h-dvh md:py-6">
				<div className="flex items-center h-full px-8 md:px-4 justify-between  gap-2 md:flex-col md:items-start">
					<div className="grid grid-cols-4 gap-2 items-center md:items-start h-full md:flex-col md:flex md:w-full">
						<LinkNavMenu
							path={"dashboard"}
							displayName={"Dashboard"}
							icon={<Home />}
						/>
						<LinkNavMenu
							path={"cadastros"}
							displayName={"Cadastros"}
							icon={<ClipboardList />}
						/>

						<LinkNavMenu
							path={"arquivos"}
							displayName={"Arquivos"}
							icon={<ArchiveIcon />}
						/>

						<LinkNavMenu
							path={"relatorios"}
							displayName={"Relatórios"}
							icon={<LineChartIcon />}
						/>
					</div>
					<Separator
						orientation="vertical"
						className="h-10 w-[1px] sm:hidden"
					/>

					<Drawer>
						<DrawerTrigger asChild>
							<div
								className={`transition-all duration-200 h-12 w-12 md:w-full md:gap-4 flex items-center justify-center md:justify-start md:px-4 rounded-full md:rounded-lg md:h-12 bg-transparent md:hover:bg-primary-foreground/5`}
							>
								<Menu />
								<span className="hidden md:block text-sm mt-[1px] md:text-xs ">Menu</span>
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
