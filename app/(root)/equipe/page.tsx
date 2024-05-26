import GenericPage from "@/components/GenericPage";
import PlayerCard from "@/components/PlayerCard";
import React from "react";
import { Metadata } from "next";

const playerAPI = [
  { role: "Gardien", name: "Leo", surname: "Messi", number: 9 },
  { role: "Défenseur", name: "Cristiano", surname: "Ronaldo", number: 7 },
  { role: "Milieu", name: "Kylian", surname: "Mbappé", number: 10 },
  { role: "Attaquant", name: "Neymar", surname: "Jr", number: 11 },
  { role: "Milieu", name: "Lionel", surname: "Messi", number: 9 },
  { role: "Défenseur", name: "Cristiano", surname: "Ronaldo", number: 7 },
  { role: "Milieu", name: "Kylian", surname: "Mbappé", number: 10 },
  { role: "Attaquant", name: "Neymar", surname: "Jr", number: 11 },
  { role: "Milieu", name: "Lionel", surname: "Messi", number: 9 },
  { role: "Défenseur", name: "Cristiano", surname: "Ronaldo", number: 7 },
  { role: "Milieu", name: "Kylian", surname: "Mbappé", number: 10 },
  { role: "Attaquant", name: "Neymar", surname: "Jr", number: 11 },
];

export const metadata: Metadata = {
  title: "Herouville Futsal - Equipe",
  description: "Découvrez les joueurs de notre équipe.",
};

const Equipe = () => {
  return (
    <>
      <div className="flex justify-center w-full ">
        <div
          id="equipeContent"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:mx-[10%]  mt-2 w-full"
        >
          {playerAPI.map((player, index) => (
            <PlayerCard
              key={index}
              role={player.role}
              name={player.name}
              surname={player.surname}
              number={player.number}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Equipe;
