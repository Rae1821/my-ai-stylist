import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClothingProps } from "@/types";
import Image from "next/image";
// import { fetchClothing } from "@/utils";

interface ClothingCardProps {
  clothing: ClothingProps;
}

const ClothingCard = ({ clothing }: ClothingCardProps) => {
  const {
    product_title,
    product_price,
    product_original_price,
    currency,
    product_star_rating,
    product_num_rating,
    product_url,
    product_photo,
  } = clothing;

  return (
    <div>
      <h1>Clothing Data</h1>
      <div>
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>{product_title}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Image
                src={product_photo}
                alt="product photo"
                width={300}
                height={300}
              />
            </div>
            <p>
              <span>{currency}</span>
              {product_price} <span>{clothingOriginalPrice}</span>
            </p>
            <p>Product Description</p>
          </CardContent>
          <CardFooter>
            <p>
              {clothingRating} <span>{clothingNumRatings}</span>
            </p>
            <p>{clothingUrl}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ClothingCard;

// asin:"B010RWDJOY"
// product_title:"Nike Performance Cushion Crew Socks with Band (6 Pairs)"
// product_price:"$25.00"
// unit_price:"$4.17"
// unit_count:6
// product_original_price:"$29.90"
// currency:"USD"
// product_star_rating:"4.6"
// product_num_ratings:15788
// product_url:"https://www.amazon.com/dp/B010RWDJOY"
// product_photo:"https://m.media-amazon.com/images/I/81XwDw-bXpL._AC_SR525,789_FMwebp_QL65_.jpg"
// product_num_offers:null
// product_minimum_offer_price:"$25.00"
// is_best_seller:false
// is_amazon_choice:false
// is_prime:true
// climate_pledge_friendly:false
// sales_volume:"10K+ bought in past month"
// delivery:"FREE delivery Mon, Feb 5 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1"
