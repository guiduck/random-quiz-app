import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Quiz: React.FC = () => {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const { quiz } = useQuizContext();

  useEffect(() => {
    const answersArray = Object.keys(quiz[questionIndex].answers).map((key) => [quiz[questionIndex].answers[key]]);
    const correctAnswersArray = Object.keys(quiz[questionIndex].correct_answers).map((key) => quiz[questionIndex].correct_answers[key]);
    setAnswers(answersArray);
    console.log(correctAnswersArray)
    correctAnswersArray.map((option, index) => (option == 'true') ?  setCorrectAnswer(index) : null); //gets the index of the correct answer
  }, [questionIndex]);

  const handleNextQuestion = () => {
    //remember to check if user answer index is equal do correct answer index on array
    setQuestionIndex(questionIndex + 1);
    console.log(correctAnswer);
    if (userAnswer === correctAnswer) {

      setScore(score + 1);
    }
  }

  return (
    <Flex direction='column' minWidth='100%'>
      <Flex>
        {`question: ${quiz[questionIndex].question}`}
      </Flex>
      <Flex>
        {`description: ${quiz[questionIndex].description}`}
      </Flex>
      <Flex direction='column'>
        {answers.map((answer) => {
          return (
            answer != '' ?
            <Button justifyContent='flex-start'>
              <Text
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
      <Button onClick={handleNextQuestion}>Next question</Button>
      {score}
    </Flex>
  );
}

export default Quiz;