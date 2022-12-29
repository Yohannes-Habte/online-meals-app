import User from "../models/userModel.js";
import createError from "http-errors";
import bcrypt from "bcryptjs";

export const loginPost = async (req, res, next) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email: email});
        if (!user) return next(createError(404, "Invalid email"));

        // Check password by comparing the user's password from frontend and backend respectively
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return next(createError(400, "Invalid Password"));

        // If the email and password are correct, then the "res" will be the "user"
        return res.status(201).json(user)

    }catch(err){
        console.log(err);
        return next(createError(500, "Database could't query! please try again!"))
    }
}