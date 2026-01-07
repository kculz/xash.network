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
  Lock
} from 'lucide-react';

const FinancialSoftware = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'Automatic transaction categorization and journal entries with real-time financial data'
    },
    {
      icon: FileText,
      title: 'Invoice Management',
      description: 'Create, send, and track invoices with custom templates and automatic reminders'
    },
    {
      icon: TrendingUp,
      title: 'Financial Analytics',
      description: 'Advanced analytics with profit & loss analysis and cash flow forecasting'
    },
    {
      icon: RefreshCw,
      title: 'Bank Reconciliation',
      description: 'AI-powered transaction matching with 95% automatic reconciliation rate'
    },
    {
      icon: BarChart3,
      title: 'Custom Reporting',
      description: 'Generate standard and custom reports in PDF, Excel, or live dashboards'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'REST API with comprehensive documentation and SDKs for major languages'
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
      ]
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
      ]
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
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$49',
      period: 'per month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 transactions/month',
        'Basic accounting features',
        'Standard reports',
        'Email support',
        '1 user account'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Business',
      price: '$149',
      period: 'per month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 transactions/month',
        'Advanced accounting',
        'Custom reporting',
        'API access',
        '5 user accounts',
        'Priority support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored pricing',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Full feature access',
        'Custom modules',
        'Advanced API',
        'Unlimited users',
        'Dedicated support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit encryption for all data',
      items: ['PCI DSS', 'GDPR', 'ISO 27001']
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular user permissions',
      items: ['Multi-factor auth', 'IP whitelisting', 'Audit logs']
    },
    {
      icon: Clock,
      title: 'Data Backup',
      description: '99.9% uptime guarantee',
      items: ['Daily backups', 'Disaster recovery', 'Redundancy']
    },
    {
      icon: Globe,
      title: 'Multi-Currency',
      description: 'Support for 10+ currencies',
      items: ['USD', 'ZWL', 'ZAR', 'KES']
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
      <section className="relative bg-[#0B3C5D] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white border-opacity-20">
                <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm">For Businesses & Developers</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Business Financial Software
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive accounting, reporting, and reconciliation tools with powerful API integration for businesses across Africa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#1F6AE1] text-white px-8 py-4 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold">
                  View Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">99.9%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">&lt;1s</div>
                  <div className="text-sm text-gray-300">API Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20">
                <div className="aspect-video bg-[#1F6AE1] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-12 h-12" />
                    </div>
                    <p className="text-sm">Financial Dashboard</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <Calculator className="w-8 h-8 text-[#F5B700] mx-auto mb-2" />
                    <div className="text-sm">Accounting</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <Code className="w-8 h-8 text-[#F5B700] mx-auto mb-2" />
                    <div className="text-sm">API Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Comprehensive Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your business finances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Who Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for different business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0B3C5D] p-8 text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Security & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security for your financial data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <div className="space-y-1">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-500">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-[#1F6AE1] shadow-xl' : 'border-gray-200'} relative hover:shadow-xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F5B700] text-white px-4 py-1 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#0B3C5D]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <p className="text-gray-600 mb-8">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#1F6AE1] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-[#1F6AE1] text-white hover:bg-[#1558B8]'
                    : 'bg-[#0B3C5D] text-white hover:bg-[#092f48]'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0B3C5D] mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F5F7FA] transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-lg text-[#1A1A1A] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#1F6AE1] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Financial Operations
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join forward-thinking businesses using our financial software
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialSoftware;