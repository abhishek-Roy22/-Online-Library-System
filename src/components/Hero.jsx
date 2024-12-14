import { Link } from 'react-router-dom';
import { Books } from '../utils/Data';
import Card from './Card';

const categories = [
  'Fiction',
  'Historical',
  'Sci-Fi',
  'Adventure',
  'Romance',
  'Classics',
];

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh]">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover w-full min-h-[90vh] blur-sm"></div>
        <div className="relative max-w-3xl mx-auto h-[500px] flex flex-col items-start justify-center gap-4">
          <h1 className="text-5xl text-slate-100 font-serif z-[999]">
            Welcome To Roy Library!
          </h1>
          <p className="font-normal text-wrap text-slate-300 font-serif">
            Discover a world of knowledge with <strong>Roy Library!</strong>{' '}
            Your ultimate digital library for exploring and managing a wide
            collection of books across various genres. Seamlessly browse, add,
            and organize your favorite reads, all in one place. Elevate your
            reading experience today!
          </p>
          <Link to="/browse">
            <button className="bg-slate-900 border-none rounded-md py-3 px-4 w-fit cursor-pointer text-slate-100 font-bold hover:bg-slate-800 transition-all duration-200">
              Browse Books
            </button>
          </Link>
        </div>
      </section>
      {/* Categories Section */}
      <section className="w-full bg-slate-900">
        <h2 className="text-center text-3xl text-slate-100 font-serif mb-2">
          Categories
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/browse/${category.toLowerCase()}`}
              className="bg-slate-500 text-slate-100 p-2 rounded-sm mr-1 mb-2 font-serif text-center"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
      {/* Popular Book Section */}
      <section className="w-full bg-slate-900 pt-10 pb-10">
        <h2 className="text-center text-3xl text-slate-100 font-serif mb-2">
          Popular Book
        </h2>
        <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
