import Botao from "../button/button";
import "./banner.css";

export default function Banner(props) {
    return (
        <div className="container-banner">
            <div className="content">
                {props.imagem === 'esquerda' ? (
                    <>
                        <img src={props.img} alt="Banner" />
                        <div className="text">
                            <h1>{props.titulo}</h1>
                            <p className="texto">{props.texto}</p>
                            <Botao nome={props.nomeBotao} class="azul" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="text">
                            <h1>{props.titulo}</h1>
                            <p className="texto">{props.texto}</p>
                            <Botao nome={props.nomeBotao} class="azul" />
                        </div>
                        <img src={props.img} alt="Banner" />
                    </>
                )}
            </div>
        </div>
    );
}


