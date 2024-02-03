import Deleteproduct from '@/lib/Deleteproduct';
import axios from 'axios';
import Link from 'next/link'
const getProducts=async()=>{
    let response= await axios.get("http://localhost:3000/api/products");
    const data = response.data;
  
    if(data.success){
        return data.result;
    }
    else{
        return {success:false}

    }
  

}

export default async function Page(){
    const products= await getProducts();
    console.log( typeof products)


    return(
        <div>
            <h1>This is products page</h1>
            <table border="1">
               <thead>
               <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Color</td>
                    <td>Company</td>
                  
                </tr>
               </thead>
               <tbody>
                {
                products.map((item)=>(<tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.company}</td>
                        <td>{item.color}</td>
                        <td><Link href={"products/"+item._id}>Edit </Link>
                        <Deleteproduct id={item._id}/>
                        </td>
                     
                    

                        </tr>
                    ))
                }
               </tbody>
            </table>
        </div>
    )
}