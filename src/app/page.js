import Link from "next/link";
import Home from "./home/home";

export default function App() {
  return (
    <div className="container">
      <Menu></Menu>
      <Home></Home>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <nav>
        <Link href="/home">Home</Link>
      </nav>
    </div>
  );
}
