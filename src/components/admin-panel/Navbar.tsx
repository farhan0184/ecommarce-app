import { Logo } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { signOut } from "next-auth/react"
export default function Navbar({session}:any) {
  return (
    <div className='h-[64px] px-10 flex items-center justify-between'>
        <div>
            <Image src={Logo} alt='logo' width={50} height={50}/>
        </div>
        <div onClick={() => signOut()} className='cursor-pointer'>
            <Image src={session?.user?.image} className='rounded-full' alt='logo' width={40} height={40}/>
        </div>
    </div>
  )
}
