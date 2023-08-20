"use client";

import { createContext, useContext, useState } from "react";

interface AppContextProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  level: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  showScreen: boolean;
  setShowScreen: React.Dispatch<React.SetStateAction<boolean>>;
  resetValues: () => void;
}

const AppContext = createContext<AppContextProps>({} as any);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [level, setLevel] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [showScreen, setShowScreen] = useState<boolean>(false);

  const resetValues = () => {
    setScore(0);
    setLimit(5);
    setLevel("");
    setCategory("");
    setShowScreen(false);
  };

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        limit,
        setLimit,
        level,
        setLevel,
        category,
        setCategory,
        showScreen,
        setShowScreen,
        resetValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppContext, AppProvider, useAppContext };
