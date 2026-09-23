import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold text-gold">404</h1>
      <p className="mt-4 text-lg">We couldn&apos;t find that page.</p>
      <Link to="/" className="mt-6 text-gold underline">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
