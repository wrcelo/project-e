import { CircleX, TriangleAlert } from "lucide-react";
import React from "react";

const NotificationsItem = ({ title, description }: { title: string; description: string }) => {
	return (
		<div className="p-4 py-3 border shadow-sm rounded-md flex gap-2 items-center hover:bg-muted-foreground/5 cursor-pointer relative">
			<div className="p-2 rounded-full bg-primary text-background">
				<TriangleAlert className="w-4 h-4" />
			</div>
			<div>
				<CircleX className="w-4 h-4 absolute top-[-7px] right-[-7px] bg-background rounded-full hover:text-destructive" />
				<div className="">
					<h3 className="text-sm text-foreground">{title}</h3>
					<p className="text-xs text-muted-foreground ">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default NotificationsItem;
