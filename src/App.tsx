import React from "react";

import { ContextProvider } from "./contexts";
import { AppRoutes } from "./routes";
import { useFetchChampions } from "./utils/useFetchChampions";

import { useFetchVersion } from "./utils/useFetchVersion";

export default function App() {
	const { getVersion, version } = useFetchVersion();
	const { getChampions, champions, championsError, championsLoading } =
		useFetchChampions();

	React.useEffect(() => {
		getVersion().then((res) => {
			getChampions(res);
		});
	}, []);

	const contextValues = {
		version,
		champions,
		championsError,
		championsLoading,
	};

	return (
		<ContextProvider value={contextValues}>
			<AppRoutes />
		</ContextProvider>
	);
}
