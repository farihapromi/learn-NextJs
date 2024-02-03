import {NextResponse} from 'next/server'
import mongoose from 'mongoose'
import { connectionSrt } from '@/lib/db'
import { Product } from '@/lib/model/product'

export async function GET() {
    let data=[];
    try {
        await mongoose.connect(connectionSrt);
         data = await Product.find();
       
    } catch (error) {
        console.error('Error fetching products:', error);
      
    }
    return NextResponse.json({ result: data, success: true });
}

 
   
export async function POST(request){
    const payload= await request.json()
   
    
         await mongoose.connect(connectionSrt)
        // let product=new Product({
        //     name:'Note 19',
        //     price:'30000',
        //     company:'node',
        //     color:'red'
        // })
        //post through postman
         let product=new Product(payload)
        console.log(product)
        const result=await product.save()
        console.log(result)
         
        return NextResponse.json({result:result,success:true})
    
} 
