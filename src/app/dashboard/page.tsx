import PageLayout from "@/components/PageLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Home } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<PageLayout
			displayName={"Dashboard"}
			icon={<Home className="w-4 h-4" />}
		>
			<div className="grid gap-4">
				<div className="grid grid-cols-3 gap-4">
					<Skeleton className="h-56" />
					<Skeleton className="h-56" />
					<Skeleton className="h-56" />
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Skeleton className="min-h-96" />
					<Skeleton className="min-h-96" />
				</div>
			</div>
		</PageLayout>
	);
};

export default Dashboard;
