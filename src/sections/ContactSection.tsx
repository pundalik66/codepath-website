import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_iuidy34',  
        'template_fpvqfw4',  
        formRef.current,
        'ZRaUBuQMvXDFO5_Ta'  
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4 max-w-md">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full border px-3 py-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
