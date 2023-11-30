import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    visit: {
        type:Number
    },
})

export default mongoose.models.Visit || mongoose.model("Visit", VisitorSchema)