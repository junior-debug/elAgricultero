"use client";

import { CarouselInit } from "@/components/Carousel";
import { GreenBut } from "@/components/greenBut";
import { CardHome } from "@/components/cardReviews";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Rab from "@/assets/images/rab.png";
import Vision from "@/assets/images/vision.png";
import Mision from "@/assets/images/mision.png";
import Huerto from "@/assets/images/huerto.png";
import Lechugas from "@/assets/images/lechugas.png";
import Sussan from "@/assets/images/sussan.png";
import Morgan from "@/assets/images/morgan.png";
import Steph from "@/assets/images/steph.png";
import "@/styles/home.css";

export default function Home() {
  const router = useRouter();
  const redirection = () => {
    router.push("/grove");
  };

  return (
    <main>
      <div className="topCont">
        <CarouselInit></CarouselInit>
        <div className="buildGarden">
          <div className="contText">
            <h1 className="title">Agricultura Orgánica</h1>
            <h2 className="subTitle">
              Tu Huerto al Alcance <br />
              de un Click
            </h2>
            <GreenBut rout={redirection} text="Contruye tu Huerto1"></GreenBut>
          </div>
        </div>
      </div>
      <div className="topContResponsive">
        <div className="buildGarden">
          <div className="contText">
            <h1 className="title">Agricultura Orgánica</h1>
            <h2 className="subTitle">
              Tu Huerto al Alcance <br />
              de un Click
            </h2>
            <GreenBut rout={redirection} text="Contruye tu Huerto"></GreenBut>
          </div>
        </div>
        <CarouselInit></CarouselInit>
      </div>
      <div className="midCont">
        <div className="aboutTop">
          <div className="imgRab">
            <Image src={Rab} alt="Rabano" className="rabImg"></Image>
          </div>
          <div className="textRab">
            <div className="titleRab">
              <h1 className="titleAbout">Conoce Sobre </h1>
              <h1 className="subRab">Nosotros</h1>
            </div>
            <div className="paragraphRab">
              <p className="paragraph">
                Nacido en Lorca, Puerto Lumbreras, Claudio ahora vive en
                Corvera. Es apasionado por el planeta y el equilibrio de la
                naturaleza basado en la microbiología del suelo. Le fascina el
                arte de la jardinería en estilo árabe, cultivando alimentos de
                manera sostenible y orgánica, ha sido transmitido a través de 5
                generaciones con una gran procedencia, historia y experiencia.
                Incluso cuando estás lejos de tu propiedad, puedes cultivar tu
                propio jardín. La decisión más importante que tienes que tomar
                es qué cultivar.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutMid">
          <div className="imgHue">
            <h1 className="our">Nuestra</h1>
            <Image src={Vision} alt="huerto" className="visionImg"></Image>
          </div>
          <div className="textHue">
            <div className="contVision">
              <p className="paragraphVi">
                Innovar con un nuevo modelo de agricultura desde sus bases mas
                fundamentales y naturales para acompañar a nuestros clientes en
                la instalación, mantenimiento y crecimiento de sus huerto.
              </p>
            </div>
            <div className="mission">
              <Image src={Huerto} alt="huerto" className="huer"></Image>
            </div>
          </div>
        </div>
        <div className="aboutMid">
          <div className="imgRab">
            <Image src={Lechugas} alt="lechugas" className="huer"></Image>
          </div>
          <div className="textHue">
            <div className="contVision">
              <p className="paragraphVi">
                Llevar la agricultura y al agricultor a casa. Incentivar los
                espacios verdes, orgánicos y comestibles en los hogares, motivar
                a las personas en el crecimiento de su bienestar y que disfruten
                de los beneficios de una huerta y sus alimentos saludables sin
                la necesidad de salir de casa
              </p>
            </div>
            <div className="mission">
              <h1 className="ourMission">Nuestra</h1>
              <Image src={Mision} alt="mission" className="misssionImg"></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="midContRes">
        <div className="aboutTop">
          <div className="titleRab">
            <h1 className="titleAbout">Conoce Sobre </h1>
            <h1 className="subRab">Nosotros</h1>
          </div>
          <div className="imgTextRes">
            <div className="imgRab">
              <Image src={Rab} alt="Rabano"></Image>
            </div>
            <div className="textRab">
              <div className="paragraphRab">
                <p className="paragraph">
                  Nacido en Lorca, Puerto Lumbreras, Claudio ahora vive en
                  Corvera. Es apasionado por el planeta
                </p>
              </div>
            </div>
          </div>
          <div className="textTopDown">
            <p className="paragraphCenter">
              y el equilibrio de la naturaleza basado en la microbiología del
              suelo. Le fascina el arte de la jardinería en estilo árabe,
              cultivando alimentos de manera sostenible y orgánica, ha sido
              transmitido a través de 5 generaciones con una gran procedencia,
              historia y experiencia.
            </p>
          </div>
        </div>
        <div className="aboutMid">
          <div className="contTopViosion">
            <div className="imgHue">
              <h1 className="our">Nuestra</h1>
              <Image src={Vision} alt="huerto"></Image>
            </div>
            <div className="mission">
              <Image src={Huerto} alt="huerto"></Image>
            </div>
          </div>
          <div className="textHue">
            <div className="contVision">
              <p className="paragraphVi">
                Innovar con un nuevo modelo de agricultura desde sus bases mas
                fundamentales y naturales para acompañar a nuestros clientes en
                la instalación, mantenimiento y crecimiento de sus huerto.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutMid">
          <div className="contTopViosion">
            <div className="mission">
              <Image src={Huerto} alt="huerto"></Image>
            </div>
            <div className="imgLech">
              <h1 className="our">Nuestra</h1>
              <Image src={Mision} alt="mission" className="misssionImg"></Image>
            </div>
          </div>
          <div className="textHue">
            <div className="contVision">
              <p className="paragraphVi">
                Llevar la agricultura y al agricultor a casa. Incentivar los
                espacios verdes, orgánicos y comestibles en los hogares, motivar
                a las personas en el crecimiento de su bienestar y que disfruten
                de los beneficios de una huerta y sus alimentos saludables sin
                la necesidad de salir de casa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="botCont">
        <div className="botTitle">
          <h1 className="titleBot">Nuestras</h1>
          <h1 className="subRabBot">Reseñas</h1>
        </div>
        <div className="botCards">
          <div className="cardCont">
            <CardHome
              src={Sussan}
              name="Sussan JK."
              country="Spain"
              coment="Excelencia y Calidad"
            ></CardHome>
          </div>
          <div className="cardCont">
            <CardHome
              src={Morgan}
              name="Morgan R."
              country="Spain"
              coment="Los Mejores Precios"
            ></CardHome>
          </div>
          <div className="cardCont">
            <CardHome
              src={Steph}
              name="Stephanie M."
              country="Spain"
              coment="Profesionales y Atentos"
            ></CardHome>
          </div>
        </div>
      </div>
    </main>
  );
}
