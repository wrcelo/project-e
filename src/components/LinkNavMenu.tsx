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
			className={`transition-all duration-150 ease-in-out h-10 w-10 flex items-center justify-center  rounded-full ${
				pathname == `/${path}` ? "text-primary bg-primary/5 border-primary/30" : "text-muted-foreground "
			}`}
		>
			{icon}
			<span className="hidden text-sm mt-[1px]">{displayName}</span>
		</Link>
	);
};

export default LinkNavMenu;
