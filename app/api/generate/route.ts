// Server 1
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "") {
    return new Response(
      "Missing OPENAI_API_KEY – make sure to add it to your .env file.",
      {
        status: 400,
      }
    );
  }

  try {
    let { prompt } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI writing assistant that continues existing text based on context from prior text. " +
            "Give more weight/priority to the later characters than the beginning ones. " +
            "Limit your response to no more than 500 characters, but make sure to construct complete sentences.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      n: 1,
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch {
    return new Response(
      "There's some error occured while generating api responce"
    );
  }
}

// Server 2
/*
import { StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(): Promise<Response> {
  const serverUri = process.env.GO_SERVER_URI;

  if (!serverUri || serverUri === "") {
    return new Response(
      "Missing SERVER_URI – make sure to add it to your .env file.",
      {
        status: 400,
      }
    );
  }

  try {
    const response = await fetch(serverUri);
    const text = await response.text();
    const words = text.split(" ");

    const generateWords = async function* () {
      for (const word of words) {
        yield word + " ";
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };

    const readableStream = new ReadableStream({
      async start(controller) {
        const iterator = generateWords()[Symbol.asyncIterator]();

        while (true) {
          const { done, value } = await iterator.next();

          if (done) {
            controller.close();
            break;
          }

          controller.enqueue(value);
        }
      },
    });

    return new StreamingTextResponse(readableStream);
  } catch {
    return new Response(
      "There's some error occured while generating api responce"
    );
  }
}
*/
