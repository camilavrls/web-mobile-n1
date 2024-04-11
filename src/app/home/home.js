import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, IconButton } from "@mui/material";
import Botao from "./botao";
import SearchBar from "./searchBar";

export default function Home() {
    return (
      <section className="Principal">
        <div className="head">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <SearchBar />
            <Botao nome="Conheç mais sobre a gente" />
          </Toolbar>
        </div>
  
        <div className="div1">
          <h1>O QUE BUSCAMOS? </h1>
          <p> Buscamos criar um espaço acolhedor e inclusivo, onde mulheres na tecnologia possam encontrar apoio mútuo e solidariedade. Queremos demonstrar que cada desafio enfrentado é uma oportunidade de crescimento, e que juntas, podemos superar barreiras e alcançar nossos objetivos. Aqui, celebramos a diversidade de habilidades e experiências, reconhecendo o valor único que cada uma traz para a comunidade. Seja para compartilhar conhecimento, buscar orientação ou simplesmente encontrar um ombro amigo, estamos comprometidas em fortalecer e empoderar umas às outras. Porque acreditamos firmemente que, unidas, somos capazes de conquistar o mundo da tecnologia e inspirar as gerações futuras.</p>
  
          <Botao nome="Conhecer mais sobre a gente" />
        </div>
        <div className="div2">
          <h1>ELAS NA CIÊNCIA </h1>
          <p> Marie Skłodowska-Curie, foi uma física e química polonesa naturalizada francesa, que conduziu pesquisas pioneiras sobre radioatividade. Ela foi a primeira mulher a ganhar o Prêmio Nobel, sendo também a primeira pessoa e a única mulher a ganhá-lo duas vezes, além de ser a única pessoa a ser premiada em dois campos científicos diferentes. Ela teve papel fundamental no legado da família Curie, de cinco prêmios Nobel. Ela também foi a primeira mulher a se tornar professora na Universidade de Paris e, em 1995, se tornou a primeira mulher a ser sepultada por seus próprios méritos no Panteão de Paris.</p>
  
          <Botao nome="Conhecer mais sobre a gente" />
        </div>
        <div className="div3">
          <h1>+ OPORTUNIDADES </h1>
          <p> Acreditamos que, o que separa grandes sonhos de grandes realizações, são oportunidades. Por isso, oferecemos um espaço dedicado a reunir cursos e vagas de trabalho afirmativas, especialmente voltados para mulheres na tecnologia. Nosso compromisso com a equidade e a inclusão impulsiona nossa missão de proporcionar um ambiente acolhedor e igualitário. Aqui você encontrará oportunidades de aprendizado e crescimento profissional.</p>
  
          <Botao nome="Conhecer mais sobre a gente" />
        </div>
        <div className="Foot">
          FOOTER
        </div>
      </section>
    );
  }