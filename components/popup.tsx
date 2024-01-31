import React, { FC, useState } from "react";

interface GenerateImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const GenerateImagePopup: FC<GenerateImagePopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [prompt, setPrompt] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setGeneratedImage("");
    try {
      const response = await fetch("/api/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (response.ok) {
        const { imageUrl } = await response.json();
        setGeneratedImage(imageUrl);
      } else {
        console.error("Image generation failed");
      }
    } catch (error) {
      console.error("Error during image generation", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-8 rounded shadow-md relative">
        <button
          className="absolute top-1 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image Generation Section */}
        <div className="mt-4">
          <label
            htmlFor="prompt"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Prompt:
          </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleGenerateImage}
          >
            Generate Image
          </button>

          {/* Display the generated image */}
          {generatedImage && (
            <div className="mt-4">
              <p>Generated Image:</p>
              <img
                src={generatedImage}
                alt="Generated Image"
                className="mt-2 max-w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateImagePopup;
