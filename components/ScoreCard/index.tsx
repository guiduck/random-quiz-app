import { Box, Button, chakra, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

type Props = {
  question: string,
  answersObject: {
    answer_a: string
    answer_b: string
    answer_c: string
    answer_d: string
    answer_e: string
    answer_f: string
  },
  correctAnswersObject: {
    answer_a_correct: boolean,
    answer_b_correct: boolean,
    answer_c_correct: boolean,
    answer_d_correct: boolean,
    answer_e_correct: boolean,
    answer_f_correct: boolean
  },
  userAnswer: number
}

const ScoreCard: React.FC<Props> = ({
  question,
  answersObject,
  correctAnswersObject,
  userAnswer,
}) => {

  const [correctAnswersArray, setCorrectAnswersArray] = useState([]);
  const [answersArray, setAnswersArray] = useState([]);

  useEffect(() => {
    const answersArray = Object.keys(answersObject).map((key) => [answersObject[key]]);
    setAnswersArray(answersArray);

    const correctAnswers = Object.keys(correctAnswersObject).map((key) => correctAnswersObject[key]);

    const finalCorrectAnswer = correctAnswers.map((option, index) => option === 'true' ? index : -1).filter(option => option !== -1);
    setCorrectAnswersArray(finalCorrectAnswer);
  }, [answersObject]);

  return (
    <Flex my={10} minWidth='900px' maxWidth='900px' height='6%' alignItems='flex-start' direction='column'>
          <Flex>
            {`question: ${question}`}
          </Flex>
          <Flex direction='column' width='100%'>
            {answersArray.map((answer, index) => {
              return (
                <Flex >
                  {(correctAnswersArray.includes(index)) ?
                    <Button width='100%' colorScheme='teal' variant='outline'>
                      <Text
                        key={index}
                        mt={1}
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                      >
                        {answer.length > 50 ? answer.slice(0, 50) + '...' : answer}
                      </Text>
                    </Button> :
                    answer != '' ?
                    <Button width='100%'>
                      <Text
                        key={index}
                        mt={1}
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                      >
                        {answer.length > 50 ? answer.slice(0, 50) + '...' : answer}
                      </Text>
                    </Button> :
                    <></>
                  }
                </Flex>
              );
            })}
          </Flex>
    </Flex>
  );
}

export default ScoreCard;