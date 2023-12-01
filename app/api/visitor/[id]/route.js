import visitorSchema from "@/models/visitor.schema";
import connectToDB from "../../mongodb";
import { NextResponse } from "next/server";

const PUT = async (request, {params:{id}}) => {
    const {visit} = await request.json();
    await connectToDB();
    await visitorSchema.findByIdAndUpdate(id, {visit:visit});
    const res = await visitorSchema.findOne({_id:id})
    return NextResponse.json({
        message: "updated",
        data: res,

    }, {status: 200})
  };
  
  export default PUT