import React, { useState } from 'react';
import { Menu, X, ChevronDown, CreditCard, Smartphone, BarChart3, DollarSign } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-[#ffffff] shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#0B3C5D] rounded-lg flex items-center justify-center">
              <span className="text-[#ffffff] font-bold text-xl">X</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0B3C5D]">
                Xash.network
              </h1>
              <p className="text-xs text-[#1A1A1A]">Financial Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button 
                      className="flex items-center text-[#1A1A1A] hover:text-[#0B3C5D] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-[#F5F7FA]"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-[#ffffff] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-3 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#0B3C5D] transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          <subItem.icon className="w-4 h-4 mr-3 text-[#0B3C5D]" />
                          <span className="font-medium text-sm">{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-[#1A1A1A] hover:text-[#0B3C5D] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-[#F5F7FA]"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="bg-[#0B3C5D] text-[#ffffff] px-6 py-2 rounded-lg hover:bg-[#1F6AE1] transition-all font-medium ml-4">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A1A1A] hover:text-[#0B3C5D] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2 bg-[#ffffff] rounded-lg p-4 shadow-lg border border-gray-200">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button 
                        className="flex items-center justify-between w-full text-[#1A1A1A] font-medium py-2"
                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {solutionsOpen && (
                        <div className="pl-4 space-y-2 bg-[#F5F7FA] rounded-lg p-3">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center py-2 text-[#1A1A1A] hover:text-[#0B3C5D] rounded-lg px-2 hover:bg-[#ffffff] transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 mr-3 text-[#0B3C5D]" />
                              <span className="font-medium text-sm">{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-[#1A1A1A] hover:text-[#0B3C5D] font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <button className="bg-[#0B3C5D] text-[#ffffff] px-6 py-3 rounded-lg hover:bg-[#1F6AE1] transition-all font-medium mt-2 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;