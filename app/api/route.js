"use server"
import visitorSchema from '@/models/visitor.schema';
import ConnectToDB from './mongodb';
import { NextResponse } from 'next/server';


export const GET = async (request) => { 
    await ConnectToDB();
    const visit = await visitorSchema.find()
    const newVisit = visit[0].visit + 1
    await visitorSchema.findOneAndUpdate({_id:"6565f5237a898e80a86d1942", visit:newVisit})
  return new NextResponse(JSON.stringify(visit), {
    status: 200,
   
  })
}
