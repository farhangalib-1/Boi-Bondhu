import Bookcard from "@/components/Bookcard";

const BooksPage = async () => {
    const res = await fetch('https://boi-bondhu.vercel.app/data.json');
    const data = await res.json();

  return (
    <>
    <div className="w-11/12 mx-auto mt-7">
     <h1 className="text-3xl font-bold mb-4">
        All Books
        </h1>
        <h1 className="text-lg text-gray-600 mb-8">
        Discover your next favorite book from our extensive collection of all books. Whether you're into fiction, non-fiction, mystery, romance, or any other genre, we have something for every reader. Explore our diverse selection of books, from timeless classics to contemporary bestsellers, and find the perfect read to captivate your imagination and enrich your mind. Dive into the world of literature and discover the joy of reading with us!
       </h1>
       <h1 className="text-lg text-gray-600 mb-8">  
        </h1>
        </div>
    <div className="w-11/12 mx-auto mt-7 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
       
      {
        data.map(book => <Bookcard key={book.id} params={book} />)
      }
    </div>
    </>
  )
}

export default BooksPage