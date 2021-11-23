import { useEffect, useState } from "react";
import { api } from "../services/api";

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

const useQuiz = ( difficulty: string ) => { //remember to get quiz by dificulty

  const [data, setData] = useState<Question[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const loadData = async() => {
      try {
        if (difficulty && difficulty != '') {
          console.log(difficulty);
          const response = await api.get<Question[]>('/questions', { params: {limit: 10, difficulty: difficulty}});
          if (response) {
            console.log(response.data);
            return response.data;
          }
        }
      } catch(err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    (async() => {
        const data = await loadData();
        if (data) {
          setData(data);
        }
    }) ()
  }, [difficulty])

  return { data, error, isLoading }
}

export default useQuiz;