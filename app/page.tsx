import Chatbot from "@/components/shared/Chatbot";
import ClothingData from "@/components/shared/ClothingData";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Header />
      <Chatbot />
      <ClothingData />
    </main>
  );
}
