import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 90 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 75 },
    { name: "Rishabh Pant", score: 65 },
    { name: "KL Rahul", score: 88 },
    { name: "Hardik Pandya", score: 55 },
    { name: "Ravindra Jadeja", score: 72 },
    { name: "Jasprit Bumrah", score: 45 },
    { name: "Mohammed Shami", score: 40 },
    { name: "Kuldeep Yadav", score: 60 },
    { name: "Mohammed Siraj", score: 50 }
  ];

  const lowScorePlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h1>List of Players</h1>

      {players.map((player, index) => (
        <div className="player" key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}

      <h1>List of Players having Scores Less than 70</h1>

      {lowScorePlayers.map((player, index) => (
        <div className="player" key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}
    </div>
  );
}

export default ListofPlayers;