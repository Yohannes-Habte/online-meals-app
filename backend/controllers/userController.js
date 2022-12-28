import User from "../models/userModel.js";
import createError from "http-errors";

export const userPost = async (req, res, next) => {
  const { firstName, lastName, email, password, address } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      const newUser = User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
      });

      try {
        await newUser.save();
      } catch (err) {
        console.log(err);
        return next(createError(404, "User could not be saved in the database! Please try again!"));
      }

      return res.status(201).json(newUser);
    }
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database couldn't query! Please try again!"));
  }
};
