import React from "react";
import { VscTrash } from "react-icons/vsc";
import { useRouter } from "next/router";
const Task = ({ task, index, deleteTask }) => {
  const { push } = useRouter();

  return (
    <>
      <div
        onClick={() => push(`/edit/${task.id}`)}
        className="bg-gray-700 hover:bg-gray-800 cursor-pointer px-20 py-5 m-2 flex items-center w-100"
      >
        <span className="mr-5 text-5xl">{index + 1}</span>

        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="font-bold">{task.title}</h1>
            <button
              className="bg-red-700 hover:bg-red-800 px-3 py-1 inline-flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
            >
              <VscTrash className="mr-2" />
              Delete
            </button>
          </div>
          <p className="text-gray-300">{task.description}</p>
          <span className="text-gray-400">{task.id}</span>
        </div>
      </div>
    </>
  );
};

export default Task;
