import { Cadastro } from "@/components/Cadastro";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { LayoutList } from "lucide-react";
import React from "react";

const Cadastros = () => {
	return (
		<PageLayout
			displayName="Cadastros"
			icon={<LayoutList className="w-4 h-4" />}
		>
			<Cadastro />
		</PageLayout>
	);
};

export default Cadastros;
