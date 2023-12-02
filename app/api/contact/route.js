"use server"
import connectToDB from "../mongodb";
import { NextResponse } from "next/server";
import ContactSchema from '@/models/contact';

export const POST = async (request) => {
    const {name, email, body} = await request.json();
  await connectToDB();
  await ContactSchema.create({name, email, body});
  return new NextResponse(JSON.stringify({message:200, }), {status:200})
}
