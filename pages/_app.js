import React from "react";
import { StateProvider } from "../context/StateProvider";
import reducer, { initialState } from "../context/reducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </React.StrictMode>
  );
}

export default MyApp;
