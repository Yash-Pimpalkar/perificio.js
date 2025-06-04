import React from 'react'
const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Partners', href: '#' },
];
const serviceLinks = [
  { label: 'Insurance', href: '#' },
  { label: 'Tax', href: '#' },
  { label: 'Wealth', href: '#' },
  { label: 'Compliance', href: '#' },
  { label: 'NRI Services', href: '#' },
];
const toolLinks = [
  { label: 'Calculators', href: '#' },
  { label: 'Estimators', href: '#' },
  { label: 'Planners', href: '#' },
  { label: 'Knowledge Base', href: '#' },
];
const contactLinks = [
  { label: 'Email', href: 'mailto:info@perificio.com', icon: '✉️' },
  { label: 'Phone', href: 'tel:+911234567890', icon: '📞' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
  { label: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
  { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
];
const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Sitemap', href: '#' },
];

const Footer = () => {
  return (
    <footer className="w-full min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="flex-1 flex flex-col lg:flex-row gap-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12">
        {/* Company Info */}
        <div className="flex-1 min-w-[180px] mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-blue-700">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map(link => (
              <li key={link.label}><a href={link.href} className="hover:text-blue-600 transition">{link.label}</a></li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div className="flex-1 min-w-[180px] mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-blue-700">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map(link => (
              <li key={link.label}><a href={link.href} className="hover:text-blue-600 transition">{link.label}</a></li>
            ))}
          </ul>
        </div>
        {/* Tools */}
        <div className="flex-1 min-w-[180px] mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-blue-700">Tools</h3>
          <ul className="space-y-2">
            {toolLinks.map(link => (
              <li key={link.label}><a href={link.href} className="hover:text-blue-600 transition">{link.label}</a></li>
            ))}
          </ul>
        </div>
        {/* Contact & Socials */}
        <div className="flex-1 min-w-[180px] mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-blue-700">Contact & Socials</h3>
          <ul className="space-y-2">
            {contactLinks.map(link => (
              <li key={link.label} className="flex items-center gap-2">
                <span>{link.icon}</span>
                <a href={link.href} className="hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-bold mb-4 text-blue-700">Newsletter</h3>
          <form className="flex flex-col gap-3">
            <input type="email" placeholder="Your email address" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition">Subscribe</button>
          </form>
          <p className="text-xs text-gray-500 mt-2">Get the latest updates and insights.</p>
        </div>
      </div>
      {/* Legal & Copyright */}
      <div className="border-t border-gray-200 py-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between bg-white">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
          {legalLinks.map(link => (
            <a key={link.label} href={link.href} className="text-sm hover:text-blue-600 transition">{link.label}</a>
          ))}
        </div>
        <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Perificio. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
