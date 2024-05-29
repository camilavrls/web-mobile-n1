import React from "react";
import Banner from "./shared/banner/banner";

export default function App() {
  return (
    <section className="Principal">
      <Banner img="sobrenosimg.png" titulo="SOBRE NÓS" texto="A Women's Technology é um espaço criado para apoiar, inspirar e empoderar mulheres na área de Tecnologia da Informação." nomeBotao="Conheça mais" redirect="/sobrenos"/>
      <Banner imagem="esquerda" img="marie.png" titulo="INSPIRAÇÕES" texto="Aqui você encontra uma série de histórias inspiradoras, apresentadas em diversos formatos como podcasts, vídeos no YouTube, artigos, etc." nomeBotao="Conheça mais" redirect="/inspiracoes"/>
      <Banner img="quizzimg.png" titulo="QUIZZ" texto="Teste seus conhecimentos em computação e divirta-se com nosso quiz interativo, fornecido pela Open Trivia." nomeBotao="Faça o quizz" redirect="/quiz"/>
    </section>
  );
}