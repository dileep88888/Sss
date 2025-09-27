
import React from 'react';

const StitchingService: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold font-playfair mb-4">Bespoke Stitching Service</h2>
            <p className="text-gray-400 mb-6">
              Your vision, our expertise. Provide your measurements and let our master tailors craft a piece that is uniquely yours. Perfect fit, guaranteed.
            </p>
            <img 
              src="https://picsum.photos/seed/tailor/600/400" 
              alt="Tailor at work" 
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2 w-full bg-gray-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Book Your Appointment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                 <input type="text" placeholder="Chest (in)" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />
                 <input type="text" placeholder="Waist (in)" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />
                 <input type="text" placeholder="Hips (in)" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />
                 <input type="text" placeholder="Length (in)" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />
              </div>

              <div>
                <label htmlFor="measurementFile" className="block text-sm font-medium text-gray-300 mb-2">Or upload measurement chart:</label>
                <input 
                  type="file" 
                  id="measurementFile"
                  className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-amber-500"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">Preferred Appointment Date:</label>
                <input type="date" id="date" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" style={{colorScheme: 'dark'}} />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-400 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StitchingService;
