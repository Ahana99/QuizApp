import { useContext } from "react";
import QuizContext from "../context/QuizContext";

export default function Question() {
  const context = useContext(QuizContext);
  const questionData =
    context.quizQuestion.data[context.quizQuestion.currentIndex];
  return (
    <div>
      <h3 className="header">
        Question {context.quizQuestion.currentIndex + 1} /{" "}
        {context.quizQuestion.data.length}
      </h3>
      <div className="question">{questionData.question}</div>
    </div>
  );
}
