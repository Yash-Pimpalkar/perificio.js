"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "react-feather"; // Or your preferred icon lib
const navLinks = {
  client: [
    { name: 'Home', href: '/' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Taxation', href: '/tax' },
    { name: 'Wealth', href: '/wealth' },
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
  const [role] = useState('client'); // can be dynamic later

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Sticky Navbar: only visible when sidebar is closed */}
      {!isSidebarOpen && (
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">Perficio</div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex space-x-6">
              {navLinks[role].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Sign In */}
            <div className="hidden md:block">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={handleToggleSidebar}>
              <Menu className="w-6 h-6 !text-black" />
            </button>
          </div>
        </header>
      )}

      {/* Sidebar: only visible when sidebar is open */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-semibold text-indigo-600">Perficio</span>
            <button onClick={handleToggleSidebar}>
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {navLinks[role].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={handleToggleSidebar}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4">
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
