import React from "react";
import Matches from "./components/Matches";
import "./styles/App.scss";

const App = () => {
	return (
		<div className="App">
			<h1 className="title">
				<span className="logo"></span>Welcome to Cricket Live!
			</h1>
			<Matches />
		</div>
	);
};

export default App;
