import Link from "next/link";
import "./mais.css"

export default function Mais(){
    return(
        <div className="navegacao">
            <Link href="/home">Home</Link>
            <Link href="/quiz">Quiz</Link>
            <Link href="/inspiracoes">Inspirações</Link>
            <Link href="/oportunidades">Oportunidades</Link>
            <Link href="/sobrenos">Sobre nós</Link>
            <Link href="/">Participe da nossa comunidade</Link>
        </div>
    );
}