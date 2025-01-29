import express from "express";
import cron from "node-cron";
import cors from "cors";
import connectDB from "./pricePushDB.js"; // Import connectDB to connect to MongoDB
import Post from "./models/Post.js"; // Import the Post model

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in middleware to parse JSON

// POST request returns product details.
app.post("/product", (req, res) => {
  // Log the product details received in the POST body
  console.log(req.body);

  // Optionally, save the request data to the database if needed
  const newPost = new Post({
    hour: req.body.hour || "Unknown", // You could add more fields as needed
  });

  newPost
    .save()
    .then((savedPost) => {
      res.status(201).json(savedPost); // Respond with the saved post
    })
    .catch((error) => {
      console.error("Error saving post:", error);
      res.status(500).json({ message: "Error saving post", error });
    });
});

// Cron job that runs every minute and saves to MongoDB
cron.schedule("* * * * *", async () => {
  console.log("Running task every minute");

  // Example of saving a post to MongoDB every minute
  const newPost = new Post({
    hour: new Date().toISOString(),
  });

  try {
    const savedPost = await newPost.save(); // Save to the remote MongoDB Atlas
    console.log("Saved new post:", savedPost);
  } catch (error) {
    console.error("Error saving post in cron job:", error);
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

