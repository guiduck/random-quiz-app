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

type AnsweredQuestions = {
  index: number,
  wasAnswered: boolean,
  correctAnswerIndex: number,
  userAnswerIndex: number
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
  score: number,
  setScore: Dispatch<SetStateAction<Number>>,
  scoreCard: AnsweredQuestions[],
  setScoreCard: Dispatch<SetStateAction<AnsweredQuestions[]>>,
  setQuestionIndex: Dispatch<SetStateAction<number>>,
  questionIndex: number,
  answers: any[],
  correctAnswer: number[]
}

export const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({ children }) => {

  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dificulty, setDificulty] = useState('');

  //quiz game related state
  const [score, setScore] = useState(0);
  const [scoreCard, setScoreCard] = useState<AnsweredQuestions[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const { data: quiz, error, isLoading } = useQuiz(dificulty);

  useEffect(() => {

    const loadAnswers = () => {
      console.log({quiz, questionIndex})
      const answersArray = Object.keys(quiz[questionIndex].answers).map((key) => [quiz[questionIndex].answers[key]]);
      const correctAnswersArray = Object.keys(quiz[questionIndex]?.correct_answers).map((key) => quiz[questionIndex].correct_answers[key]);
      setAnswers(answersArray);
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

    if (quiz.length > 0 ){
      loadAnswers();
    }
    verifyUser();

  }, [questionIndex, quiz]);

  return (
    <QuizContext.Provider value={{
      user,
      quiz,
      isVerified,
      dificulty,
      setDificulty,
      setUser,
      score,
      setScore,
      scoreCard,
      setScoreCard,
      setQuestionIndex,
      questionIndex,
      answers,
      correctAnswer
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);