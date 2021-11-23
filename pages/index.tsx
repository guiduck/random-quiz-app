import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect } from 'react';
import QuizForm from '../components/QuizForm';
import { useQuizContext } from '../context/QuizContext';

const Home: React.FC = () => {

  const { isVerified, user } = useQuizContext();

  useEffect(() => {
    if (isVerified) {
      Router.push('/dashboard');
    } else if (user) {
      Router.reload();
    }
  }, [isVerified]);

  return (
    <Flex>
      <Head>
        <title>Home</title>
      </Head>
      <QuizForm />
    </Flex>
  )
}

export default Home;