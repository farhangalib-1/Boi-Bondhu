import React from 'react'
import Bookcard from './Bookcard';

const Books = async () => {
    const res = await fetch('https://boi-bondhu.vercel.app/data.json');
    const data = await res.json();
    const topRatedBooks = data.slice(0, 4);
    console.log(topRatedBooks);
  return (
    <div className='w-11/12 mx-auto mt-7'>
      <h1 className='text-3xl font-bold mb-4'>Top Rated Books</h1>
       <h1 className='text-lg text-gray-600 mb-8'>
        Discover our top-rated books, handpicked by our community of book lovers. From timeless classics to contemporary gems, these books have captivated readers with their compelling stories, rich characters, and thought-provoking themes. Whether you're into fiction, non-fiction, or a specific genre, our top-rated books offer something for everyone. Dive into these literary treasures and experience the magic of storytelling at its finest!
       </h1>
       <div className=' grid grid-cols-1 mx-auto md:grid-cols-3 gap-6 w-11/12  mt-6 mb-6 '>
       {
        topRatedBooks.map(book => <Bookcard key={book.id} params={book} />)
       }
       </div>
    </div>
  )
}

export default Books
