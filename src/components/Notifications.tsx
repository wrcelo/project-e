import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Bell } from "lucide-react";
import { PopoverArrow } from "@radix-ui/react-popover";

const Notifications = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="relative">
					<span className="absolute top-0  right-0 w-2 h-2 rounded-full bg-primary"></span>
					<Bell className="relative" />
				</div>
			</PopoverTrigger>
			<PopoverContent className="mr-8 mt-2 min-h-[200px]">
				<div className="p-4 border shadow-sm rounded-md">
					<h3 className="text-sm text-foreground font-semibold">Nova notificação</h3>
					<p className="text-xs text-muted-foreground ">Uma nova atividade foi identificada</p>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default Notifications;
