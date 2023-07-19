import Image from "next/image";
import Star from "@/assets/images/star.png";
import "@/styles/home.css";
export function CardHome(props) {
  return (
    <>
      <div className="cardStr">
        <div className="topImg">
          <Image src={props.src} alt={props.alt}></Image>
        </div>
        <div className="botTxt">
          <h1 className="userName">{props.name}</h1>
          <h1 className="country">{props.country}</h1>
          <div className="star">
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
          </div>
          <h1 className="coment">{props.coment}</h1>
        </div>
      </div>
    </>
  );
}
