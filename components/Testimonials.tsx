
import React from 'react';
import { TESTIMONIALS } from '../constants';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-playfair text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testimonial => (
            <div key={testimonial.id} className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                  <img src={testimonial.imageUrl} alt={testimonial.author} className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400" />
                  <div>
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
              </div>
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
            <h3 className="text-3xl font-bold font-playfair text-center mb-8">Our Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-64 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/gallery1/400/600" alt="Gallery image 1" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"/>
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/gallery2/400/600" alt="Gallery image 2" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"/>
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/gallery3/400/600" alt="Gallery image 3" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"/>
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/gallery4/400/600" alt="Gallery image 4" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
