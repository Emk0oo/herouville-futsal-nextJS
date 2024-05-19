import GenericPage from "@/components/GenericPage";
import React from "react";

const Equipe = () => {
  return (
    <>
      <div
        id="equipeContent"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"
      >
        <div
          id="playerCard"
          className="flex flex-col justify-between items-center h-80 w-3/4 md:w-2/3 bg-blue-300 mx-auto rounded-lg"
        >
          <div id="pillRole" className="mt-[-5%]">
            <h1 className="text-marron font-bold text-center bg-jauneHerouville px-4 py-1 rounded-full">
              Gardien
            </h1>
          </div>
          <div id="playerInfo" className="flex w-5/6 px-3 py-1 bg-bleuHerouville text-white justify-between text-xl rounded-lg mb-2">
            <div id="playerName" className="flex flex-col w-1/2 ">
              <p id="playerName">Leo</p>
              <p id="playerName" className="font-bold">Messi</p>
            </div>
            <div id="playerNumber" className="flex flex-col w-1/2 text-end justify-center">
              <p id="playerNumberShirt" className="font-bold text-jauneHerouville">9</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipe;
