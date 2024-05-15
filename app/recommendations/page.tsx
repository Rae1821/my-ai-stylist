"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/shared/SearchBar";
import ClothingCard from "@/components/shared/ClothingCard";
// import { fetchClothing } from "@/utils";
import { useSession } from 'next-auth/react'

const RecommendationsPage = () => {
  const [allClothingProducts, setAllClothingProducts] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await fetch(`/api/clothing/products`);
      const data = await response.json();
      setAllClothingProducts(data);
    };
    fetchResult();
  }, []);

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        {allClothingProducts.map((product) => (
          <ClothingCard key={product} clothing={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
