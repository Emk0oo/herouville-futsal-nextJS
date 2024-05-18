"use client";
import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import centerLogo1 from "@/public/div1.png";
import centerLogo2 from "@/public/logo2.png";
import logo3 from "@/public/logo3.png";
import actu1 from "@/public/actu1.png";
import griffe from "@/public/griffe.png";

import ArticleCard from "@/components/ArticleHomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ButtonNavigation from "@/components/ButtonNavigation";

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
      <div id="Actu" className="w-full h-screen flex justify-center">
        <div
          id="actuContent"
          className="bg-actu bg-no-repeat w-[90%] md:w-[75%] h-2/3 rounded-2xl mt-[-5%] z-0"
        >
          <div className="mt-[3%]">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl text-bleuNuitHerouville font-light">
                Nos
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold uppercase text-bleuNuitHerouville">
                actualités
              </h1>
            </div>

            <div
              id="lesActu"
              className="flex flex-col md:flex-row h-[70%] justify-center gap-6 mt-[5%]"
            >
              <ArticleCard
                imageSrc="/path/to/actu1.jpg"
                altText="Logo du club de futsal de Herouville"
                title="Lorem ipsum dolor sit amet consectetur"
                date="12 avril 2024"
                href="/actualites"
              />
              <ArticleCard
                imageSrc="/path/to/actu1.jpg"
                altText="Logo du club de futsal de Herouville"
                title="Lorem ipsum dolor sit amet consectetur"
                date="12 avril 2024"
                href="/actualites"
                customClass="md:mt-2"
              />
              <ArticleCard
                imageSrc="/path/to/actu1.jpg"
                altText="Logo du club de futsal de Herouville"
                title="Lorem ipsum dolor sit amet consectetur"
                date="12 avril 2024"
                href="/actualites"
              />
            </div>
          </div>
          <div id="boutonActualites" className="flex justify-center mt-[5%]">
            <ButtonNavigation text="Voir les actualités" href="/actualites" />
          </div>
        </div>
      </div>

      <div id="NotreHistoire" className="relative w-full h-screen p-4 md:p-0">
        <div className="bg-histoire bg-no-repeat w-full h-full relative flex flex-wrap">
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 md:visible invisible"
            style={{ top: "10%", left: "10%" }}
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
            className="absolute transform -translate-x-1/2 -translate-y-1/2 md:visible invisible"
            style={{ top: "40%", left: "70%" }}
          >
            <Image
              src={logo3}
              alt="Logo du club de futsal de Herouville"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-row w-full justify-center  md:mt-0">
            <div className="ml-0 md:ml-[1vw] mt-8 md:mt-[5vw] text-white max-w-full md:max-w-[40%] p-4 md:p-10">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl">Notre</h1>
                <h1 className="text-4xl md:text-5xl font-bold">Histoire</h1>
              </div>

              <div className="space-y-4 mt-4 md:mt-8">
                <p>
                  Hérouville Futsal est un club de futsal français situé à
                  Hérouville-Saint-Clair, dans le département du Calvados. Fondé
                  en 2010, le club est initialement créé comme section futsal du
                  Sporting Club hérouvillais, un club de football régional.
                </p>
                <p>
                  Notre club de Futsal Hérouville Saint-Clair, depuis ses
                  débuts, incarne l’esprit du jeu, de la communauté et de la
                  compétition. Fondé sur des valeurs de passion, de solidarité
                  et de dépassement de soi, notre club a su créer des liens
                  solides au sein de notre ville et au-delà.
                </p>
                <p>
                  Animés par leur amour du jeu , un petit groupe d’amateurs a
                  uni ses forces pour créer une véritable institution dédiée à
                  la promotion du Futsal et à l’épanouissement de ses
                  pratiquants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Calendrier" className="w-full h-screen mt-3 p-4 md:p-0">
        <div
          id="titreCalendrier"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl md:text-5xl text-bleuNuitHerouville font-light">
            Les prochains
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-bleuNuitHerouville">
            matchs
          </h1>
        </div>

        <div
          id="calendrierContent"
          className="flex flex-col md:flex-row justify-center gap-6 mt-6 w-full h-auto md:h-1/3"
        >
          <div
            id="cardCalendrier"
            className="bg-calendrierCard bg-no-repeat w-full md:w-1/4 h-60 md:h-full bg-cover rounded-2xl shadow-md"
          >
            <div className="flex flex-col justify-center items-center p-6 text-center"></div>
          </div>
          <div
            id="cardCalendrier"
            className="bg-calendrierCard bg-no-repeat w-full md:w-1/4 h-60 md:h-full bg-cover rounded-2xl shadow-md"
          >
            <div className="flex flex-col justify-center items-center p-6 text-center"></div>
          </div>
        </div>

        <div id="boutonActualites" className="flex justify-center mt-6">
          <ButtonNavigation text="Voir le calendrier" href="/calendrier" />
        </div>
      </div>

      <div id="newsletter" className="w-full relative p-4">
        <div
          id="newletterCard"
          className="flex flex-col md:flex-row bg-bleuNuitHerouville w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto justify-center items-center rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6"
        >
          <div
            id="newsletterContent"
            className="flex flex-col md:flex-row w-full justify-center items-center"
          >
            <div
              id="texte"
              className="flex flex-col w-full md:w-1/2 p-6 space-y-2"
            >
              <div className="flex flex-row gap-1">
                <h1 className="text-3xl text-white">NOTRE</h1>
                <h1 className="text-3xl text-white font-bold">NEWSLETTER</h1>
              </div>
              <p className="text-white">
                Restez au courant des dernières actus de l’équipe,
                inscrivez-vous à la newsletter !
              </p>
            </div>
            <div
              id="inscrireNewsletter"
              className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-[25%]"
            >
              <button className="text-marron bg-jauneHerouville font-bold py-2 px-5 rounded-full w-full md:w-auto">
                <div className="flex flex-row items-center justify-center gap-2">
                  <p>S&apos;inscrire</p>
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989593 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM1 6.75H21V5.25H1V6.75Z"
                      fill="#4C4003"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
