"use client";
import { ArchiveIcon, ClipboardList, CopyCheck, File, FileIcon, Home, LineChart, LineChartIcon, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Settings from "./ui/Settings";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import LinkNavMenu from "./LinkNavMenu";
import Notifications from "./Notifications";

const NavMenu = () => {
	const pathname = usePathname();

	return (
		<>
			{pathname != "/" && (
				<div className="h-20 w-full border-t bg-secondary/10 md:w-96 md:h-dvh md:py-6 md:border-r shadow">
					<div className="flex items-center h-full px-6 md:px-4 justify-between  gap-2 md:flex-col md:items-start">
						<div className="grid grid-cols-4 gap-2 items-center md:items-start h-full md:flex-col md:flex md:w-full md:border-b">
							<LinkNavMenu
								path={"dashboard"}
								displayName={"Dashboard"}
								icon={<Home className="w-4 h-4" />}
							/>
							<LinkNavMenu
								path={"cadastros"}
								displayName={"Cadastros"}
								icon={<ClipboardList className="w-4 h-4" />}
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
						</div>
						<Separator
							orientation="vertical"
							className="h-10 w-[1px] sm:hidden"
						/>

						<Drawer>
							<DrawerTrigger asChild>
								<div
									className={` cursor-pointer transition-all duration-150 ease-in-out h-12 w-12 md:w-full md:gap-3 flex items-center justify-center md:justify-start md:px-4 rounded-full md:rounded-lg md:h-11 bg-transparent md:hover:bg-foreground/5 md:text-muted-foreground md:hover:text-foreground"
									}`}
								>
									<Menu className="w-4 h-4" />
									<span className="hidden md:block text-sm mt-[1px] md:text-sm ">Menu</span>
								</div>
							</DrawerTrigger>
							<DrawerContent>
								<Settings />
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			)}
		</>
	);
};

export default NavMenu;
