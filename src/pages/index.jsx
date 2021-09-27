import { useTask } from "../context/taskContext";
import React from "react";
import Tasks from "../components/Tasks";

const Home = () => {
  const { tasks } = useTask();

  return (
    <div className="mt-10 flex justify-center">
      {tasks.length === 0 ? (
        <h2 className="bg-gradient-to-r from-red-900 to-red-700 p-3 rounded font-bold text-xl">
          There are no Task
        </h2>
      ) : (
        <Tasks />
      )}
    </div>
  );
};

export default Home;
