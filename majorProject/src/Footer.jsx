import React from 'react';

const Footer = () => {
  return (
     <footer className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* About */}
          <div className="animate-slideUp">
            <h3  className="text-2xl font-bold mb-4  hover:text-[#06B6D4] transition duration-300">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We are committed to delivering high-quality content and services 
              to our users worldwide, empowering learning and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slideUp delay-100">
            <h3  className="text-2xl font-bold mb-4  hover:text-[#06B6D4] transition duration-300">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Blog", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="relative group text-gray-300 hover:text-[#06B6D4] transition duration-300"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#06B6D4] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slideUp delay-200">
            <h3 className="text-2xl font-bold mb-4  hover:text-[#06B6D4] transition duration-300">Contact Us</h3>
            <p className="text-gray-300">Email: contact@example.com</p>
            <p className="text-gray-300">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 animate-fadeIn delay-300">
          &copy; 2025 YourCompany. All rights reserved.
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out forwards;
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 0.8s ease-in-out forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
