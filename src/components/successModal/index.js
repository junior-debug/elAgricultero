'use client';
import "./style.css";
import Image from "next/image";
import { create } from 'zustand'
import check from "@/assets/gif/check.gif";

export const useSuccessModalStore = create((set) => ({
  stateMenu: false,
  toggleModalOn: () => {
    set({stateMenu: true})
  },
  toggleModalOff: () => {
    set({stateMenu: false})
  },
}))




export default function SuccessModal(props) {

  const stateMenu = useSuccessModalStore(state => state.stateMenu)
  const toggleModal = useSuccessModalStore(state => state.toggleModalOff)

  return (
    <div className={`ms-allModalComponent ${stateMenu ? "isActive" : ""}`}>
      <div className="ms-modalBackground" onClick={toggleModal}></div>
      <div className={`ms-modalContainer ${stateMenu ? "isActive" : ""}`}>
        <Image className={`ms-image ${stateMenu ? "isActive" : ""}`} src={check} width="200" alt="ready" />  
        <h3 className={`ms-title ${stateMenu ? "isActive" : ""}`}>{props.title}</h3>
      </div>
    </div>
  );
}
