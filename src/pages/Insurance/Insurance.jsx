"use client";
import React from 'react';
import Link from 'next/link';

const InsurancePage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'health',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Insurance Solutions</h1>
          <p className="text-xl mb-8">Protect what matters most with our comprehensive insurance plans</p>
          <Link href="#contact" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Insurance Types */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Insurance Products</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Health Insurance */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-600 mb-4">Comprehensive coverage for you and your family's medical needs.</p>
            <Link href="#" className="text-indigo-600 font-medium hover:underline">Learn more →</Link>
          </div>

          {/* Auto Insurance */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Auto Insurance</h3>
            <p className="text-gray-600 mb-4">Protect your vehicle with flexible coverage options.</p>
            <Link href="#" className="text-indigo-600 font-medium hover:underline">Learn more →</Link>
          </div>

          {/* Home Insurance */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Home Insurance</h3>
            <p className="text-gray-600 mb-4">Safeguard your home and belongings against unexpected events.</p>
            <Link href="#" className="text-indigo-600 font-medium hover:underline">Learn more →</Link>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="insuranceType" className="block text-gray-700 mb-2">Insurance Type</label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="health">Health Insurance</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="travel">Travel Insurance</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">What does health insurance typically cover?</h3>
            <p className="text-gray-600">Health insurance usually covers hospitalization, doctor visits, prescription medications, preventive care, and sometimes dental and vision care. Coverage varies by plan.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">How are insurance premiums calculated?</h3>
            <p className="text-gray-600">Premiums are based on factors like your age, location, coverage amount, deductible, and in some cases, health status or driving record.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Can I bundle multiple insurance policies?</h3>
            <p className="text-gray-600">Yes, many insurers offer discounts when you bundle multiple policies like home and auto insurance together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
