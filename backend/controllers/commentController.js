import Comment from "../models/commentModel.js";
import createError from "http-errors";

export const commentPost = async (req, res, next) => {
    const newComment = new Comment(req.body);

    try{
        const saveNewComment = await newComment.save();
        return res.status(202).json(saveNewComment);
    }catch(err){
        console.log(err)
        return next(createError(500, "Database could't be queried!"))
    }
}