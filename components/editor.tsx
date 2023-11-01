"use client";

import { Editor } from "novel";

const CustomEditor = () => {
  return (
    <div className="w-full max-w-5xl h-[calc(100vh-56px)] overflow-y-scroll">
      <div
        contentEditable={true}
        data-ph="Title"
        className="outline-none mx-8 mt-4 px-5 py-3 text-5xl font-bold font-[Poppins] border-l-2 border-transparent focus:border-inherit text-black/80"
      >
        {/* {title} */}
      </div>
      <Editor
        className="relative w-full"
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
  );
};

export default CustomEditor;
