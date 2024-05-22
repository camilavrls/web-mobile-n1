import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/header/header";
import TabBar from "./shared/tabBar/tabBar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <div className="container-home">
        <Header/>
        {children}
        <TabBar/>
      </div>
    </html>
  );
}

