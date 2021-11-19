import { Button, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import useQuiz from '../../hooks/useQuiz';
import { api } from '../../services/api';

const Quiz: React.FC = () => {

  // const {data: quiz, error, isLoading} = useQuiz('Hard');

  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const changeState = async () => {
    try {
        const response = await api.get('/questions');
        if (response) {
          setQuiz(response.data);
          return response.data;
        }
      } catch(err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }

  }

  console.log(quiz);

  return (
    <Flex>
      {JSON.stringify(quiz)}
      <Button onClick={changeState}>click me</Button>
    </Flex>
  );
}

export default Quiz;