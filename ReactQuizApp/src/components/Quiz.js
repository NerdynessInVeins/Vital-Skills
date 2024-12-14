import React, { useState, useEffect } from 'react';
import { questions } from '../questions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAnswers } from '../redux/actions';
import styles from '../styles/Quiz.module.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleAnswerClick(null);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(5);
  }, [currentQuestion]);

  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      dispatch(setAnswers(updatedAnswers));
      localStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
      navigate('/result');
    }
  };

  return (
    <div className={styles.container}>
      <h3>{questions[currentQuestion].question}</h3>
      <div className={styles.timer}>Time Left: {timeLeft}s</div>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
