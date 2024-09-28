import PageLayout from "@/components/PageLayout";
import { Building2 } from "lucide-react";
import React from "react";

const Filiais = () => {
	return (
		<PageLayout
			displayName={"Filiais"}
			icon={<Building2 className="w-4 h-4" />}
		>
			<div className="text-muted-foreground">Em construção...</div>
		</PageLayout>
	);
};

export default Filiais;
