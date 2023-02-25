import React from "react";
import "./Todos.scss";

export default function Todos({
  className = "todos__",
  isDone = false,
  text = "radio",
  time = "12:00",
}) {
  return (
    <>
      <div className={`${className + "wrapper"}`}>
        <input
          className={`${className + "input"}`}
          type="checkbox"
          id={isDone}
        />
        <h2 className={`${className + "h2"}`}>{text}</h2>
        <p className={`${className + "p"}`}>{time}</p>
      </div>
    </>
  );
}
