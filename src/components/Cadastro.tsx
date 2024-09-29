"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MoveLeft, MoveRight, ShoppingCart } from "lucide-react";
import { HandCoins } from "lucide-react";
import { Building2 } from "lucide-react";
import { SquareUserRound } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ChevronRight } from "lucide-react";
import { Separator } from "./ui/separator";
import { useLoader } from "@/lib/LoaderProvider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { estadosBrasileiros } from "@/lib/utils";
import axios from "axios";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Filiais } from "./FiliaisTable";

const formSchema = z.object({
	nome: z.string().min(2, {
		message: "O campo deve conter no mínimo 2 caracteres",
	}),
	numeroCnpj: z.string().min(14, "O campo deve conter 14 caracteres.").max(14, "O campo deve conter 14 caracteres."),
	inscricaoEstadual: z.string().min(9, "O campo deve conter no mínimo 9 caracteres.").max(14, "O campo não deve ultrapassar 14 caracteres."),
	telefone: z.string().min(10, "O telefone deve conter no mínimo 10 dígitos.").max(11, "O telefone deve conter no máximo 11 dígitos."),
	fax: z.string().max(11, "O fax deve conter no máximo 11 dígitos.").optional(),
	enderecoEmail: z.string().email({ message: "Digite um e-mail válido." }),
	site: z.string().url({ message: "Digite uma URL válida." }).optional(),
	observacao: z.string().max(500, "A observação não pode ultrapassar 500 caracteres.").optional(),
	estado: z.string().min(2, "O campo deve conter no mínimo 2 caracteres."),
	cidade: z.string().min(2, "O campo deve conter no mínimo 2 caracteres."),
	bairro: z.string().min(2, "O campo deve conter no mínimo 2 caracteres."),
	logradouro: z.string().min(2, "O campo deve conter no mínimo 2 caracteres."),
	numero: z.string().max(10, "O número não pode ultrapassar 10 caracteres."),
	complemento: z.string().optional(),
	cep: z.string().min(8, "O campo deve conter 8 caracteres.").max(8, "O campo deve conter 8 caracteres."),
});

export const Cadastro = () => {
	const loader = useLoader();
	const [tipo, setTipo] = useState<string>("");
	const [etapa, setEtapa] = useState<number>(1);
	const [modalConfirmacao, setModalConfirmacao] = useState(false);

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nome: "",
			numeroCnpj: "",
			inscricaoEstadual: "",
			telefone: "",
			fax: "",
			enderecoEmail: "",
			site: "",
			observacao: "",
			estado: "",
			cidade: "",
			bairro: "",
			logradouro: "",
			numero: "",
			complemento: "",
			cep: "",
		},
	});
	type ErrorKeys = keyof typeof form.formState.errors;
	const handleSelectTipoCadastro = (tipo: string) => {
		setTipo(tipo);
	};

	const isCadastroFilialCompleto = (etapa: number, tipo: string) => {
		return etapa == 5 && tipo == "filial";
	};

	const handleCep = (e: any) => {
		const cep = e.target.value;
		if (cep.length == 8) {
			var url = "https://viacep.com.br/ws/" + cep + "/json/";
			fetch(url)
				.then((response) => {
					console.log("start");
					loader.start();
					if (!response.ok) {
						throw new Error("Erro ao obter os dados do endereço");
					}
					return response.json();
				})
				.then((data) => {
					if (data.erro) {
						toast.error("CEP inválido", {
							description: "Digite novamente o CEP",
						});
					}
					form.setValue("cidade", data.localidade);
					form.setValue("estado", data.uf);
					form.setValue("logradouro", data.logradouro);
					form.setValue("bairro", data.bairro);
					loader.stop();
				})
				.catch((e) => {
					console.error("Ocorreu um erro: ", e);
					loader.stop();
				});
		}
	};

	const handleSubmit = () => {
		const data = form.getValues();
		onSubmit(data);
	};
	const handleProximo = async () => {
		if (isCadastroFilialCompleto(etapa, tipo)) {
			const isValid = await form.trigger();
			if (isValid) {
				setModalConfirmacao(true);
			} else {
				Object.keys(form.formState.errors).forEach((key) => {
					const error = form.formState.errors[key as ErrorKeys];
					if (error?.message != undefined) {
						toast(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${error?.message}`, {
							position: "top-right",
							closeButton: true,
						});
					}
				});
			}
			return;
		}
		if (!tipo) {
			toast.error("Selecione o tipo de cadastro", { position: "top-right" });
			return;
		}

		setEtapa((prev) => prev + 1);
	};

	const handleVoltar = () => {
		setEtapa((prev) => prev - 1);
	};

	const onSubmit = (data: any) => {
		console.log("data", data);
		const postData = {
			nome: data.nome,
			cnpj: {
				numeroCnpj: data.numeroCnpj,
			},
			inscricaoEstadual: data.inscricaoEstadual,
			telefone: data.telefone,
			fax: data.fax,
			email: {
				enderecoEmail: data.enderecoEmail,
			},
			site: data.site,
			observacao: data.observacao,
			endereco: {
				estado: data.estado,
				cidade: data.cidade,
				bairro: data.bairro,
				logradouro: data.logradouro,
				numero: data.numero,
				complemento: data.complemento,
				cep: data.cep,
			},
		};
		console.log("postData", postData);

		axios.post("https://localhost:44317/api/filial/v1/cadastrar", postData).then((response) => {
			console.log(response);
			toast.success("Filial cadastrada com sucesso", { position: "top-right" });
		});
		setModalConfirmacao(false);
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

			{tipo == "filial" && etapa != 1 && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<div className={`flex text-xs `}>
							{etapa > 1 && (
								<span
									onClick={() => {
										setEtapa(2);
									}}
									className={`cursor-pointer hover:underline content-center max-w-22 ${etapa != 2 ? "truncate" : ""}`}
								>
									Dados básicos
								</span>
							)}
							{etapa > 2 && (
								<div
									className="flex items-center cursor-pointer hover:underline"
									onClick={() => {
										setEtapa(3);
									}}
								>
									<ChevronRight className="w-3 mx-1" />
									<span className={`content-center max-w-20 ${etapa != 2 ? "truncate" : ""}`}>Endereço</span>
								</div>
							)}
							{etapa > 3 && (
								<div
									className="flex items-center cursor-pointer hover:underline"
									onClick={() => {
										setEtapa(4);
									}}
								>
									<ChevronRight className="w-3 mx-1" />
									<span className={`content-center max-w-20 ${etapa != 2 ? "truncate" : ""}`}>Contato</span>
								</div>
							)}
							{etapa > 4 && (
								<div
									className="flex items-center cursor-pointer hover:underline"
									onClick={() => {
										setEtapa(5);
									}}
								>
									<ChevronRight className="w-3 mx-1" />
									<span className={`content-center max-w-20 ${etapa != 2 ? "truncate" : ""}`}>Observação</span>
								</div>
							)}
						</div>

						<div className="md:grid md:grid-cols-12 gap-4">
							{/* Dados básicos */}
							{etapa == 2 && (
								<>
									<FormField
										control={form.control}
										name="nome"
										render={({ field }) => (
											<FormItem className="col-span-5">
												<FormLabel>Nome</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="numeroCnpj"
										render={({ field }) => (
											<FormItem className="col-span-3">
												<FormLabel>CNPJ</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="inscricaoEstadual"
										render={({ field }) => (
											<FormItem className="col-span-4">
												<FormLabel className="truncate">Inscrição Estadual</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}

							{/* Endereço */}
							{etapa == 3 && (
								<>
									<FormField
										control={form.control}
										name="cep"
										render={({ field }) => (
											<FormItem className="md:col-span-3 xl:col-span-2">
												<FormLabel>CEP</FormLabel>
												<FormControl>
													<Input
														onInput={handleCep}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="estado"
										render={({ field }) => (
											<FormItem className="md:col-span-2 xl:col-span-1">
												<FormLabel>Estado</FormLabel>
												<FormControl>
													<Select
														{...field}
														onValueChange={field.onChange}
													>
														<SelectTrigger>
															<SelectValue placeholder="UF" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																{estadosBrasileiros.map((estado) => (
																	<SelectItem
																		key={estado.sigla}
																		value={estado.sigla}
																	>
																		{estado.sigla}
																	</SelectItem>
																))}
															</SelectGroup>
														</SelectContent>
													</Select>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="cidade"
										render={({ field }) => (
											<FormItem className="md:col-span-4 xl:col-span-3">
												<FormLabel>Cidade</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="bairro"
										render={({ field }) => (
											<FormItem className="md:col-span-3 xl:col-span-3">
												<FormLabel>Bairro</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="logradouro"
										render={({ field }) => (
											<FormItem className="md:col-span-5 xl:col-span-3">
												<FormLabel>Logradouro</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="numero"
										render={({ field }) => (
											<FormItem className="md:col-span-2 xl:col-span-1">
												<FormLabel>Número</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="complemento"
										render={({ field }) => (
											<FormItem className="md:col-span-5 xl:col-span-3">
												<FormLabel>Complemento</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}

							{/* Contato */}
							{etapa == 4 && (
								<>
									<FormField
										control={form.control}
										name="fax"
										render={({ field }) => (
											<FormItem className="md:col-span-4 xl:col-span-2">
												<FormLabel>Fax</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="enderecoEmail"
										render={({ field }) => (
											<FormItem className="md:col-span-4 xl:col-span-3">
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="telefone"
										render={({ field }) => (
											<FormItem className="md:col-span-4 xl:col-span-2">
												<FormLabel>Telefone</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="site"
										render={({ field }) => (
											<FormItem className="md:col-span-5 xl:col-span-3">
												<FormLabel>Site</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}

							{/* Observação */}
							{etapa == 5 && (
								<>
									<FormField
										control={form.control}
										name="observacao"
										render={({ field }) => (
											<FormItem className="md:col-span-12">
												<FormLabel>Observação</FormLabel>
												<FormControl>
													<Textarea {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}
						</div>
					</form>
				</Form>
			)}

			<div className="p-4 absolute bottom-0 left-0 w-full flex gap-2">
				<AlertDialog open={modalConfirmacao}>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Cadastro de filial</AlertDialogTitle>
							<AlertDialogDescription>Você tem certeza que deseja cadastrar uma filial?</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel onClick={() => setModalConfirmacao(false)}>Não</AlertDialogCancel>
							<AlertDialogAction onClick={handleSubmit}>Sim</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
				{etapa > 1 && (
					<Button
						variant={"outline"}
						onClick={handleVoltar}
					>
						<MoveLeft className="mr-3 w-5" />
						Voltar
					</Button>
				)}

				<Button
					onClick={handleProximo}
					className="mt-auto w-full"
				>
					{etapa === 5 && tipo === "filial" ? "Cadastrar" : "Próximo"}
					<MoveRight className="ml-3 w-5" />
				</Button>
			</div>
		</div>
	);
};
