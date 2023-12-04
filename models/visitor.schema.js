import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    visit: {
        type:Number
    }
},{timestamps:true})

export default mongoose.models.Visit || mongoose.model("Visit", VisitorSchema)