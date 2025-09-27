
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Eagle Stitch 🦅</h3>
            <p className="text-sm">Crafting stage presence with every thread. Premium tailoring for the modern performer.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Kids' Outfits</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Fabric Store</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Join our newsletter for exclusive offers and behind-the-scenes content.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-400 text-white" />
              <button type="submit" className="bg-amber-400 text-black px-4 rounded-r-md font-semibold hover:bg-amber-500 transition-colors">Go</button>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Eagle Stitch. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
