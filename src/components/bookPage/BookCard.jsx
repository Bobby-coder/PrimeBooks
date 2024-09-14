/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookCard = ({ id, title, image }) => {
  return (
    (<Link to={`/${id}`}>
      <div className="bg-background rounded-md shadow-md overflow-hidden">
        <img
          src={image}
          width={200}
          height={150}
          alt="book"
          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-2">
          <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300 truncate">
            {title}
          </h3>
        </div>
      </div>
    </Link>)
  );
};

export default BookCard;
