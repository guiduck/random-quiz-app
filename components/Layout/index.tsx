import React from 'react';
import { Flex } from '@chakra-ui/react';
import Name from '../Name';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex w='full' height='100vh' justifyContent='center' direction='column' alignItems='center'>
      <Flex justifyContent='space-around'>
        <Flex mt={-100}>
          <Name />
        </Flex>
        <Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;