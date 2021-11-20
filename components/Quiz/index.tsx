import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Quiz: React.FC = () => {

  const { quiz } = useQuizContext();

  const changeState = async () => {

  }

  console.log(quiz);

  return (
    <Flex>
      <Button onClick={changeState}>click me</Button>
    </Flex>
  );
}

export default Quiz;