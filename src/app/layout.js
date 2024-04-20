import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/header/header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <div className="container">
        <Header/>
        {children}
      </div>
    </html>
  );
}

