"use server"
import visitorSchema from "@/models/visitor.schema";
import connectToDB from "../mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connectToDB();
  const visit = await visitorSchema.find();
  return NextResponse.json({
    message: "Ok",
    data: visit
  },{status:200})
}