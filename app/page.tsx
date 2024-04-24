import Image from "next/image";
import photo1 from "../public/photo1.png";
import centerLogo1 from "../public/div1.png";
import centerLogo2 from "../public/logo2.png";
import logo3 from "../public/logo3.png";
import actu from "../public/bg-actu.png";
import actu1 from "../public/actu1.png";
import griffe from "../public/griffe.png";


export default function Home() {
  return (
    <div className="w-full h-screen ">
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
        <div
          id="actuContent"
          className="bg-actu bg-no-repeat  w-[75%] h-2/3 rounded-2xl mt-[-5%] z-0"
        >
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-5xl">Nos </h1>
            <h1 className="text-5xl font-bold">ACTUALITES</h1>
          </div>

          <div
            id="lesActu"
            className="flex flex-row h-[70%] justify-center gap-6  "
          >
            <div
              id="actu1"
              className="flex flex-col w-1/4 bg-white rounded-2xl"
            >
              <Image
                src={actu1}
                alt="Logo du club de futsal de Herouville"
                className="mx-auto rounded-t-2xl h-1/2"
              />
              <div className="flex flex-col justify-center items-center p-6 text-center">
                <h1 className="text-2xl mx-auto font-bold">
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p>Publié le 12 avril 2024</p>
                <button className="border-solid border-2 border-bleuHerouville text-bleuNuitHerouville font-bold mt- py-2 px-5 rounded-full">
                  Lire l'article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="NotreHistoire" className="relative w-full h-screen">
        <div className="bg-histoire bg-no-repeat w-full h-full flex">
          <div className="absolute"
            style={{
              top: "0%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}>
            <Image
              src={griffe}
              alt="Logo du club de futsal de Herouville"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <div className="absolute"
            style={{
              top: "40%",
              left: "70%",
              transform: "translate(-50%, -50%)",
            }}>
              <Image
                src={logo3}
                alt="Logo du club de futsal de Herouville"
                width={300}
                height={300}
              />
            </div>
          <div className="flex flex-row">
            <div className="absolute text-white max-w-[30%] left-0 top-0 p-10">
              <h1 className="text-5xl font-bold">Notre Histoire</h1>
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
    </div>
  );
}
