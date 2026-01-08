import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, CreditCard, Smartphone, BarChart3, DollarSign } from 'lucide-react';
import logo from "../../assets/logos/xash_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setSolutionsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Solutions', 
      href: '#',
      dropdown: [
        { name: 'POS Software & Integration', href: '/pos', icon: CreditCard },
        { name: 'Bill Payments', href: '/bill-payments', icon: DollarSign },
        { name: 'Business Financial Software', href: '/financial-software', icon: BarChart3 },
      ]
    },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Xash Logo" className='w-20' />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button 
                      ref={buttonRef}
                      onMouseEnter={() => setSolutionsHovered(true)}
                      onMouseLeave={() => setSolutionsHovered(false)}
                      className="flex items-center text-[#1A1A1A] hover:text-[#0B3C5D] transition-all duration-300 font-medium px-4 py-2.5 rounded-xl hover:bg-[#F5F7FA]"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${solutionsHovered ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      ref={dropdownRef}
                      onMouseEnter={() => setSolutionsHovered(true)}
                      onMouseLeave={() => setSolutionsHovered(false)}
                      className={`absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${solutionsHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                    >
                      {item.dropdown.map((subItem, index) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-5 py-4 text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#F5F7FA] hover:to-[#E8F0FE] hover:text-[#0B3C5D] transition-all duration-200 group/item border-b border-gray-50 last:border-b-0"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B3C5D]/10 to-[#1F6AE1]/10 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <subItem.icon className="w-5 h-5 text-[#0B3C5D]" />
                          </div>
                          <span className="font-medium text-sm">{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-[#1A1A1A] hover:text-[#0B3C5D] transition-all duration-300 font-medium px-4 py-2.5 rounded-xl hover:bg-[#F5F7FA]"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A1A1A] hover:text-[#0B3C5D] transition-colors p-2 hover:bg-[#F5F7FA] rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-1 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button 
                        className="flex items-center justify-between w-full text-[#1A1A1A] font-medium py-3 px-3 hover:bg-[#F5F7FA] rounded-xl transition-all"
                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {solutionsOpen && (
                        <div className="pl-2 space-y-1 bg-[#F5F7FA] rounded-xl p-3">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center py-3 px-3 text-[#1A1A1A] hover:text-[#0B3C5D] rounded-xl hover:bg-white transition-all"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0B3C5D]/10 to-[#1F6AE1]/10 flex items-center justify-center mr-3">
                                <subItem.icon className="w-4 h-4 text-[#0B3C5D]" />
                              </div>
                              <span className="font-medium text-sm">{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 px-3 text-[#1A1A1A] hover:text-[#0B3C5D] font-medium transition-all hover:bg-[#F5F7FA] rounded-xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;