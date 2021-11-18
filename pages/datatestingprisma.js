
import prisma from "../lib/prisma";


export async function getStaticProps(){
    const users = await prisma.vleuser.findMany()


    return {
      props: { users } // will be passed to the page component as props
    }
  }

  const userlist = ({users}) =>
  
  <div></div>
  export default userlist