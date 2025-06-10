"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown ,ChevronUp } from "react-feather";
import { User } from "react-feather";

const navLinks = {
  client: [
    { name: 'Home', href: '/' },
    { 
      name: 'Taxation', 
      href: '/tax',
      submenu: [
        { name: 'Direct Tax', href: '/direct-tax' },
        { name: 'InDirect Tax', href: '/indirect-tax' },
        { name: 'NCA', href: '/nca' },
        { name: 'RERA', href: '/rera' },
        { name: 'FEMA', href: '/fema' }
      ]
    },
    { 
      name: 'Wealth', 
      href: '/wealth',
      
      submenu: [
        { name: 'Invest', href: '/invest' },
        { name: 'Real Estate', href: '/real-estate' },
        { name: 'NRI', href: '/nri' },
      ]
    },
    { name: 'Insurance', href: '/insurance' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],
  admin: [
    { name: 'Home', href: '/' },
    { name: 'Insurance Admin', href: '/admin/insurance' },
    { name: 'Tax Dashboard', href: '/admin/taxation' },
    { name: 'Wealth Insights', href: '/admin/wealth' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Reports', href: '/admin/reports' },
  ],
  superadmin: [
    { name: 'Home', href: '/' },
    { name: 'Insurance Master', href: '/superadmin/insurance' },
    { name: 'Tax Controls', href: '/superadmin/taxation' },
    { name: 'Wealth System', href: '/superadmin/wealth' },
    { name: 'Settings', href: '/superadmin/settings' },
    { name: 'Logs', href: '/superadmin/logs' },
  ]
};
 
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [role] = useState('client');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-indigo-600">Perficio</Link>

          <nav className="hidden md:flex space-x-6">
            {navLinks[role].map((link, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center space-x-1">
                  <Link 
                    href={link.href} 
                    className="text-gray-700 hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                 
    <button onClick={() => toggleDropdown(index)}>
  <ChevronDown className={`w-5 h-5 text-black transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} />
</button>
                  )}
                </div>
                
                {link.submenu && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {link.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <button className="md:hidden" onClick={handleToggleSidebar}>
            <Menu className="w-6 h-6 text-black" />
          </button>
          
          <div className="flex items-center space-x-4">
            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleProfile}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <User className="w-5 h-5 text-gray-700" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-opacity-30 md:hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform">
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/" className="text-xl font-semibold text-indigo-600">Perficio</Link>
              <button onClick={handleToggleSidebar}>
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            
            <div className="flex flex-col p-4 space-y-2">
              {navLinks[role].map((link, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-indigo-600 py-2"
                      onClick={link.submenu ? () => toggleSubmenu(index) : handleToggleSidebar}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button onClick={() => toggleSubmenu(index)}>
                        <ChevronDown 
                          className={`w-5 h-5 text-black transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {link.submenu && openSubmenu === index && (
                    <div className="pl-4 mt-1 space-y-2">
                      {link.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block py-2 text-gray-600 hover:text-indigo-600"
                          onClick={handleToggleSidebar}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
