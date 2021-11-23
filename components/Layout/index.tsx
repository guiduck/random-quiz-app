import React from 'react';
import { Button, Flex, IconButton, Spinner, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Name from '../Name';
import { useQuizContext } from '../../context/QuizContext';

const Layout: React.FC = ({ children }) => {

  const { isLoading } = useQuizContext();
  const { toggleColorMode } = useColorMode();

  return (
    <Flex w='full' direction='column' height='100vh' justifyContent='center' alignItems='center'>
      <Flex mb={100}>
        <Name />
      </Flex>
      <Flex>
        <Flex ml={20} mt={10}>
          <IconButton
            bg={useColorModeValue('gray.200', 'gray.700')}
            p={2}
            aria-label="theme"
            fontSize="20px"
            icon={<><SunIcon/><MoonIcon/></>}
            onClick={toggleColorMode}
          />
        </Flex>
        <Flex ml={-20}>
          {isLoading ? <Spinner size="xl" /> : children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;