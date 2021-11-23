import { Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Quiz from '../../components/Quiz';
import { useQuizContext } from '../../context/QuizContext';
import Router from 'next/router';

const dashboard: React.FC = () => {

  const { isVerified, isLoading } = useQuizContext();

  useEffect(() => {
    if (!isVerified) {
      Router.push('/');
    }
  }, [isVerified]);

  return (
    <Flex>
      {isLoading ? <Spinner size="xl" /> : <Quiz />}
    </Flex>
  );
}

export default dashboard;