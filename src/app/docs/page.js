import "./style.css";
import Card from "@/components/cardProduct";

export default function docs() {
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
    },
    {
      image: "url('https://pakarmyranks.com/wp-content/uploads/2022/10/General-Agriculture-Tenth-Edition-By-M-Akhtar-Abbas-119238-1.jpg')",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
  ];

  return (
    <main>
      <h1 className="d-principal-title">
        Aprende con <span>Expertos</span>
      </h1>
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
    </main>
  );
}
