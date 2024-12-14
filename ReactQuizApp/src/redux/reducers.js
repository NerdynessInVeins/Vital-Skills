import { SET_ANSWERS } from './actions';

const initialState = {
  answers: [],
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
};
