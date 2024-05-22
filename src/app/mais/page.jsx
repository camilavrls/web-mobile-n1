import Link from "next/link";
import "./mais.css"

export default function Mais(){
    return(
        <div className="navegacao">
            <Link href="/">Home</Link>
            <Link href="/quiz">Quiz</Link>
            <Link href="/inspiracoes">Inspirações</Link>
            <Link href="/sobrenos">Sobre nós</Link>
            <Link href="https://chat.whatsapp.com/DuqSVuB3Tdg1U8IBmJWiJZ">Participe da nossa comunidade</Link>
        </div>
    );
}