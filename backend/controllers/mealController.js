import Meal from "../models/mealModel.js";
import createError from "http-errors";

export const mealGet = async ( req, res, next ) => {

    try{
        const meals = await Meal.find();
        return res.status(201).json(meals);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not get meals"));
    }
}