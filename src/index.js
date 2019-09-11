import React from "react";
import ReactDOM from "react-dom";
import MainScreen from "./containers/MainScreen/MainScreen";

function App() {
  return <MainScreen />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
