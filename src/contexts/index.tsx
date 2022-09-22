import React, { useCallback } from "react";

interface IContextProvider {
	children: React.ReactNode;
	value: IAppContext;
}

export interface IChampions {
	name: string;
	title: string;
	image: {
		url: string;
	};
	tags: string[];
	key: number;
}

interface IAppContext {
	champions: IChampions[];
	championsError: string | null;
	championsLoading: boolean;
	version: string;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const ContextProvider: React.FC<IContextProvider> = ({
	children,
	...props
}) => <AppContext.Provider value={props.value}>{children}</AppContext.Provider>;
