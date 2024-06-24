// "use client";

// import ClothingCard from "./ClothingCard";
// import { useEffect, useState } from "react";
// import SearchBar from "./SearchBar";
// // import { ClothingProps } from "@/types";
// // import { useSession } from "auth";

// // const AllClothing = ({ formData }: { formData: FormData })

// const AllClothing = () => {
//   // const { data: session } = useSession();

//   const [allClothingProducts, setAllClothingProducts] = useState([]);

//   // fetch products and save to allclothingproducts
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `/api/clothing/${session?.user.id}/products`
//       );
//       const data = await response.json();
//       setAllClothingProducts(data);
//     };
//     if (session?.user.id) fetchData();
//   }, [session?.user.id]);

//   return (
//     <div>
//       <div>
//         <SearchBar />
//       </div>
//       <div>
//         {allClothingProducts.map((product, index) => (
//           <ClothingCard key={index} clothing={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllClothing;
