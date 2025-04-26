import React from 'react';
import { ShieldCheck, Eye, Lock, FileText } from 'lucide-react';

const PrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
                         <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">Privacy Policy</h2>
          <div className="w-20 h-1 bg-[#3498DB] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12 max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6 leading-relaxed">
            At CodePath, we are committed to safeguarding your privacy. We collect minimal information necessary to deliver our services and ensure that your data is never shared without consent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {[
              {
                icon: <ShieldCheck size={24} className="text-[#2ECC71]" />,
                title: 'Data Protection',
                description: 'We implement robust security measures to protect your personal information from unauthorized access or disclosure.'
              },
              {
                icon: <Eye size={24} className="text-[#3498DB]" />,
                title: 'Transparency',
                description: 'We are clear about what data we collect and how we use it, with no hidden terms or conditions.'
              },
              {
                icon: <Lock size={24} className="text-[#F39C12]" />,
                title: 'Secure Storage',
                description: 'All sensitive information is encrypted and stored securely following industry best practices.'
              },
              {
                icon: <FileText size={24} className="text-[#9B59B6]" />,
                title: 'Data Rights',
                description: 'You have the right to access, correct, or delete your personal information at any time.'
              }
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <p className="text-gray-700 leading-relaxed">
            For any inquiries related to data privacy, please contact{' '}
            <a 
              href="mailto:privacy@codepath.in" 
              className="text-[#3498DB] hover:underline"
            >
              privacy@codepath.in
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;