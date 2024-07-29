"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const LinkNavMenu = ({ path, displayName, icon }: { path: string; displayName: string; icon: ReactNode }) => {
	const pathname = usePathname();
	return (
		<div className="flex items-center justify-center w-full">
			<Link
				href={`/${path}`}
				className={`transition-all duration-150 ease-in-out h-12 w-12 flex flex-col items-center justify-center rounded-full ${
					pathname.includes("/" + path) ? "text-primary  border-primary/30" : "text-muted-foreground/75"
				}`}
			>
				{icon}
				<span className="text-[10px] mt-2">{displayName}</span>
			</Link>
		</div>
	);
};

export default LinkNavMenu;
