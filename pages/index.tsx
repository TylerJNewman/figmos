import type { NextPage } from "next";
import Head from "next/head";
import ThemeChanger from "components/ThemeChanger";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2 bg-th-background text-th-primary-dark transition-colors">
			<Head>
				<title>Figmos</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
				<ThemeChanger />
				<h1 className="text-3xl font-bold">Figmos</h1>
			</main>
		</div>
	);
};

export default Home;
