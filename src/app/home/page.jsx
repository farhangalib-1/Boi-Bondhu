import herobg from "@/assets/hero-bg.png";
import herobg2 from "@/assets/hero-bg-2.png";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Booksdetails from "@/components/Booksdetails";
import {HandPointRight} from '@gravity-ui/icons';
import 'animate.css';
import Link from "next/link";
const Homepage = () => {
    const newArrivalBooks = [
  {
    "id": 1,
    "book_name": "নক্ষত্রের রাত",
    "writer": "আরিফ হোসেন",
    "headline": "Special Discount on Memberships",
    "discount": "30% OFF",
    "description": "রহস্য আর আবেগে ভরা এক অসাধারণ বাংলা উপন্যাস।",
    "banner_image": "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
  {
    "id": 2,
    "book_name": "নীল পাহাড়ের গল্প",
    "writer": "সাবিহা নূর",
    "headline": "Special Discount on Memberships",
    "discount": "20% OFF",
    "description": "প্রকৃতি, ভালোবাসা ও জীবনের সংগ্রামের এক অনন্য কাহিনি।",
    "banner_image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
  },
  {
    "id": 3,
    "book_name": "অচেনা শহর",
    "writer": "তানভীর রহমান",
    "headline": "Special Discount on Memberships",
    "discount": "25% OFF",
    "description": "একটি শহরের অজানা রহস্য আর মানুষের জীবনের গল্প।",
    "banner_image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
  },
  {
    "id": 4,
    "book_name": "স্বপ্নবাজ",
    "writer": "মেহজাবিন ইসলাম",
    "headline": "Special Discount on Memberships",
    "discount": "15% OFF",
    "description": "স্বপ্ন পূরণের সংগ্রাম নিয়ে অনুপ্রেরণামূলক বাংলা বই।",
    "banner_image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
  }
];
  return (
    <div >
        <div className="flex items-center gap-4 justify-center h-16 bg-gray-100 px-6">
            <h1 className="text-sm text-center bg-secondary text-white font-bold">New Arrivals</h1>
             <Marquee pauseOnHover={true} speed={50} className="bg-gray-100 py-2">
        {newArrivalBooks.map(book => (
          <div key={book.id} className="flex items-center space-x-4 mx-4">
           <h1>{book.book_name} । লেখক: {book.writer} । ডিসকাউন্ট: {book.headline} {book.discount}</h1>
          </div>
        ))}
      </Marquee>
    </div>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(" + herobg2.src + ")",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl md:text-7xl font-bold animate__animated animate__zoomIn ">Find your <br /> next read</h1>
      <Link href="/books">
      <button className="btn btn-primary bg-transparent border border-white rounded-full hover:bg-white hover:text-black animate__animated animate__zoomIn">
        <HandPointRight /> Browse Now
      </button>
      </Link>
    </div>
  </div>
        </div>
        <Booksdetails />
    </div>
  )
}

export default Homepage
