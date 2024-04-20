import Botao from "../button/button";
import "./banner.css";

export default function Banner(props) {
    return (
        <div className="container">
            <div className="content">
                <div className="text">
                    <h1>{props.titulo}</h1>
                    <p className="texto">{props.texto}</p>
                    <Botao nome={props.nomeBotao} class="azul" />
                </div>
                <img src={props.img} alt="Banner" />
            </div>
        </div>
    );
}
