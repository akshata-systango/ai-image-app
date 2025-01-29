// routes/postRoutes.js (or in your server.js directly)
import express from "express";
import Post from "../models/Post.js"


const router = express.Router();

// POST route to create a new post
router.post("/create", async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author,
    });

    await newPost.save(); // Save the post to the local MongoDB
    res.status(201).json(newPost); // Return the newly created post
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
});

export default router;
