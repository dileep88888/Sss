
import React from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
      <div className="flex justify-center items-center mb-4 text-amber-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const services = [
    {
      title: 'Premium Stage Clothing',
      description: 'Handpicked fabrics and avant-garde designs that ensure you command the stage.',
      icon: <CheckIcon className="w-12 h-12" />
    },
    {
      title: 'Professional Stitching Service',
      description: 'Our expert tailors provide meticulous attention to detail for a flawless, custom fit.',
      icon: <CheckIcon className="w-12 h-12" />
    },
    {
      title: 'Urgent Delivery Options',
      description: 'Need an outfit in a hurry? We offer expedited services to meet your tight deadlines.',
      icon: <CheckIcon className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-playfair text-center mb-12">Why Choose Eagle Stitch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
