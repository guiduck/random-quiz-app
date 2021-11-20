import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Name: React.FC = () => {

  const { user, isVerified } = useQuizContext();

  return (
    <Flex>
      {isVerified ? <Flex>User name: {user.username}</Flex> : <Heading fontSize='xl'>Welcome</Heading> }
    </Flex>
  )
}

export default Name;