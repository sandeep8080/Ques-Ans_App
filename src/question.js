import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./App.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <div className="article-container">
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)} className="button">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
