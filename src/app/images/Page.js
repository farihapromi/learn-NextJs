'use client'

import { useState } from "react"

export default function Home(){
    const[file,setFile]=useState();
    const onSubmit=async (e)=>{
        e.preventDefault();
        const data=new FormData();
        data.set("file",file);
        const result=await fetch("api/upload",
        {method:"POST",
          body:data
});

    }
    return(
        <div>
            <h1>upload image</h1>
            <form action="" onSubmit={onSubmit}>

                <input type="file" name="file" id=""
                onChange={(e)=>setFile(e.target.files?.[0])}
                 />
            </form>
        </div>

    )

}