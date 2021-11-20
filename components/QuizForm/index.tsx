import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useQuizContext } from '../../context/QuizContext';

import Router from 'next/router'

type User = {
  username: string
}

const QuizForm: React.FC = () => {

  const { register, handleSubmit, formState: { errors } }: any = useForm<User>();

  const {dificulty, setDificulty} = useQuizContext();

  const handleStartQuiz = (data: User) => {
    localStorage.setItem('user', JSON.stringify(data.username));
    Router.push('/dashboard');
  }

  return (
    <Box width='100%' bg={useColorModeValue("gray.50", "inherit")} p={10}>
      <Box>
        <Heading my={10} fontSize='2xl' fontWeight="md" lineHeight="6">
          Random Quiz Generator
        </Heading>

        <form onSubmit={handleSubmit(handleStartQuiz)}>
          <Text
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Enter required information and start the quiz when you are ready
          </Text>
          <Flex>
            <FormControl mb={3} isInvalid={errors.username && errors.username.type === 'required'}>
              <Input
                {...register('username', { required: true })}
                name='username'
                placeholder='username'
                variant='filled'
                type='text'
              />
              <FormErrorMessage>Username is required</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex my={5}>
            <FormControl as="fieldset">
              <FormLabel as="legend">Dificulty</FormLabel>
              <RadioGroup onChange={setDificulty} value={dificulty} defaultValue="Medium">
                <HStack spacing="24px">
                  <Radio value="Easy">Easy</Radio>
                  <Radio value="Medium">Medium</Radio>
                  <Radio value="Hard">Hard</Radio>
                </HStack>
              </RadioGroup>
              <FormHelperText>Select desired dificulty</FormHelperText>
            </FormControl>
          </Flex>
          <Button type='submit'>
            Start Quiz
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default QuizForm;