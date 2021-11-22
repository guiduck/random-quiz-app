import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect } from 'react';
import QuizForm from '../components/QuizForm';
import { useQuizContext } from '../context/QuizContext';

const Home: React.FC = () => {

  const { isVerified } = useQuizContext();

  useEffect(() => {
    if (isVerified) {
      Router.push('/dashboard');
    }
  }, [isVerified]);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <QuizForm />
    </div>
  )
}

export default Home;