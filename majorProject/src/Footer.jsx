import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to delivering high-quality content and services to our users worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-orange-400 transition duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-400 transition duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-orange-400 transition duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-400 transition duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: contact@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
