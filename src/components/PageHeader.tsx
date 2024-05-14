import { Bell, Search } from "lucide-react";
import React from "react";
import Notifications from "./Notifications";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchInput from "./SearchInput";

const PageHeader = ({ title }: { title: string }) => {
	return (
		<div className="flex justify-between items-center w-full mb-6 sticky top-0 left-0 p-6 bg-background border-b md:pt-0 md:px-0">
			<div className="flex gap-4 items-center">
				<h3 className="font-semibold text-md">{title}</h3>
			</div>
			<div>
				<Notifications />
			</div>
		</div>
	);
};

export default PageHeader;
