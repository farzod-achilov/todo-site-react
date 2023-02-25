import React from "react";
import Todos from "../todo/Todos";
import "./AddInput.scss";

export default function AddInput({ className = "AddInput__" }) {
  return (
    <>
      <form>
        <div className={`${className + "wrapper"}`}>
          <input
            className={`${className + "input"}`}
            type="text"
            placeholder="Add a new task"
          />
          <button className={`${className + "btn"}`} type="submit">
            Add
          </button>
        </div>
        <Todos />
        <Todos isDone="true" text="Salom" time="15:53" />
      </form>
    </>
  );
}
