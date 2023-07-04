"use client";

import { useState } from "react";

import Image from "next/image";
import "./style.css";

import logoBlanco from "@/assets/brand/logo-blanco.png";
import logoOriginal from "@/assets/brand/logo-original.png";
import logoNice from "@/assets/brand/original-sinfondo.png";
import x from "@/assets/icons/x.png";
import burger from "@/assets/icons/menu.png";

export default function Header() {
  const [stateMenuBurger, setStateMenuBurger] = useState(false);

  const toggleMenu = () => {
    setStateMenuBurger( !stateMenuBurger )
  }

  return (
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
        <h3>Inicio</h3>
        <h3>Huerto</h3>
        <h3>Contacto</h3>
        <h3>Documentación</h3>
        <h3>Mentorías</h3>
      </div>
      <div className="responsiveNav" onClick={ toggleMenu }>
        <Image src={burger} />

        <div className={`menuBurger ${ stateMenuBurger ? 'isActive' : '' }`}>
          <Image
            className="x"
            src={x}
            alt="x"
            onClick={ toggleMenu }
          />
          <div className="containerLogoMenu">
            <Image
              src={logoNice}
              className="logoOriginalMenu"
              alt="El Agricultero"
            />
          </div>
          <ul className="ul">
            <li>Inicio</li>
            <li>Huerto</li>
            <li>Contacto</li>
            <li>Documentación</li>
            <li>Mentorías</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
