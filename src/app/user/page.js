import DeleteUser from '@/utility/DeleteUser'
import Link from 'next/link'
async function getUsers(){ 
    let data=await fetch('http://localhost:3000/api/users')
    data=await data.json()
    return data

}

export default async function Page(){
    let users=await getUsers()
    return(
        <div>
        <h2>User List</h2>
        {
            users.map(user=>(
                <div key={user.id}>
               
                  <Link  href={`users/${user.id}`}>{user.name}</Link>
                  <span>
                   <Link href={`users/${user.id}/update`}>Edit</Link>
                  </span>
                  <DeleteUser id={user.id}/>
                  </div>
                    
            ))
        }
        </div>
    )
}