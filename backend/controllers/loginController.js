import User from "../models/userModel.js";
import createError from "http-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginPost = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) return next(createError(404, "Invalid email"));

    // Check password by comparing the user's password from frontend and backend respectively
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return next(createError(400, "Invalid Password"));

    // Generate a token for the user that is valid for one hour
    let newToken;
    try {
      newToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
    } catch (err) {
      console.log(err);
      return next(createError(500, "Could not generate token. Please try again!"));
    }

    // If the email and password are correct, then the "res" will be the "user id, token and user data"
    return res.status(201).json({
      id: user._id,
      token: newToken,
      data: user,
    });
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could't query! please try again!"));
  }
};
