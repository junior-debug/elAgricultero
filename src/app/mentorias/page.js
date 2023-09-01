"use client";

import "./style.css";
import { useState, useEffect } from "react";
import Card from "@/components/cardProduct";
import Modal from "@/components/modal";
import ShortInput from "@/components/shortInput";
import { GreenBut } from "@/components/greenBut";

export default function contact() {
  const data = [
    {
      image:
        "url('https://novapublishers.com/wp-content/uploads/2022/09/9798886975192-1000x1518.jpg')",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
    {
      image:
        "url('https://m.media-amazon.com/images/I/61ItMTvU9-S._AC_UF1000,1000_QL80_.jpg')",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
    {
      image:
        "url('https://pakarmyranks.com/wp-content/uploads/2022/10/General-Agriculture-Tenth-Edition-By-M-Akhtar-Abbas-119238-1.jpg')",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
  ];

  const [titleProduct, setTitleProduct] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMail, setInputMail] = useState("");

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
    }
  };

  const handleChildValueChange = (value) => {
    setTitleProduct(value);
  };

  const sendMail = async (e) => {
    if (
      inputName != "" &&
      inputLastName != "" &&
      inputPhone != "" &&
      inputMail != ""
    ) {
      e.preventDefault();

      const requestData = {
        lastName: inputLastName,
        firstName: inputName,
        phone: inputPhone,
        email: inputMail,
        comment: titleProduct,
      };

      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (res.status === 200) {
        console.log("hola");
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
    height: 60 + "px",
    margin: 10 + "px " + 0,
  };
  let propsStyleButton = {
    width: 40 + "%",
  };

  return (
    <div>
      <div className="me-topCont">
        <div className="me-firstLine">
          <h1 className="me-black">Asesorate con</h1>
          <h1 className="me-green">Expertos</h1>
        </div>
        <div className="me-secondLine">
          <h1 className="me-black">en</h1>
          <h1 className="me-green">Agricultura</h1>
        </div>
      </div>
      <div className="d-grid">
        {data.map((item, index) => (
          <div className="d-container-card" key={index}>
            <Card
              index={index}
              image={item.image}
              title={item.title}
              description={item.description}
              onValueChange={handleChildValueChange}
            />
          </div>
        ))}
      </div>
      <Modal>
        <div className="m-titleContainer">
          <h1>Complete el formulario para Comprar su PDF</h1>
        </div>
        <div className="m-inputsContainer">
          <ShortInput
            placeholderInput="Nombres"
            styleShortInput={styleShortInput}
            value={inputName}
            handleInputChange={(event) => {
              handleInputChange(event, "n");
            }}
          />
          <ShortInput
            placeholderInput="Apellidos"
            styleShortInput={styleShortInput}
            value={inputLastName}
            handleInputChange={(event) => {
              handleInputChange(event, "l");
            }}
          />
          <ShortInput
            placeholderInput="Correo"
            styleShortInput={styleShortInput}
            value={inputPhone}
            handleInputChange={(event) => {
              handleInputChange(event, "p");
            }}
          />
          <ShortInput
            placeholderInput="Telefono"
            styleShortInput={styleShortInput}
            value={inputMail}
            handleInputChange={(event) => {
              handleInputChange(event, "m");
            }}
          />
        </div>
        <div className="m-buttonContainer">
          <GreenBut
            text="Enviar"
            propsStyle={propsStyleButton}
            handleClick={sendMail}
          />
        </div>
      </Modal>
    </div>
  );
}
