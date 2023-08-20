import { QuizConfig } from "@/components/QuizConfig";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-md shadow-md">
          <h1 className="md:text-4xl text-2xl font-bold tracking-wide text-center py-4">
            Next Quiz
          </h1>
          <div className="border border-gray-400 mx-8" />
          <div className="flex justify-center text-center py-8">
            <QuizConfig />
          </div>
        </div>
      </div>
    </main>
  );
}
