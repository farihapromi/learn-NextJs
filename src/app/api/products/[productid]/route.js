import { connectionSrt } from '@/lib/db';
import { Product } from '@/lib/model/product';
import {NextResponse} from 'next/server';
import mongoose from 'mongoose'
export async function PUT(request,content){
    console.log(content)
    const productId=content.params.producetid;
    const filter={_id:productId}
    const payload=await request.json()
    console.log(payload)
    await mongoose.connect(connectionSrt)
    const result=await Product.findOneAndUpdate(filter,payload)


 
    return NextResponse.json({result,success:true})

}

export  async function GET(request,content){
    console.log(content);
    const productId=content.params.productid;
    //filter variable a id ke rakhchi
    const filter={_id:productId}
 
    // database connection
    await mongoose.connect(connectionSrt);
    const result=await Product.findById(filter);
   
    return NextResponse.json({result,success:true
    });
}
export async function DELETE(request,content){
    const productId=content.params.productid;
    const record={_id:productId};
    await mongoose.connect(connectionSrt);
    const result=await Product.deleteOne(record);
    return NextResponse.json({result,success:true});
}