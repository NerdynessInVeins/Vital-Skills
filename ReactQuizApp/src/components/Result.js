import React from 'react';
import { useSelector } from 'react-redux';
import { questions } from '../questions';
import styles from '../styles/Result.module.css';

function Result() {
  const answers = useSelector((state) => state.answers);

  const correctAnswers = answers.filter((answer, index) =>
    answer === questions[index].answer
  );

  return (
    <div className={styles.container}>
      <h2>Your Results</h2>
      <p>
        You answered {correctAnswers.length} out of {questions.length} questions
        correctly.
      </p>
    </div>
  );
}

export default Result;
