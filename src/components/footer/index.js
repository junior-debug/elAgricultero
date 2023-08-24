"use client";
import "./style.css";
import { useRouter } from "next/navigation";

import logoBlanco from "@/assets/brand/logo-blanco.png";
import elAgricultero from "@/assets/brand/elAgricultero.png";
import facebook from "@/assets/icons/facebook.png";
import instagram from "@/assets/icons/instagram.png";
import twitter from "@/assets/icons/gorjeo.png";
import tiktok from "@/assets/icons/tik-tok.png";

import { GreenBut } from "../greenBut";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="fo-contPhater" alt="imageCont">
      <div className="fo-leftCont">
        <div className="fo-firstLine">
          <Image src={logoBlanco} className="fo-image" alt="Logo" />
          <Image src={elAgricultero} className="fo-image" alt="elAgricultero" />
        </div>
        <div className="fo-secondLine">
          <h2 className="fo-txtDown">
            Tú agricultor <br /> en casa
          </h2>
        </div>
        <div className="fo-thirdLine">
          <h4 className="fo-follow">Siguenos en nuestras redes:</h4>
        </div>
        <div className="fo-fourthLine">
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100091300293560"
          >
            <Image
              src={facebook}
              className="(fo-image, fo-facebook)"
              alt="facebook"
            />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/elagricultero/">
            <Image src={instagram} className="fo-image" alt="instagram" />
          </Link>
          <Link target="_blank" href="https://twitter.com/elagricultero?s=11">
            <Image src={twitter} className="fo-image" alt="twitter" />
          </Link>
          <Link target="_blank" href="https://www.tiktok.com/@elagricultero">
            <Image src={tiktok} className="fo-image" alt="tiktok" />
          </Link>
        </div>
      </div>
      <div className="fo-rightCont">
        <div className="fo-top">
          <ul className="fo-nav">
            <li className="fo-navLi" onClick={() => router.push("/")}>
              Inicio
            </li>
            <li className="fo-navLi">Huerto</li>
            <li className="fo-navLi" onClick={() => router.push("/contact")}>
              Contacto
            </li>
            <li className="fo-navLi" onClick={() => router.push("/docs")}>
              Documentación
            </li>
            <li className="fo-navLi" onClick={() => router.push("/mentorias")}>
              Mentorías
            </li>
          </ul>
        </div>
        <div className="fo-bot">
          <div className="fo-topText">
            <h3 className="fo-txtSubscribe">
              Entérate de todas las novedades:
            </h3>
          </div>
          <div className="fo-subscribe">
            <input
              className="fo-inputSubscribe"
              type="text"
              placeholder="Ingresa tu correo electrónico"
            ></input>
            <GreenBut text={"suscribete"}></GreenBut>
          </div>
        </div>
      </div>
    </div>
  );
}
