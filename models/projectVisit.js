import mongoose from "mongoose";

const ProjectVisitorSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        default: ''
    },
    projectVisit: {
        type:Number,
        default: 0
    }
},{timestamps:true})

export default mongoose.models.ProjectVisit || mongoose.model("ProjectVisit", ProjectVisitorSchema)