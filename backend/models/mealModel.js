import mongoose from "mongoose";

const { Schema } = mongoose;

const mealSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 5 },
    description: { type: String, required: true}
}, { timestamps: true });

const Meal = mongoose.model("Meal", mealSchema);
export default Meal;