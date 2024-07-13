// import Chatbot from "@/components/shared/Chatbot";

// import AllClothing from "@/components/shared/AllClothing";

import Hero from "@/components/shared/Hero";
import Quiz from "./(dashboard)/components/Quiz";
import Calculator from "./(dashboard)/components/Calculator";
// import SearchBar from "@/components/shared/SearchBar";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="relative">
        <Quiz />
      </div>

      <Calculator />

      {/* <Chatbot /> */}
      {/* <ClothingData /> */}
      <div className="mx-auto"></div>

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
