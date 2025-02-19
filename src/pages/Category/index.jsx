import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Category = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const categoriesPerPage = 4;

    const categories = [
        {
            title: 'Best Hip-hop Artist of the Year',
            nominees: ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4']
        },
        {
            title: 'Best Gospel Artist',
            nominees: ['Gospel Artist 1', 'Gospel Artist 2', 'Gospel Artist 3', 'Gospel Artist 4']
        },
        {
            title: 'Best New Artist',
            nominees: ['New Artist 1', 'New Artist 2', 'New Artist 3', 'New Artist 4']
        },
        {
            title: 'Album of the Year',
            nominees: ['Album 1', 'Album 2', 'Album 3', 'Album 4']
        },
        {
            title: 'Best Music Video',
            nominees: ['Video 1', 'Video 2', 'Video 3', 'Video 4']
        },
        {
            title: 'Best Collaboration',
            nominees: ['Collab 1', 'Collab 2', 'Collab 3', 'Collab 4']
        },
        {
            title: 'Best Live Performance',
            nominees: ['Performance 1', 'Performance 2', 'Performance 3', 'Performance 4']
        },
        {
            title: 'Producer of the Year',
            nominees: ['Producer 1', 'Producer 2', 'Producer 3', 'Producer 4']
        }
    ];

    const totalPages = Math.ceil(categories.length / categoriesPerPage);
    const startIndex = currentPage * categoriesPerPage;
    const displayedCategories = categories.slice(startIndex, startIndex + categoriesPerPage);

    const handlePrev = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    };

    return (
        <div className=" bg-[#2C1810] text-white ">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#FFD700]">KW Kenya Awards 2025</h1>
                <p className="text-[#FFD700] mt-2">Page {currentPage + 1} of {totalPages}</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {displayedCategories.map((category, index) => (
                    <div key={index} className="bg-[#3D261C] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-xl font-semibold mb-4 text-[#FFD700]">{category.title}</h2>
                        <select className="w-full p-2 rounded-md bg-[#2C1810] border border-[#FFD700] text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]">
                            <option value="">Select nominee</option>
                            {category.nominees.map((nominee, idx) => (
                                <option key={idx} value={nominee} className="bg-[#2C1810]">
                                    {nominee}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4">
                <button 
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className={`flex items-center gap-2 px-6 py-2 bg-[#FFD700] text-[#2C1810] rounded-md transition-colors font-semibold ${
                        currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFE55C]'
                    }`}
                >
                    <FaChevronLeft /> Prev
                </button>
                <button 
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    className={`flex items-center gap-2 px-6 py-2 bg-[#FFD700] text-[#2C1810] rounded-md transition-colors font-semibold ${
                        currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFE55C]'
                    }`}
                >
                    Next <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Category;
