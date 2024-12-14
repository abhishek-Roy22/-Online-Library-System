import { ArrowLeft, Star } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === Number(id))
  );

  if (!book) {
    return (
      <div className="bg-slate-900 w-full min-h-[90vh] flex items-center justify-center">
        <h1 className="text-center text-slate-100 font-bold font-serif text-3xl ">
          Book Not Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[90vh] bg-slate-900">
      <div className="max-w-7xl mx-auto h-[80vh] grid place-content-center">
        <button
          onClick={() => navigate('/browse')}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft />
          Back to Browse
        </button>
        <div className="w-full h-96 flex flex-col sm:flex-row bg-slate-500 rounded-md gap-3">
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={book.image}
              alt={book.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 p-2 items-start justify-center">
            <h1 className="text-lg text-slate-100 font-serif font-semibold">
              {book.title}
            </h1>
            <span className="text-slate-400 block font-bold p-2 font-serif">
              Author: {book.author}
            </span>
            <span className="px-2 ml-2 bg-slate-600 text-slate-100 rounded-sm flex items-center gap-2 font-serif w-fit">
              {book.rating}
              <Star color="yellow" size={20} />
            </span>
            <div className="block ml-2 mb-2">
              {book.category.map((c) => (
                <span
                  key={c}
                  className="bg-slate-600 text-slate-100 p-2 rounded-sm mr-1 mb-2 font-serif"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="text-lg text-slate-300 text-justify">
              {book.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
