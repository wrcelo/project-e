"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";

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
		<div className="">
			<div className="flex items-center gap-2 justify-between h-10">
				<Label htmlFor="isDarkMode">Modo Escuro</Label>
				<Switch
					id="isDarkMode"
					checked={isDarkMode}
					onCheckedChange={handleDarkMode}
				/>
			</div>
		</div>
	);
};

export default Settings;
