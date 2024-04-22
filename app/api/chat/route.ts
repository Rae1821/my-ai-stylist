import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import type { ChatCompletionCreateParams } from "openai/resources/index.mjs";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

// This is shown in regards to using functions in Vercel's documentation: https://sdk.vercel.ai/docs/guides/providers/openai-functions
export const dynamic = "force-dynamic";

// Function definition - you have to provide the model with a functions object so it knows what it can do
const functions: ChatCompletionCreateParams.Function[] = [
  {
    name: "get_clothing_recommendations",
    description: "Get clothing recommendations for users body shape",
    parameters: {
      type: "object",
      properties: {
        clothing: {
          type: "string",
          description: "Clothing the user wants recomendations for",
        },
      },
      required: ["clothing"],
    },
  },
];

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
    functions,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages
    ) => {
      // If you skip the function call and return nothing, the 'function_call' message will be sent to the client for it to handle
      if (name === "get_clothing_recommendations") {
        // Call clothing API here
        const clothinData = {
          temperature: 20,
        };

        // createFunctionCallMessages constructs the relevant 'assistant' and 'functional' messages for you

      const newMessages - createFunctionCallMessages(clothingData);
      return openai.chat.completions.create({
        messages: [...messages, ...newMessages],
        stream: true,
        model: 'gpt-3.5-turbo',
        functions,
      });
      }
    },
  });
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
