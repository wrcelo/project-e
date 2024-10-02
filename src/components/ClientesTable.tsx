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
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
	ChevronDown,
	ChevronDownCircle,
	ChevronLeft,
	ChevronRight,
	ClipboardCheck,
	ClipboardCopy,
	DotSquare,
	List,
	PlusIcon,
	SortAsc,
	User,
} from "lucide-react";
import { toast } from "sonner";

const data: Cliente[] = [
	{
		uuid: "5a5fd7d8-456c-475e-9075-9025e22b5d28",
		nome: "Pablo Vegetti",
		telefone: "(32) 99783-8375",
		email: "pablo.vegetti@gmail.com",
	},
	{
		uuid: "6b5fd7d8-456c-475e-9075-9025e22b5d29",
		nome: "Maria Rezende",
		telefone: "(11) 99999-8888",
		email: "maria.rezende@gmail.com",
	},
	{
		uuid: "7c5fd7d8-456c-475e-9075-9025e22b5d30",
		nome: "João Pereira",
		telefone: "(21) 98888-7777",
		email: "joao.pereira@example.com",
	},
	{
		uuid: "8d5fd7d8-456c-475e-9075-9025e22b5d31",
		nome: "Maria Oliveira",
		telefone: "(31) 97777-6666",
		email: "maria.oliveira@example.com",
	},
	{
		uuid: "9e5fd7d8-456c-475e-9075-9025e22b5d32",
		nome: "Carlos Santos",
		telefone: "(71) 96666-5555",
		email: "carlos.santos@example.com",
	},
	{
		uuid: "0f5fd7d8-456c-475e-9075-9025e22b5d33",
		nome: "Fernanda Almeida",
		telefone: "(51) 95555-4444",
		email: "fernanda.almeida@example.com",
	},
	{
		uuid: "1g5fd7d8-456c-475e-9075-9025e22b5d34",
		nome: "Ricardo Costa",
		telefone: "(41) 94444-3333",
		email: "ricardo.costa@example.com",
	},
	{
		uuid: "2h5fd7d8-456c-475e-9075-9025e22b5d35",
		nome: "Juliana Rodrigues",
		telefone: "(61) 93333-2222",
		email: "juliana.rodrigues@example.com",
	},
	{
		uuid: "3i5fd7d8-456c-475e-9075-9025e22b5d36",
		nome: "Felipe Lima",
		telefone: "(81) 92222-1111",
		email: "felipe.lima@example.com",
	},
	{
		uuid: "4j5fd7d8-456c-475e-9075-9025e22b5d37",
		nome: "Aline Souza",
		telefone: "(91) 91111-0000",
		email: "aline.souza@example.com",
	},
	{
		uuid: "5k5fd7d8-456c-475e-9075-9025e22b5d38",
		nome: "Gustavo Fernandes",
		telefone: "(85) 90000-9999",
		email: "gustavo.fernandes@example.com",
	},
	{
		uuid: "6l5fd7d8-456c-475e-9075-9025e22b5d39",
		nome: "Camila Carvalho",
		telefone: "(62) 98888-8888",
		email: "camila.carvalho@example.com",
	},
	{
		uuid: "7m5fd7d8-456c-475e-9075-9025e22b5d40",
		nome: "Leonardo Batista",
		telefone: "(82) 97777-7777",
		email: "leonardo.batista@example.com",
	},
	{
		uuid: "8n5fd7d8-456c-475e-9075-9025e22b5d41",
		nome: "Patrícia Gomes",
		telefone: "(95) 96666-6666",
		email: "patricia.gomes@example.com",
	},
	{
		uuid: "9o5fd7d8-456c-475e-9075-9025e22b5d42",
		nome: "Rafael Mendes",
		telefone: "(84) 95555-5555",
		email: "rafael.mendes@example.com",
	},
	{
		uuid: "0p5fd7d8-456c-475e-9075-9025e22b5d43",
		nome: "Bianca Araújo",
		telefone: "(67) 94444-4444",
		email: "bianca.araujo@example.com",
	},
	{
		uuid: "1q5fd7d8-456c-475e-9075-9025e22b5d44",
		nome: "Gabriel Ribeiro",
		telefone: "(98) 93333-3333",
		email: "gabriel.ribeiro@example.com",
	},
	{
		uuid: "2r5fd7d8-456c-475e-9075-9025e22b5d45",
		nome: "Mariana Barros",
		telefone: "(79) 92222-2222",
		email: "mariana.barros@example.com",
	},
	{
		uuid: "3s5fd7d8-456c-475e-9075-9025e22b5d46",
		nome: "Lucas Martins",
		telefone: "(92) 91111-1111",
		email: "lucas.martins@example.com",
	},
	{
		uuid: "4t5fd7d8-456c-475e-9075-9025e22b5d47",
		nome: "Isabela Ferreira",
		telefone: "(65) 90000-0000",
		email: "isabela.ferreira@example.com",
	},
];

export type Cliente = {
	uuid: string;
	nome: string;
	email: string;
	telefone: string;
};

export const columns: ColumnDef<Cliente>[] = [
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
		cell: ({ row }) => (
			<div className="w-full">
				<span className="line-clamp-1">{row.getValue("nome")}</span>
			</div>
		),
	},
	// {
	// 	accessorKey: "email",
	// 	header: "Email",
	// 	cell: ({ row }) => (
	// 		<div className="w-full">
	// 			<span className="line-clamp-1">{row.getValue("email")}</span>
	// 		</div>
	// 	),
	// },
	{
		accessorKey: "telefone",
		header: "Telefone",
		cell: ({ row }) => <div className="lowercase">{row.getValue("telefone")}</div>,
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

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
							<DropdownMenuItem
								onClick={() => {
									navigator.clipboard.writeText(payment.telefone);
									toast.success("Telefone copiado para a área de transferência.", { icon: <ClipboardCheck className="w-4 h-4" />, position: "top-right" });
								}}
							>
								Copiar telefone
								<ClipboardCopy className="w-4 h-4 ml-2" />
							</DropdownMenuItem>
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

export function ClientesTable() {
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
				<Button className="gap-2 flex">Adicionar</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="ml-auto"
						>
							Colunas <ChevronDown className="ml-2 h-4 w-4" />
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
									No results.
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
