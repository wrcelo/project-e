import { Bell } from "lucide-react";
import React from "react";

const PageHeader = ({ title }: { title: string }) => {
	return (
		<div className="flex justify-between items-center w-full mb-6">
			<h3 className="font-semibold">{title}</h3>
			<div className="relative">
				<span className="absolute top-0  right-0 w-2 h-2 rounded-full bg-primary"></span>
				<Bell className="relative" />
			</div>
		</div>
	);
};

export default PageHeader;
