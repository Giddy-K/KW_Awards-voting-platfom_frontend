import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import VotingPage from './pages/Voting';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App min-h-screen min-w-screen bg-gradient-to-b from-[#2C1810] to-[#1a0f0a]">
        <Navbar />
        <main className=" px-4 pt-20 pb-12">
          <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/vote" element={<VotingPage />} />
          </Routes>
        </main>
        <footer className="text-center text-gray-400 text-sm py-4">
        </footer>
      </div>
    </Router>
  );
}

export default App;
