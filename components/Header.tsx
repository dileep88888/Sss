
import React, { useState } from 'react';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ShoppingCartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'Shop', 'Stitching', 'About', 'Contact'];

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-playfair text-amber-400">
            Eagle Stitch 🦅
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-white hover:text-amber-400 transition-colors duration-300">{link}</a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-amber-400 transition-colors duration-300">
              <SearchIcon className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-amber-400 transition-colors duration-300 relative">
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </button>
            <button className="hidden md:block text-white hover:text-amber-400 transition-colors duration-300">
              <UserIcon className="w-6 h-6" />
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a key={link} href="#" className="text-white hover:text-amber-400 transition-colors duration-300 text-center py-2">{link}</a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
