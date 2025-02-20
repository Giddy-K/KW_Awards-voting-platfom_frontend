import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-primary">KW Kenya Awards 2025</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Celebrating talent and recognizing excellence in the entertainment industry.
        </p>
      </div>

      {/* What We Value Section */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-primary">What We Value</h2>
        <p className="mt-2 text-gray-700">
          Our mission is to ensure transparency and credibility in awarding the best talents.
        </p>
      </div>

      {/* Our Partners Section */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-primary">Our Partners</h2>
        <p className="mt-2 text-gray-700">We collaborate with industry leaders to support talent.</p>
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-medium">Contact Us</h3>
        <p className="text-gray-600">Email: kw@awards.co.ke | Phone: 254 000 000 00</p>
      </div>
    </div>
  );
};

export default AboutUs;
