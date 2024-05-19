import GenericPage from "@/components/GenericPage";
import PlayerCard from "@/components/PlayerCard";
import React from "react";

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

const Equipe = () => {
  return (
    <>
      <div
        id="equipeContent"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-2 mt-5"
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
    </>
  );
};

export default Equipe;
