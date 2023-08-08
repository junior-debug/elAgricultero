"use client";

import { useRouter } from "next/navigation";
import style from "@/components/footer/style.module.css";
import logoBlanco from "@/assets/brand/logo-blanco.png";
import elAgricultero from "@/assets/brand/elAgricultero.png";
import facebook from "@/assets/icons/facebook.png";
import instagram from "@/assets/icons/instagram.png";
import twitter from "@/assets/icons/gorjeo.png";
import tiktok from "@/assets/icons/tik-tok.png";
import { GreenBut } from "../greenBut";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const router = useRouter();
  return (
    <>
      <div className={style.contPhater} alt="imageCont">
        <div className={style.leftCont}>
          <div className={style.firstLine}>
            <Image src={logoBlanco} className={style.image} alt="Logo" />
            <Image
              src={elAgricultero}
              className={style.image}
              alt="elAgricultero"
            />
          </div>
          <div className={style.secondLine}>
            <h2 className={style.txtDown}>
              Tú agricultor <br /> en casa
            </h2>
          </div>
          <div className={style.thirdLine}>
            <h4 className={style.follow}>Siguenos en nuestras redes:</h4>
          </div>
          <div className={style.fourthLine}>
            <Link href="https://www.facebook.com/profile.php?id=100091300293560">
              <Image
                src={facebook}
                className={(style.image, style.facebook)}
                alt="facebook"
              />
            </Link>
            <Link href="https://www.instagram.com/elagricultero/">
              <Image src={instagram} className={style.image} alt="instagram" />
            </Link>
            <Link href="https://twitter.com/elagricultero?s=11">
              <Image src={twitter} className={style.image} alt="twitter" />
            </Link>
            <Link href="https://www.tiktok.com/@elagricultero">
              <Image src={tiktok} className={style.image} alt="tiktok" />
            </Link>
          </div>
        </div>
        <div className={style.rightCont}>
          <div className={style.top}>
            <ul className={style.nav}>
              <li className={style.navLi} onClick={() => router.push("/")}>Inicio</li>
              <li className={style.navLi}>Huerto</li>
              <li className={style.navLi} onClick={() => router.push("/contact")}>Contacto</li>
              <li className={style.navLi} onClick={() => router.push("/docs")}>Documentación</li>
              <li className={style.navLi} onClick={() => router.push("/mentorias")}>Mentorías</li>
            </ul>
          </div>
          <div className={style.bot}>
            <div className={style.topText}>
              <h3 className={style.txtSubscribe}>
                Entérate de todas las novedades:
              </h3>
            </div>
            <div className={style.subscribe}>
              <input
                className={style.inputSubscribe}
                type="text"
                placeholder="Ingresa tu correo electrónico"
              ></input>
              <GreenBut text={"suscribete"}></GreenBut>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
