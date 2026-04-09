import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl font-light text-slate-300">404</h1>
        <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
        <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
        <p className="text-slate-500">The page you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          ← Go Home
        </button>
      </div>
    </div>
  );
}
