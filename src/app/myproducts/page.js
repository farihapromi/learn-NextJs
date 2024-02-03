import axios from 'axios';

const getProducts=async()=>{
    let response=await axios.get("http://localhost:3000/api/products")
    
  
    // data=await data.json()
    //  console.log(data)
     const data = response.data;
     console.log(data);
     

    if(data.success){
        return data.result;
    }else{
        return {success:false}
    }
}
export default async function Page(){
    let products=await getProducts()
    console.log(products)
    return(
        <div>
        <h1>Product list</h1>
        <table border="1">
           <thead>
           <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Company</td>
                <td>Color</td>
            </tr>
           </thead>
           <tbody>
            {
                products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.company}</td>
                        <td>{product.color}</td>
                    </tr>
                ))
            }
           </tbody>
        </table>
        </div>
    )
}