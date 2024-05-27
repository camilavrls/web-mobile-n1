"use client";
import React, { useEffect, useState } from "react";
import "./quiz.css";

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=7&category=18&type=multiple"
        );
        const jsonData = await response.json();
        if (jsonData.results) {
          setQuizData(jsonData.results);
        } else {
          console.error("No results found in API response");
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  const handleAnswer = (questionIndex, answerIndex, isCorrect) => {
    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionIndex]: {
        answerIndex,
        isCorrect,
      },
    }));
  };

  return (
    <div className="main-container">
      <div className="quiz-container">
        <h1>QUIZ</h1>
        {quizData.length > 0 ? (
          <div>
            {quizData.map((questionData, index) => (
              <div key={`question_${index}`}>
                <h2>Questão {index + 1}:</h2>
                <p>{questionData.question}</p>
                <h3>Respostas:</h3>
                <div className="answers">
                  {questionData.incorrect_answers.map((incorrectAnswer, i) => (
                    <button
                      key={`incorrect_${i}`}
                      onClick={() => handleAnswer(index, i, false)}
                      className={`quiz-button ${
                        answeredQuestions[index]?.answerIndex === i
                          ? "incorrect"
                          : ""
                      }`}
                      disabled={answeredQuestions.hasOwnProperty(index)}
                    >
                      {incorrectAnswer}
                    </button>
                  ))}
                  <button
                    key={`correct_${index}`}
                    onClick={() => handleAnswer(index, 'correct', true)}
                    className={`quiz-button ${
                      answeredQuestions[index]?.answerIndex === 'correct'
                        ? "correct"
                        : ""
                    }`}
                    disabled={answeredQuestions.hasOwnProperty(index)}
                  >
                    {questionData.correct_answer}
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
