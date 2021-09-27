import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTask } from "../context/taskContext";
const TaskForm = () => {
  const { push, query } = useRouter();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const { createTask, updateTask, tasks } = useTask();

  const handledChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.id) {
      createTask(task.title, task.description);
    } else {
      updateTask(query.id, task);
    }

    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10 h-2/4 mt-10" onSubmit={handleSubmit}>
        <h2 className="text-3xl mb-7">
          {query.id ? "Update a Task" : "Add a Task"}
        </h2>

        <input
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          type="text"
          placeholder="Write A Title"
          name="title"
          value={task.title}
          onChange={handledChange}
        />

        <textarea
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          rows="2"
          placeholder="Write A Description"
          name="description"
          value={task.description}
          onChange={handledChange}
        ></textarea>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={!task.title}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
