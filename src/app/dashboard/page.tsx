import NavMenu from "@/components/NavMenu";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Bell } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className="p-8">
			<PageHeader title={"Dashboard"} />
			<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
				<Skeleton className="col-span-2 h-[250px]"></Skeleton>
				<Skeleton className="col-span-2 h-20"></Skeleton>
				<Skeleton className="col-span-1 h-20"></Skeleton>
				<Skeleton className="col-span-1 h-20"></Skeleton>
			</div>
		</div>
	);
};

export default Dashboard;
