import React from "react";
import LinkNavMenuDesktop from "./LinkNavMenuDesktop";
import { Home, LayoutList, ArchiveIcon, LineChartIcon, Wallet, Package, ShoppingCart, PlusCircle, Building, Building2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Settings from "./Settings";

const MenuVertical = ({ onSelect }: { onSelect?: any }) => {
	return (
		<div
			className="flex flex-col gap-1 md:px-4 h-full justify-between"
			onClick={onSelect}
		>
			<ScrollArea className="min-h-[50dvh] max-h-[70dvh]">
				<LinkNavMenuDesktop
					path={"dashboard"}
					displayName={"Dashboard"}
					icon={<Home className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"clientes"}
					displayName={"Clientes"}
					icon={<LayoutList className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"relatorios"}
					displayName={"Relatórios"}
					icon={<LineChartIcon className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"vendas"}
					displayName={"Vendas"}
					icon={<ShoppingCart className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"estoque"}
					displayName={"Estoque"}
					icon={<Package className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"financeiro"}
					displayName={"Financeiro"}
					icon={<Wallet className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"cadastros"}
					displayName={"Cadastros"}
					icon={<PlusCircle className="w-4 h-4" />}
				/>
				<LinkNavMenuDesktop
					path={"filiais"}
					displayName={"Filiais"}
					icon={<Building2 className="w-4 h-4" />}
				/>
			</ScrollArea>
			<Settings />
		</div>
	);
};

export default MenuVertical;
