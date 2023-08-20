"use client";

import { Button } from "@/components/Button";
import { useAppContext } from "@/context/AppContext";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function QuizQuestion({ data }: { data: IQuiz[] }) {
  const router = useRouter();
  const { showScreen, setScore, score } = useAppContext();
  const [selected, setSelected] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [answers, setAnswers] = useState([]);

  const questionsCount = data?.length ?? 0;
  const targetQuestion = data?.find(
    (_, index) => index === currentQuestionIndex - 1
  );
  const correctAnswer = targetQuestion?.correctAnswer;
  const falseAnswers = targetQuestion?.incorrectAnswers?.map((a) => a);

  if (!showScreen) {
    redirect("/");
  }

  useEffect(() => {
    setAnswers(handleShuffle(correctAnswer, falseAnswers));
  }, [currentQuestionIndex]);

  const nextQuestion = () => setCurrentQuestionIndex((x) => x + 1);
  const updateScore = () => setScore((s) => s + 1);

  const handleShuffle = (element: any, array: any) => {
    array.sort(() => Math.random() - 0.5);
    const randomIndex = Math.floor(Math.random() * (array.length + 1));
    array.splice(randomIndex, 0, element);
    return array;
  };

  const handleCheck = (answer: string) => {
    setSelected(answer);
    if (answer === correctAnswer) {
      sessionStorage.setItem("CURRENT_SCORE", score.toString());
      updateScore();
    }
  };

  const handleSelect = (answer: string) => {
    if (selected === answer && selected === correctAnswer) return "correct";
    else if (selected === answer && selected !== correctAnswer)
      return "incorrect";
    else if (answer === correctAnswer) return "correct";
  };

  const handleNextClick = () => {
    if (currentQuestionIndex === questionsCount) {
      router.replace(`/results`);
      return;
    }

    setSelected("");
    nextQuestion();
  };

  return (
    <article className="flex flex-col justify-start p-8 rounded-md shadow-md bg-white">
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-semibold">{`Question ${currentQuestionIndex} of ${questionsCount}`}</h2>
        <h2 className="text-xl font-semibold">Score: {score}</h2>
      </div>
      <p className="text-lg font-normal my-4">Q. {targetQuestion?.question}</p>
      {answers?.map((answer, i) => (
        <button
          key={i}
          className={`option ${selected && handleSelect(answer)}`}
          disabled={!!selected}
          onClick={() => handleCheck(answer)}
        >
          {answer}
        </button>
      ))}
      <div className="flex flex-col md:flex-row justify-center gap-3 md:border-none border-t-2 md:pt-0 pt-3 w-full">
        <Button
          disabled={!selected}
          onClick={handleNextClick}
          className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300"
        >
          {questionsCount != currentQuestionIndex
            ? "Next Question"
            : "Show Results"}
        </Button>
      </div>
    </article>
  );
}
