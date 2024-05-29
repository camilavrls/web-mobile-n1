"use client";
import React, { useEffect, useState } from "react";
import "./quiz.css";

export default function Quiz() {
  const [dadosQuiz, setDadosQuiz] = useState([]);
  const [questoesRespondidas, setQuestoesRespondidas] = useState({});

  useEffect(() => {
    async function buscarDados() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=7&category=18&type=multiple"
        );
        const jsonData = await response.json();
        if (jsonData.results) {
          setDadosQuiz(jsonData.results);
        } else {
          console.error("Nenhum resultado encontrado na resposta da API");
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    buscarDados();
  }, []);

  const lidarComResposta = (indiceQuestao, indiceResposta, estaCorreta) => {
    setQuestoesRespondidas((prev) => ({
      ...prev,
      [indiceQuestao]: {
        indiceResposta,
        estaCorreta,
      },
    }));
  };

  return (
    <div className="main-container">
      <div className="quiz-container">
        <h1>QUIZ</h1>
        {dadosQuiz.length > 0 ? (
          <div>
            {dadosQuiz.map((dadosQuestao, indice) => (
              <div key={`questao_${indice}`}>
                <h2>Questão {indice + 1}:</h2>
                <p>{dadosQuestao.question}</p>
                <h3>Respostas:</h3>
                <div className="answers">
                  {dadosQuestao.incorrect_answers.map((respostaIncorreta, i) => (
                    <button
                      key={`incorreta_${i}`}
                      onClick={() => lidarComResposta(indice, i, false)}
                      className={`quiz-button ${
                        questoesRespondidas[indice]?.indiceResposta === i
                          ? "incorrect"
                          : ""
                      }`}
                      disabled={questoesRespondidas.hasOwnProperty(indice)}
                    >
                      {respostaIncorreta}
                    </button>
                  ))}
                  <button
                    key={`correta_${indice}`}
                    onClick={() => lidarComResposta(indice, 'correct', true)}
                    className={`quiz-button ${
                      questoesRespondidas[indice]?.indiceResposta === 'correct'
                        ? "correct"
                        : ""
                    }`}
                    disabled={questoesRespondidas.hasOwnProperty(indice)}
                  >
                    {dadosQuestao.correct_answer}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
