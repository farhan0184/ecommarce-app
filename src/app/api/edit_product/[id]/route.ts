import Product from "@/libs/models/product";
import { connectMongoDb } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
    try {

        const body = await request.json()
        const id = URLParams.params.id
        const {name, category, price} = body;
        await connectMongoDb()

        const data = await Product.findByIdAndUpdate(id,{
            name, 
            category, 
            price
        })

        return NextResponse.json({msg: "Product Updated Successfully", data})
    }
    catch (err) {
        return NextResponse.json({
            err,
            msg: "Something Went Wrong"
        }, {
            status: 400
        })
    }
}