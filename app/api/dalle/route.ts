import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "") {
    return new Response("", {
      status: 400,
    });
  }

  try {
    let { prompt } = await req.json();
    const responce = await openai.images.generate({
      prompt,
      n: 1,
      size: "256x256",
    });
    return new Response(
      JSON.stringify({ imageUrl: responce?.data?.[0].url || "" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response("", {
      status: 400,
    });
  }
}
