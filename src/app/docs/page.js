import "./style.css";
import Card from "@/components/card";

export default function docs() {
  const data = [
    {
      image: "url('/pdf-1.png');",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
    {
      image: "url('/pdf-1.png');",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
    {
      image: "url('/pdf-1.png');",
      title: "Titulo del libro",
      description:
        "El Agricultero, una empresa agrícola comprometida con el cultivo sostenible y la producción",
    },
  ];

  return (
    <main>
      <h1 className="principal-title">
        Aprende con <span>Expertos</span>
      </h1>
      <div className="grid">
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
