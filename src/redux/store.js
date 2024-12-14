import { createStore } from 'redux';
import { quizReducer } from './reducers';

export const store = createStore(quizReducer);
