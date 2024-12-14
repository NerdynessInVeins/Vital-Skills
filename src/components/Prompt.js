import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Prompt.module.css';

function Prompt() {
  const navigate = useNavigate();

  const beginQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className={styles.container}>
      <h2>Are you ready for the quiz?</h2>
      <button onClick={beginQuiz}>Begin Quiz</button>
    </div>
  );
}

export default Prompt;
