import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import Hero from './components/Hero.jsx';
import BrowseBook from './components/BrowseBook.jsx';
import AddBook from './components/AddBook.jsx';
import BookDetails from './components/BookDetails.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/browse',
        element: <BrowseBook />,
      },
      {
        path: '/browse/:category',
        element: <BrowseBook />,
      },
      {
        path: '/bookdetails/:id',
        element: <BookDetails />,
      },
      {
        path: '/addbook',
        element: <AddBook />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
