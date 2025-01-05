import React from "react"

import {currentUser} from "@clerk/nextjs/server";
import { ClerkLoaded} from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = async() => {
  const user = await currentUser();


  return <div className="px-10 py-5 flex items-center justify-between">
    <Image src="./ZUB8ETI.svg" alt="logo" width={70} height={70}/>
 
   <ClerkLoaded>
   {user ? (
    <div>
      <UserButton/>
    </div>
   ) : (
    <SignInButton mode="modal"/>
   )}
    </ClerkLoaded>
   </div>
}; 

export default Header; 