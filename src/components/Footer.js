// src/components/Footer.js (Minimalist Version)
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50 border-t border-amber-200/70 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Copyright */}
          <p className="text-sm text-amber-700">
            © {currentYear} Rylee Pamintuan. All rights reserved.
          </p>
          
          {/* Small decorative element */}
          <div className="flex justify-center gap-1 mt-3">
            <div className="w-1 h-1 rounded-full bg-amber-300"></div>
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
            <div className="w-1 h-1 rounded-full bg-amber-300"></div>
          </div>
          
          {/* Optional: Built with tag */}
          <p className="text-xs text-amber-400 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;