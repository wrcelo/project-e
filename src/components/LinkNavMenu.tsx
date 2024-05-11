"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const LinkNavMenu = ({ path, displayName, icon }: { path: string; displayName: string; icon: ReactNode }) => {
	const pathname = usePathname();
	return (
		<Link
			href={`/${path}`}
			className={`transition-all duration-200 h-12 w-12 md:w-full md:gap-4 flex items-center justify-center md:justify-start md:px-4 rounded-full md:rounded-lg md:h-11 ${
				pathname == `/${path}`
					? "!text-primary bg-primary/5 border-primary/35 border md:border-none md:bg-primary/15 md:hover:bg-primary/20 "
					: "bg-transparent md:hover:bg-primary-foreground/5"
			}`}
		>
			{icon}
			<span className="hidden md:block text-sm mt-[1px] md:text-xs ">{displayName}</span>
		</Link>
	);
};

export default LinkNavMenu;
