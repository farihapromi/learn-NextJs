'use client'

import { useRouter } from "next/router";

export default function Deleteproduct(props){
    const router=useRouter
    const deleteRecord=async()=>{
        let response=await fetch("http://localhost:3000/api/products/"+props.id,{
            method:'DELETE'
        });
        response=await response.json();
        if(response.success){
            alert('data deleted ')
            router.push("/products")
        }


    }
    return <button onClick={deleteRecord}>Delete</button>

}