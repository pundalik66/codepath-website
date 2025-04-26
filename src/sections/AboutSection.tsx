import React from 'react';
import { Code, Server, Cloud, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">About CodePath</h2>
          <div className="w-20 h-1 bg-[#3498DB] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            CodePath is a technology-driven company focused on delivering top-tier IT services and SaaS development solutions. 
            We specialize in building smart, scalable, and secure applications tailored to empower businesses in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Code size={36} className="text-[#3498DB]" />,
              title: 'Expert Development',
              description: 'Cutting-edge software development using modern technologies and best practices.'
            },
            {
              icon: <Server size={36} className="text-[#3498DB]" />,
              title: 'Scalable Solutions',
              description: 'Build solutions that grow with your business and adapt to changing needs.'
            },
            {
              icon: <Cloud size={36} className="text-[#3498DB]" />,
              title: 'Cloud Architecture',
              description: 'Leverage the power of cloud for reliable, secure, and scalable applications.'
            },
            {
              icon: <Globe size={36} className="text-[#3498DB]" />,
              title: 'Global Standards',
              description: 'Following international best practices and compliance standards.'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#2C3E50]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;