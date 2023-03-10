import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    telephone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    streetName: { type: String, required: true },
    houseNumber: { type: Number, required: true },
    zipCode: { type: Number, required: true },
    cityName: { type: String, required: true },
    stateName: { type: String, required: true },
    countryName: { type: String, required: true },
    orders: [{ type: mongoose.Types.ObjectId, ref: "Order" }]
}, { timestamps: true });

userSchema.pre("save", async function(next) {
    try {
        if (!this.isModified("password")) return next();
        const hashedPassword = await bcrypt.hash(this.password, 12);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
}); 

const User = mongoose.model("User", userSchema);
export default User;