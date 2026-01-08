import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  BarChart3, 
  UserPlus, 
  Settings, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Shield,
  ChevronDown,
  Sparkles
} from 'lucide-react';

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: CreditCard,
      title: 'POS Solutions',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      steps: [
        { num: '01', title: 'Sign Up & Register', desc: 'Create your merchant account and complete verification' },
        { num: '02', title: 'Hardware Setup', desc: 'Get your POS device or install our mobile app' },
        { num: '03', title: 'Start Transactions', desc: 'Begin processing payments and earning commissions' },
        { num: '04', title: 'Track & Withdraw', desc: 'Monitor earnings and withdraw commissions daily' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Bill Payments',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      steps: [
        { num: '01', title: 'Customer Identification', desc: 'Customer provides bill details or account number' },
        { num: '02', title: 'Payment Processing', desc: 'Select payment method and complete transaction' },
        { num: '03', title: 'Commission Calculation', desc: 'Automatic commission credited to your account' },
        { num: '04', title: 'Receipt & Confirmation', desc: 'Digital receipt sent instantly to customer' }
      ]
    },
    {
      icon: BarChart3,
      title: 'Financial Software',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      steps: [
        { num: '01', title: 'System Assessment', desc: 'Evaluate your current financial processes' },
        { num: '02', title: 'Setup & Integration', desc: 'Configure software and integrate with systems' },
        { num: '03', title: 'Training & Onboarding', desc: 'Train your team on using the software' },
        { num: '04', title: 'Go Live & Optimize', desc: 'Launch and continuously improve your system' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'For Merchants & Agents',
      items: [
        'Earn commissions on every transaction',
        'Multiple revenue streams',
        '24/7 transaction capability',
        'Real-time commission tracking',
        'Comprehensive training'
      ],
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80'
    },
    {
      title: 'For Business Users',
      items: [
        'Streamlined operations',
        'Automated reconciliation',
        'Multi-currency support',
        'Real-time reporting',
        'API integration'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
    },
    {
      title: 'For End Customers',
      items: [
        'One-stop bill payment solution',
        'Instant processing',
        'Multiple payment options',
        'Digital receipts',
        'Secure transactions'
      ],
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get started?',
      answer: 'For POS solutions, you can start within 24 hours after registration. Bill payment access is instant after verification. Financial software implementation typically takes 2-5 business days.'
    },
    {
      question: 'What commissions do agents earn?',
      answer: 'Commission rates vary by service. Airtime sales typically earn 1-3%, bill payments 0.5-2%, and data bundles 2-4%. Higher volume agents qualify for increased rates.'
    },
    {
      question: 'Is there a minimum transaction amount?',
      answer: 'No, there is no minimum transaction amount. You can process transactions of any value.'
    },
    {
      question: 'How do I withdraw my commissions?',
      answer: 'Commissions can be withdrawn daily to your registered bank account or mobile money wallet. Withdrawals are processed within 24 hours during business days.'
    },
    {
      question: 'What support is available?',
      answer: 'We provide 24/7 customer support via phone, email, and WhatsApp. Additionally, we offer comprehensive documentation and regular training.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Kept as is */}
      <section className="relative bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1F6AE1] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1F6AE1] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#F5B700] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-28 lg:py-40 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#F5B700] mr-2" />
              <span className="text-sm font-medium">Simple, Transparent Processes</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              How It 
              <span className="block bg-gradient-to-r from-[#F5B700] to-white bg-clip-text  mt-2">
                Works
              </span>
            </h1>

            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent processes for all our financial solutions. Get started quickly and start earning or saving today.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">Our Services</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Step-by-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service that fits your needs and follow our simple process
            </p>
          </div>

          <div className="space-y-32 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/30 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-8 left-8 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-4xl font-bold text-[#0B3C5D] mb-10">{service.title}</h3>
                  
                  <div className="space-y-6">
                    {service.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start group">
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          {step.num}
                        </div>
                        <div className="pt-1">
                          <h4 className="font-bold text-[#1A1A1A] text-xl mb-2">{step.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started - Changed to white */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-[#0B3C5D]">Quick Start</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Getting Started is Easy</h2>
              <p className="text-xl text-gray-600">
                Follow these simple steps to begin your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: UserPlus, title: 'Register', desc: 'Create your account in minutes' },
                { icon: Settings, title: 'Setup', desc: 'Configure your system easily' },
                { icon: CreditCard, title: 'Transact', desc: 'Start processing payments' },
                { icon: TrendingUp, title: 'Earn', desc: 'Track and withdraw commissions' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <step.icon className="w-14 h-14 text-white" />
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-14 left-[calc(50%+3.5rem)] w-[calc(100%-3.5rem)] h-1 bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] opacity-20"></div>
                    )}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">Who Benefits</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Solutions for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to benefit all stakeholders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats - Changed to white */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-[#0B3C5D]">Our Performance</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">By The Numbers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { value: '24h', label: 'Quick Setup', desc: 'Get started in less than a day' },
                { value: '24/7', label: 'Support Available', desc: 'Round-the-clock assistance' },
                { value: '99.9%', label: 'System Uptime', desc: 'Reliable service always' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] bg-clip-text  mb-4">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-[#1A1A1A] mb-2">{stat.label}</div>
                  <p className="text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-sm font-semibold text-[#0B3C5D]">FAQ</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know to get started</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#1F6AE1] transition-colors">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-xl text-[#1A1A1A] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-6 h-6 text-[#1F6AE1] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;