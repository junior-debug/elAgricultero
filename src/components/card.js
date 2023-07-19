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
          <p className="userName">{props.name}</p>
          <p className="country">{props.country}</p>
          <div className="star">
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
            <Image src={Star} alt="star" className="star"></Image>
          </div>
          <p className="coment">{props.coment}</p>
        </div>
      </div>
    </>
  );
}
