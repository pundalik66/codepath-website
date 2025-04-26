import React from 'react';
import { Code, Database, Link, Cloud, MessageSquare } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to address your unique business challenges and objectives.',
      color: '#3498DB'
    },
    {
      icon: <Database />,
      title: 'SaaS Product Development',
      description: 'End-to-end development of scalable, cloud-based software-as-a-service products.',
      color: '#4ECDC4'
    },
    {
      icon: <Link />,
      title: 'API Development & Integration',
      description: 'Building robust APIs and seamless integrations with third-party services and platforms.',
      color: '#2ECC71'
    },
    {
      icon: <Cloud />,
      title: 'Cloud-Based Application Solutions',
      description: 'Leveraging cloud technologies to build scalable, reliable, and cost-effective applications.',
      color: '#9B59B6'
    },
    {
      icon: <MessageSquare />,
      title: 'WhatsApp Business API Enablement',
      description: 'Implementing WhatsApp Business solutions to enhance your customer engagement strategies.',
      color: '#F1C40F'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">Our Services</h2>
          <div className="w-20 h-1 bg-[#3498DB] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer a comprehensive range of IT and SaaS development services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-[#3498DB] hover:bg-[#2980B9] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;