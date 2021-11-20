import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { QuizProvider } from '../context/QuizContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <QuizProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QuizProvider>
    </ChakraProvider>
  );
}

export default MyApp