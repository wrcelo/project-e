import { ClientesTable } from "@/components/ClientesTable";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { Relatorio } from "@/components/Relatorio";
import { LineChartIcon, ShoppingCart } from "lucide-react";
import React from "react";

const Vendas = () => {
	return (
		<PageLayout
			displayName={"Vendas"}
			icon={<ShoppingCart className="w-4 h-4" />}
		>
			{/* Criar tabela de vendas */}
			<ClientesTable />
		</PageLayout>
	);
};

export default Vendas;
