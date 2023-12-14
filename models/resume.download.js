import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    downloads: {
        type:Number,
    }
},{timestamps:true})

export default mongoose.models.Resume || mongoose.model("Resume", ResumeSchema)