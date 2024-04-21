import "./tabBar.css"
import Link from "next/link";

export default function TabBar() {
    return (
        <div className="container-tabbar">
            <div className="icone">
                <Link href="/">
                <img src="home.png"></img>
                <p>Home</p>
                </Link>
            </div>
            <div className="icone">
                <Link href="/inspiracoes">
                <img src="inspiracoes.png"></img>
                <p>Inspirações</p>
                </Link>
            </div>
            <div className="icone">
                <Link href="/mais">
                <img src="menu.png"></img>
                <p>Mais</p>
                </Link>
            </div>
        </div>
    );
}