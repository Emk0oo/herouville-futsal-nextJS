import Image from "next/image";
import photo1 from "../public/photo1.png";
import centerLogo1 from "../public/div1.png";
import centerLogo2 from "../public/logo2.png";
import actu from "../public/bg-actu.png";

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
          <div className="absolute" style={{ top: '36%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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
        <div  className="bg-actu bg-no-repeat flex justify-center items-center">
          <h1>Nos ACTUALITES</h1>
        </div>
      </div>
      
    </main>
  );
}


