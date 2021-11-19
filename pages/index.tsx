import Head from 'next/head';
import React from 'react';
import QuizForm from '../components/QuizForm';

const Home: React.FC = () => {
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