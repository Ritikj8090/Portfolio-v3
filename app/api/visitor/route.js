"use server"
import visitorSchema from "@/models/visitor.schema";
import connectToDB from "../mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connectToDB();
  const visit = await visitorSchema.find();
  const res = await visitorSchema.find();
  console.log(visit)
  return  new NextResponse(JSON.stringify({message:"ok", data:res}),{status:200})
}