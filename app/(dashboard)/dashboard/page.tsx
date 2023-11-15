"use client";

import { randomId } from "@/lib/randomId";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const handleNewNote = () => {
    const id = randomId(8);
    router.push(`/notes/${id}`);
  };

  return (
    <main className="flex-1 flex flex-col gap-4 justify-center items-center">
      <h2 className="max-w-lg font-semibold text-3xl text-center text-slate-700">
        Create New Notebook
      </h2>
      <p className="text-xl font-bold text-gray-400">or</p>
      <h2 className="max-w-lg font-semibold text-3xl text-center text-slate-700">
        View left menu to work on previous notebooks
      </h2>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleNewNote}
          className="bg-black hover:bg-transparent text-white hover:text-black duration-200 border-2 border-transparent hover:border-black px-4 py-2 rounded-lg"
        >
          New Notebook
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
