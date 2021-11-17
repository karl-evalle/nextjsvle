import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getStaticProps(){
    const users = await prisma.vleuser.findMany()


    return {
      props: { users } // will be passed to the page component as props
    }
  }

  const userlist = ({users}) =>
  <div>
  <h1 classname="text-4xl">Users</h1>
  <div className="bg-gray-700 text-center text-4xl">
  {users.map(user =>(
          <h1 key={user.id}>{user.username}</h1>
        
      )
      
      )}
     
  </div>
  
    </div>
  export default userlist