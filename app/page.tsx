// import Chatbot from "@/components/shared/Chatbot";

// import AllClothing from "@/components/shared/AllClothing";
import Header from "@/components/shared/Header";
// import SearchBar from "@/components/shared/SearchBar";
import { Link } from "lucide-react";

export default async function Home() {
  return (
    <main className="min-h-screen bg-pink-50 px-2">
      <Header />
      {/* <Chatbot /> */}
      {/* <ClothingData /> */}
      <div className="mx-auto">
        <Link href="/recommendations" className="text-2xl text-black">
          Recommendations
        </Link>
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
