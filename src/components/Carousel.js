"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rabanos from "@/assets/images/rabanos.png";
import CarRes from "../assets/images/carRes.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from "react-responsive-carousel";
export function CarouselInit() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState(Rabanos);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      };

      handleResize(); // Verificar el tamaño inicial al cargar el componente

      window.addEventListener("resize", handleResize); // Agregar el listener para escuchar los cambios de tamaño

      return () => {
        window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar el componente
      };
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setCurrentImage(CarRes);
    } else {
      setCurrentImage(Rabanos);
    }
  }, [isMobile]);

  const carouselContainerStyle = {
    width: isMobile ? "100%" : "439px",
    height: isMobile ? "200px" : "280px",
  };

  return (
    <>
      <div style={carouselContainerStyle}>
        <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false}>
          <div>
            <Image src={currentImage} alt="hola" />
            <p className="legend">Leyenda 1</p>
          </div>
          <div>
            <Image src={currentImage} alt="hola" />
            <p className="legend">Leyenda 2</p>
          </div>
          <div>
            <Image src={currentImage} alt="hola" />
            <p className="legend">Leyenda 3</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}
