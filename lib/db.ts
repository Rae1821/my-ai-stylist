import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// if we don't have a cached mongoose connection then we are going to set it to an empty object
// initialize cached variable - global mongoose variable
const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  // checking ic cached is already connected
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URL is missing");

  // either connect to already existing cached connection or create a new connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "Evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
