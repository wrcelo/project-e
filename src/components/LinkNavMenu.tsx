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
			className={`transition-all duration-150 ease-in-out h-12 w-12 md:w-full md:gap-3 flex items-center justify-center md:justify-start md:px-4 rounded-full md:rounded-lg md:h-11 ${
				pathname == `/${path}`
					? "text-primary bg-primary/5 border-primary/35 border md:border-none md:bg-primary md:text-background"
					: "bg-transparent md:hover:bg-foreground/5 md:text-muted-foreground md:hover:text-foreground"
			}`}
		>
			{icon}
			<span className="hidden md:block text-sm mt-[1px] md:text-sm ">{displayName}</span>
		</Link>
	);
};

export default LinkNavMenu;
