import { hind_shiliguri } from '@/app/layout';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react'
import {BookOpen} from '@gravity-ui/icons';
import Singlebookdetails from '@/components/Singlebookdetails';
const page = async ({ params }) => {
    const {Id} = await params;
    const res = await fetch('https://boi-bondhu.vercel.app/data.json');
    const data = await res.json();
        const book = data.find(book => book.id === parseInt(Id));
        console.log(book);
    
    
    
  return (
    <div>
      <Singlebookdetails book={book} />
    </div>
  )
}

export default page
