// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Replace with your MongoDB Atlas connection string
    const conn = await mongoose.connect(
      "mongodb+srv://schouhan:VoQHoJXdgEjFOjVg@cluster0.5n4r0.mongodb.net/price_push?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;
