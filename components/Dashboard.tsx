import Image from "next/image";
import React from "react";

const nomDeMarque="Herouville Futsal"

const Dashboard = () => {
  return (
    <main id="dashboard" className="w-full h-screen  p-10">
      <div id="sidebar" className="">
        <div id="marque">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1></h1>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
