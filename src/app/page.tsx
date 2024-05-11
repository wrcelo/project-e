import FormLogin from "@/components/FormLogin";

export interface Credentials {
	username: string;
	password: string;
}

export default function Home() {
	return (
		<div>
			<FormLogin />
		</div>
	);
}
