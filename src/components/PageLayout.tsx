import React, { ReactNode } from "react";
import PageHeader from "./PageHeader";

const PageLayout = ({ children, displayName }: { children: ReactNode; displayName: string }) => {
	return (
		<div className="h-full">
			<PageHeader title={displayName} />
			<div className="px-6 md:px-8">{children}</div>
		</div>
	);
};

export default PageLayout;
