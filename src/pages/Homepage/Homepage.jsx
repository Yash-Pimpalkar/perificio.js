import React from 'react'


const Homepage = () => {
  const testimonials = [
    {
      quote: "Their team helped me structure my term and health cover optimally—saved tax and gave peace of mind.",
      author: "Arjun S.",
      role: "Entrepreneur"
    },
    {
      quote: "Comprehensive wealth management with a focus on tax efficiency. Exactly what I needed!",
      author: "Priya M.",
      role: "Senior Executive"
    },
    {
      quote: "The best part is their unbiased approach. They truly put their clients' interests first.",
      author: "Rahul K.",
      role: "Business Owner"
    }
  ];

  const services= [
    {
      title: 'Insurance Advisory',
      description: 'Term & Health Insurance | Tax-Benefit Focused',
      icon: '🛡️'
    },
    {
      title: 'Taxation Services',
      description: 'Income Tax | GST | International Tax | Tools',
      icon: '📊'
    },
    {
      title: 'Wealth Management',
      description: 'Investments | Retirement | Estate | NRI Desk',
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
     


      <section className="w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gradient-to-b from-white to-gray-50">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Plan. Protect. Prosper.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Tax-optimized, unbiased financial advisory across Insurance, Tax, and Wealth.
              </p>
            <a href="#cta" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Book Free 15-Min Advisory Call</a>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-8 w-full max-w-lg">
            <img  src="/assets/hero1.jpg"
                alt="Financial Planning" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Advisory with Integrity, Precision, and Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CA-led Unbiased Opinions',
                description: 'Expert financial guidance without conflicts of interest'
              },
              {
                title: 'Integrated Planning',
                description: 'Holistic approach combining tax, wealth, and protection strategies'
              },
              {
                title: 'Client-First Approach',
                description: 'Personalized solutions tailored to your unique financial goals'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Tools & Calculators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Tools & Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Term Cover Calculator',
              '80D Deduction Estimator',
              'Capital Gains Calculator',
              'Retirement Planner'
            ].map((tool, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool}</h3>
                <p className="text-sm text-gray-600">Calculate instantly →</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md">
              Use Tools for Free
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    
      {/* Rest of the sections remain the same */}
    </div>
  );
};

export default Homepage;
