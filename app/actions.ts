"use server";

export async function fetchClothing(formData: FormData) {
  const searchItem = formData.get("searchItem");

  const headers = {
    "X-RapidAPI-Key": "85109d553dmshaef4cc1a6980b3dp1d833fjsne5ad9b4d1cfa",
    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  };

  // console.log(formData);

  const response = await fetch(
    `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchItem}&page=1&country=US&category_id=aps`,
    {
      headers,
    }
  );
  const result = await response.json();
  console.log(result.data.products);
  return result;
}
