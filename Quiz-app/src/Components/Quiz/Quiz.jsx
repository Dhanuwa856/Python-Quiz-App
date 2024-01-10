import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Python Quiz</h1>
      <hr />
      <h2>1. Who developed Python Programming Language?</h2>
      <ul>
        <li>1. Wick van Rossum</li>
        <li>2. Rasmus Lerdorf</li>
        <li>3. Guido van Rossum</li>
        <li>4. Niene Stom</li>
      </ul>
      <button>
        NEXT <i class="fa-solid fa-arrow-right-long"></i>
      </button>
      <div className="index">1 0f 20 Questions</div>
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
