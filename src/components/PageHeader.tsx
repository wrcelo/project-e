import { Bell, Search } from "lucide-react";
import React from "react";
import Notifications from "./Notifications";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchInput from "./SearchInput";

const PageHeader = ({ title }: { title: string }) => {
	return (
		<div className="flex justify-between items-center w-full mb-6">
			<div className="flex gap-4 items-center">
				<h3 className="font-semibold text-lg">{title}</h3>
			</div>
			<div>
				<Notifications />
			</div>
		</div>
	);
};

export default PageHeader;
