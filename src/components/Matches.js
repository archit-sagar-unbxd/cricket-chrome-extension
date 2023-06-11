import React, { useEffect, useState } from "react";

import Match from "./Match";
import "../styles/Matches.scss";
import API_KEY from "../details";

const Matches = () => {
	const [matchesList, setMatchesList] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
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
				<div className="noResults">
					{/* <lord-icon
						src="https://cdn.lordicon.com/hrqwmuhr.json"
						trigger="loop"
						colors="primary:#fff,secondary:#fff"
						style={{ width: "50px", height: "50px" }}
					></lord-icon> */}
					<img src="noResults.gif" alt="" />
					&nbsp;No ongoing matches!
				</div>
			)}
		</div>
	);
};

export default Matches;
