"use server"
import resumeDownload from "@/models/resume.download";
import connectToDB from "../../mongodb";
import { NextResponse } from "next/server";

export const PUT = async (request, {params:{id}}) => {
    const {downloads} = await request.json();
    await connectToDB();
    await resumeDownload.findByIdAndUpdate(id, {downloads:downloads});
    const res = await resumeDownload.findOne({_id:id})
    return new NextResponse(JSON.stringify({message:"ok", data:res}),{status:200})
  };

  export const GET = async (request, {params:{id}}) => {
    await connectToDB();
    const res = await resumeDownload.findOne({_id:id})
    return new NextResponse(JSON.stringify({message:"fetched", res}),{status:200})
  };
