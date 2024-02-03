import {NextResponse} from 'next/server'
export async function GET(request,content){
    //content hocce sei object mane json data jeta amra pai
    console.log(content)
    const studentdetails=content.params.student;
    return NextResponse.json({result:studentdetails})
}