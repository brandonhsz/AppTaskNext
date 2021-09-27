import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTask } from "../context/taskContext";
const Header = ({ children }) => {
  const router = useRouter();

  const { tasks } = useTask();

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex items-center bg-gray-800 px-28 py-5">
        <Link href="/">
          <a>
            <h1 className="font-black text-lg">
              Task<span>App</span>
            </h1>
          </a>
        </Link>

        <span className="ml-2 text-gray-400 font-bold">
          {tasks.length} Task
        </span>

        <div className="flex-grow text-right">
          <button
            className="bg-green-600 px-5 py-2 hover:bg-green-700 font-bold rounded inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>

      <main className="px-28">{children}</main>
    </div>
  );
};

export default Header;
