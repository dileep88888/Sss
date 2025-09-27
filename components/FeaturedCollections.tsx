
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const HeartIcon: React.FC<{ filled: boolean; className?: string }> = ({ filled, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

const ProductCard: React.FC<{ product: Product; onToggleFavorite: (id: number) => void }> = ({ product, onToggleFavorite }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900">
      <img src={product.imageUrl} alt={product.name} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
        <p className="text-amber-400">{product.price}</p>
      </div>
      <button 
        onClick={() => onToggleFavorite(product.id)}
        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-red-500 transition-colors duration-300"
        aria-label="Add to wishlist"
      >
        <HeartIcon filled={product.isFavorite} className={`w-6 h-6 ${product.isFavorite ? 'text-red-500' : ''}`} />
      </button>
    </div>
  );
};


const FeaturedCollections: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Men', 'Women', 'Kids', 'Fabric'];

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setProducts(PRODUCTS);
    } else {
      setProducts(PRODUCTS.filter(p => p.category === filter));
    }
  };
  
  const toggleFavorite = (id: number) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-playfair text-center mb-4">Featured Collections</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Discover our curated selection of stage-ready outfits and premium fabrics, designed for performers who demand excellence.
        </p>
        
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-amber-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onToggleFavorite={toggleFavorite} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
