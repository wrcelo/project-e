import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { LayoutList } from "lucide-react";
import React from "react";

const Arquivos = () => {
	return (
		<PageLayout
			displayName="Arquivos"
			icon={<LayoutList className="w-4 h-4" />}
		>
			<div></div>
		</PageLayout>
	);
};

export default Arquivos;
