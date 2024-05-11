import { Bolt, CopyCheck, File, Home, WalletCards } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Settings from "./ui/Settings";

const NavMenu = () => {
	return (
		<>
			<div className="fixed bottom-0 left-0 h-20 w-full border-t">
				<div className="grid grid-cols-5 gap-4 items-center h-full px-8">
					<Link
						href={"/dashboard"}
						className="bg-primary h-12 w-12 flex items-center justify-center rounded-full "
					>
						<Home className="text-primary-foreground" />
					</Link>
					<Link
						href={"/"}
						className="h-12 w-12 flex items-center justify-center rounded-full "
					>
						<CopyCheck className="text-foreground" />
					</Link>
					<Link
						href={"/"}
						className="h-12 w-12 flex items-center justify-center rounded-full "
					>
						<File className="text-foreground" />
					</Link>
					<Link
						href={"/"}
						className="h-12 w-12 flex items-center justify-center rounded-full "
					>
						<WalletCards className="text-foreground" />
					</Link>
					<Drawer>
						<DrawerTrigger asChild>
							<div className="h-12 w-12 flex items-center justify-center rounded-full">
								<Bolt className="text-foreground" />
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
