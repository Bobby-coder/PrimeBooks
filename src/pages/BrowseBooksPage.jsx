import BookCard from "@/components/bookPage/BookCard";
import {
  filterBookByCategory,
  filterBookByTitleOrAuthor,
} from "@/store/features/books/bookSlice";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BrowseBooksPage = () => {
  const { category: currentCategory } = useParams();
  const [searchText, setSearchText] = useState("");
  const { filteredItems } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Update category whenever the URL parameter changes
  useEffect(() => {
    if (currentCategory) {
      dispatch(filterBookByCategory(currentCategory));
    }
  }, [currentCategory, dispatch]);

  // Handle search input
  function handleSearch(val) {
    setSearchText(val);
    dispatch(filterBookByTitleOrAuthor(val));
  }

  return (
    <div className="mx-auto flex flex-col lg:max-w-[980px] xl:max-w-[1220px] my-6 px-6 lg:px-0 min-h-screen">
      <div className="flex justify-between items-center">
        {/* Search input */}
        <div className="relative flex flex-1 max-w-md border border-l-primary">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search books..."
            className="w-full py-2 pr-3 pl-10 rounded-md focus:outline-none text-black"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchText}
          />
        </div>

        {/* Category dropdown */}
        <select
          value={currentCategory}
          onChange={(e) => navigate(`/books/${e.target.value}`)}
          className="ml-4 py-2 px-3 rounded-md outline outline-1"
        >
          <option>All</option>
          <option>Coding</option>
          <option>Fiction</option>
          <option>Non-fiction</option>
          <option>Sci-Fi</option>
          <option>Biography</option>
          <option>Mystery</option>
          <option>Fantasy</option>
          <option>History</option>
        </select>
      </div>

      <h1 className="mt-6 text-xl font-semibold">{currentCategory}</h1>

      {/* Books grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {filteredItems.map(({ id, title, image }) => (
          <BookCard key={id} id={id} title={title} image={image} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooksPage;
