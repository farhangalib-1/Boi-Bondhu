'use client'
import {Check} from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react'
import {BookOpen} from '@gravity-ui/icons';
import { ToastContainer, toast } from 'react-toastify';

const Singlebookdetails = ({book}) => {
    const [isBorrowed, setIsBorrowed] = useState(false);
    const notify = () => toast.success("Book borrowed successfully!");
  return (
    <div>
      <div className='w-11/12 mx-auto my-7 flex flex-col md:flex-row justify-evenly items-center gap-6'>
        <div className='border rounded-2xl p-4 border-gray-300'>
            <Image className='rounded-2xl' src={book.image_url} alt={book.title} width={300} height={400} />
        </div>
        <div className='border rounded-2xl p-4 border-gray-300'>
            <h1 className={`text-3xl font-bold mb-2 `}>{book.title}</h1>
            <h2 className={`text-xl text-gray-600 mb-2 `}> <span className='font-semibold'>Author:</span> {book.author}</h2>
            <p className={`text-lg text-gray-700 mb-2 `}> <span className='font-semibold'>Description:</span>  {book.description}</p>
            <p className={`text-md text-gray-500 mb-2 `}>Category: {book.category}</p>
            <p className={`text-md text-gray-500 mb-2 `}>Available Quantity: {book.available_quantity} copies left</p>
            <Button onClick={()=>{setIsBorrowed(true); 
                if(!isBorrowed)
                notify()
                }} variant={isBorrowed ? "solid" : "primary"} size="large" className='mt-4'>
                {
                    isBorrowed ? <> <Check /> Borrowed </> : <>
                    <BookOpen />
                    Borrow Now
                    </>
                    
                }
            </Button>
        </div>
        <div></div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Singlebookdetails
