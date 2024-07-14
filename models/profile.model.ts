import { Document, Schema, model, models } from "mongoose";

export interface IProfile extends Document {
  _id: string;
  bodyShape?: string;
  fashionStyle?: string;

  // product: {
  //   userId: string;
  //   product_title: string;
  //   product_price: number;
  //   product_original_price: number;
  //   product_star_rating: number;
  //   product_num_ratings: number;
  //   product_url: string;
  //   product_photo: string;
  // };
}

const ProfileSchema = new Schema({
  bodyShape: {
    type: String,
    required: false,
  },
  fashionStyle: {
    type: String,
    required: false,
  },
  // product: { type: Schema.Types.ObjectId, ref: "Product" },
});

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;
