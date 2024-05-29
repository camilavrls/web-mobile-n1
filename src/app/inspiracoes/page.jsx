import Banner from "../shared/banner/banner";
import "./inspiracoes.css"

export default function Inspiracoes(){
    return(
        <div>
            <h1>INSPIRAÇÕES</h1>
            <Banner img="hipster.png" titulo="HIPSTER #34" texto="Nesse episódio xploramos a história e os desafios das mulheres na computação, discutindo com pioneiras formas de aumentar sua participação e reconhecimento na área." nomeBotao="Ouça aqui" redirect="https://www.hipsters.tech/mulheres-na-tecnologia-hipsters-34/"/>
            <Banner imagem="esquerda" img="techelas.png" titulo="ELAS NA TECH" texto="Mulheres na Tecnologia é um encontro dinâmico e inclusivo que reúne mulheres apaixonadas pela tecnologia para explorar novas tecnologias, aprimorar suas habilidades técnicas e fazer networking.  " nomeBotao="Assista aqui" redirect="https://www.youtube.com/watch?v=TtgcCr3DEeI"/>
        </div>
    );
}