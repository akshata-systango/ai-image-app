import mongoose from "mongoose";

const pricePushSchema = new mongoose.Schema({
  hour: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PricePush = mongoose.model("PricePush", pricePushSchema, "price_push");

export default PricePush;
