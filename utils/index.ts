// export async function fetchClothing() {
//   const headers = {
//     "X-RapidAPI-Key": "e8e61d9638mshf2c592bf697514fp18b971jsn02e0d86ad08e",
//     "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
//   };

import { ChatRequest, FunctionCallHandler, generateId } from "ai";

//   const response = await fetch(
//     "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&category_id=aps",
//     {
//       headers,
//     }
//   );
//   const result = await response.json();

//   return result;
// }

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
