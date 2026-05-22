import Image from 'next/image';
import React from 'react'

const page = async ({ params }) => {
    const {Id} = await params;
    const res = await fetch('https://boi-bondhu.vercel.app/data.json');
    const data = await res.json();
        const book = data.find(book => book.id === parseInt(Id));
        console.log(book);
        
    
    
  return (
    <div>
      <div className='w-11/12 mx-auto my-7 flex flex-col md:flex-row justify-evenly items-center gap-6'>
        <div>
            <Image src={book.image_url} alt={book.title} width={300} height={400} />
        </div>
        <div>
            <h1 className='text-3xl font-bold mb-2'>{book.title}</h1>
            <h2 className='text-xl text-gray-600 mb-2'>Author: {book.author}</h2>
            <p className='text-lg text-gray-700 mb-2'>{book.description}</p>
            <p className='text-md text-gray-500 mb-2'>Category: {book.category}</p>
            <p className='text-md text-gray-500 mb-2'>Available Quantity: {book.available_quantity} copies left</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default page
