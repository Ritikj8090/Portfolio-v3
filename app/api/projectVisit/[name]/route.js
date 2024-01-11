import projectVisit from "@/models/projectVisit";
import { NextResponse } from "next/server"
import connectToDB from "../../mongodb";


export const GET = async (request, {params:{name}}) => {
    try {

        await connectToDB();

        const project = await projectVisit.findOne({ProjectName: name})

        return new NextResponse(JSON.stringify(project), {status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({error: `something went wrong ${error}`}),{status:400})
    }
}


export const PUT = async (request, {params:{name}}) => {
    try {
        const {count} = await request.json()
        await connectToDB();
        console.log('count', count, name)
        const project = await projectVisit.findOneAndUpdate({_id:name}, {projectVisit: count})

        return new NextResponse(JSON.stringify(project), {status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({error: `something went wrong ${error}`}),{status:400})
    }
}

