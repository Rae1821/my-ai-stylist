// import Chatbot from "@/components/shared/Chatbot";
// import ClothingData from "@/components/shared/ClothingCard";
import Header from "@/components/shared/Header";
import { SearchClothing } from "@/components/shared/SearchClothing";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Header />
      {/* <Chatbot /> */}
      {/* <ClothingData /> */}
      <SearchClothing />
    </main>
  );
}
