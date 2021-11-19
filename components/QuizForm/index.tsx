import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';

const QuizForm: React.FC = () => {

  const [dificulty, setDificulty] = useState('Medium');

  const handleStart = () => {
    console.log(dificulty);
  }

  return (
    <Box width='100%' bg={useColorModeValue("gray.50", "inherit")} p={10}>
      <Box>
        <Heading my={10} fontSize='2xl' fontWeight="md" lineHeight="6">
          Welcome
        </Heading>
        <Text
          mt={1}
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Enter required information and start the quiz when you are ready
        </Text>
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
        <Button onClick={handleStart}>
          Start Quiz
        </Button>
      </Box>
    </Box>
  )
}

export default QuizForm;