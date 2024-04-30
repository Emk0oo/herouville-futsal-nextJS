import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import photo1 from "../public/photo1.png";
import centerLogo1 from "../public/div1.png";
import centerLogo2 from "../public/logo2.png";
import logo3 from "../public/logo3.png";
import actu from "../public/bg-actu.png";
import actu1 from "../public/actu1.png";
import griffe from "../public/griffe.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <div className={`${montserrat.variable} font-sans w-full `}>
      <div className="bg-photo1 w-full h-screen flex justify-center items-center  bg-no-repeat">
        <div>
          <Image
            src={centerLogo1}
            alt="Logo du club de futsal de Herouville"
            width={300}
            height={300}
            className="mx-auto"
          />
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={centerLogo2}
              alt="Logo du club de futsal de Herouville"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div id="Actu" className="w-full h-screen flex justify-center ">
        <div
          id="actuContent"
          className="bg-actu bg-no-repeat  w-[75%] h-2/3 rounded-2xl mt-[-5%] z-0"
        >
          <div className="mt-[3%]">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-5xl text-bleuNuitHerouville font-light">
                Nos{" "}
              </h1>
              <h1 className="text-5xl font-bold font uppercase text-bleuNuitHerouville">
                actualités
              </h1>
            </div>

            <div
              id="lesActu"
              className="flex flex-row h-[70%] justify-center gap-6 mt-[5%] "
            >
              <div
                id="actu1"
                className="flex flex-col w-1/4 h-1/2 bg-white rounded-2xl shadow-md"
              >
                <Image
                  src={actu1}
                  alt="Logo du club de futsal de Herouville"
                  className="mx-auto rounded-t-2xl h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center p-6 text-center">
                  <h1 className="text-2xl mx-auto font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </h1>
                  <p>Publié le 12 avril 2024</p>
                  <button className="border-solid border-2 border-bleuHerouville text-bleuNuitHerouville font-bold mt- py-2 px-5 rounded-full mt-[5%]">
                    Lire l article
                  </button>
                </div>
              </div>
              <div
                id="actu2"
                className="flex flex-col w-1/4 h-1/2 bg-white rounded-2xl shadow-md mt-[3%]"
              >
                <Image
                  src={actu1}
                  alt="Logo du club de futsal de Herouville"
                  className="mx-auto rounded-t-2xl h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center p-6 text-center">
                  <h1 className="text-2xl mx-auto font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </h1>
                  <p>Publié le 12 avril 2024</p>
                  <button className="border-solid border-2 border-bleuHerouville text-bleuNuitHerouville font-bold mt- py-2 px-5 rounded-full mt-[5%]">
                    Lire l article
                  </button>
                </div>
              </div>
              <div
                id="actu3"
                className="flex flex-col w-1/4 h-1/2 bg-white rounded-2xl shadow-md"
              >
                <Image
                  src={actu1}
                  alt="Logo du club de futsal de Herouville"
                  className="mx-auto rounded-t-2xl h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center p-6 text-center">
                  <h1 className="text-2xl mx-auto font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </h1>
                  <p>Publié le 12 avril 2024</p>
                  <button className="border-solid border-2 border-bleuHerouville text-bleuNuitHerouville font-bold mt- py-2 px-5 rounded-full mt-[5%]">
                    Lire l article
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="boutonActualites" className="flex justify-center mt-[5%]">
            <a
              className="border-solid border-2 bg-bleuHerouville text-white font-bold mt- py-2 px-5 rounded-full"
              href="/actualites"
            >
              Voir les actualités
            </a>
          </div>
        </div>
      </div>
      <div id="NotreHistoire" className="relative w-full h-screen">
        <div className="bg-histoire bg-no-repeat w-full h-full relative flex flex-wrap">
          <div
            className="absolute"
            style={{
              top: "0%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={griffe}
              alt="Logo du club de futsal de Herouville"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <div
            className="absolute"
            style={{
              top: "40%",
              left: "70%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={logo3}
              alt="Logo du club de futsal de Herouville"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-row">
            <div className="ml-[18vw] mt-[5vw] text-white max-w-[40%]  p-10">
              <div className="flex flex-col">
                <h1 className="text-5xl ">Notre</h1>
                <h1 className="text-5xl font-bold">Histoire</h1>
              </div>

              <div className="space-y-4 mt-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  repellendus non fugit hic asperiores amet, aspernatur
                  molestiae quibusdam sed corrupti, natus aliquid a
                  exercitationem, quo porro alias ratione architecto! Nemo!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  repellendus non fugit hic asperiores amet, aspernatur
                  molestiae quibusdam sed corrupti, natus aliquid a
                  exercitationem, quo porro alias ratione architecto! Nemo!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  repellendus non fugit hic asperiores amet, aspernatur
                  molestiae quibusdam sed corrupti, natus aliquid a
                  exercitationem, quo porro alias ratione architecto! Nemo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Calendrier" className="w-full h-screen mt-3">
        <div
          id="titreCalendrier"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl text-bleuNuitHerouville font-light">
            Les prochains
          </h1>
          <h1 className="text-5xl font-bold font uppercase text-bleuNuitHerouville">
            matchs
          </h1>
        </div>

        <div
          id="calendrierContent"
          className="flex flex-row justify-center gap-6 mt-[5%] w-full h-1/3"
        >
          <div
            id="cardCalendrier"
            className="bg-calendrierCard bg-no-repeat  w-1/4 h-full bg-cover  rounded-2xl shadow-md "
          >
            <div className="flex flex-col justify-center items-center p-6 text-center"></div>
          </div>
          <div
            id="cardCalendrier"
            className="bg-calendrierCard bg-no-repeat  w-1/4 h-full bg-cover  rounded-2xl shadow-md "
          >
            <div className="flex flex-col justify-center items-center p-6 text-center"></div>
          </div>
        </div>
        <div id="boutonActualites" className="flex justify-center mt-[3%]">
          <a
            className="border-solid border-2 bg-bleuHerouville text-white font-bold  py-2 px-5 rounded-full"
            href="/calendrier"
          >
            Voir le calendrier
          </a>
        </div>
      </div>
      <div id="newsletter" className="w-full relative">
        <div
          id="newletterCard"
          className="flex flex-row bg-bleuNuitHerouville w-[40%] mx-auto justify-center items-center rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <div id="newsletterContent" className="flex flex-row w-full justify-center items-center ">
            <div id="texte" className="flex flex-col w-1/2 p-6 space-y-2">
              <div className="flex flex-row gap-1">
              <h1 className="text-3xl text-white">NOTRE</h1>
              <h1 className="text-3xl text-white font-bold">NEWSLETTER</h1>
              </div>
              <p className="text-white">
              Restez au courant des dernières actus de l’équipe, inscrivez-vous à la newsletter !
              </p>
            </div>
            <div id="inscrireNewsletter" className="w-1/2 pl-[25%]">
              <button className=" text-marron  bg-jauneHerouville font-bold py-2 px-5 rounded-full">
                S&apos;inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
