import PageHeader from "@/components/PageHeader";
import { Package } from "lucide-react";
import React from "react";

const Estoque = () => {
	return (
		<PageHeader
			title={"Estoque"}
			icon={<Package className="w-4 h-4" />}
		/>
	);
};

export default Estoque;
