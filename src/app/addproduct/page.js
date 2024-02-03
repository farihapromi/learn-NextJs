'use client'
import { useState } from 'react'
import '../style.css'
export default function Page(){
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[company,setCompany]=useState("")
    const[color,setColor]=useState("")
   
    const addProduct= async()=>{
      
        let result=await fetch('http://localhost:3000/api/products',{
            method:'POST',
            body:JSON.stringify({name,price,company,color})
        })
          result=await  result.json()
         if(result.success){
            alert('product added')
         }
         else{
            alert('there is some error')
         }

    }
    
    return (
        <div>
            <h1>
                Add Products
            </h1>
            <input className='input' value={name} onChange={(e)=>setName(e.target.value)}
             type="text" placeholder="enter your product name"
            />
             <input className='input' value={price} onChange={(e)=>setPrice(e.target.value)}
             type="text" placeholder="enter your product price"
            />
             <input className='input' value={company} onChange={(e)=>setCompany(e.target.value)}
             type="text" placeholder="enter your product company"
            />
             <input className='input' value={color} onChange={(e)=>setColor(e.target.value)}
             type="text" placeholder="enter your product color"
            />
            <button className='btn' onClick={addProduct}>Add Product</button>

        </div>

    )

}