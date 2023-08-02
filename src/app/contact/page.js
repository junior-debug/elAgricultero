import "./style.css";
import Image from "next/image";
import ShortInput from "@/components/shortInput";

import facebook from "@/assets/icons/contact-social/facebook.png";
import instagram from "@/assets/icons/instagram.png";
import twitter from "@/assets/icons/contact-social/twitter.png";
import tiktok from "@/assets/icons/contact-social/tik-tok.png";

export default function contact() {
  let styleShortInput = {
    height: 75 + 'px',
    marginLeft: '10' + 'px'
  }
  return (
    <main>
      <div className="initial">
        <div className="left">
          <div className="ellipse"></div>
        </div>
        <div className="right">
          <h1 className="principal-title">
            Contactanos <br /> <span>Caminemos al exito</span>
          </h1>
          <p>
            El Agricultero, una empresa agrícola comprometida con el cultivo sostenible, 
            la producción de alimentos frescos y saludables. Desde sus inicios, hace más cinco Generaciones, 
            El Agricultero ha sido un faro de innovación y calidad.
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
              <ShortInput styleShortInput={styleShortInput} placeholderInput="Nombres" />
              <ShortInput styleShortInput={styleShortInput} placeholderInput="Apellidos" />
            </div>
            <div className="section-inputs-2">
              <ShortInput styleShortInput={styleShortInput} placeholderInput="Numero de Telefono" />
              <ShortInput styleShortInput={styleShortInput} placeholderInput="Correo Electronico" />
            </div>
            <div className="section-inputs-3">
              <textarea placeholder="Description" />
            </div>
            <div>{/* button */}</div>
          </div>
          <div className="container-general-social">
            <h1 className="second-title">
              Siguenos en <br /> <span>Nuestras redes</span>
            </h1>
            <div className="container-grid">
              <div className="social-item facebook">
                <Image src={facebook} alt="facebook" />
                <p>El agricultero</p>
              </div>
              <div className="social-item twitter">
                <Image src={twitter} alt="twitter" />
                <p>@elagricultero</p>
              </div>
              <div className="social-item instagram">
                <Image src={instagram} alt="instagram" />
                <p>@elagricultero</p>
              </div>
              <div className="social-item tik-tok">
                <Image src={tiktok} alt="tiktok" />
                <p>@elagricultero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
