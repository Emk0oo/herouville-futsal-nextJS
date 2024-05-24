import React from "react";

interface PlayerCardProps {
    role: string;
    name: string;
    surname: string;
    number: number;
}

function PlayerCard({ role, name, surname, number }: PlayerCardProps) {
  return (
    <div
      id="playerCard"
      className="flex flex-col justify-between items-center h-80 w-3/4 md:w-1/2 bg-blue-300 mx-auto rounded-lg mt-3"
    >
      <div id="pillRole" className="mt-[-5%]">
        <h1 className="text-marron font-bold text-center bg-jauneHerouville px-4 py-1 rounded-full">
          {role}
        </h1>
      </div>
      <div
        id="playerInfo"
        className="flex w-5/6 px-3 py-1 bg-bleuHerouville text-white justify-between text-xl rounded-lg mb-2"
      >
        <div id="playerName" className="flex flex-col w-1/2 ">
          <p id="playerName">{name}</p>
          <p id="playerName" className="font-bold">
            {surname}
          </p>
        </div>
        <div
          id="playerNumber"
          className="flex flex-col w-1/2 text-end justify-center"
        >
          <p id="playerNumberShirt" className="font-bold text-jauneHerouville">
            {number}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;