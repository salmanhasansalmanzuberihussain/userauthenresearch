'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <div className="grid w-full flex-grow items-center bg-black px-4 sm:justify-center">
    <SignUp.Root>
      <SignUp.Step  name="start"
          className="w-full flex-grow space-y-6 rounded-2xl bg-neutral-900 bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 py-10 ring-1 ring-inset ring-white/5 sm:w-96 sm:px-8"
        >
           <header className="text-center">
                      <Image src="./ZUB8ETI.svg" className="center" alt="logo" width={35} height={35}/>
                    
                    </header>
         <div className="space-y-2">
                    <Clerk.Connection
                      name="google"
                      className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 16"
                        className="w-4"
                        aria-hidden
                      >
                        <path
                          fill="currentColor"
                          d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                        />
                      </svg>
                      Login with Google
                    </Clerk.Connection>
                  </div>
    <Clerk.GlobalError className="block text-sm text-red-400" />
             <div className="space-y-4">
               <Clerk.Field name="identifier" className="space-y-2">
                 <Clerk.Label className="text-sm font-medium text-white">Username</Clerk.Label>
                 <Clerk.Input
                   type="text"
                   required
                   className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                 />
                 <Clerk.FieldError className="block text-sm text-red-400" />
               </Clerk.Field>
              
               <Clerk.Field name="email" className="space-y-2">
                 <Clerk.Label className="text-sm  font-medium text-white">Email</Clerk.Label>
                 <Clerk.Input
                   type="text"
                   required
                   className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                 />
                 <Clerk.FieldError className="block text-sm text-red-400" />
               </Clerk.Field>
               <Clerk.Field name="password" className="space-y-2">
                 <Clerk.Label className="text-sm font-medium text-white">Password</Clerk.Label>
                 <Clerk.Input
                   type="password"
                   required
                   className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                 />
                 <Clerk.FieldError className="block text-sm text-red-400" />
               </Clerk.Field>
             </div>
        <SignUp.Captcha />

         <SignUp.Action
                   submit
                   className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                 >
                   Sign Up
                 </SignUp.Action>
                   <p className="text-center text-sm text-neutral-400">
                             Account Already?{' '}
                             <Clerk.Link
                               navigate="sign-in"
                               className="font-medium text-white decoration-white/20 underline-offset-4 outline-none hover:underline focus-visible:underline"
                             >
                               Sign In
                      </Clerk.Link>
                 </p>
      </SignUp.Step>
      
    </SignUp.Root>
    
    </div>
  );
}
