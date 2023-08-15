'use client';
import "./style.css";
import Image from "next/image";
import { create } from 'zustand'
import check from "@/assets/gif/check.gif";

export const useSuccessModalStore = create((set) => ({
  stateMenu: false,
  toggleModalOn: () => {
    set({stateMenu: true})
    setTimeout(() => {
      set({stateMenu: false})
    }, 3000);
  },
  toggleModalOff: () => {
    set({stateMenu: false})
  },
}))

export default function SuccessModal(props) {

  const stateMenu = useSuccessModalStore(state => state.stateMenu)

  return (
    <div className={`ms-allModalComponent ${stateMenu ? "isActive" : ""}`}>
      <div className="ms-modalBackground"></div>
      <div className={`ms-modalContainer ${stateMenu && location.pathname == "/contact" ? "isActiveContact" : ""}`}>
        <Image className={`ms-image ${stateMenu ? "isActive" : ""}`} src={check} width="200" alt="ready" />  
        <h3 className={`ms-title ${stateMenu ? "isActive" : ""}`}>{props.title}</h3>
      </div>
    </div>
  );
}
