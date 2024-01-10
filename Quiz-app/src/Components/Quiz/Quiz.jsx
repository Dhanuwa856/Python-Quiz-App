import React, { useRef, useState } from "react";
import "./Quiz.css";
import Data from "../Assets/data";
import data from "../Assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Data[index]);
  let [lock, setLock] = useState(false);
  let [result, setResult] = useState(false);
  let [score, setScore] = useState(0);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAnswer = (e, ans) => {
    if (lock == false) {
      if (question.ans == ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prve) => prve + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock == true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };
  const percentage = Math.floor((score / data.length) * 100);

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Python Quiz</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                checkAnswer(e, 1);
              }}
            >
              1. {question.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAnswer(e, 2);
              }}
            >
              2. {question.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAnswer(e, 3);
              }}
            >
              3. {question.option3}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                checkAnswer(e, 4);
              }}
            >
              4. {question.option4}
            </li>
          </ul>
          <button onClick={next}>
            NEXT <i class="fa-solid fa-arrow-right-long"></i>
          </button>
          <div className="index">
            {index + 1} 0f {data.length} Questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored <span className="red-color">{score}</span> out of{" "}
            <span className="blue-color"> {data.length}</span>
          </h2>
          <h4>Your Marks Percentage:{percentage}%</h4>
          <button onClick={reset}>RESET</button>
        </>
      ) : (
        <></>
      )}

      <div className="copy-text">
        Created by{" "}
        <a href="https://www.fiverr.com/s/xaN7Gl" target="_blank">
          Dhanushka Rathnayaka
        </a>
      </div>
    </div>
  );
};

export default Quiz;
