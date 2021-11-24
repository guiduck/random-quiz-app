import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useQuizContext } from '../../context/QuizContext';

const Name: React.FC = () => {

  const { isVerified, user, isLoading } = useQuizContext();

  if (isLoading) {
    return null;
  }

  return (
    <Flex>
      {isVerified && user ? <Heading fontSize='xl'>User name: {user.username}</Heading> : <Heading fontSize='2xl'>Welcome</Heading> }
    </Flex>
  )
}

export default Name;