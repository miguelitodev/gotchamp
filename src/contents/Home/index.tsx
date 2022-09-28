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

	return (
		<div className="h-screen w-screen flex justify-center items-center flex-col bg-slate-900">
			<div className="w-full md:w-1/3 flex flex-col items-center">
				<img className="w-2/3" src={Logo} alt="Logo league of legends" />
				{champion && (
					<img
						className="my-5 w-2/5"
						src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
						alt=""
					/>
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
