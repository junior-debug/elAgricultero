import React from "react";
import { create, set } from "zustand";
import Image from "next/image";
import iconDelete from "@/assets/icons/delete.png";
import "./style.css";

const useStore = create((set) => ({
  cart: [
    {
      producto: "tomate Veraniego",
      unidades: "20",
      precioTotal: 50,
    },
    {
      producto: "tomate Veraniego2",
      unidades: "20",
      precioTotal: 50,
    },
  ],
  total: 100, // Puedes calcular el total inicial aquí
  removeItem: (index) => {
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
      total: state.total - state.cart[index].precioTotal, // Restar precio al total
    }));
  },
}));

export function Cart(props) {
  const { cart, total, removeItem } = useStore();

  return (
    <div className={props.classCart}>
      <div className="cartTop">
        {cart.map((item, index) => (
          <div key={index} className="cardProduct">
            <div className="productImg"></div>
            <div className="productDescription">
              <div className="tittleCont">
                <h4 className="tittle">{item.producto}</h4>
              </div>
              <div className="totalCard">
                <p className="tittle"> X{item.unidades}</p>
                <p className="space">-</p>
                <p className="euros">{item.precioTotal}€</p>
              </div>
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
      <div className="cartBot">
        <h4 className="total">Total: </h4>
        <h4 className="totalG">{total}€</h4>
      </div>
    </div>
  );
}
