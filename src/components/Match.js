import React from "react";

const Match = (props) => {
	const { match } = props;

	let firstInningsScore = [],
		secondInningsScore = [],
		thirdInningsScore = [],
		fourthInningsScore = [];

	let firstInningsScoreDetails = "",
		secondInningsScoreDetails = "",
		thirdInningsScoreDetails = "",
		fourthInningsScoreDetails = "";

	// ['id', 'name', 'matchType', 'status', 'venue', 'date', 'dateTimeGMT', 'teams', 'teamInfo',
	// 'score', 'series_id', 'fantasyEnabled', 'bbbEnabled', 'hasSquad', 'matchStarted', 'matchEnded']
	try {
		firstInningsScore = match.score[0];
		firstInningsScoreDetails = `${firstInningsScore.inning}: ${firstInningsScore.r}/${firstInningsScore.w} (${firstInningsScore.o} overs)`;
	} catch (err) {}

	try {
		secondInningsScore = match.score[1];
		secondInningsScoreDetails = `${secondInningsScore.inning}: ${secondInningsScore.r}/${secondInningsScore.w} (${secondInningsScore.o} overs)`;
	} catch (err) {}

	try {
		thirdInningsScore = match.score[2];
		thirdInningsScoreDetails = `${thirdInningsScore.inning}: ${thirdInningsScore.r}/${thirdInningsScore.w} (${thirdInningsScore.o} overs)`;
	} catch (err) {}

	try {
		fourthInningsScore = match.score[3];
		fourthInningsScoreDetails = `${fourthInningsScore.inning}: ${fourthInningsScore.r}/${fourthInningsScore.w} (${fourthInningsScore.o} overs)`;
	} catch (err) {}

	// const finalScore = `${firstInningsScore ? firstInningsScoreDetails : ""}\n${
	// 	secondInningsScore ? secondInningsScoreDetails : ""
	// }\n${thirdInningsScore ? thirdInningsScoreDetails : ""}\n${
	// 	fourthInningsScore ? fourthInningsScoreDetails : ""
	// }`;

	// const result = match.result;
	const result = match.status.includes("No result") ? "NR" : "HAP";

	return (
		<div className="match">
			{/* {match.name} == {match.status} */}
			<div className="desc">
				{match.matchEnded ? (
					<div className="completed">
						<div className="name">
							<img src={match.teamInfo[0].img} alt="" />
							{match.teamInfo[0].shortname
								? match.teamInfo[0].shortname
								: match.teamInfo[0].name}
							&nbsp;vs&nbsp;
							{match.teamInfo[1].shortname
								? match.teamInfo[1].shortname
								: match.teamInfo[1].name}
							<img src={match.teamInfo[1].img} alt="" />
						</div>
						<div className="venue">{match.venue}</div>
						<div className="status>">
							<span className="result">RESULT: &nbsp;</span> {match.status}
						</div>
						<div className="score">
							{firstInningsScore ? (
								<span>
									{firstInningsScoreDetails}
									<br />
								</span>
							) : null}
							{secondInningsScore ? (
								<span>
									{secondInningsScoreDetails}
									<br />
								</span>
							) : null}
							{thirdInningsScore ? (
								<span>
									{thirdInningsScoreDetails}
									<br />
								</span>
							) : null}
							{fourthInningsScore ? (
								<span>
									{fourthInningsScoreDetails}
									<br />
								</span>
							) : null}
						</div>
					</div>
				) : (
					<div className="live">
						<div className="name">
							<img src={match.teamInfo[0].img} alt="" />
							{match.teamInfo[0].shortname
								? match.teamInfo[0].shortname
								: match.teamInfo[0].name}
							&nbsp;vs&nbsp;
							{match.teamInfo[1].shortname
								? match.teamInfo[1].shortname
								: match.teamInfo[1].name}
							<img src={match.teamInfo[1].img} alt="" />
						</div>
						<div className="venue">{match.venue}</div>
						<div className="status>">
							{result === "NR" ? (
								<>
									<span className="nr">N/R: &nbsp;</span>
									{match.status}
								</>
							) : (
								<>
									<span className="ongoing">LIVE: &nbsp;</span>
									{match.status}
								</>
							)}
						</div>
						<div className="score">
							{firstInningsScore ? (
								<span>
									{firstInningsScoreDetails}
									<br />
								</span>
							) : null}
							{secondInningsScore ? (
								<span>
									{secondInningsScoreDetails}
									<br />
								</span>
							) : null}
							{thirdInningsScore ? (
								<span>
									{thirdInningsScoreDetails}
									<br />
								</span>
							) : null}
							{fourthInningsScore ? (
								<span>
									{fourthInningsScoreDetails}
									<br />
								</span>
							) : null}
						</div>
					</div>
				)}
				{/* {console.log(match.result)} */}
			</div>
		</div>
	);
};

export default Match;
