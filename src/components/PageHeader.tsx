"use client";
import { Bell, Menu, Search } from "lucide-react";
import React, { ReactNode, useState } from "react";
import Notifications from "./Notifications";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchInput from "./SearchInput";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import MenuVertical from "./MenuVertical";
import Settings from "./Settings";

const PageHeader = ({ title, icon }: { title: string; icon: ReactNode }) => {
	return (
		<div className="flex justify-between items-center w-full sticky top-0 left-0 p-8 border-b mb-6 py-5 bg-background z-50">
			<div className="flex gap-4 items-center">
				<div className="">{icon}</div>
				<h3 className="font-semibold text-md">{title}</h3>
			</div>
		</div>
	);
};

export default PageHeader;
