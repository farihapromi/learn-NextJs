import { user } from '@/utility/db'
import {NextResponse}  from 'next/server'
export function GET(request,content){
    // console.log(content.params.id)
    // const data=user;
    //id onujayi show krbe
    //jei id pass krbo sei id er data dekhabe

    const userData=user.filter((item)=>item.id==content.params.id)
    return NextResponse.json(userData.length==0?{result:'no data found',success:false}:{result:userData[0],success:true},{status:200})

}
export  async function PUT(request,content){
    let payload=request.json()
    let userid=content.params.id;
    return NextResponse.json({result:true})

}
export function DELETE(request,content){
    let id=content.params.id
    if(id){
        return NextResponse.json({result:"user deleted",success:true},{status:200})
    }
    else{
        return NextResponse.json({result:"user deleted",success:false},{status:404})
    }
}