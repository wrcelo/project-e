import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { Wallet } from "lucide-react";
import React from "react";

const Financeiro = () => {
	return (
		<PageLayout
			displayName={"Financeiro"}
			icon={<Wallet className="w-4 h-4" />}
		>
			<div className="text-muted-foreground">Em construção...</div>
		</PageLayout>
	);
};

export default Financeiro;
