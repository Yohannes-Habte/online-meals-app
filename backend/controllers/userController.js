import User from "../models/userModel.js";
import createError from "http-errors";
import jwt from "jsonwebtoken";

// Get a user details
export const getUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (user === null) {
      return next(createError(500, "User with this ID could not be found. please try gain!"));
    } else {
      return res.status(201).json({
        firstName: user.firstName,
        lastName: user.lastName,
        streetName: user.stateName,
        houseNumber: user.houseNumber,
        zipCode: user.zipCode,
        cityName: user.cityName,
        stateName: user.stateName,
        countryName: user.countryName
      });
    }
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not be queried! please try gain!"));
  }
};

// Verify logged in user in the frontend
export const verifyUser = async(req, res, next) => {
    try{
        const token = req.headers.token;
        const decode = jwt.verify(token,  process.env.JWT_SECRET_KEY);
        console.log(decode);

        if(decode) {
            let user = await User.findById(decode.id);
            return res.status(201).json({
                success: true,
                data: user,
                token, token,
            })
        }

    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not verify the logged in user!"))
    }
}


