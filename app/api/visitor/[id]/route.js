"use server"
import visitorSchema from "@/models/visitor.schema";
import connectToDB from "../../mongodb";
import { NextResponse } from "next/server";

export const PUT = async (request, {params:{id}}) => {
    const {visit} = await request.json();
    await connectToDB();
    console.log(visit)
    await visitorSchema.findByIdAndUpdate(id, {visit:visit});
    const res = await visitorSchema.findOne({_id:id})
    return new NextResponse(JSON.stringify({message:"ok", data:res}),{status:200})
  };

  export const GET = async (request, {params:{id}}) => {
    await connectToDB();
    const res = await visitorSchema.findOne({_id:id})
    console.log(res)
    return new NextResponse(JSON.stringify({message:"ok", res}),{status:200})
  };
