import mongoose from "mongoose";

const feedbackSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"user required"]
    },
    message:{
        type:String,
        required:[true,"Feedback message required"],
    }
},{timestamps:true});
export const Feedback=mongoose.models.Feedback || mongoose.model("Feedback",feedbackSchema);