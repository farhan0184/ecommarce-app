import Product from "@/libs/models/product";
import { connectMongoDb } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   try{

    const body = await request.json()
    const {imgSrc, fileKey, name, price, category} = body
     await connectMongoDb()

     const data = await Product.create({
        imgSrc, 
        fileKey, 
        name, 
        price, 
        category
     })

     return NextResponse.json({msg:"Product Added Successfully",data})
   }
   catch(err){
     return NextResponse.json({
        err,
        msg: "Something Went Wrong"
     },{
        status: 400})
   }    
}