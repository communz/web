import { AppProps } from "next/app";
import { hydrate, setup } from "oceanwind";
import * as React from "react";

import options from "../otion.config";

if (typeof window !== "undefined") {
	setup(options);
	hydrate();
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}