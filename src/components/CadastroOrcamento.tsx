import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const CadastroOrcamento = () => {
	return (
		<div className="min-h-[50dvh]">
			<div className="grid grid-cols-4 gap-y-6 gap-x-4 ">
				<div className="col-span-3 flex flex-col gap-2">
					<Label>Produto</Label>
					<Select>
						<SelectTrigger className="">
							<SelectValue
								className=""
								placeholder="Selecione um produto"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="1">Sarja Rustica</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="col-span-1 flex flex-col gap-2">
					<Label className="">Qtd</Label>
					<Input
						type="number"
						min={1}
						defaultValue={1}
					/>
				</div>
				<div className="flex flex-col gap-2 col-span-4">
					<Label className="">Cliente</Label>
					<Select>
						<SelectTrigger className="">
							<SelectValue
								className=""
								placeholder="Selecione o cliente"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="1">Nielson</SelectItem>
								<SelectItem value="2">Carlos Eduardo</SelectItem>
								<SelectItem value="3">Marcelo</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="col-span-4 flex flex-col gap-2">
					<Label className="">Observação</Label>
					<Textarea placeholder="Observação" />
				</div>
			</div>
		</div>
	);
};

export default CadastroOrcamento;
