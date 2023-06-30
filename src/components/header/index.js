"use client";

import Image from "next/image";
import style from "./style.module.css";

import logoBlanco from "@/assets/brand/logo-blanco.png";
import logoOriginal from "@/assets/brand/logo-original.png";
import burger from "@/assets/icons/menu.png";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.containerLogo}>
        <Image src={logoBlanco} className={style.logoBlanco} />
        <Image src={logoOriginal} className={style.logoOriginal} />
      </div>
        <div className={style.nav}>
          <h3>Inicio</h3>
          <h3>Huerto</h3>
          <h3>Contacto</h3>
          <h3>Documentación</h3>
          <h3>Mentorías</h3>
        </div>
        <div className={style.responsiveNav}>
          <Image src={burger} />
        </div>
    </header>
  );
}
