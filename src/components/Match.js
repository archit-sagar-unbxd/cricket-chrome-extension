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

  const team1 = match.teamInfo[0],
    team2 = match.teamInfo[1];
  let team1Name = "",
    team1Short = "",
    team1Img = "";
  let team2Name = "",
    team2Short = "",
    team2Img = "";
  if (team1 !== undefined) {
    if (team1.name !== undefined) team1Name = team1.name;
    if (team1.shortname !== undefined) team1Short = team1.shortname;
    if (team1.img !== undefined) team1Img = team1.img;
  }
  if (team2 !== undefined) {
    if (team2.name !== undefined) team2Name = team2.name;
    if (team2.shortname !== undefined) team2Short = team2.shortname;
    if (team2.img !== undefined) team2Img = team2.img;
  }

  return (
    <div className="match">
      {/* {match.name} == {match.status} */}
      <div className="desc">
        {match.matchEnded ? (
          <div className="completed">
            <div className="name">
              {/* {Object.keys(team1)} {Object.keys(team2)} */}
              {team1Img ? <img src={team1Img} alt="" /> : ""}
              {team1Short ? team1Short : team1Name ? team1Name : ""}
              &nbsp;vs&nbsp;
              {team2Short ? team2Short : team2Name ? team2Name : ""}
              {team2Img ? <img src={team2Img} alt="" /> : ""}
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
              {team1Img ? <img src={team1Img} alt="" /> : ""}
              {team1Short ? team1Short : team1Name ? team1Name : ""}
              &nbsp;vs&nbsp;
              {team2Short ? team2Short : team2Name ? team2Name : ""}
              {team2Img ? <img src={team2Img} alt="" /> : ""}
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
      </div>
    </div>
  );
};

export default Match;
