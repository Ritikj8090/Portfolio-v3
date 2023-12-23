import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    visit: {
        type:Number
    },
    date: {
        type: Date,
        default: new Date()
    }
},{timestamps:true})

export default mongoose.models.Visit || mongoose.model("Visit", VisitorSchema)