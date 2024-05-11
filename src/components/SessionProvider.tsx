import React, { ReactNode } from "react";

interface SessionProviderProps {
	children: ReactNode;
}

const SessionProvider = ({ children }: SessionProviderProps) => {
	return <>{children}</>;
};

export default SessionProvider;
