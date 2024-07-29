import PageHeader from "@/components/PageHeader";
import { ShoppingCart } from "lucide-react";
import React from "react";

const Vendas = () => {
	return (
		<PageHeader
			title={"Vendas"}
			icon={<ShoppingCart className="w-4 h-4" />}
		/>
	);
};

export default Vendas;
