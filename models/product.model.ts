import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  userId: string;
  product_title: string;
  product_price: number;
  product_original_price: number;
  product_star_rating: number;
  product_num_ratings: number;
  product_url: string;
  product_photo: string;
}

const ProductSchema = new Schema({
  userId: { type: String, required: true },
  product_title: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_original_price: { type: Number, required: true },
  product_star_rating: { type: Number, required: true },
  product_num_ratings: { type: Number, required: true },
  product_url: { type: String, required: true },
  product_photo: { type: String, required: true },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
