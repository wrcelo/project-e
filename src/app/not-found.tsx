import NavMenu from "@/components/NavMenu";
import { CircleX } from "lucide-react";
import React from "react";

const NotFound = () => {
	return (
		<>
			<div className="h-dvh w-dvh flex items-center justify-center px-12 ">
				<div className="flex gap-4 ">
					<CircleX className="text-primary" />
					<div className="mt-[-2px]">
						<h3 className="font-semibold mb-1">Página não encontrada.</h3>
						<p className="text-xs text-muted-foreground">Essa página não existe ou encontra-se em manutenção.</p>
					</div>
				</div>
			</div>
			<NavMenu />
		</>
	);
};

export default NotFound;
