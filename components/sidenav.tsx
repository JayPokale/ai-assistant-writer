"use client";

import { randomId } from "@/lib/randomId";
import { useRouter } from "next/navigation";

const Sidenav = () => {
  const router = useRouter();
  const handleNewNote = () => {
    const id = randomId(8);
    router.push(`/notes/${id}`);
  };

  return (
    <aside className="w-60 h-screen border-r p-1.5 flex flex-col">
      <div className="flex gap-2 items-center">
        <button
          onClick={handleNewNote}
          className="hover:bg-slate-100 w-full py-2 rounded-md border-2 border-slate-300 hover:border-slate-200 duration-150"
        >
          New Notebook
        </button>
      </div>
      <div className="flex-1 flex flex-col my-2">
        <div className="p-2 rounded-md duration-150 hover:bg-slate-100">
          Hello
        </div>
        <div className="p-2 rounded-md duration-150 bg-transparent hover:bg-slate-100">
          Hello
        </div>
      </div>
    </aside>
  );
};

export default Sidenav;
