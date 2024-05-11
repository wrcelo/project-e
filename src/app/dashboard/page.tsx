import NavMenu from "@/components/NavMenu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className="px-8 pb-8">
			<div className="py-6 flex justify-between items-center">
				<h3 className="font-semibold">Dashboard</h3>
				<div className="relative">
					<span className="absolute top-0  right-0 w-2 h-2 rounded-full bg-primary"></span>
					<Bell className="relative" />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardTitle></CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent></CardContent>
					<CardFooter></CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle></CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent></CardContent>
					<CardFooter></CardFooter>
				</Card>
				<Card className="col-span-2">
					<CardHeader>
						<CardTitle></CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent></CardContent>
					<CardFooter></CardFooter>
				</Card>
				<Card className="col-span-2 min-h-[60dvh]">
					<CardHeader>
						<CardTitle></CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent></CardContent>
					<CardFooter></CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;
