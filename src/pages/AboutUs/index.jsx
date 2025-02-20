import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20"> {/* Increased padding to move content down */}
      {/* Header Section */}
      <h2 className="text-center text-gold text-3xl md:text-5xl font-bold mt-10"> {/* Added margin-top */}
        KW Kenya Awards <span className="block text-4xl md:text-6xl">2025</span>
      </h2>
      
      {/* About Us Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-gray-300 text-lg leading-relaxed">
          <h3 className="text-white text-2xl font-semibold">About Us</h3>
          <p>
            Donec tristique, arcu dictum pharetra dignissim, odio mauris blandit nisl, at varius diam diam faucibus ligula. Sed accumsan luctus lorem vel maximus. Nulla et ultricies diam, sed euismod nisi. Morbi id suscipit velit. Ut odio diam, faucibus vitae libero ac, volutpat scelerisque ipsum. Nunc.
          </p>
        </div>
        <div className="md:w-1/3"> {/* Reduced width to make image smaller */}
          <img src="/Sample img 1.webp" alt="About Us" className="rounded-lg w-full max-w-sm mx-auto" /> {/* Limited max width */}
        </div>
      </div>
      
      {/* Connect With Us Section */}
      <div className="mt-16">
        <h3 className="text-white text-2xl font-semibold">Connect with us</h3>
        <div className="flex flex-col md:flex-row gap-10 mt-6">
          <div className="md:w-1/3"> {/* Reduced width to make image smaller */}
            <img src="/Sample img 2.webp" alt="Contact" className="rounded-lg w-full max-w-sm mx-auto" /> {/* Limited max width */}
          </div>
          <div className="md:w-1/2 text-gray-300 text-lg">
            <h4 className="text-white font-bold">MAIN OFFICE</h4>
            <p>123 Anywhere St.<br/>Any City, State<br/>Any Country<br/>(123) 456 7890</p>
            <h4 className="mt-4 text-white font-bold">SOCIAL MEDIA</h4>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-blue-500">Facebook</a>
              <a href="#" className="text-pink-500">Instagram</a>
              <a href="#" className="text-white">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 border-t border-gray-700 pt-6 text-gray-400 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <a href="#" className="hover:text-white">Contact Us</a>
          <p>📞 254 000 000 00</p>
          <a href="mailto:kw@awards.co.ke" className="hover:text-white">kw@awards.co.ke</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
        <p className="mt-4">&copy; 2025 KW Kenya Awards. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AboutUs;
