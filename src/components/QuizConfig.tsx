"use client";

import { Button } from "@/components/Button";
import { useAppContext } from "@/context/AppContext";
import { categories, difficulties } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { useEffect } from "react";

export function QuizConfig() {
  const router = useRouter();
  const {
    limit,
    setLimit,
    level,
    setLevel,
    category,
    setCategory,
    setShowScreen,
    resetValues,
  } = useAppContext();

  useEffect(() => {
    resetValues();
  }, []);

  const handleStart = () => {
    setShowScreen(true);
    router.push(
      `/questions?category=${category}&limit=${limit}&level=${level}`
    );
  };

  return (
    <div className="w-full px-8">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-2xl font-bold text-center tracking-wide">
          Settings
        </h2>
        <Dropdown
          value={category}
          onChange={(e: DropdownChangeEvent) => setCategory(e.value)}
          options={categories}
          optionLabel="option"
          placeholder="Questions Category"
          className="w-full md:max-w-xs xl:max-w-md text-left"
        />
        <Dropdown
          value={level}
          onChange={(e: DropdownChangeEvent) => setLevel(e.value)}
          options={difficulties}
          optionLabel="option"
          placeholder="Difficulty Level"
          className="w-full md:max-w-xs xl:max-w-md text-left"
        />
        <p className="text-md font-semibold">Total Questions: {limit}</p>
        <Slider
          value={limit}
          onChange={(e: SliderChangeEvent) => setLimit(Number(e.value))}
          min={5}
          max={50}
          step={5}
          className="w-full md:max-w-xs xl:max-w-md"
        />
        <Button
          disabled={!category || !level}
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300"
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}
