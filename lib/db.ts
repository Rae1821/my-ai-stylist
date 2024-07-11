// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
// import { MongoClient, ServerApiVersion } from "mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

// const uri = process.env.MONGODB_URI;
// const options = {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// };

// let client;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
// In development mode, use a global variable so that the value
// is preserved across module reloads caused by HMR (Hot Module Replacement).
// const globalWithMongo = global as typeof globalThis & {
//   _mongoClientPromise?: Promise<MongoClient>;
// };

// if (!globalWithMongo._mongoClientPromise) {
//   client = new MongoClient(uri, options);
//   globalWithMongo._mongoClientPromise = client.connect();
// }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
// export default clientPromise;

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if we don't have a cached mongoose connection then we are going to set it to an empty object
// initialize cached variable - global mongoose variable

// const cached = (global as any).mongoose || { conn: null, promise: null };

// const connectToDB = async () => {
//   console.log(MONGODB_URI);

// checking if cached is already connected
// if (cached.conn) return cached.conn;

// if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

// either connect to already existing cached connection or create a new connection
// cached.promise =
//   cached.promise ||
//   mongoose.connect(MONGODB_URI, {
//     bufferCommands: false,
//   });

//   cached.conn = await cached.promise;

//   return cached.conn;
// };

// module.exports = {
//   connectToDB,
// };
