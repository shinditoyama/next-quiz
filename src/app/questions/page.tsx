import { QuizQuestion } from "@/components/QuizQuestion";
import { apiUrl } from "@/lib/constants";
import { redirect } from "next/navigation";

interface Props {
  searchParams: { category: string; limit: string; level: string };
}

const getQuestions = async (category: string, limit: string, level = "") => {
  const response = await fetch(
    `${apiUrl}/questions?categories=${category}&limit=${limit}&difficulty=${level}`,
    { cache: "no-cache" }
  );
  const data = await response.json();
  return data;
};

export default async function Questions({ searchParams }: Props) {
  const { category, limit, level } = searchParams;
  const data = await getQuestions(category, limit, level);

  if (!category || !limit) {
    redirect("/");
  }

  return (
    <section className="container max-w-4xl">
      <QuizQuestion data={data} />
    </section>
  );
}
