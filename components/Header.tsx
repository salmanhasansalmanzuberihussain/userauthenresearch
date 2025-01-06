import React from "react"
import '../app/globals.css'

import {currentUser} from "@clerk/nextjs/server";
import { ClerkLoaded} from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = async() => {
  const user = await currentUser();


  return <div className="px-8 py-5 flex items-center justify-between">
    <Image src="./ZUB8ETI.svg" className="ml-8" alt="logo" width={35} height={35}/>
   <ClerkLoaded>
   {user ? (
    <div>
      <UserButton/>
    </div>
   ) : (
    <SignInButton  mode="modal">
      <button  className="fontchange">Sign In</button>
    </SignInButton>
   )}
    </ClerkLoaded>
   </div>
}; 

export default Header; 