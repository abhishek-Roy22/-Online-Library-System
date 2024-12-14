const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search by title or author..."
        className="w-full border-2 outline-none focus:ring-2 focus:ring-slate-300 px-3 py-2 font-semibold font-serif bg-transparent rounded-md caret-slate-100 text-slate-100 mt-3 mb-3"
      />
    </div>
  );
};

export default SearchBar;
