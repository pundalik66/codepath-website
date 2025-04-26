import React from 'react';
import { Blocks, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4 group">
              <Blocks size={24} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
              <h3 className="text-xl font-bold">CodePath</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Innovation through IT & SaaS Solutions
            </p>
            <p className="text-sm text-gray-400">
              &copy; 2025 CodePath. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Operated by CodePath Technologies
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Contact', 'Privacy Policy'].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                      className="text-gray-300 hover:text-[#3498DB] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 text-[#3498DB] mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@codepath.in"
                  className="text-gray-300 hover:text-[#3498DB] transition-colors duration-300"
                >
                  info@codepath.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 text-[#3498DB] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-[#3498DB] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;