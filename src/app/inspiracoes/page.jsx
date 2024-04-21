import Banner from "../shared/banner/banner";
import "./inspiracoes.css"

export default function Inspiracoes(){
    return(
        <div>
            <h1>INSPIRAÇÕES</h1>
            <Banner img="hipster.png" titulo="HIPSTER #34" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo leo, hendrerit at tincidunt et, convallis sed orci." nomeBotao="Ouça aqui"/>
            <Banner imagem="esquerda" img="techelas.png" titulo="ELAS NA TECH" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo leo, hendrerit at tincidunt et, convallis sed orci." nomeBotao="Assista aqui"/>
        </div>
    );
}