import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  return (
    <div className="w-full overflow-hidden rounded-md bg-slate-800 shadow-md hover:scale-105 transition-all duration-300">
      <img
        src={book.image}
        alt={book.title}
        className="w-full object-cover h-64"
      />
      <div className="flex justify-between items-center p-2">
        <h1 className="text-lg text-slate-100 font-serif font-semibold">
          {book.title}
        </h1>
        <span className="px-2 bg-slate-500 text-slate-100 rounded-sm flex items-center gap-2 font-serif">
          {book.rating}
          <Star color="yellow" size={20} />
        </span>
      </div>
      <span className="text-slate-400 block font-bold p-2 font-serif">
        Author: {book.author}
      </span>
      <div className="block ml-2 mb-2">
        {book?.category.map((c) => (
          <span
            key={c}
            className="bg-slate-500 text-slate-100 p-2 rounded-sm mr-1 mb-2 font-serif"
          >
            {c}
          </span>
        ))}
      </div>
      <Link
        to={`/bookdetails/${book.id}`}
        className="text-blue-500 p-2 font-semibold font-serif"
      >
        Read more...
      </Link>
    </div>
  );
};

export default Card;
