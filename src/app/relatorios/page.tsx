import NavMenu from "@/components/NavMenu";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { LineChartIcon } from "lucide-react";
import React from "react";
import { type ChartConfig } from "@/components/ui/chart";
import { Relatorio } from "@/components/Relatorio";

const Relatorios = () => {
	return (
		<PageLayout
			displayName={"Relatórios"}
			icon={<LineChartIcon className="w-4 h-4" />}
		>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="p-4 rounded-lg border hover:bg-foreground/5 transition-all duration-150">
						<Relatorio />
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Relatorios;
