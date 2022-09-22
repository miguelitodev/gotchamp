import { IChampions } from "../../contexts";

import Logo from "../../assets/img/logo.png";

import { getChamp } from "./utils";
import { useCallback, useState } from "react";
interface IHome {
	champions: IChampions[];
}

export function Home({ champions }: IHome) {
	const [champion, setChampion] = useState<IChampions | null>(null);

	const handleChampion = useCallback(() => {
		const indexChamp = Math.floor(Math.random() * champions.length);
		setChampion(champions[indexChamp]);
	}, []);

	const handleReset = useCallback(() => {
		setChampion(null);
	}, []);

	return (
		<div className="h-screen w-screen flex justify-center items-center flex-col bg-slate-900">
			<div className="w-1/3 flex flex-col items-center">
				<img className="w-2/3" src={Logo} alt="Logo league of legends" />
				{champion && (
					<img
						className="my-5 w-2/5"
						src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`}
						alt=""
					/>
				)}
				<span className="text-zinc-50 font-semibold my-4">
					CLIQUE AQUI PARA PEGAR UM CAMPEÃO ALEATÓRIO
				</span>
				<div className="flex flex-row w-1/3 justify-between">
					<button
						onClick={handleChampion}
						className=" bg-green-600 p-3 font-bold text-lg text-green-900 rounded-sm opacity-75 hover:opacity-100"
					>
						RODAR
					</button>
					<button
						onClick={handleReset}
						className=" bg-red-600 p-3 font-bold text-lg text-red-900 rounded-sm opacity-75 hover:opacity-100"
					>
						RESETAR
					</button>
				</div>
			</div>
		</div>
	);
}
