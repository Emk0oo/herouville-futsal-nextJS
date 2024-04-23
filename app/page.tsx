import Image from "next/image";
import photo1 from "../public/photo1.png";
import centerLogo1 from "../public/div1.png";
import centerLogo2 from "../public/logo2.png";
import actu from "../public/bg-actu.png";
import actu1 from "../public/actu1.png";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="bg-photo1 w-full h-full flex justify-center items-center relative bg-no-repeat">
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
        <div id="actuContent" className="bg-actu bg-no-repeat  w-[75%] h-1/2 rounded-2xl">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-5xl">Nos </h1>
            <h1 className="text-5xl font-bold">ACTUALITES</h1>
          </div>

          <div id="lesActu" className="flex flex-row h-[75%] justify-center gap-4  ">

            <div id="actu1" className="flex flex-col  w-1/4 bg-white rounded-2xl justify-center items-center ">
              <Image
                src={actu1}
                alt="Logo du club de futsal de Herouville"

                className="mx-auto"
              />
              <h1 className="text-2xl">Actu 1</h1>
              <p>Texte de l'actu 1</p>
              <button className="border-solid border-2 border-bleuHerouville  text-bleuNuitHerouville font-bold py-2 px-5 rounded-full">Lire l'article</button>
              
            </div>

            <div id="actu1" className="flex flex-col  w-1/4 bg-white rounded-2xl justify-center items-center ">
              <Image
                src={actu1}
                alt="Logo du club de futsal de Herouville"

                className="mx-auto"
              />
              <h1 className="text-2xl">Actu 1</h1>
              <p>Texte de l'actu 1</p>
              <button className="border-solid border-2 border-bleuHerouville  text-bleuNuitHerouville font-bold py-2 px-5 rounded-full">Lire l'article</button>
              
            </div>

            <div id="actu1" className="flex flex-col  w-1/4 bg-white rounded-2xl justify-center items-center ">
              <Image
                src={actu1}
                alt="Logo du club de futsal de Herouville"

                className="mx-auto"
              />
              <h1 className="text-2xl">Actu 1</h1>
              <p>Texte de l'actu 1</p>
              <button className="border-solid border-2 border-bleuHerouville  text-bleuNuitHerouville font-bold py-2 px-5 rounded-full">Lire l'article</button>
              
            </div>

          </div>

          <div id="NotreHistoire">

          </div>
        </div>
      </div>
    </main>
  );
}
