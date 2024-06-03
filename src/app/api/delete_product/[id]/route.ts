import Product from "@/libs/models/product";
import { connectMongoDb } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
    try {
        const id = URLParams.params.id

        await connectMongoDb()

        await Product.findByIdAndDelete(id)

        return NextResponse.json({msg: "Product Deleted Successfully"})
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