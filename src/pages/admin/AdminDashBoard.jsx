import React, { useState, useEffect } from 'react';
import { Users, Award, Vote, BarChart2, Search, BadgeCheck, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const genres = ['Singer', 'Comedy', 'Actress', 'Actor', 'Classical', 'Gospal'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const ArtistVotingDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('all');

  // Mock data
  const [stats] = useState({
    totalUsers: 1250,
    pendingApprovals: 15,
    totalVotes: 3750,
    activeNominees: 48
  });

  const [voteData] = useState([
    { name: 'Jan', votes: 400, newArtists: 20 },
    { name: 'Feb', votes: 600, newArtists: 25 },
    { name: 'Mar', votes: 550, newArtists: 15 },
    { name: 'Apr', votes: 780, newArtists: 30 },
    { name: 'May', votes: 850, newArtists: 22 },
    { name: 'Jun', votes: 920, newArtists: 28 }
  ]);

  const [genreData] = useState([
    { name: 'Singer', value: 35 },
    { name: 'Comedy', value: 25 },
    { name: 'Actress', value: 20 },
    { name: 'Actor', value: 10 },
    { name: 'Classical', value: 5 },
    { name: 'Gospal', value: 5 }
  ]);

  const [pendingArtists] = useState([
    { id: 1, name: 'John Doe', genre: 'Comedy', status: 'pending', votes: 145, portfolio: 'http://example.com' },
    { id: 2, name: 'Jane Smith', genre: 'Singer', status: 'pending', votes: 232, portfolio: 'http://example.com' },
    { id: 3, name: 'Mike Johnson', genre: 'Actress', status: 'pending', votes: 189, portfolio: 'http://example.com' }
  ]);

  const [recentVotes] = useState([
    { id: 1, voter: 'user123', nominee: 'Artist A', genre: 'Singer', timestamp: '2025-02-16 10:30' },
    { id: 2, voter: 'user456', nominee: 'Artist B', genre: 'Comedy', timestamp: '2025-02-16 10:25' },
    { id: 3, voter: 'user789', nominee: 'Artist C', genre: 'Actress', timestamp: '2025-02-16 10:20' }
  ]);

  const navItems = [
    { id: 'dashboard', icon: BarChart2, label: 'Dashboard' },
    { id: 'nominees', icon: Award, label: 'Nominees' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'votes', icon: Vote, label: 'Votes' }
  ];

  // Auto-collapsing sidebar component - shows only icons on small screens
  const Sidebar = () => (
    <div className="fixed md:top-0 left-0 h-full bg-white shadow-lg z-30 transition-all duration-300 w-16 md:w-64">
      <div className="p-4 border-b hidden md:block">
        <h1 className="text-xl font-bold text-gray-800">Artist Voting</h1>
      </div>
      <nav className="p-2 md:p-4">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center w-full p-2 md:p-3 rounded-lg mb-2 group relative ${
              activeTab === id ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-500'
            }`}
          >
            <Icon className="w-6 h-6 md:w-5 md:h-5 md:mr-3" />
            {/* Label for medium and larger screens */}
            <span className="hidden md:inline">{label}</span>
            {/* Tooltip for small screens */}
            <div className="absolute left-14 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:hidden">
              {label}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );

  const GenreFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="relative font-semibold">
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center bg-gray-900 space-x-2 cursor-pointer border rounded-lg px-3 py-2 hover:border-blue-400 transition-colors duration-200"
        >
          <Filter className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-500">{selectedGenre === 'all' ? 'All Genres' : selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)}</span>
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div 
          className={`absolute mt-1 w-full font-semibold bg-white border rounded-lg shadow-lg z-10 transition-all duration-300 origin-top ${
            isOpen 
              ? 'transform scale-y-100 opacity-100' 
              : 'transform scale-y-0 opacity-0 invisible'
          }`}
        >
          <ul className="py-1">
            <li 
              onClick={() => {
                setSelectedGenre('all');
                setIsOpen(false);
              }}
              className="px-3 py-2 text-sm text-gray-800 hover:bg-blue-400 cursor-pointer"
            >
              All Genres
            </li>
            {genres.map(genre => (
              <li 
                key={genre} 
                onClick={() => {
                  setSelectedGenre(genre.toLowerCase());
                  setIsOpen(false);
                }}
                className="px-3 py-2 text-sm text-gray-900 hover:bg-blue-400 cursor-pointer"
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const ApprovalModal = ({ artist, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-lg">
        <h3 className="text-lg font-semibold mb-4">Artist Approval - {artist.name}</h3>
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Genre: {artist.genre}</p>
          <p className="text-gray-600 mb-2">Current Votes: {artist.votes}</p>
          <p className="text-gray-600 mb-2">
            Portfolio: <a href={artist.portfolio} className="text-blue-500 hover:underline">View Portfolio</a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-500"
          >
            Reject
          </button>
          <button
            onClick={() => onClose(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-500"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      {/* Main Content - adapts to sidebar width */}
      <div className="flex-1 pl-16 md:pl-64 transition-all duration-300">
        <header className="bg-white shadow sticky top-0 z-20">
          <div className="px-4 py-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <GenreFilter />
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6">
          {/* Stats Cards - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Users, label: 'Total Users', value: stats.totalUsers, color: 'blue' },
              { icon: Award, label: 'Active Nominees', value: stats.activeNominees, color: 'yellow' },
              { icon: Vote, label: 'Total Votes', value: stats.totalVotes, color: 'green' },
              { icon: BadgeCheck, label: 'Pending Approvals', value: stats.pendingApprovals, color: 'purple' }
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full bg-${color}-100`}>
                    <Icon className={`w-6 h-6 text-${color}-500`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">{label}</h3>
                    <p className="text-xl font-semibold text-gray-800">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts - responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Voting Trends</h3>
              <div className="h-60 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={voteData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="votes" 
                      stroke="#3B82F6" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }}
                      name="Total Votes"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="newArtists" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      name="New Artists"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Votes by Genre</h3>
              <div className="h-60 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genreData}
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {genreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Activity - responsive grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Approvals */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Pending Artist Approvals</h3>
              </div>
              <div className="p-4">
                {pendingArtists.map((artist) => (
                  <div key={artist.id} className="mb-4 p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <h4 className="font-semibold text-gray-800">{artist.name}</h4>
                        <p className="text-sm text-gray-500">{artist.genre} • <span className="font-medium">{artist.votes} votes</span></p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedArtist(artist);
                          setShowApprovalModal(true);
                        }}
                        className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Votes */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Recent Votes</h3>
              </div>
              <div className="p-4">
                {recentVotes.map((vote) => (
                  <div key={vote.id} className="mb-4 p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <p className="font-semibold text-gray-800">{vote.nominee}</p>
                        <p className="text-sm text-gray-500">
                          Voted by: {vote.voter} • {vote.genre}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{vote.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && selectedArtist && (
        <ApprovalModal
          artist={selectedArtist}
          onClose={(approved) => {
            // Handle approval/rejection logic here
            setShowApprovalModal(false);
            setSelectedArtist(null);
          }}
        />
      )}
    </div>
  );
};

export default ArtistVotingDashboard;