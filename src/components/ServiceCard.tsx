import React from 'react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="p-6">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#2C3E50] group-hover:text-[#3498DB] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div 
        className="h-1" 
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ServiceCard;