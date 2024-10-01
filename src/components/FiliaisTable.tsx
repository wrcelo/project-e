"use client";

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronLeft, ChevronRight, List, LoaderCircle, Plus, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "./ui/alert-dialog";
import { toast } from "sonner";

export type Filiais = {
	nome: string;
	cnpj: string;
	inscricaoEstadual: string;
	telefone: string;
	fax: string;
	email: string;
	site: string;
	observacao?: string | null;
	endereco: {
		estado: string;
		cidade: string;
		bairro: string;
		logradouro: string;
		numero: string;
		complemento: string;
		cep: string;
	};
};

export function FiliaisTable() {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});
	const [isDetalhesOpen, setIsDetalhesOpen] = useState(false);
	const [dadosDetalhes, setDadosDetalhes] = useState<Filiais>();
	const [data, setData] = useState<Filiais[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isAlertaRemoverFilialOpen, setIsAlertaRemoverFilialOpen] = useState(false);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const handleFetch = () => {
		axios
			.get(`${apiUrl}api/filial/v1/listar`)
			.then((response: any) => {
				setIsLoading(true);
				setData(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setIsLoading(false);
			});
	};
	useEffect(() => {
		handleFetch();

		return () => {};
	}, []);

	const handleConcluirExcluirFilial = (cnpj: string | undefined) => {
		if (cnpj == undefined) {
			toast.error("Algo deu errado ao fazer a requisição");
			return;
		}
		axios.delete(`${apiUrl}${cnpj}`).then((response) => {
			if (response.status == 204) {
				toast.success("Filial excluída com sucesso", { position: "top-right" });
				handleFetch();
			}
		});
	};

	const handleClickDetalhes = (row: any) => {
		setDadosDetalhes(row);
		setIsDetalhesOpen(true);
	};

	const handleAbrirModalConfirmarExclusao = (dados: any) => {
		setDadosDetalhes(dados);
		setIsAlertaRemoverFilialOpen(true);
	};
	const columns: ColumnDef<Filiais>[] = [
		// {
		// 	id: "select",
		// 	header: ({ table }) => (
		// 		<Checkbox
		// 			checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
		// 			onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
		// 			aria-label="Selecionar todos"
		// 		/>
		// 	),
		// 	cell: ({ row }) => (
		// 		<Checkbox
		// 			checked={row.getIsSelected()}
		// 			onCheckedChange={(value: any) => row.toggleSelected(!!value)}
		// 			aria-label="Select row"
		// 		/>
		// 	),
		// 	enableSorting: false,
		// 	enableHiding: false,
		// },
		{
			accessorKey: "nome",
			header: "Nome",
			cell: ({ row }) => <div className="capitalize">{row.getValue("nome")}</div>,
		},
		{
			accessorKey: "cnpj",
			header: "CNPJ",
			cell: ({ row }) => <div className="">{row.getValue("cnpj")}</div>,
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				return (
					<div className="flex justify-end">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="h-8 w-8 p-0"
								>
									<span className="sr-only">Gerenciar</span>
									<List className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Ações</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => handleClickDetalhes(row.original)}>Ver detalhes</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleAbrirModalConfirmarExclusao(row.original)}>Excluir</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				);
			},
		},
	];

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-fulls">
			<div className="flex items-center py-4">
				<div className="flex gap-2">
					<Button className="gap-2 flex px-3 sm:px-4">
						<span className="hidden sm:block">Adicionar</span>
						<Plus className="w-4 h-4" />
					</Button>
					<Button
						variant={"secondary"}
						className="gap-2 flex"
					>
						<span className="text-xs sm:text-sm">Importar</span>

						<Upload className="w-4 h-4" />
					</Button>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="ml-auto"
						>
							<span className="text-xs sm:text-sm">Colunas</span>
							<ChevronDown className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value: any) => column.toggleVisibility(!!value)}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									{isLoading ? (
										<div className="flex items-center justify-center w-full h-full">
											<LoaderCircle className="animate-spin" />
										</div>
									) : (
										"Nenhum resultado foi encontrado"
									)}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} linha(s) selecionadas.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeft />
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRight />
					</Button>
				</div>
			</div>
			<AlertDialog
				open={isAlertaRemoverFilialOpen}
				onOpenChange={setIsAlertaRemoverFilialOpen}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Excluir filial {dadosDetalhes?.nome}</AlertDialogTitle>
						<AlertDialogDescription>Esta ação não pode ser desfeita. Isso excluirá permanentemente essa filial e removerá seus dados.</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={() => setIsAlertaRemoverFilialOpen(false)}>Cancelar</AlertDialogCancel>
						<AlertDialogAction onClick={() => handleConcluirExcluirFilial(dadosDetalhes?.cnpj)}>Continuar</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
			<Dialog
				open={isDetalhesOpen}
				onOpenChange={setIsDetalhesOpen}
			>
				<DialogContent className="min-w-[60vw]">
					<DialogHeader>
						<DialogTitle className="mb-4">{dadosDetalhes?.nome}</DialogTitle>
					</DialogHeader>
					<Table>
						<TableCaption className="text-left text-xs">{`${dadosDetalhes?.nome} - ${dadosDetalhes?.cnpj}`}</TableCaption>
						<TableHeader>
							<TableRow className="bg-muted/50 border-none">
								{dadosDetalhes?.cnpj && <TableHead>CNPJ</TableHead>}
								{dadosDetalhes?.inscricaoEstadual && <TableHead>Inscrição Estadual</TableHead>}
								{dadosDetalhes?.telefone && <TableHead>Telefone</TableHead>}
								{dadosDetalhes?.email && <TableHead>Email</TableHead>}
								{dadosDetalhes?.fax && <TableHead>Fax</TableHead>}
								{dadosDetalhes?.site && <TableHead>Site</TableHead>}
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								{dadosDetalhes?.cnpj && <TableCell className="font-medium">{dadosDetalhes.cnpj}</TableCell>}
								{dadosDetalhes?.inscricaoEstadual && <TableCell>{dadosDetalhes.inscricaoEstadual}</TableCell>}
								{dadosDetalhes?.telefone && <TableCell>{dadosDetalhes.telefone}</TableCell>}
								{dadosDetalhes?.email && <TableCell>{dadosDetalhes.email}</TableCell>}
								{dadosDetalhes?.fax && <TableCell>{dadosDetalhes.fax}</TableCell>}
								{dadosDetalhes?.site && <TableCell>{dadosDetalhes.site}</TableCell>}
							</TableRow>
						</TableBody>
					</Table>
				</DialogContent>
			</Dialog>
		</div>
	);
}
