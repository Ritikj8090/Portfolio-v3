"use server"
import connectToDB from "../mongodb";
import { NextResponse } from "next/server";
import ContactSchema from '@/models/contact';
import Cors from 'cors';

const cors = Cors({
  allowedMethods: ['POST', 'OPTIONS'], // Adjust the allowed methods as needed
});

const POST = async (request) => {
    const {name, email, body} = await request.json();
  await connectToDB();
  await ContactSchema.create({name, email, body});
  return NextResponse.json({
    message: "Ok",
  },{status:200})
}

export default cors(POST)