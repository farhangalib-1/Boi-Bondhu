'use client'
import React from 'react'
import { authClient } from "@/lib/auth-client"
import Image from 'next/image'
import { Button } from '@heroui/react'
import Link from 'next/link'

const Profilepage = () => {
  const { data: session } = authClient.useSession() 
  return (
    <div className='flex justify-center'>
        <div className='w-4/12 border my-10 rounded-lg border-gray-300 p-5'>
        
          <h1 className='text-3xl font-bold text-center'>
            My Profile
          </h1>
          <img src={session?.user?.image} alt="Profile Picture" className='rounded-full w-32 h-32 mx-auto mb-5' />
          <h1>
            Name: {session?.user?.name}
          </h1>
          <h1>
            Email: {session?.user?.email}
          </h1>
          <Link href="/">
          <Button variant='outline' className='w-full mt-5'>
            Back to HomePage
          </Button>
          </Link>
        </div>
    </div>
  )
}

export default Profilepage
