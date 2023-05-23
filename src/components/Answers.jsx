import { useContext, useState } from "react";
import QuizContext from "../context/QuizContext";

export default function Answer() {
  const context = useContext(QuizContext);

  const [ans, setAns] = useState("");

  const answers = [
    context.quizQuestion.data[context.quizQuestion.currentIndex].correct,
    ...context.quizQuestion.data[context.quizQuestion.currentIndex].incorrect,
  ];

  function handleClick(event) {
    setAns(event.target.value);
  }

  return (
    <div>
      <ul className="answer--main">
        {answers.map((answer, index) => (
          <li key={index}>
            <input
              type="radio"
              className="answers"
              value={answer}
              checked={ans === answer}
              onChange={() => setAns(answer)}
            />
            <label className="answer--title">{answer}</label>
          </li>
        ))}
      </ul>
      <button
        className="next--button"
        onClick={() => context.dispatch({ type: "SELECT_ANSWER", answer: ans })}
      >
        Next Question
      </button>
    </div>
  );
}
