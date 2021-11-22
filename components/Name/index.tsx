import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Name: React.FC = () => {

  const { user } = useQuizContext();

  return (
    <Flex>
      {user ? <Flex>User name: {user.username}</Flex> : <Heading fontSize='xl'>Welcome</Heading> }
    </Flex>
  )
}

export default Name;