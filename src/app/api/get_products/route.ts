import Product from "@/libs/models/product";
import { connectMongoDb } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
   try{
     await connectMongoDb()

     const data = await Product.find()

     return NextResponse.json(data)
   }
   catch(err){
     return NextResponse.json({
        err,
        msg: "Something Went Wrong"
     },{
        status: 400})
   }    
}