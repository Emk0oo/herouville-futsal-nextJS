import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import logo2 from "/public/logo2.png";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => (
  <div
    id="headerNavbar"
    className="flex flex-row w-full h-20 bg-bleuNuitHerouville justify-between z-10 fixed top-0 left-0 right-0 items-center shadow p-1"
  >
    <div className="ml-2 ">
      <a href="/" className="text-white hover:text-jauneHerouville">
        <div className="flex items-center gap-3">
          <Image
            src={logo2}
            alt="Logo du club de futsal de Herouville"
            width={50}
            height={50}
          />
          <div
            id="titre"
            className="text-white font-bold flex flex-col items-center"
          >
            <p className="text-sm uppercase bg-bleuNuitHerouville">Futsal</p>
            <p className="text-sm uppercase bg-bleuHerouville p-1 rotate-herouville">
              Herouville
            </p>
          </div>
        </div>
      </a>
    </div>
    <div id="burger" className="mr-2">
      <button onClick={toggleMenu} className="border-2 rounded-xl p-1">
        <RxHamburgerMenu size={35} color="white" />
      </button>
    </div>
  </div>
);

export default Header;
