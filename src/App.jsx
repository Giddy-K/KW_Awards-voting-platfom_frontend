import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import store from './components/store/Store';
import HomePage from './pages/Home/HomePage';

// Route-level code splitting: each page below is loaded on first visit.
const VotingPage = lazy(() => import('./pages/Voting'));
const Category = lazy(() => import('./pages/Category'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Register = lazy(() => import('./pages/Register'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashBoard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="pt-28 text-center text-white" role="status">
      Loading…
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vote" element={<VotingPage />} />
              <Route path="/category" element={<Category />} />
              <Route path="/gallery" element={<div className="p-8">Gallery Page</div>} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/faqs" element={<div className="p-8">FAQs Page</div>} />
              <Route path="/register" element={<Register />} />
              {/* TODO(phase 2): protect with an auth guard once auth exists. */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
