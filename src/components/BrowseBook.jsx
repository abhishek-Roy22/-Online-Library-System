import { useParams } from 'react-router-dom';
import Card from './Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchBar from './SearchBar';

const BrowseBook = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const books = useSelector((state) => {
    let filtered = state.books.books;

    if (category) {
      filtered = filtered.filter((book) =>
        book.category.some((c) => c.toLowerCase() === category.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  });

  return (
    <section className="w-full bg-slate-900 min-h-screen">
      <h2 className="text-3xl text-center text-slate-100 uppercase">
        {category ? `${category} Books` : 'All Books'}
      </h2>
      <div className="max-w-7xl mx-auto">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className="wffull grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseBook;
