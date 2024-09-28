import { EstoqueTable } from "@/components/EstoqueTable";
import PageLayout from "@/components/PageLayout";
import { Package } from "lucide-react";
import React from "react";

const Estoque = () => {
	return (
		<PageLayout
			displayName={"Estoque"}
			icon={<Package className="w-4 h-4" />}
		>
			<EstoqueTable />
		</PageLayout>
	);
};

export default Estoque;
