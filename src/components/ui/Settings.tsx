"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "./switch";
import { Label } from "./label";
import { useTheme } from "next-themes";

const Settings = () => {
	const { setTheme, theme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (theme) {
			setTheme(theme);
		}

		if (theme == "dark") {
			setIsDarkMode(true);
		} else {
			setIsDarkMode(false);
		}
	}, []);

	const handleDarkMode = (isChecked: boolean) => {
		setTheme(isChecked ? "dark" : "light");
		setIsDarkMode(isChecked);
	};
	return (
		<div className="px-6 min-h-[80dvh] py-4">
			<div className="mb-6">
				<h2 className="text-xl mb-1 font-semibold">Configurações</h2>
				<p className="text-muted-foreground text-xs">Altere as configurações do seu sistema.</p>
			</div>
			<div className="flex items-center gap-2">
				<Switch
					checked={isDarkMode}
					onCheckedChange={handleDarkMode}
				/>
				<Label>Modo Escuro</Label>
			</div>
		</div>
	);
};

export default Settings;
