import Testimonial from "../models/testimonialModel.js";
import createError from "http-errors";

export const testimonialPost = async (req, res, next) => {

    const newTestimonial = new Testimonial({
        ...req.body,
        image: `http://localhost:8000/images/${req.file.filename}`
    });

    try{
        const saveNewtestimonial = await newTestimonial.save();
        res.status(201).json({ success: true, testimonial: saveNewtestimonial});
    }catch(err){
        return next(createError(404, "The image could not be saved in the database!"))
    }
};