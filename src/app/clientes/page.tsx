import { ClientesTable } from "@/components/ClientesTable";
import PageLayout from "@/components/PageLayout";
import { LayoutList } from "lucide-react";
import React from "react";

const Clientes = () => {
	return (
		<PageLayout
			displayName={"Clientes"}
			icon={<LayoutList className="w-4 h-4" />}
		>
			<ClientesTable />
		</PageLayout>
	);
};

export default Clientes;
