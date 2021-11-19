import { Flex } from '@chakra-ui/react';
import React from 'react';
import Quiz from '../../components/Quiz';

const dashboard: React.FC = () => {

  return (
    <Flex>
      <Quiz />
    </Flex>
  );
}

export default dashboard;