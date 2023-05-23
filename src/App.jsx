import Answer from "./components/Answers";
import Question from "./components/Question";

import QuizContext from "./context/QuizContext";
import data from "./data";
import { useReducer } from "react";

const initialState = {
  data,
  currentIndex: 0,
  score: 0
};

function quizQuestionReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "RESTART":
      return initialState;
    case "SELECT_ANSWER":
      const checkAnswer =
        action.answer === state.data[state.currentIndex].correct
          ? state.score + 1
          : state.score;
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        score: checkAnswer,
      };
  }
}

export default function App() {
  const [quizQuestion, dispatch] = useReducer(
    quizQuestionReducer,
    initialState
  );

  const showScore = quizQuestion.currentIndex === data.length;

  return (
    <div className="main">
      <h1 className="header">Quiz App</h1>
      {showScore && (
        <div>
          <div className="score">Score: {quizQuestion.score}</div>
          <button
            className="next--button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </button>
        </div>
      )}
      {!showScore && (
        <QuizContext.Provider value={{ quizQuestion, dispatch }}>
          <Question />
          <Answer />
        </QuizContext.Provider>
      )}
    </div>
  );
}
