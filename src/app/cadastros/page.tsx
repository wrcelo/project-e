import { Cadastro } from "@/components/Cadastro";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import React from "react";

const Cadastros = () => {
	return (
		<PageLayout displayName="Cadastros">
			<Cadastro />
		</PageLayout>
	);
};

export default Cadastros;
