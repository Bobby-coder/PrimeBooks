import { bookList } from "@/utils/books";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { ArrowUpLeftFromSquare } from "lucide-react";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const bookData = bookList.find(({ id }) => id === bookId);

  if (!bookData) {
    return <PageNotFound />;
  }

  const { category, title, author, description, rating, image } = bookData;

  return (
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <Link
        to={`/books/${category}`}
        className="absolute top-[70px] lg:top-[80px] lg:left-10 flex items-center gap-1"
      >
        <ArrowUpLeftFromSquare />
        Back to browse
      </Link>
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-4 text-justify">{description}</p>
        <p className="mb-4 text-justify">Author: {author}</p>
        <p className="mb-4 text-justify">Rating: {rating}</p>
        <p className="mb-4 text-justify">Category: {category}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img className="w-full rounded-lg" src={image} alt="book image 1" />
        <img
          className="mt-4 w-full lg:mt-10 rounded-lg"
          src={image}
          alt="book image 2"
        />
      </div>
    </div>
  );
};

export default BookDetailsPage;
