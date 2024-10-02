"use client";

import * as React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronLeft, ChevronRight, List, Plus, Upload } from "lucide-react";

const data: ProdutoEstoque[] = [
	{
		id: "7258",
		nome: "Helanca",
		cor: "Verde",
		metrosEstoque: 200,
		larguraTecidoEmMetro: 1.8,
	},
	{
		id: "7259",
		nome: "Algodão",
		cor: "Branco",
		metrosEstoque: 150,
		larguraTecidoEmMetro: 1.5,
	},
	{
		id: "7260",
		nome: "Seda",
		cor: "Vermelho",
		metrosEstoque: 100,
		larguraTecidoEmMetro: 1.2,
	},
	{
		id: "7261",
		nome: "Jeans",
		cor: "Azul",
		metrosEstoque: 250,
		larguraTecidoEmMetro: 1.6,
	},
	{
		id: "7262",
		nome: "Linho",
		cor: "Bege",
		metrosEstoque: 80,
		larguraTecidoEmMetro: 1.4,
	},
	{
		id: "7263",
		nome: "Veludo",
		cor: "Preto",
		metrosEstoque: 60,
		larguraTecidoEmMetro: 1.7,
	},
	{
		id: "7264",
		nome: "Organza",
		cor: "Rosa",
		metrosEstoque: 120,
		larguraTecidoEmMetro: 1.3,
	},
	{
		id: "7265",
		nome: "Viscose",
		cor: "Cinza",
		metrosEstoque: 90,
		larguraTecidoEmMetro: 1.5,
	},
	{
		id: "7266",
		nome: "Malha Fria",
		cor: "Amarelo",
		metrosEstoque: 70,
		larguraTecidoEmMetro: 1.8,
	},
	{
		id: "7267",
		nome: "Sarja",
		cor: "Marrom",
		metrosEstoque: 110,
		larguraTecidoEmMetro: 1.6,
	},
];

export type ProdutoEstoque = {
	id: string;
	nome: string;
	cor: string;
	metrosEstoque: number;
	larguraTecidoEmMetro: number;
};

export const columns: ColumnDef<ProdutoEstoque>[] = [
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
		accessorKey: "cor",
		header: "Cor",
		cell: ({ row }) => <div className="">{row.getValue("cor")}</div>,
	},
	{
		accessorKey: "metrosEstoque",
		header: "Estoque",
		cell: ({ row }) => <div className="">{row.getValue("metrosEstoque")}</div>,
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
							<DropdownMenuItem>Ver detalhes</DropdownMenuItem>
							<DropdownMenuItem>Excluir</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];

export function EstoqueTable() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

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
		<div className="w-full">
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
									Nenhum resultado foi encontrado
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
		</div>
	);
}
