import React from "react";
import { useTask } from "../context/taskContext";
import Task from "../components/Task";
const Tasks = () => {
  const { tasks, deleteTask } = useTask();

  return (
    <div className="w-7/12">
      {tasks.map((task, i) => (
        <Task key={task.id} task={task} index={i} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;
