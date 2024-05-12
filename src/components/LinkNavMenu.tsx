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
			className={`transition-all duration-150 ease-in-out h-12 w-12 md:w-full md:gap-3 flex items-center justify-center md:justify-start md:px-4 rounded-full md:rounded-lg md:h-10 ${
				pathname == `/${path}`
					? "text-primary bg-primary/5 border-primary/30 border md:border-none  md:text-foreground md:bg-muted-foreground/5 md:font-semibold"
					: "md:hover:bg-muted-foreground/5 md:text-muted-foreground md:hover:text-foreground"
			}`}
		>
			{icon}
			<span className="hidden md:block text-sm mt-[1px] md:text-sm">{displayName}</span>
		</Link>
	);
};

export default LinkNavMenu;
