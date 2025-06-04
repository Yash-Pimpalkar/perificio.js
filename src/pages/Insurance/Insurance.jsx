"use client"
import Head from 'next/head';
import React, { useState } from 'react';

const services = [
  {
    title: 'Term Insurance Planning',
    points: [
      'Coverage analysis (income, liabilities, dependents)',
      'Claim-settlement based insurer selection',
      'Tax optimization under 80C & 10(10D)',
    ],
  },
  {
    title: 'Health Insurance Advisory',
    points: [
      'Individual vs Family floater comparison',
      'Section 80D deductions',
      'Document/claim assistance',
    ],
  },
  {
    title: 'Corporate Insurance',
    points: [
      'Keyman policies, buy-sell agreements',
      'Employee group mediclaim',
    ],
  },
];

const tools = [
  {
    name: 'Term Cover Calculator',
    desc: 'Calculate ideal term cover based on your income.',
  },
  {
    name: '80D Deduction Estimator',
    desc: 'Estimate your eligible 80D deduction.',
  },
  {
    name: 'Premium Affordability Planner',
    desc: 'Plan premiums that fit your budget.',
  },
];

const trustReasons = [
  'CA-led opinion, not biased selling',
  'End-to-end assistance from planning to claiming',
];

export default function InsurancePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Head>
        <title>Insurance Advisory | Perificio</title>
        <meta name="description" content="Personalized, tax-aligned insurance advice. Protect your income, family, and future with expert CA-led guidance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gradient-to-b from-white to-gray-50">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Protect What You Have Built</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">Choose insurance products that safeguard your income, family, and future—without overpaying.</p>
            <a href="#cta" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Book Free 15-Min Advisory Call</a>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-8 w-full max-w-lg">
            <img src="/assets/Hero2.jpg" alt="Insurance Hero" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </section>

        {/* Services We Offer */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Services We Offer</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col h-full border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-blue-700">{service.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance & Tax Edge */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gray-50 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Compliance & Tax Edge</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
              <li>Maximize deductions (80C, 80D, etc.)</li>
              <li>Avoid claim rejection with proper disclosures</li>
              <li>Post-claim documentation</li>
            </ul>
          </div>
        </section>

        {/* Tools Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Tools & Calculators</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col h-full border border-gray-100">
                <h3 className="text-lg font-bold mb-2 text-blue-700">{tool.name}</h3>
                <p className="text-gray-700">{tool.desc}</p>
                {/* Replace with actual tool links or embeds */}
                <button className="mt-4 bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">Try Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Reasons Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gray-50 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Why Trust Us?</h2>
          <div className="max-w-2xl mx-auto grid gap-6 md:grid-cols-2">
            {trustReasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 border border-gray-100">
                <span className="text-blue-600 text-2xl">✓</span>
                <span className="text-gray-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer Section */}
        <section id="cta" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need help deciding?</h2>
          <p className="mb-6 text-gray-700">Book a free call with our experts for unbiased, CA-led insurance advice.</p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4 border border-gray-100">
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="name" className="font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="email" className="font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="phone" className="font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required className="px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Book Free Call</button>
            {submitted && <p className="text-green-600 font-medium mt-2">Thank you! We'll contact you soon.</p>}
          </form>
        </section>
      </main>
    </>
  );
}
