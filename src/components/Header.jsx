import { BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex flex-col gap-6 md:flex-row md:gap-0 md:px-8 lg:px-10">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpenText className="w-6 h-6" />
          <span className="text-lg font-semibold">PrimeBooks</span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link to="/books/All">Browse books</Link>

          <Link to="/add-book">Add book</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
