"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, CirclePlus, MoveLeft, MoveRight, ShoppingCart } from "lucide-react";
import { HandCoins } from "lucide-react";
import { Building2 } from "lucide-react";
import { SquareUserRound } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import CadastroOrcamento from "./CadastroOrcamento";
import CadastroVenda from "./CadastroVenda";
import CadastroFilial from "./CadastroFilial";
import CadastroCliente from "./CadastroCliente";

export const Cadastro = () => {
	const [tipo, setTipo] = useState<string>("");
	const [etapa, setEtapa] = useState(1);
	const router = useRouter();

	const handleSelectTipoCadastro = (tipo: string) => {
		setTipo(tipo);
	};

	const handleProximo = () => {
		if (!tipo) {
			toast.error("Selecione o tipo de cadastro", { position: "top-right" });
			return;
		}
		setEtapa(2);
	};
	const handleVoltar = () => {
		if (etapa > 1) {
			setEtapa((prev) => prev - 1);
		}
	};
	return (
		<div className="flex flex-col">
			{etapa === 1 && (
				<div>
					<h2 className="mb-4 text-sm text-muted-foreground">Selecione o tipo de cadastro:</h2>
					<ToggleGroup
						onValueChange={handleSelectTipoCadastro}
						type="single"
						className="grid grid-cols-2 grid-rows-2 md:grid-cols-1  gap-3"
					>
						<ToggleGroupItem
							className={`h-16 flex items-center md:justify-start md:h-12 md:px-4 gap-2 ${tipo === "venda" ? "bg-accent" : ""}`}
							variant={"outline"}
							value="venda"
						>
							<ShoppingCart className="w-5" />
							Venda
						</ToggleGroupItem>
						<ToggleGroupItem
							className={`h-16 flex items-center md:justify-start md:h-12 md:px-4 gap-2 ${tipo === "orcamento" ? "bg-accent" : ""}`}
							variant={"outline"}
							value="orcamento"
						>
							<HandCoins className="w-5" />
							Orçamento
						</ToggleGroupItem>
						<ToggleGroupItem
							className={`h-16 flex items-center md:justify-start md:h-12 md:px-4 gap-2 ${tipo === "filial" ? "bg-accent" : ""}`}
							variant={"outline"}
							value="filial"
						>
							<Building2 className="w-5" />
							Filial
						</ToggleGroupItem>
						<ToggleGroupItem
							className={`h-16 flex items-center md:justify-start md:h-12 md:px-4 gap-2 ${tipo === "cliente" ? "bg-accent" : ""}`}
							variant={"outline"}
							value="cliente"
						>
							<SquareUserRound className="w-5" />
							Cliente
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
			)}
			{etapa === 2 && tipo === "venda" && <CadastroVenda />}
			{etapa === 2 && tipo === "orcamento" && <CadastroOrcamento />}
			{etapa === 2 && tipo === "filial" && <CadastroFilial />}
			{etapa === 2 && tipo === "cliente" && <CadastroCliente />}

			<div className="p-4 absolute bottom-0 left-0 w-full flex gap-2">
				{etapa > 1 && (
					<Button
						className="md:h-12"
						variant={"outline"}
						onClick={handleVoltar}
					>
						<MoveLeft className="mr-3 w-5" />
						Voltar
					</Button>
				)}

				<Button
					onClick={handleProximo}
					className="mt-auto w-full md:h-12"
				>
					{etapa == 2 ? "Cadastrar" : "Próximo"}
					<MoveRight className="ml-3 w-5" />
				</Button>
			</div>
		</div>
	);
};
