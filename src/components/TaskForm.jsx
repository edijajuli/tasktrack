import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setstatus] = useState("todo");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleStatusChange = (e) => {
    setstatus(e.target.value);
  };
  console.log(task, status);

  return (
    <header className="app-header">
      <form action="">
        <input
          type="text"
          className="task-input"
          placeholder="Enter your task..."
          // onChange={(e) => handleTaskChange(e)}
          onChange={handleTaskChange}
        />
        <div className="task-form-bottom-line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              name=""
              id=""
              className="task-status"
              onChange={handleStatusChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task-submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
