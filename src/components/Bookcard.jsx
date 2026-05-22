import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Eye} from '@gravity-ui/icons';
const Bookcard = ({params}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={params.image_url}
      alt={params.title}
      width={300}
      height={200}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {params.title}
      <div className="badge badge-secondary">Top Rated</div>
    </h2>
    <h2 className="card-title text-sm text-gray-500">
        {params.author}
    </h2>
    <p>{params.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{params.category}</div>
    </div>
  </div>
  <Link href={`/book/${params.id}`}>
    <Button variant="primary">
        <Eye /> View Details</Button>
  </Link>
</div>
    </div>
  )
}

export default Bookcard
