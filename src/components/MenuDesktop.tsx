import React from "react";
import LinkNavMenuDesktop from "./LinkNavMenuDesktop";
import { Home, LayoutList, ArchiveIcon, LineChartIcon, Wallet } from "lucide-react";

const MenuDesktop = ({ onSelect }: { onSelect?: any }) => {
	return (
		<div
			className="flex flex-col gap-1 md:px-4"
			onClick={onSelect}
		>
			<LinkNavMenuDesktop
				path={"dashboard"}
				displayName={"Dashboard"}
				icon={<Home className="w-4 h-4" />}
			/>
			<LinkNavMenuDesktop
				path={"cadastros"}
				displayName={"Cadastros"}
				icon={<LayoutList className="w-4 h-4" />}
			/>
			<LinkNavMenuDesktop
				path={"arquivos"}
				displayName={"Arquivos"}
				icon={<ArchiveIcon className="w-4 h-4" />}
			/>
			<LinkNavMenuDesktop
				path={"relatorios"}
				displayName={"Relatórios"}
				icon={<LineChartIcon className="w-4 h-4" />}
			/>
			<LinkNavMenuDesktop
				path={"financeiro"}
				displayName={"Financeiro"}
				icon={<Wallet className="w-4 h-4" />}
			/>
		</div>
	);
};

export default MenuDesktop;
