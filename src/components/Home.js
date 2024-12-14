import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.modules.css';

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/prompt');
  };

  return (
    <div className={styles.container}>
      <h2>Welcome to the Quiz App</h2>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default Home;
