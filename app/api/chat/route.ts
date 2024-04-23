import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { functions, runFunction } from "./functions";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

// This is shown in regards to using functions in Vercel's documentation: https://sdk.vercel.ai/docs/guides/providers/openai-functions
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // extract the messages from the body of the request
  const { messages } = await req.json();

  // Check if the conversation requires a function call to be made
  const initialResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    stream: true,
    functions,
    function_call: "auto",
  });

  const stream = OpenAIStream(initialResponse, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages
    ) => {
      const result = await runFunction(name, args);
      const newMessages = createFunctionCallMessages(result);
      return openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [...messages, ...newMessages],
      });
    },
  });
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
