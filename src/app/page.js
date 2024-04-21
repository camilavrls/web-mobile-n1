import React from "react";
import IconButton from "@mui/material/IconButton";
import Banner from "./shared/banner/banner";

export default function App() {
  return (
    <section className="Principal">
      <Banner img="sobrenosimg.png" titulo="SOBRE NÓS" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo leo, hendrerit at tincidunt et, convallis sed orci. " nomeBotao="Conheça mais" redirect="/sobrenos"/>
      <Banner imagem="esquerda" img="marie.png" titulo="INSPIRAÇÕES" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo leo, hendrerit at tincidunt et, convallis sed orci. " nomeBotao="Conheça mais" redirect="/inspiracoes"/>
      <Banner img="quizzimg.png" titulo="QUIZZ" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo leo, hendrerit at tincidunt et, convallis sed orci. " nomeBotao="Faça o quizz" redirect="/quiz"/>
    </section>
  );
}