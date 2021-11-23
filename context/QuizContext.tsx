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
  setIsVerified: Dispatch<SetStateAction<boolean>>,
  user: User,
  quiz: Question[],
  dificulty: string,
  setDificulty: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<User>>
  score: number,
  setScore: Dispatch<SetStateAction<number>>,
  setQuestionIndex: Dispatch<SetStateAction<number>>,
  questionIndex: number,
  answers: any[],
  correctAnswer: number[],
  userAnswers: number[],
  setUserAnswers: Dispatch<SetStateAction<number[]>>,
  isLoading: boolean
}

export const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({ children }) => {

  //user choice related state
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dificulty, setDificulty] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  //quiz game related state
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const { data: quiz, error, isLoading } = useQuiz(dificulty);

  useEffect(() => {

    const loadAnswers = () => {
      console.log({quiz, questionIndex})
      const answersArray = Object.keys(quiz[questionIndex].answers).map((key) => [quiz[questionIndex].answers[key]]);
      setAnswers(answersArray);

      const correctAnswersArray = Object.keys(quiz[questionIndex]?.correct_answers).map((key) => quiz[questionIndex].correct_answers[key]);

      console.log(correctAnswersArray);

      const finalCorrectAnswer = correctAnswersArray.map((option, index) => option === 'true' ? index : -1).filter(option => option !== -1);
      setCorrectAnswer(finalCorrectAnswer)
    }

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

    if (quiz.length > 0 ) {
      loadAnswers();
    }
    verifyUser();

  }, [questionIndex, quiz]);

  return (
    <QuizContext.Provider value={{
      user,
      quiz,
      isVerified,
      setIsVerified,
      dificulty,
      setDificulty,
      setUser,
      score,
      setScore,
      setQuestionIndex,
      questionIndex,
      answers,
      correctAnswer,
      userAnswers,
      setUserAnswers,
      isLoading
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);