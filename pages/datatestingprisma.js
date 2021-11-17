import prisma from '../lib/prisma';



export async function getStaticProps(){
    const users = await prisma.vleuser.findMany()


    return {
      props: { users } // will be passed to the page component as props
    }
  }

  const userlist = ({users}) =>
  
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
  
    </div>
  export default userlist