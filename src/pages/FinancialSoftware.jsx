import React, { useState } from 'react';
import { 
  BarChart3,
  Calculator,
  Shield,
  Code,
  Users,
  CheckCircle,
  Clock,
  Globe,
  ArrowRight,
  ChevronDown,
  FileText,
  TrendingUp,
  RefreshCw,
  Building,
  Lock,
  Sparkles
} from 'lucide-react';

const FinancialSoftware = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'Automatic transaction categorization and journal entries with real-time financial data',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: FileText,
      title: 'Invoice Management',
      description: 'Create, send, and track invoices with custom templates and automatic reminders',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: TrendingUp,
      title: 'Financial Analytics',
      description: 'Advanced analytics with profit & loss analysis and cash flow forecasting',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: RefreshCw,
      title: 'Bank Reconciliation',
      description: 'AI-powered transaction matching with 95% automatic reconciliation rate',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: BarChart3,
      title: 'Custom Reporting',
      description: 'Generate standard and custom reports in PDF, Excel, or live dashboards',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'REST API with comprehensive documentation and SDKs for major languages',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const benefits = [
    {
      title: 'For Small Businesses',
      icon: Users,
      items: [
        'Affordable monthly pricing',
        'No accounting expertise required',
        'Automated tax calculations',
        'Mobile app access',
        'POS integration'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'For Enterprises',
      icon: Building,
      items: [
        'Multi-company consolidation',
        'Advanced user permissions',
        'Custom reporting modules',
        'SLA guarantees',
        'Dedicated support team'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      title: 'For Developers',
      icon: Code,
      items: [
        'Comprehensive API documentation',
        'Sandbox environment',
        'Webhook support',
        'SDKs for major languages',
        'Developer community'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit encryption for all data',
      items: ['PCI DSS', 'GDPR', 'ISO 27001'],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular user permissions',
      items: ['Multi-factor auth', 'IP whitelisting', 'Audit logs'],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Clock,
      title: 'Data Backup',
      description: '99.9% uptime guarantee',
      items: ['Daily backups', 'Disaster recovery', 'Redundancy'],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Globe,
      title: 'Multi-Currency',
      description: 'Support for 10+ currencies',
      items: ['USD', 'ZWL', 'ZAR', 'KES'],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const faqs = [
    {
      question: 'How does the API integration work?',
      answer: 'Our REST API allows you to programmatically access all financial data. We provide comprehensive documentation, SDKs in multiple languages, and a sandbox environment for testing.'
    },
    {
      question: 'What accounting standards do you support?',
      answer: 'We support multiple accounting standards including IFRS, GAAP, and local standards for Zimbabwe, South Africa, and other African countries.'
    },
    {
      question: 'Can I import data from my current system?',
      answer: 'Yes, we support import from Excel, CSV, QuickBooks, Xero, and other accounting systems. Our team can assist with data migration.'
    },
    {
      question: 'Is the software compliant with local tax regulations?',
      answer: 'Yes, our software is updated regularly to comply with local tax regulations including VAT, income tax, and other statutory requirements.'
    },
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-level security with 256-bit encryption, regular security audits, and compliance with PCI DSS, GDPR, and ISO 27001 standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1F6AE1] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1F6AE1] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#F5B700] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
                <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-medium">For Businesses & Developers</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Business Financial
                <span className="block bg-gradient-to-r from-[#F5B700] to-white bg-clip-text  mt-2">
                  Software
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Comprehensive accounting, reporting, and reconciliation tools with powerful API integration for businesses across Africa.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">99.9%</div>
                  <div className="text-sm text-gray-300 font-medium">Accuracy</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">&lt;1s</div>
                  <div className="text-sm text-gray-300 font-medium">API Response</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Support</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Financial analytics dashboard"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F5B700] to-[#d4a000] rounded-xl flex items-center justify-center">
                          <Calculator className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">Accounting</div>
                          <div className="font-bold">Automated</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#1558B8] rounded-xl flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">API Access</div>
                          <div className="font-bold">Full</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#F5F7FA] px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0B3C5D]">Core Features</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Comprehensive Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your business finances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Images */}
      <section className="py-28 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">For Every Business</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Who Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different business needs
            </p>
          </div>
          
          <div className="space-y-32 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/30 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center shadow-2xl">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-4xl font-bold text-[#0B3C5D] mb-8">{benefit.title}</h3>
                  <ul className="space-y-5">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg leading-relaxed pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#F5F7FA] px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0B3C5D]">Trust & Safety</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Security & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security for your financial data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="inline-block bg-[#F5F7FA] px-4 py-2 rounded-full text-sm text-gray-600 font-medium mx-1 mb-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration Showcase */}
      <section className="py-28 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <div className="inline-block bg-white px-6 py-2 rounded-full mb-6 shadow-sm">
                  <span className="text-sm font-semibold text-[#0B3C5D]">Developer Tools</span>
                </div>
                <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Powerful API Integration</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  REST API with comprehensive documentation and SDKs for seamless integration into your existing systems.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Complete Documentation', desc: 'Detailed guides and code examples' },
                    { title: 'Sandbox Environment', desc: 'Test integrations risk-free' },
                    { title: 'Multiple SDKs', desc: 'Support for major programming languages' },
                    { title: 'Webhook Support', desc: 'Real-time event notifications' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                    alt="API development"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#F5F7FA] px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-[#0B3C5D]">FAQ</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#1F6AE1] transition-colors">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F5F7FA] transition-colors"
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

export default FinancialSoftware;