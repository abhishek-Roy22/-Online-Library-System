import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/bookSlice';
import { AlertCircle } from 'lucide-react';

const categoryOptions = [
  { value: 'Fiction', label: 'Fiction' },
  { value: 'Historical', label: 'Historical' },
  { value: 'Sci-Fi', label: 'Sci-Fi' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Classic', label: 'Classic' },
];

const AddBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: [],
    image: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    const rating = Number(formData.rating);
    if (!formData.rating || isNaN(rating) || rating < 0 || rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }

    if (formData.category.length === 0) {
      newErrors.category = 'At least one category is required';
    }

    if (!formData.image.trim()) {
      newErrors.image = 'Cover URL is required';
    } else {
      try {
        new URL(formData.image);
      } catch {
        newErrors.image = 'Please enter a valid URL';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'category' && e.target instanceof HTMLSelectElement) {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormData((prev) => ({
        ...prev,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const newBook = {
        id: Number(Date.now()),
        ...formData,
        rating: Number(formData.rating),
      };
      dispatch(addBook(newBook));
      navigate('/browse');
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: 'Failed to add book. Please try again.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMessage = ({ error }) =>
    error ? (
      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
        <AlertCircle className="w-4 h-4" />
        {error}
      </p>
    ) : null;

  return (
    <section className="w-full bg-slate-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800 rounded-lg shadow-lg p-6 mt-5 mb-5">
        <h2 className="text-2xl text-slate-100 font-bold mb-6 text-center">
          Add New Book
        </h2>

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-md text-red-500">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-slate-200 mb-2">
              Title
            </label>
            <input
              id="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Enter book title"
              className={`w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 placeholder-slate-400 border ${
                errors.title ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <ErrorMessage error={errors.title} />
          </div>

          <div>
            <label htmlFor="author" className="block text-slate-200 mb-2">
              Author
            </label>
            <input
              id="author"
              value={formData.author}
              onChange={handleChange}
              type="text"
              name="author"
              placeholder="Enter author name"
              className={`w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 placeholder-slate-400 border ${
                errors.author ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <ErrorMessage error={errors.author} />
          </div>

          <div>
            <label htmlFor="description" className="block text-slate-200 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              name="description"
              placeholder="Enter book description"
              rows={4}
              className={`w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 placeholder-slate-400 border ${
                errors.description ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <ErrorMessage error={errors.description} />
          </div>

          <div>
            <label htmlFor="rating" className="block text-slate-200 mb-2">
              Rating
            </label>
            <input
              id="rating"
              value={formData.rating}
              onChange={handleChange}
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              placeholder="Enter book rating (0-5)"
              className={`w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 placeholder-slate-400 border ${
                errors.rating ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <ErrorMessage error={errors.rating} />
          </div>

          <div>
            <label htmlFor="category" className="block text-slate-200 mb-2">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={handleChange}
              multiple
              name="category"
              className={`w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 placeholder-slate-400 border ${
                errors.category ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              size={4}
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ErrorMessage error={errors.category} />
          </div>

          <div>
            <label htmlFor="image" className="block text-slate-200 mb-2">
              Cover Image URL
            </label>
            <input
              id="coverUrl"
              value={formData.image}
              onChange={handleChange}
              type="url"
              name="image"
              placeholder="Enter cover image URL"
              className={`w-full px-4 py-2 rounded-md bg-slate-700 text-slate-100 placeholder-slate-400 border ${
                errors.image ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <ErrorMessage error={errors.image} />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 
                ${
                  isSubmitting
                    ? 'bg-blue-500/50 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              {isSubmitting ? 'Adding Book...' : 'Add Book'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
