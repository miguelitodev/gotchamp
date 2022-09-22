import { IChampions } from "../../contexts";

interface IHome {
	champions: IChampions[];
}

export function Home({ champions }: IHome) {
	return (
		<div>
			{champions.map((champion) => (
				<p key={champion.key}>{champion.name}</p>
			))}
		</div>
	);
}
