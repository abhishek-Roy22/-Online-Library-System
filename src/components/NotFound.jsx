import { useRouteError, Link } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="max-w-full h-screen bg-slate-900 flex items-center justify-center flex-col gap-5">
      <h1 className="text-9xl text-slate-100 font-bold font-sans">Oops!</h1>
      <p className="font-bold font-sans text-3xl text-slate-300">
        {error.status} {error.statusText}
      </p>
      <p className="text-slate-400 font-semibold text-start">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to="/">
        <button className="bg-slate-800 border-none rounded-md py-3 px-4 w-fit cursor-pointer text-slate-100 font-bold hover:bg-slate-700 transition-all duration-200 uppercase">
          Go to homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
