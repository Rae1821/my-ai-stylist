// ====== USER PARAMS
export type CreateUserParams = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  bodyShape: string;
  fashionStyle: string;
  path: string;
};

export type UpdateUserParams = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  bodyShape: string;
  fashionStyle: string;
  path: string;
};
export type DeleteUserParams = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  bodyShape: string;
  fashionStyle: string;
  path: string;
};

// ====== PROFILE PARAMS

export type CreateProfileParams = {
  userId: string;
  bodyShape: string;
  fashionStyle: string;
  // favoriteProducts: Array<string>;
  path: string;
};

export type UpdateProfileParams = {
  userId: string;
  bodyShape: string;
  fashionStyle: string;
  // favoriteProducts: Array<string>;
  path: string;
};

export type DeleteProfileParams = {
  userId: string;
  bodyShape: string;
  fashionStyle: string;
  // favoriteProducts: Array<string>;

  path: string;
};

export interface SearchShapeProps {
  shape: string;
  setShape: (shape: string) => void;
}

export interface ClothingProps {
  product_title: string;
  product_price: number;
  product_original_price: number;
  currency: string;
  product_star_rating: number;
  product_num_ratings: number;
  product_url: string;
  product_photo: string;
}

export interface SearchProps {
  searchItem: string;
}

export interface HomeProps {
  searchParams: SearchProps;
}

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
