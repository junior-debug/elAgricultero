"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import "./style.css";

import logoBlanco from "@/assets/brand/logo-blanco.png";
import logoOriginal from "@/assets/brand/logo-original.png";
import logoNice from "@/assets/brand/original-sinfondo.png";
import x from "@/assets/icons/x.png";
import burger from "@/assets/icons/menu.png";

export default function Header() {
  const router = useRouter();
  const [stateMenuBurger, setStateMenuBurger] = useState(false);

  const toggleMenu = () => {
    setStateMenuBurger(!stateMenuBurger);
  };

  const closeResponsiveNav = () => {
    if (0) {
      router.push("/")
    } else if (2) {
      router.push("/contact")
    }
    toggleMenu()
  };

  return (
    <div>
      <header className="header">
        <div className="containerLogo">
          <Image src={logoBlanco} className="logoBlanco" alt="El Agricultero" />
          <Image
            src={logoOriginal}
            className="logoOriginal"
            alt="El Agricultero"
          />
        </div>
        <div className="nav">
          <h3 onClick={() => router.push("/")}>Inicio</h3>
          <h3>Huerto</h3>
          <h3 onClick={() => router.push("/contact")}>Contacto</h3>
          <h3 onClick={() => router.push("/docs")}>Documentación</h3>
          <h3>Mentorías</h3>
        </div>
        <div className="responsiveNav" onClick={toggleMenu}>
          <Image src={burger} alt="burger" />

          <div className={`menuBurger ${stateMenuBurger ? "isActive" : ""}`}>
            <Image className="x" src={x} alt="x" onClick={toggleMenu} />
            <div className="containerLogoMenu">
              <Image
                src={logoNice}
                className="logoOriginalMenu"
                alt="El Agricultero"
              />
            </div>
            <ul className="ul">
              <li onClick={() => router.push("/")}>Inicio</li>
              <li>Huerto</li>
              <li onClick={() => closeResponsiveNav(2)}>Contacto</li>
              <li onClick={() => router.push("/docs")}>Documentación</li>
              <li>Mentorías</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="space"></div>
    </div>
  );
}
