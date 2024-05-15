import { ChatRequest, FunctionCallHandler, generateId } from "ai";

export const functionCallHandler: FunctionCallHandler = async (
  chatMessages,
  functionCall
) => {
  if (functionCall.name === "get_current_weather") {
    if (functionCall.arguments) {
      const parsedFunctionCallArguments = JSON.parse(functionCall.arguments);
      // You now have access to the parsed arguments here (assuming the JSON was valid)
      // If JSON is invalid, return an appropriate message to the model so that it may retry
      console.log(parsedFunctionCallArguments);
    }

    // Generate a fake temperature
    const temperature = Math.floor(Math.random() * (100 - 30 + 1) + 30);
    // Generate random weather condition
    const weather = ["sunny", "cloudy", "rainy", "snowy"][
      Math.floor(Math.random() * 4)
    ];

    const functionResponse: ChatRequest = {
      messages: [
        ...chatMessages,
        {
          id: generateId(),
          name: "get_current_weather",
          role: "function" as const,
          content: JSON.stringify({
            temperature,
            weather,
            info: "This data is randomly generared and came from a fake weather API",
          }),
        },
      ],
    };
    return functionResponse;
  }
};

export async function fetchClothing({ searchItem }: { searchItem: string }) {
  // const searchItem = formData.get("searchItem");

  const headers = {
    "X-RapidAPI-Key": "85109d553dmshaef4cc1a6980b3dp1d833fjsne5ad9b4d1cfa",
    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchItem}&page=1&country=US&category_id=aps`,
      {
        method: "GET",
        headers,
      }
    );

    const res = await response.json();
    const result = res.data.products;

    return result;
  } catch (error) {
    console.log(error);
  }
}
