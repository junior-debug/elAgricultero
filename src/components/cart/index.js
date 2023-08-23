import React from "react";
import { create, set } from "zustand"; // Importa set desde zustand
import Image from "next/image";
import iconDelete from "@/assets/icons/delete.png";
import "./style.css";

const useStore = create((set) => ({
  // Pasa set como argumento de create
  cart: [
    {
      producto: "tomate Veraniego",
      unidades: "20",
      precioTotal: "50",
    },
    {
      producto: "tomate Veraniego2",
      unidades: "20",
      precioTotal: "50",
    },
  ],
  removeItem: (index) =>
    set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
}));

export function Cart(props) {
  const { cart, removeItem } = useStore();

  return (
    <div className={props.classCart}>
      {cart.map((item, index) => (
        <div key={index} className="cardProduct">
          <div className="productImg"></div>
          <div className="productDescription">
            <h4>producto: {item.producto}</h4>
            <p>unidades: {item.unidades}</p>
            <p>precioTotal: {item.precioTotal}</p>
          </div>
          <div className="deleteProduct">
            <Image
              src={iconDelete}
              alt="eliminar"
              onClick={() => removeItem(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
