import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Bell, CircleX, TriangleAlert } from "lucide-react";
import { PopoverArrow } from "@radix-ui/react-popover";
import NotificationsItem from "./NotificationsItem";

const Notifications = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="relative">
					<span className="absolute top-0  right-0 w-2 h-2 rounded-full bg-primary"></span>
					<Bell className="relative" />
				</div>
			</PopoverTrigger>
			<PopoverContent className="mr-8 mt-2 w-[325px]">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-md font-semibold">Notificações</h3>
					<span className="text-xs underline underline-offset-2 cursor-pointer">Ver todas</span>
				</div>
				<div className="flex flex-col gap-4">
					<NotificationsItem
						title={"Nova Atividade"}
						description={"Uma atividade foi identificada"}
					/>
					<NotificationsItem
						title={"Nova Atividade"}
						description={"Uma atividade foi identificada"}
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default Notifications;
