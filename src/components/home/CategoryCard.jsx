import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function CategoryCard({ name, thumbnail }) {
  return (
    <Link to={`/books/${name}`}>
      <div className="bg-background rounded-md shadow-md overflow-hidden">
        <img
          src={`https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/${thumbnail}.jpg`}
          width={200}
          height={150}
          alt="book"
          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-2">
          <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300 truncate">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
