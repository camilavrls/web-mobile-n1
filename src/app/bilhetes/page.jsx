import Botao from "../shared/button/button";
import "./bilhete.css"

export default function Bilhetes() {
    return (
        <div>
            <h1>BILHETES POSITIVOS</h1>
            <div className="note-container">
                <Card note="Você é incrível!" />
                <Card note="Acredite em você!" />
                <Card note="Tenha um ótimo dia!" />
            </div>
            <form>
                <textarea placeholder="Escreva uma mensagem positiva..."></textarea>
                <Botao nome={"Adicionar bilhete"} class="azul"/>
            </form>
        </div>
    );
}

function Card({ note }) {
    return (
      <div className="note">
        {note}
      </div>
    );
  }