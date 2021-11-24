import { Button, Flex, Heading, Spinner, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Quiz: React.FC = () => {

  const {
    quiz,
    score,
    setScore,
    questionIndex,
    setQuestionIndex,
    correctAnswer,
    answers,
    userAnswers,
    setUserAnswers,
    isLoading
  } = useQuizContext();

  const toast = useToast();

  useEffect(() => {
    if (userAnswers.length == 9) {
      Router.push('/scoreboard');
      setQuestionIndex(0);
    }
  }, [questionIndex, quiz]);

  const handleAnswer = (index: number) => {
    console.log({index});

    if (questionIndex < 10) {
      setQuestionIndex(questionIndex + 1);
    }

    //addig list of user answers
    setUserAnswers([...userAnswers, index]);

    if (correctAnswer.includes(index)) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "You've got one point!",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Wrong!",
        description: "This is not the answer",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex boxShadow='xl' direction='column' rounded='2xl' background={useColorModeValue('gray.200', 'gray.700')} minWidth='800px' maxWidth='800px'>
      {!isLoading ? <Flex direction='column' py={50} px={30} >
        <Flex boxShadow='md' px={5} my={10}>
          { quiz ?
            <Text fontSize='xl'>
              {quiz[questionIndex]?.question}
            </Text>  :
            <Spinner size="xl" />
          }
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
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                  }}
                >
                  {answer}
                </Text>
              </Button> : <></>
            );
          })}
        </Flex>
        <Heading mt={25}>Score: {score}</Heading>
      </Flex> :
      <Spinner size="xl" />
      }
    </Flex>
  );
}

export default Quiz;