import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import playerImage from "../assets/playerImage.png";
import { Link } from "react-router-dom";

const Team = () => {
  const [players, setPlayers] = useState([
    {
      name: "Bukayo Saka",
      position: "Forward",
      number: "7",
    },
    {
      name: "G. Jesus",
      position: "Forward",
      number: "9",
    },
    {
      name: "W. Saliba",
      position: "Defender",
      number: "2",
    },
    {
      name: "D. Raya",
      position: "Goalkeeper",
      number: "22",
    },
  ]);

  const [positions, setPositions] = useState([
    "All",
    "Goalkeeper",
    "Defender",
    "Midfielder",
    "Forward",
  ]);

  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const handleFilter = (position) => {
    setActiveTab(position);

    if (position == "All") {
      setFilteredPlayers(players);
      return;
    }

    let playerArray = players.filter((player) => player.position == position);
    console.log(playerArray);
    setFilteredPlayers(playerArray);
  };

  const [activeTab, setActiveTab] = useState("All");
  return (
    <DashboardLayout>
      <div className="text-xl font-semibold">My Team</div>
      <div className="mt-4">
        <div className="grid grid-cols-5 gap-3 my-4">
          {positions.map((position, index) => (
            <div
              key={index}
              className={` border-2 py-2 text-center hover:cursor-pointer hover:text-red-600 font-normal ${
                activeTab == position ? "text-red-600 font-bold" : ""
              }`}
              onClick={() => handleFilter(position)}
            >
              {position}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {filteredPlayers.map((player, index) => (
            <Link to={`/team/${player.name}`} state={player} key={index}>
              <div className="border border-2 shadow">
                <div>
                  <img src={playerImage} />
                </div>
                <div className="text-center">
                  <p className="font-semibold">{player.name}</p>
                  <p className="font-bold text-red-400">{player.position}</p>
                  <p className="text-gray-700">{player.number}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Team;
