import React from "react";

import { Loader } from "../../components/Loader";
import { Message } from "../../components/Message";

import { Home } from "../../contents/Home";

import { AppContext } from "../../contexts";

export function HomePage() {
	const { champions, championsError, championsLoading } =
		React.useContext(AppContext);

	if (championsError) return <Message text={championsError} />;
	if (championsLoading) return <Loader />;

	return <Home champions={champions} />;
}
