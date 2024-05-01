// import Chatbot from "@/components/shared/Chatbot";
// import ClothingData from "@/components/shared/ClothingCard";
// import ClothingCard from "@/components/shared/ClothingCard";
import Header from "@/components/shared/Header";
import SearchBar from "@/components/shared/SearchBar";
import { fetchClothing } from "./actions";
// import { fetchClothing } from "@/utils";

export default async function Home() {
  const allClothing = await fetchClothing();

  // const isDataEmpty =
  //   !Array.isArray(allClothing) || allClothing.length < 1 || !allClothing; // if any of these is true that means our data is empty

  return (
    <main className="min-h-screen bg-pink-50 px-2">
      <Header />
      {/* <Chatbot /> */}
      {/* <ClothingData /> */}

      <div className="mx-auto mt-12 w-[300px]">
        <SearchBar />
      </div>

      {/* {!isDataEmpty ? (
        <section>
          <div>
            {allClothing?.map((clothing, index) => (
              <ClothingCard key={index} clothing={clothing} />
            ))}
          </div>
        </section>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-black">Oops, no results</h2>
          <p>{allClothing?.message}</p>
        </div>
      )} */}
    </main>
  );
}
