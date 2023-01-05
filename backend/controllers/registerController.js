import User from "../models/userModel.js";
import createError from "http-errors";
import jwt from "jsonwebtoken";

export const registerPost = async (req, res, next) => {
  // State Varibles 
  const {
    firstName,
    lastName,
    gender,
    telephone,
    email,
    password,
    streetName,
    houseNumber,
    zipCode,
    cityName,
    stateName,
    countryName,
  } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      const newUser = User({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        telephone: telephone,
        email: email,
        password: password,
        streetName: streetName,
        houseNumber: houseNumber,
        zipCode: zipCode,
        cityName: cityName,
        stateName: stateName,
        countryName: countryName,
      });

      try {
        await newUser.save();
      } catch (err) {
        console.log(err);
        return next(createError(404, "User could not be saved in the database! Please try again!"));
      }

      let newToken;
      try{
        newToken = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});
      }catch(err){
        console.log(err);
        return next(createError(500, "Token could not be generated. Please try it again."))
      }

      return res.status(201).json({
        id: newUser._id, 
        token: newToken
      });
    }
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database couldn't query! Please try again!"));
  }
};
