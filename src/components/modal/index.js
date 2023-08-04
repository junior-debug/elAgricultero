'use client';
import "./style.css";
import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  stateMenu: false,
  toggleModalOn: () => {
    set({stateMenu: true})
  },
  toggleModalOff: () => {
    set({stateMenu: false})
  },
}))




export default function Modal(props) {

  const stateMenu = useMenuStore(state => state.stateMenu)
  const toggleModal = useMenuStore(state => state.toggleModalOff)

  return (
    <div className={`m-allModalComponent ${stateMenu ? "isActive" : ""}`}>
      <div className="m-modalBackground" onClick={toggleModal}></div>
      <div className="m-modalContainer">{props.children}</div>
    </div>
  );
}
