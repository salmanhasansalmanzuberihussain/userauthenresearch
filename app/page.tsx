
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const user = await currentUser();
  console.log(user)
  return (
   <div className="px-10">
    <br></br>
    <br></br>
    <br></br>
    <h1>Name: <span> {user?.firstName} {user?.lastName}</span></h1>

    </div>
  );
} 
