import { useCallback, useState } from "react";
import { api } from "../api";
import { IChampions } from "../contexts";

export const useFetchChampions = () => {
	const [champions, setChampions] = useState<IChampions[]>([]);
	const [championsLoading, setChampionsLoading] = useState(true);
	const [championsError, setChampionsError] = useState(null);

	const getChampions = useCallback(
		async (version: string) =>
			await api(`/cdn/${version}/data/pt_BR/champion.json`)
				.then((response) => {
					const data: IChampions[] = Object.values(response.data.data);
					setChampions(data);
				})
				.catch((error) => setChampionsError(error))
				.finally(() => setChampionsLoading(false)),
		[]
	);

	return { champions, getChampions, championsLoading, championsError };
};
