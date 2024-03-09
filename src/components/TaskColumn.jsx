/* eslint-disable react/prop-types */
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img src={icon} className="task-column-icon" />
        {title}
      </h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
