import { Bell } from "lucide-react";
import React from "react";
import Notifications from "./Notifications";

const PageHeader = ({ title }: { title: string }) => {
	return (
		<div className="flex justify-between items-center w-full mb-6">
			<h3 className="font-semibold text-lg">{title}</h3>
			<Notifications />
		</div>
	);
};

export default PageHeader;
