import NavMenu from "@/components/NavMenu";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className="p-8">
			<PageHeader title={"Dashboard"} />
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
