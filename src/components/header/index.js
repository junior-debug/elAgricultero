"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import "./style.css";

import { Cart } from "@/components/cart/index";
import logoBlanco from "@/assets/brand/blanco-sinfondo.png";
import logoOriginal from "@/assets/brand/original-sinfondo.png";
import logoNice from "@/assets/brand/original-sinfondo.png";
import x from "@/assets/icons/x.png";
import market from "@/assets/icons/carretilla.png";
import burger from "@/assets/icons/menu.png";

export default function Header() {
  const router = useRouter();
  const [stateMenuBurger, setStateMenuBurger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  const modalTransition = isModalOpen == true ? "modalAcccordion" : "modalOff";

  const smartNav = (rout) => {
    router.push(`${rout}`);
  };

  const toggleMenu = () => {
    setStateMenuBurger(!stateMenuBurger);
  };

  const closeResponsiveNav = () => {
    if (0) {
      router.push("/");
    } else if (2) {
      router.push("/contact");
    }
    toggleMenu();
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
          <h3 onClick={() => smartNav("/")}>Inicio</h3>
          <h3 onClick={() => smartNav("/grove")}>Huerto</h3>
          <h3 onClick={() => smartNav("/contact")}>Contacto</h3>
          <h3 onClick={() => smartNav("/docs")}>Documentación</h3>
          <h3 onClick={() => smartNav("/mentorias")}>Mentorías</h3>
        </div>
        <div className="nav-cart">
          <Image
            src={market}
            className="cart"
            alt="carrito"
            onClick={toggleModal}
          />
        </div>
        <Cart classCart={modalTransition}></Cart>
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
              <li onClick={() => router.push("/mentorias")}>Mentorías</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="space"></div>
    </div>
  );
}
