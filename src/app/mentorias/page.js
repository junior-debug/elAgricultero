import "./style.css";
import Card from "@/components/cardProduct";
import Modal from "@/components/modal";
import ShortInput from "@/components/shortInput";
import { GreenBut } from "@/components/greenBut";

export default function contact() {
    const data = [
        {
          image: "url('https://novapublishers.com/wp-content/uploads/2022/09/9798886975192-1000x1518.jpg')",
          title: "Titulo del libro",
          description:
            "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
        },
        {
          image: "url('https://m.media-amazon.com/images/I/61ItMTvU9-S._AC_UF1000,1000_QL80_.jpg')",
          title: "Titulo del libro",
          description:
            "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
        },
        {
          image: "url('https://pakarmyranks.com/wp-content/uploads/2022/10/General-Agriculture-Tenth-Edition-By-M-Akhtar-Abbas-119238-1.jpg')",
          title: "Titulo del libro",
          description:
            "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
        }
      ];

      let styleShortInput = {
        height: 60 + 'px',
        margin: 10 + 'px ' + 0
      }
      let propsStyleButton = {
        width: 40 + '%'
      }

  return (
    <>
      <div className="topCont">
        <div className="firstLine">
            <h1 className="black">Asesorate con</h1>
            <h1 className="green">Expertos</h1>
        </div>
        <div className="secondLine">
          <h1 className="black">en</h1>
          <h1 className="green">Agricultura</h1>
        </div>
      </div>
      <Modal>
        <div className="m-titleContainer">
          <h1>Complete el formulario para Comprar su PDF</h1>
        </div>
        <div className="m-inputsContainer">
          <ShortInput placeholderInput="Nombres" styleShortInput={styleShortInput} />
          <ShortInput placeholderInput="Apellidos" styleShortInput={styleShortInput} />
          <ShortInput placeholderInput="Correo" styleShortInput={styleShortInput} />
          <ShortInput placeholderInput="Telefono" styleShortInput={styleShortInput} />
        </div>
        <div className="m-buttonContainer">
          <GreenBut text="Enviar" propsStyle={propsStyleButton}  />
        </div>
      </Modal>
        <div className="d-grid">
          {data.map((item, index) => (
            <Card
              key={index}
              index={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
    </>
  );
}
