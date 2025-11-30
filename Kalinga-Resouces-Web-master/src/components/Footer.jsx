import React from 'react';
// Remove Mountain from this import
import { Phone, Mail, MapPin } from 'lucide-react';

// Import your logo image, matching the filename exactly
import logo from '../assets/Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Replace the Mountain icon with your logo image */}
              <img src={logo} alt="Kalinga Resources Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">Kalinga Resources</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of mining operations, logistics solutions, and infrastructure development
              services with a commitment to excellence and social responsibility.
            </p>
            <p className="text-sm text-gray-400">
              MSME Registration No.: UDYAM-OD-19-0012979
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="/csr" className="text-gray-300 hover:text-yellow-500 transition-colors">CSR Initiatives</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-yellow-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <div className="text-gray-300 text-sm">
                  <div>99377 37375</div>
                  <div>72056 33540</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>kalingaresources.mining@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  Plot No. 717, Near Aurobindo School,<br />
                  Patia, Bhubaneswar, Odisha
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Kalinga Resources. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;