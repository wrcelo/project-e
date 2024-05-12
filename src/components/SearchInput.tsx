import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
	return (
		<div className=" w-full hidden md:flex">
			<Input
				placeholder="Buscar"
				className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border border-r-0"
			/>
			<Button
				variant={"outline"}
				className="rounded-l-none "
			>
				<SearchIcon className="w-4 h-4 ml-[-1px]" />
			</Button>
		</div>
	);
};

export default SearchInput;
