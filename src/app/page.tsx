import { QuizConfig } from "@/components/QuizConfig";

export default function Home() {
  return (
    <section className="container max-w-4xl">
      <div className="bg-white rounded-md shadow-md">
        <h2 className="md:text-4xl text-2xl font-bold tracking-wide text-center py-4">
          Next Quiz
        </h2>
        <div className="mx-8 border border-gray-400" />
        <div className="w-full p-8">
          <QuizConfig />
        </div>
      </div>
    </section>
  );
}
