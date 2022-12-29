import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    file: { type: String, required: true },
    message: { type: String, required: true },
}, {timestamps: true});

commentSchema.pre("save", function(next) {
    if(!this.firstName){
        this.firstName = "John"
    }

    if(!this.lastName) {
        this.lastName = "Doe"
    }
    
    next();
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;