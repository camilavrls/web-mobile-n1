import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/header/header";
import TabBar from "./shared/tabBar/tabBar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meu Site</title>
      </head>
      <body>
        <div className="container-home">
          <Header />
          {children}
          <TabBar />
        </div>
      </body>
    </html>
  );
}
