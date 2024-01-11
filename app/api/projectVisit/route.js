import projectVisit from "@/models/projectVisit";
import { NextResponse } from "next/server"
import connectToDB from "../mongodb";


export const POST = async (request) => {
    try {
        const {name} = await request.json();
        await connectToDB();

        const project = await projectVisit.create({ProjectName:name, projectVisit: 1})
        
        
        return new NextResponse(JSON.stringify({message: project, name: name}), {status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({error: `something went wrong ${error}`}),{status:400})
    }
}

 