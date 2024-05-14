"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const LinkNavMenuDesktop = ({ path, icon, displayName }: { path: string; icon: ReactNode; displayName: string }) => {
	let pathname = usePathname();
	return (
		<Link
			href={`/${path}`}
			className={`transition-all duration-150 ease-in-out p-3 h-10 w-full flex items-center gap-2 rounded-md ${
				pathname == `/${path}` ? "text-primary  border-primary/30 " : "text-muted-foreground hover:text-foreground"
			}`}
		>
			{icon}
			<span className="text-sm mt-[1px]">{displayName}</span>
		</Link>
	);
};

export default LinkNavMenuDesktop;
