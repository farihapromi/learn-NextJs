'use client'
import { useEffect, useState } from 'react'
import axios from 'axios';
import '../../style.css';
import Link from 'next/link'
export default function Page(props){
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[company,setCompany]=useState("")
    const[color,setColor]=useState("")
   useEffect(()=>{
    getproductDetails();

   }, []);
   const getproductDetails=async()=>{
    let productId=props.params.editproduct;

   
    let productsData= await fetch("http://localhost:3000/api/products/"+productId);
    
    productsData=await productsData.json();
   
  
    if (productsData.success) {
        let result = productsData.result;
        if (result) {
          setName(result.name);
          setPrice(result.price);
          setCompany(result.company);
          setColor(result.color);
        }
      }
    }




    const updateProduct = async () => {
        let productId = props.params.editproduct;
      
        try {
          let response = await fetch(`http://localhost:3000/api/products/${productId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, color, company }),
          });
      
          if (!response.ok) {
            throw new Error(`Failed to update product. Status: ${response.status}`);
          }
      
          let result = await response.json();
      
          if (result.success) {
            alert("Product has been updated");
          } else {
            // Handle unsuccessful update
            console.error("Failed to update product:", result.error);
          }
        } catch (error) {
          console.error("Error updating product:", error);
          // Handle the error gracefully, e.g., display a user-friendly message
        }
      };
      
    
    return (
        <div>
            <h1>
                Update Products
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
            <button className='btn'  onClick={ updateProduct}  >Update Product</button>
            <br />
            <Link href="/products">Go to products list</Link>
        

        </div>
        

    )

}