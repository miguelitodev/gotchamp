import React from "react";

import { IChampions } from "../../contexts";

import Logo from "../../assets/img/logo.png";

interface IHome {
	champions: IChampions[];
}

export function Home({ champions }: IHome) {
	const [champion, setChampion] = React.useState<IChampions | null>(null);

	const handleChampion = React.useCallback(() => {
		const indexChamp = Math.floor(Math.random() * champions.length);
		console.log(champions[indexChamp]);
		setChampion(champions[indexChamp]);
	}, []);

	const handleReset = React.useCallback(() => {
		setChampion(null);
	}, []);

	const formatTitle = (title: string) => {
		const capitalized = title.charAt(0).toUpperCase() + title.slice(1);
		return capitalized;
	};

	return (
		<div className="min-h-screen min-w-screen flex justify-center items-center flex-col bg-slate-900 pt-10">
			<div className="w-full md:w-2/3 lg:w-2/4 flex flex-col items-center">
				<img className="w-1/3 mb-6" src={Logo} alt="Logo league of legends" />
				{champion && (
					<div className="flex my-5 flex-col xl:flex-row items-center justify-between">
						<img
							className="w-3/4 xl:w-full mb-5 xl:mb-0"
							src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${champion.id}.png`}
						/>
						<div className="mx-5 md:ml-5 text-white">
							<h1 className="mb-10">
								<span className="font-black text-6xl">{champion.name}:</span>
								<br />
								<span className="text-xl">{formatTitle(champion.title)}</span>
							</h1>
							<span className="">{champion.blurb}</span>
							<div className="mt-5">
								{champion.tags.map((tag, index) => (
									<span
										className="p-2 rounded-md mr-3 bg-green-700 text-white font-bold"
										key={index}
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				)}
				<span className="text-zinc-50 font-semibold my-4 text-center">
					CLIQUE AQUI PARA PEGAR UM CAMPEÃO ALEATÓRIO
				</span>
				<div className="flex flex-col w-full justify-center items-center">
					<button
						onClick={handleChampion}
						className=" bg-green-600 w-5/6 md:w-2/5 p-3 m-3 font-bold text-lg text-green-900 rounded-sm opacity-75 hover:opacity-100"
					>
						RODAR
					</button>
					{champion && (
						<button
							onClick={handleReset}
							className=" bg-red-600 w-5/6 md:w-2/5 p-3 m-3 font-bold text-lg text-red-900 rounded-sm opacity-75 hover:opacity-100"
						>
							RESETAR
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
