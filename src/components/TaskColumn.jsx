import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon }) => {
  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img src={icon} className="task-column-icon" />
        {title}
      </h2>

      <TaskCard />
    </section>
  );
};

export default TaskColumn;
