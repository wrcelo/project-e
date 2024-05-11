"use client";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Credentials } from "@/app/page";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	username: z.string(),
	password: z.string(),
});

const FormLogin = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});
	const router = useRouter();
	const [credentials, setCredentials] = useState<Credentials>({ username: "", password: "" });

	function onSubmit(values: z.infer<typeof formSchema>) {
		let username = values.username;
		let password = values.password;
		if ((!username && !password) || !username || !password) {
			toast.error("Digite o usuário e/ou a senha", { position: "top-left" });
			return;
		}

		if (username == "admin") {
			router.push("/dashboard");
		} else {
			toast.error("Erro na autenticação", { position: "top-left" });
		}
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setCredentials((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	return (
		<div className="flex min-h-[100dvh] items-center justify-center  px-4 ">
			<div className="w-full max-w-md space-y-4">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight">Bem vindo!</h1>
					<p>Faça login para acessar o sistema</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<Card className="pt-5">
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="space-y-2">
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Senha</FormLabel>
												<FormControl>
													<Input
														{...field}
														type="password"
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</CardContent>
							<CardFooter className="flex flex-col">
								<Button
									className="w-full"
									type="submit"
								>
									Entrar
								</Button>
							</CardFooter>
						</Card>
					</form>
				</Form>

				<div className="text-center text-sm ">
					Não tem uma conta?
					<Link
						className="font-medium underline underline-offset-2 ml-2"
						href="#"
					>
						Criar conta
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FormLogin;
