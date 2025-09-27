
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/stage/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 leading-tight">
          Craft Your Stage Presence
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          With Eagle Stitch, where premium fabrics and expert tailoring unite to create unforgettable stage wear.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-amber-400 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            Shop Outfits
          </button>
          <button className="border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 w-full sm:w-auto">
            Book Stitching
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
