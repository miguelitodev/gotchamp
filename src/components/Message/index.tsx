import React from "react";

interface IMessage {
	text: string;
}

export function Message({ text }: IMessage) {
	return (
		<div className="h-screen flex justify-center flex-col items-center">
			<h1 className="text-5xl text-red-600 font-bold">{text}</h1>
		</div>
	);
}
