// import Chatbot from "@/components/shared/Chatbot";

// import AllClothing from "@/components/shared/AllClothing";
// import Calculator from "@/components/shared/Calculator";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Quiz from "@/components/shared/Quiz";
// import SearchBar from "@/components/shared/SearchBar";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      <Quiz />

      {/* <Calculator /> */}

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
