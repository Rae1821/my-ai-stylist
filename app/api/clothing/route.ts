import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchItem = searchParams.get("searchItem");

  try {
    const res = await fetch(
      `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchItem}&page=1&country=US&category_id=aps`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "85109d553dmshaef4cc1a6980b3dp1d833fjsne5ad9b4d1cfa",
          "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
        },
      }
    );
    const product = await res.json();
    console.log(product);
    return Response.json({ product });
  } catch (error) {
    console.log(error);
  }
}
//   const headers = {
//     "X-RapidAPI-Key": "85109d553dmshaef4cc1a6980b3dp1d833fjsne5ad9b4d1cfa",
//     // "X-RapidAPR-Key": process.env.X_RapidAPI_KEY,
//     "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
//   };

//   try {
//     const response = await fetch();

//     const res = await response.json();
//     const result = res.data.products;

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }
