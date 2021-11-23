import { Button, Flex, Heading } from '@chakra-ui/react';
import Router from 'next/router';
import React, { useEffect } from 'react';
import ScoreCard from '../../components/ScoreCard';
import { useQuizContext } from '../../context/QuizContext';

const scoreboard: React.FC = () => {

  const { quiz, score, userAnswers, setIsVerified, isVerified } = useQuizContext();

  const handleRedirect = () => {
    localStorage.removeItem('user');
    setIsVerified(false);
  }

  useEffect(() => {
    if (!isVerified) {
      Router.push('/');
    }
  }, [isVerified])

  return (
    <Flex height='100vh' direction='column'>
      <Flex my={50} justifyContent='space-around'>
        <Heading>Your Score: {score}</Heading>
        <Flex>
          <Button onClick={handleRedirect}>Play again?</Button>
        </Flex>
      </Flex>
      {quiz.map((question, index)=> {
        return (
          <Flex>
            <ScoreCard
              question={question.question}
              answersObject={question.answers}
              correctAnswersObject={question.correct_answers}
              userAnswer={userAnswers[index]}
            />
          </Flex>
        );
      })}
    </Flex>
  )
}

export default scoreboard;