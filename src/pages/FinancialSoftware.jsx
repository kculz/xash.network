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
  Sparkles,
  Award,
  Target,
  Layers,
  Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Business Financial Software - Accounting & Reporting - Xash Solutions</title>
        <meta name="description" content="Comprehensive accounting, reporting, and reconciliation tools with powerful API integration for businesses across Africa." />
        <meta property="og:title" content="Business Financial Software - Accounting & Reporting - Xash Solutions" />
        <meta property="og:description" content="Comprehensive accounting, reporting, and reconciliation tools with powerful API integration for businesses across Africa." />
        <meta property="og:url" content="https://xash.network/financial-software" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/financial-software" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-[#F5B700] rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#1F6AE1] rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-[#F5B700]/50 hover:bg-white/20 transition-all duration-300">
                <div className="w-2 h-2 bg-[#F5B700] rounded-full mr-3 animate-pulse"></div>
                <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-bold">For Businesses & Developers</span>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="block">Business Financial</span>
                  <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                    Software
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Comprehensive accounting, reporting, and reconciliation tools with powerful API integration for businesses across Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                  View Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-gray-300 font-medium">Accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">&lt;1s</div>
                  <div className="text-sm text-gray-300 font-medium">API Response</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F5B700] to-[#1F6AE1] rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/20">
                      <div>
                        <p className="text-sm text-gray-300 mb-1">Financial Health</p>
                        <h3 className="text-3xl font-bold">Excellent</h3>
                      </div>
                      <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl text-sm font-bold border border-green-500/30">
                        ↑ 28%
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Calculator className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Accounting</div>
                        <div className="text-xl font-bold">Automated</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <BarChart3 className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Reports</div>
                        <div className="text-xl font-bold">Real-time</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Code className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">API</div>
                        <div className="text-xl font-bold">Full Access</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Shield className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Security</div>
                        <div className="text-xl font-bold">Bank-Level</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-1/3 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-xl hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Compliant</p>
                    <p className="text-sm font-bold">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-28" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="#F5F7FA"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F5F7FA] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Layers className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Core Features</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Comprehensive Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your business finances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 leading-tight group-hover:text-[#1F6AE1] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Target className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">For Every Business</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Who Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different business needs
            </p>
          </div>
          
          <div className="space-y-24 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                    
                    <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-2xl flex items-center justify-center shadow-2xl">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-4xl font-extrabold text-[#0B3C5D] mb-10">{benefit.title}</h3>
                  <ul className="space-y-6">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg leading-relaxed pt-1.5 font-medium">{item}</span>
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
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Trust & Safety</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Security & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security for your financial data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 group-hover:text-[#1F6AE1] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="inline-block bg-[#F5F7FA] px-4 py-2 rounded-full text-sm text-gray-700 font-medium mx-1 mb-2 border border-gray-200">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                  <Code className="w-4 h-4 mr-2" />
                  <span className="text-sm font-bold">Developer Tools</span>
                </div>
                <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Powerful API Integration</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  REST API with comprehensive documentation and SDKs for seamless integration into your existing systems.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Complete Documentation', desc: 'Detailed guides and code examples', icon: FileText },
                    { title: 'Sandbox Environment', desc: 'Test integrations risk-free', icon: Zap },
                    { title: 'Multiple SDKs', desc: 'Support for major programming languages', icon: Code },
                    { title: 'Webhook Support', desc: 'Real-time event notifications', icon: TrendingUp }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-5 group">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500">
                          <item.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-[#0B3C5D] text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                    alt="API development"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-xl flex items-center justify-center shadow-xl">
                          <Code className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-white">
                          <p className="text-sm mb-1">API Status</p>
                          <p className="text-lg font-bold">Live & Active</p>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl text-sm font-bold border border-green-500/30">
                        99.9%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">FAQ</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border-2 border-transparent rounded-2xl overflow-hidden hover:border-[#1F6AE1] transition-all duration-300 hover:shadow-lg">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F5F7FA] transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-xl text-[#0B3C5D] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-6 h-6 text-[#1F6AE1] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1F6AE1]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-[#F5B700] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              Ready to Modernize Your Accounting?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join hundreds of businesses using Xash Financial Software for comprehensive accounting and reporting solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
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