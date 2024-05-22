import Link from "next/link";
import "./button.css";

export default function Botao(props) {
  return (
    <Link href={props.redirect ?? ''}>
      <button className={props.class}>
        {props.nome}
      </button>
    </Link>
  );
}