import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Shield,
  FileText,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import logo from "../../assets/logos/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/XashPay', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/XashPay', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/xashpay', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/xashpay/', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1F6AE1] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F6AE1] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5B700] rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Xash Logo" className='w-20' />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Simplifying bill payments and POS solutions for businesses and individuals across the Globe.
            </p>
           <div className="space-y-4">
              <a href="tel:+263781234567" className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B700]/20 transition-all">
                  <Phone className="w-4 h-4 text-[#F5B700]" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-[#F5B700] transition-colors">+263 78 123 4567</span>
              </a>
              <a href="mailto:info@xash.network" className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5B700]/20 transition-all">
                  <Mail className="w-4 h-4 text-[#F5B700]" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-[#F5B700] transition-colors">info@xash.network</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#F5B700] to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#F5B700] transition-all text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Legal
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#F5B700] to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#F5B700] transition-all text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Trust */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Connect With Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#F5B700] to-transparent rounded-full"></div>
            </h3>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-[#F5B700] transition-all flex items-center justify-center group hover:scale-110"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <Shield className="w-5 h-5 text-[#F5B700]" />
                <div>
                  <p className="text-white text-sm font-semibold">Secure Payments</p>
                  <p className="text-gray-400 text-xs">Bank-level encryption</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <CheckCircle className="w-5 h-5 text-[#F5B700]" />
                <div>
                  <p className="text-white text-sm font-semibold">Fully Compliant</p>
                  <p className="text-gray-400 text-xs">Licensed & regulated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}Xash Solutions. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;