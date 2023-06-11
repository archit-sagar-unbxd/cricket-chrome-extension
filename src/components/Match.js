import React from "react";

const Match = (props) => {
	const { match } = props;

	// ['id', 'name', 'matchType', 'status', 'venue', 'date', 'dateTimeGMT', 'teams', 'teamInfo',
	// 'score', 'series_id', 'fantasyEnabled', 'bbbEnabled', 'hasSquad', 'matchStarted', 'matchEnded']

	return (
		<div className="match">
			{/* {match.name} == {match.status} */}
			<div className="desc">
				{match.matchEnded ? (
					<div className="completed">
						<div className="name">
							<img src={match.teamInfo[0].img} alt="" />
							{match.teamInfo[0].shortname} vs {match.teamInfo[1].shortname}
							<img src={match.teamInfo[1].img} alt="" />
						</div>
						<div className="status>">
							<span className="result">RESULT:</span> {match.status}
						</div>
					</div>
				) : (
					<div className="live">
						<div className="name">
							<img src={match.teamInfo[0].img} alt="" />
							{match.teamInfo[0].shortname} vs {match.teamInfo[1].shortname}
							<img src={match.teamInfo[1].img} alt="" />
						</div>
						<div className="status>">
							<span className="ongoing">LIVE:</span> {match.status}
						</div>
					</div>
				)}
				{console.log(match.teamInfo[0])}
			</div>
		</div>
	);
};

export default Match;
