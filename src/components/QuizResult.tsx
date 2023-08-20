"use client";

import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "./Button";
import { RealisticConfetti } from "./Confetti";

export function QuizResult() {
  const { score, limit, showScreen } = useAppContext();
  const result = score / limit;

  if (!showScreen) {
    redirect("/");
  }

  return (
    <div className="bg-white rounded-md shadow-md">
      <div className="flex flex-col justify-center items-center gap-6 h-[50vh]">
        <div className="text-center space-y-2">
          <h2 className="md:text-3xl text-2xl font-bold">
            {result > 0.5 ? "Parabéns" : "Boa sorte na próxima vez."}
          </h2>
          <p className="text-xl">
            Você acertou {score} de {limit} questões!
          </p>
        </div>
        {result > 0.5 && <RealisticConfetti />}
        <Link href="/" replace>
          <Button className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400">
            Play again
          </Button>
        </Link>
      </div>
    </div>
  );
}
