import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Quiz: React.FC = () => {

  const [currentQuestion, setCurrentQuestion] = useState({
    index: null,
    wasAnswered: false,
    correctAnswerIndex: null,
    userAnswerIndex: null
  });
  const {
    quiz,
    score,
    setScore,
    setScoreCard,
    scoreCard,
    questionIndex,
    setQuestionIndex,
    correctAnswer,
    answers
  } = useQuizContext();

  const [userAnswer, setUserAnswer] = useState(null);

   useEffect(() => {
    if (questionIndex == 10) {
      Router.push('/scoreboard');
    }
  }, [questionIndex, quiz]);

  const handleAnswer = (index: number) => {
    console.log({index});
    setCurrentQuestion({
      index: questionIndex,
      wasAnswered: true,
      correctAnswerIndex: correctAnswer,
      userAnswerIndex: userAnswer
    });
    if (questionIndex < 10) {
      setQuestionIndex(questionIndex + 1);
    }

    console.log({userAnswer, correctAnswer})

    setUserAnswer(index);
    if (correctAnswer.includes(index)) {
      setScore(score + 1);
    }

    if (currentQuestion.wasAnswered && !scoreCard[questionIndex]) {
      setScoreCard([...scoreCard, currentQuestion]);
    }
  }

  return (
    <Flex direction='column' minWidth='100%'>
      <Flex>
        {`question: ${quiz[questionIndex]?.question}`}
      </Flex>
      <Flex direction='column'>
        {answers.map((answer, index) => {
          return (
            answer != '' ?
            <Button key={index} onClick={()=>handleAnswer(index)} justifyContent='flex-start'>
              <Text
                key={index}
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {answer}
              </Text>
            </Button> : <></>
          );
        })}
      </Flex>
      {score}
    </Flex>
  );
}

export default Quiz;