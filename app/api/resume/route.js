"use server"
import resumeDownload from "@/models/resume.download";
import connectToDB from "../mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {downloads} = await request.json();
    console.log(downloads)
  await connectToDB();
  await resumeDownload.create({downloads: downloads})
  return  new NextResponse(JSON.stringify({message:"ok"}),{status:201})
}