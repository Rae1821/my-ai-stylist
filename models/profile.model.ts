import { Document, Schema, model, models } from "mongoose";

export interface IProfile extends Document {
  _id: string;
  creator: string;
  style?: string;
  shape?: string;
}

const ProfileSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  style: {
    type: String,
    required: false,
  },
  shape: {
    type: String,
    required: false,
  },
});

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;
