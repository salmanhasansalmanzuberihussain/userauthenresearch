
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {
  const user = await currentUser();
  console.log(user)
  return (
   <div>
    <br></br>
    <br></br>
    <br></br>
    <h1 className=" color: '#8c52ff';">Name: <span> {user?.firstName} {user?.lastName}</span></h1>
    </div>
  );
} 
