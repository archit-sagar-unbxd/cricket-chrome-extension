import React, { useEffect, useState } from "react";

import Match from "./Match";
import "../styles/Matches.scss";

const Matches = () => {
	const [matchesList, setMatchesList] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.cricapi.com/v1/currentMatches?apikey=6248dc48-5760-4f1e-8470-de36651854af&offset=0"
		)
			.then((data) => {
				return data.json();
				// console.log(data.json());
			})
			.then((data) => {
				if (data.status !== "success") return;
				setMatchesList(data.data);
			});
	}, []);

	return (
		<div className="matches">
			{matchesList.length > 0 ? (
				matchesList.map((match, key) => {
					return <Match match={match} key={key} />;
				})
			) : (
				<div className="noResults">Nothing to show!</div>
			)}
		</div>
	);
};

export default Matches;
