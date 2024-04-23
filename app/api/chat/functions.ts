import { ChatCompletionCreateParams } from "openai/resources/chat/index";

export const functions: ChatCompletionCreateParams[] = [
  {
    name: "get_clothing_recommendations",
    description:
      "Get recommendations for clothing based on the users body shape and preferences.",
    parameters: {
      type: "object",
      properties: {
        limit: {
          type: "number",
          description:
            "The number of recommendations to return. Default is 10.",
        },
      },
      required: [],
    },
  },
];

async function get_amazon_recommendations(limit: number = 10) {
  const response = await fetch("api-url-goes-here");
  const ids = await response.json();
  const amazonClothes = await Promise.all(
    ids.slice(0, limit).map((id: number) => get_amazon_recommendations(id))
  );
  return amazonClothes;
}

async function get_shein_recommendations(limit: number = 10) {
  const response = await fetch("api-url-goes-here");
  const ids = await response.json();
  const sheinClothes = await Promise.all(
    ids.slice(0, limit).map((id: number) => get_shein_recommendations(id))
  );
  return sheinClothes;
}

export async function runFunction(name: string) {
  switch (name) {
    case "get_amazon_recommendations":
      return await get_amazon_recommendations();
    case "get_shein_recommendations":
      return await get_shein_recommendations();
    default:
      return null;
  }
}
