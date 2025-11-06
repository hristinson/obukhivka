import mongoose from "mongoose";
import { Product } from "../models/index.js";
import dotenv from "dotenv";
dotenv.config();

const connectToDatabase = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("Error MONGODB_URI!");
  }

  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI);
};

export const handler = async (event) => {
  try {
    await connectToDatabase();

    const { searchByIncoming } = event.queryStringParameters || {};

    let products;
    if (searchByIncoming) {
      products = await Product.find({ incoming: searchByIncoming });
    } else {
      products = await Product.find();
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Products fetched successfully",
        products: products,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || "Failed to fetch products",
      }),
    };
  }
};
