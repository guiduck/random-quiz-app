import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import useQuiz from "../hooks/useQuiz";

type Question = {
  id: number,
  question: string,
  description: string,
  answers: {
    answer_a: string,
    answer_b: string,
    answer_c: string,
    answer_d: string,
    answer_e: string,
    answer_f: string
  },
  multiple_correct_answers: boolean,
  correct_answers: {
    answer_a_correct: boolean,
    answer_b_correct: boolean,
    answer_c_correct: boolean,
    answer_d_correct: boolean,
    answer_e_correct: boolean,
    answer_f_correct: boolean
  },
  difficulty: string
}

type User = {
  username: string
}

type QuizContextType = {
  isVerified: boolean,
  user: User,
  quiz: Question[],
  dificulty: string,
  setDificulty: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<User>>
}

export const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({ children }) => {

  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  // const [quiz, setQuiz] = useState([]);
  const [dificulty, setDificulty] = useState('');

  const { data: quiz, error, isLoading } = useQuiz(dificulty);

  useEffect(() => {
    const verifyUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setIsVerified(true);
        setUser({username: JSON.parse(storedUser)});
      } else {
        setUser(null);
        setIsVerified(false);
      }
    }

    verifyUser();

  }, [])

  return (
    <QuizContext.Provider value={{ user, quiz, isVerified, dificulty, setDificulty, setUser }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);