import React, { ReactNode } from "react";
import PageHeader from "./PageHeader";

const PageLayout = ({ children, displayName, icon }: { children: ReactNode; displayName: string; icon: ReactNode }) => {
	return (
		<div className="h-full">
			<PageHeader
				title={displayName}
				icon={icon}
			/>
			<div className="px-6 py-3 md:px-8">{children}</div>
		</div>
	);
};

export default PageLayout;
