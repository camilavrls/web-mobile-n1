import "./button.css";

export default function Botao(props) {
    return (
      <button className={props.class}>
        {props.nome}
      </button>
    );
  }