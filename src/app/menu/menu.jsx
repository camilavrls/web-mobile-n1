import Link from "next/link";
import "./menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <img src="Logo.png"></img>
            <nav>
                <Link href="/">Home</Link><br />
                <Link href="/quiz">Quiz</Link><br />
                <Link href="/inspiracoes">Inspirações</Link><br />
                <Link href="/sobrenos">Sobre Nós</Link>
            </nav>
        </div>
    );
}