"use client";

import { randomId } from "@/lib/randomId";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type noteBook = { id: string; title: string };

const Sidenav = () => {
  const [noteBooks, setNoteBooks] = useState<noteBook[]>([]);
  const router = useRouter();
  const { userId } = useAuth();
  const pathname = usePathname();

  const handleNewNote = () => {
    const id = randomId(8);
    setNoteBooks((prev) => [{ id, title: "Untitled" }, ...prev]);
    window.localStorage.setItem(
      `${userId}-content-${id}`,
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"italic"}],"text":"Write an amazing story"}]}]}'
    );
    window.localStorage.setItem(`${userId}-title-${id}`, "");
    router.push(`/notes/${id}`);
  };
  const storageKeyPrefix = `${userId}-content-`;

  useEffect(() => {
    const arr: noteBook[] = [];
    for (var x of Object.keys(window.localStorage)) {
      if (x.startsWith(storageKeyPrefix)) {
        const id = x.substring(storageKeyPrefix.length);
        arr.push({
          id,
          title:
            window.localStorage.getItem(`${userId}-title-${id}`) || "Untitled",
        });
      }
    }
    setNoteBooks(arr.reverse());
  }, []);

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
        {noteBooks.map(({ id, title }: noteBook, i: number) => (
          <div className="flex justify-between w-full items-center">
            <Link
              href={`/notes/${id}`}
              className="flex-1 p-2 rounded-md duration-150 hover:bg-slate-100"
            >
              <h3 className="line-clamp-1 text-ellipsis">{title}</h3>
            </Link>
            <button
              className="px-3 h-full rounded-md duration-150 hover:bg-slate-100"
              onClick={() => {
                window.localStorage.removeItem(`${userId}-content-${id}`);
                window.localStorage.removeItem(`${userId}-title-${id}`);
                setNoteBooks((prev) => [
                  ...prev.slice(0, i),
                  ...prev.slice(i + 1),
                ]);
                if (pathname.startsWith("/notes")) {
                  const cur = pathname.slice(7);
                  console.log(cur)
                  if (cur === id) router.push("/dashboard");
                }
              }}
            >
              ␡
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidenav;
