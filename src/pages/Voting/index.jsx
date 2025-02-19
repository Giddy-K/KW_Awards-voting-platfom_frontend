import React, { useState } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const VotingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Example data - replace with your actual data
    const candidates = [
        { id: 1, name: "John Doe", votes: 12 },
        { id: 2, name: "Jane Smith", votes: 15 },
        { id: 3, name: "Mike Johnson", votes: 8 },
        { id: 4, name: "Alice Brown", votes: 10 },
        { id: 5, name: "Bob White", votes: 5 },
        
    ];

    const handleVote = (id) => {
        // Implement voting logic here
        console.log(`Voted for candidate with id: ${id}`);
    };

    return (
        <div className="min-h-screen bg-brown-900 text-white p-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
                Voting Page
            </h1>

            {/* Search Section */}
            <div className="relative max-w-md mx-auto mb-8">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search candidates..."
                    className="w-full pl-10 pr-4 py-2 bg-brown-800 border border-yellow-700 rounded-lg focus:outline-none focus:border-yellow-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Voting List */}
            <div className="max-w-2xl mx-auto space-y-4">
                {candidates.map((candidate) => (
                    <div
                        key={candidate.id}
                        className="flex items-center justify-between bg-yellow-700 p-4 rounded-lg"
                    >
                        <span className="text-lg">{candidate.name}</span>
                        <span className="text-white">{candidate.votes} votes</span>
                        <button
                            onClick={() => handleVote(candidate.id)}
                            className="text-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-lg transition-colors"
                        >
                            Vote
                        </button>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-8 mt-8">
                <button className="flex items-center text-yellow-700 hover:text-yellow-600 transition-colors">
                    <FaChevronLeft className="mr-2" />
                    Prev
                </button>
                <button className="flex items-center text-yellow-700 hover:text-yellow-600 transition-colors">
                    Next
                    <FaChevronRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default VotingPage;