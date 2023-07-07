import style from "@/components/footer/style.module.css";
export function GreenBut(props) {
  return (
    <>
      <button className={style.butSubscribe}>{props.text}</button>
    </>
  );
}
