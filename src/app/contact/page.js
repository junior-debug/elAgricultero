"use client";
import { useState, useEffect } from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import ShortInput from "@/components/shortInput";
import { GreenBut } from "@/components/greenBut";
import SuccessModal, { useSuccessModalStore } from "@/components/successModal";

import facebook from "@/assets/icons/contact-social/facebook.png";
import instagram from "@/assets/icons/instagram.png";
import twitter from "@/assets/icons/contact-social/twitter.png";
import tiktok from "@/assets/icons/contact-social/tik-tok.png";
import { comment } from "postcss";

export default function contact() {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputComment, setInputComment] = useState("");

  const resetForm = () => {};

  useEffect(() => {
    console.log(inputName);
  }, [inputName]);

  const stateModal = useSuccessModalStore((state) => state.toggleModalOn);

  const handleInputChange = (event, opt) => {
    switch (opt) {
      case "n":
        setInputName(event.target.value);
        break;
      case "l":
        setInputLastName(event.target.value);
        break;
      case "p":
        setInputPhone(event.target.value);
        break;
      case "m":
        setInputMail(event.target.value);
        break;
      case "c":
        setInputComment(event.target.value);
        break;
    }
  };

  const toggleModal = async (e) => {
    if (
      inputName != "" &&
      inputLastName != "" &&
      inputPhone != "" &&
      inputMail != "" &&
      inputComment != ""
    ) {
      e.preventDefault();

      const requestData = {
        lastName: inputLastName,
        firstName: inputName,
        phone: inputPhone,
        email: inputMail,
        comment: inputComment,
      };

      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (res.status === 200) {
        stateModal();
        resetForm();
      } else {
        console.log(
          "La solicitud no se completó exitosamente (status " + res.status + ")"
        );
      }
      console.log(res);
    } else {
      alert("Completa todos los campos del Formulario");
    }
  };

  let styleShortInput = {
    height: 75 + "px",
    marginLeft: "10" + "px",
  };
  let propsStyle = {};
  return (
    <main>
      <SuccessModal title="Enviado" propsStyle={propsStyle} />
      <div className="initial">
        <div className="left">
          <div className="ellipse"></div>
        </div>
        <div className="right">
          <h1 className="principal-title">
            Contactanos <br /> <span>Caminemos al exito</span>
          </h1>
          <p>
            El Agricultero, una empresa agrícola comprometida con el cultivo
            sostenible, la producción de alimentos frescos y saludables. Desde
            sus inicios, hace más cinco Generaciones, El Agricultero ha sido un
            faro de innovación y calidad.
          </p>
        </div>
      </div>
      <div className="container-description">
        <h1 className="first-title">
          Tu contacto <span>Inmediato</span>
        </h1>
        <div className="description">
          <div className="container-general-inputs">
            <div className="section-inputs-1">
              <ShortInput
                styleShortInput={styleShortInput}
                placeholderInput="Nombres"
                name="input1"
                value={inputName}
                handleInputChange={(event) => {
                  handleInputChange(event, "n");
                }}
              />
              <ShortInput
                styleShortInput={styleShortInput}
                placeholderInput="Apellidos"
                name="input2"
                value={inputLastName}
                handleInputChange={(event) => {
                  handleInputChange(event, "l");
                }}
              />
            </div>
            <div className="section-inputs-2">
              <ShortInput
                styleShortInput={styleShortInput}
                placeholderInput="Numero de Telefono"
                name="input3"
                value={inputPhone}
                handleInputChange={(event) => {
                  handleInputChange(event, "p");
                }}
              />
              <ShortInput
                styleShortInput={styleShortInput}
                placeholderInput="Correo Electronico"
                name="input4"
                value={inputMail}
                handleInputChange={(event) => {
                  handleInputChange(event, "m");
                }}
              />
            </div>
            <div className="section-inputs-3">
              <textarea
                placeholder="Description"
                value={inputComment}
                onChange={(event) => {
                  handleInputChange(event, "c");
                }}
              />
            </div>
            <div className="section-inputs-4">
              <div className="containerSendButton" onClick={toggleModal}>
                <GreenBut propsStyle={{ width: 100 + "%" }} text="Enviar" />
              </div>
            </div>
          </div>
          <div className="container-general-social">
            <h1 className="second-title">
              Siguenos en <br /> <span>Nuestras redes</span>
            </h1>
            <div className="container-grid">
              <Link
                className="social-item facebook"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100091300293560"
              >
                <Image src={facebook} alt="facebook" />
                <p>El agricultero</p>
              </Link>
              <Link
                className="social-item twitter"
                target="_blank"
                href="https://twitter.com/elagricultero?s=11"
              >
                <Image src={twitter} alt="twitter" />
                <p>@elagricultero</p>
              </Link>
              <Link
                className="social-item instagram"
                target="_blank"
                href="https://www.instagram.com/elagricultero/"
              >
                <Image src={instagram} alt="instagram" />
                <p>@elagricultero</p>
              </Link>
              <Link
                className="social-item tik-tok"
                target="_blank"
                href="https://www.tiktok.com/@elagricultero"
              >
                <Image src={tiktok} alt="tiktok" />
                <p>@elagricultero</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
