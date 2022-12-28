import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    totalPrice: { type: Number, required: true }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;