import { useCallback, useState } from "react";
import { api } from "../api";

export const useFetchVersion = () => {
	const [version, setVersion] = useState("");
	const [versionLoading, setVersionLoading] = useState(true);
	const [versionError, setVersionError] = useState(null);

	const getVersion = useCallback(
		async () =>
			await api
				.get("/api/versions.json")
				.then((response) => {
					setVersion(response.data[0]);
					return response.data[0];
				})
				.catch((error) => setVersionError(error))
				.finally(() => setVersionLoading(false)),
		[]
	);

	return { version, getVersion, versionLoading, versionError };
};
