"use client";

import { debounce } from "@/lib/debounce";
import { useAuth } from "@clerk/nextjs";
import { Editor } from "novel";
import { useEffect, useState } from "react";

type Props = { noteId: string };
const debounceDuration = 750;

const CustomEditor = ({ noteId }: Props) => {
  const [savedStatus, setSavedStatus] = useState(true);
  const [storedTitle, setStoredTitle] = useState("");
  const { userId } = useAuth();
  const titleKey = `${userId}-title-${noteId}`;
  const contentKey = `${userId}-content-${noteId}`;
  const handleTitleChange = (e: any) => {
    window.localStorage.setItem(titleKey, e.target.textContent);
  };
  const updateTitle = debounce(handleTitleChange, debounceDuration);

  useEffect(() => {
    setStoredTitle(window.localStorage.getItem(titleKey) || "");
  }, [titleKey]);

  return (
    <div className="w-full h-[calc(100vh-3.5rem)] overflow-y-scroll">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pr-2">
          <div
            contentEditable={true}
            data-ph="Title"
            className="outline-none w-[calc(100%-6rem)] mx-8 mt-4 px-5 py-3 text-5xl font-semibold border-l-2 border-transparent focus:border-inherit leading-tight"
            onInput={updateTitle}
          >
            {storedTitle}
          </div>
          <div className="w-24 text-center py-1 bg-gray-100 rounded-md">
            {savedStatus ? "Saved" : "Saving..."}
          </div>
        </div>
        <Editor
          className="relative w-full"
          onUpdate={() => setSavedStatus(false)}
          onDebouncedUpdate={() => setSavedStatus(true)}
          storageKey={contentKey}
          debounceDuration={debounceDuration}
          defaultValue={{
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [
                      {
                        type: "italic",
                      },
                    ],
                    text: "Write an amazing story",
                  },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default CustomEditor;
