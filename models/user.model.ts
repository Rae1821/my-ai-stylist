import { Timestamp } from "mongodb";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  id: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String, required: true },
  emailVerified: { type: Timestamp, required: true },
  hasPaid: { type: Boolean },
});

const User = models.User || model("User", UserSchema);

export default User;
