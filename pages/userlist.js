import React from 'react'
import {useState} from 'react'
import prisma from '../lib/prisma'

export default function userlist({users}) {
    const [formData, setFormData] = useState({})
    const [user, setUsers] = useState(users)
   

    async function saveUser(e){
        e.preventDefault()
        setUsers([...users,formData])
        const response = await fetch('/api/users', {
          method: 'POST',
          body:JSON.stringify(formData)
        })
    
    
        return await response.json()
    }

    return (
        <div>
             <div className="min-h-screen px-4 py-12 sm:px-6 lg:px 8">
<h1 className="text-4xl">Users</h1>
  <div className="w-full">
    {users.length > 0 && (
        <table className="table-auto">
        <thead>
          <tr>
            <th className='w-6/12' scope ='col'>
              Username
            </th>
            <th className='w-6/12' scope ='col'>
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
  
      </table>
      )
    }
  </div>
  <div className="mx-auto my-auto">
    <form className="" onSubmit={saveUser}>
      <input type="text" placeholder="Username" name="username" onChange= {e => setFormData({
        ...formData, username: e.target.value
      })} />
      <input type="text" placeholder="Password" name="password" onChange= {e => setFormData({
        ...formData, password: e.target.value
      })}/>
      <button type="submit">Submit</button>
    </form>
  </div>
  
    </div>
        </div>
    )
}

export async function getStaticProps(){
    const users = await prisma.vleuser.findMany()
    
  
    return {
      props: { users } // will be passed to the page component as props
    }
  
  }
