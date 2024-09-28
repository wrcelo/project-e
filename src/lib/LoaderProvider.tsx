"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type LoaderContextProps = {
	isLoading: boolean;
	loaderText: string;
	start: (loaderText?: string) => void;
	stop: () => void;
};

export const LoaderContext = createContext<LoaderContextProps>({} as LoaderContextProps);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [loaderText, setLoaderText] = useState("");
	const [loaderStack, setLoaderStack] = useState<Array<boolean>>([]);

	const start = (loaderText = "Loader...") => {
		setLoaderText(loaderText);
		setLoaderStack([...loaderStack, true]);
	};

	const stop = () => setLoaderStack([...loaderStack.slice(1)]);

	useEffect(() => {
		if (!loaderStack.length) {
			setIsLoading(false);
			return;
		}
		setIsLoading(true);
	}, [loaderStack, start, stop]);

	return (
		<LoaderContext.Provider
			value={{
				isLoading,
				start,
				stop,
				loaderText,
			}}
		>
			{children}
		</LoaderContext.Provider>
	);
};

export const useLoader = () => {
	const loaderContext = useContext(LoaderContext);

	if (!loaderContext) {
		throw new Error("Please use useLoader inside the context of LoaderProvider");
	}

	return {
		start: loaderContext.start,
		stop: loaderContext.stop,
	};
};
