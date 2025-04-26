import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );

      if (result.text === 'OK') {
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">Contact Us</h2>
          <div className="w-20 h-1 bg-[#3498DB] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a project in mind or want to learn more about our services? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">Send Us a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#3498DB] hover:bg-[#2980B9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#3498DB]/10 p-4 rounded-lg mr-4">
                  <Mail className="text-[#3498DB]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50] mb-1">Email</h4>
                  <a 
                    href="mailto:info@codepath.in" 
                    className="text-gray-600 hover:text-[#3498DB] transition-colors duration-300"
                  >
                    info@codepath.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#3498DB]/10 p-4 rounded-lg mr-4">
                  <Phone className="text-[#3498DB]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50] mb-1">Phone</h4>
                  <p className="text-gray-600">+91-8879230645</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#3498DB]/10 p-4 rounded-lg mr-4">
                  <MapPin className="text-[#3498DB]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50] mb-1">Office</h4>
                  <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden h-64">
              {/* Replace with actual map in a real implementation */}
              <div className="w-full h-full bg-[#ECF0F1] flex items-center justify-center">
                <MapPin className="text-[#3498DB] mr-2" size={24} />
                <span className="text-gray-600 font-medium">Map location would display here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;