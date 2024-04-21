import Image from "next/image";
import photo1 from "../public/photo1.png";

export default function Home() {
  return (
    <main className="">
      
      <div className="z-0 fixed w-full h-[93%]">
        <Image
        src= {photo1}
        alt="Photo de l'équipe de futsal de Herouville"
        layout="fill"
        objectFit="cover"
        />
      </div>
    </main>
  );
}
