import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import DesktopNavbar from "./DesktopNavbar";
import ProfileMenu from "./ProfileMenu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Utiliser useEffect pour fermer le menu de profil lorsque le menu mobile se ferme
  useEffect(() => {
    if (!isOpen) {
      setIsProfileOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="w-full h-full font-bold">
      <div id="mobileNavbar" className="xl:hidden">
        <Header toggleMenu={toggleMenu} />
        <MobileMenu isOpen={isOpen} toggleProfileMenu={toggleProfileMenu} />
        <ProfileMenu
          isProfileOpen={isProfileOpen}
          toggleProfileMenu={toggleProfileMenu}
        />
      </div>
      <DesktopNavbar
        isProfileOpen={isProfileOpen}
        toggleProfileMenu={toggleProfileMenu}
      />
    </nav>
  );
};

export default Navbar;
