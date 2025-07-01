import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    )
    .then(
      () => {
        setStatusMessage('Thank you! Your message has been sent.');
        e.target.reset();
      },
      (error) => {
        console.error('EmailJS error:', error);
        setStatusMessage('Oops! Something went wrong. Please try again later.');
      }
    );
  };

  return (
    <div className="flex flex-col items-center px-4 py-12 bg-parchment min-h-screen">
      <h1 className="text-4xl font-bold text-gamebrown mb-4">Contact Us</h1>
      <p className="text-lg text-forestgreen mb-6">We would love to hear from you!</p>

      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div>
          <label htmlFor="user_name" className="block text-gamebrown mb-1">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full border border-[#E3D6C5] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BFA58A]"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-gamebrown mb-1">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full border border-[#E3D6C5] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BFA58A]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gamebrown mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-[#E3D6C5] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BFA58A]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gamebrown text-white font-semibold py-2 rounded hover:bg-[#6c4f3d] transition"
        >
          Send Message
        </button>
      </form>

      {statusMessage && (
        <p className="mt-4 text-center text-forestgreen">{statusMessage}</p>
      )}
    </div>
  );
}