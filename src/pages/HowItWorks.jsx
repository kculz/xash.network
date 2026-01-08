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
  Sparkles,
  Layers,
  Target,
  Award,
  Clock,
  Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>How It Works - Get Started with Xash Solutions Financial Solutions</title>
        <meta name="description" content="Simple, transparent processes for all our financial solutions. Get started quickly and start earning or saving today." />
        <meta property="og:title" content="How It Works - Get Started with Xash Solutions Financial Solutions" />
        <meta property="og:description" content="Simple, transparent processes for all our financial solutions. Get started quickly and start earning or saving today." />
        <meta property="og:url" content="https://xash.network/how-it-works" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/how-it-works" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-[#F5B700] rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#1F6AE1] rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-[#F5B700]/50 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#F5B700] rounded-full mr-3 animate-pulse"></div>
              <Sparkles className="w-4 h-4 text-[#F5B700] mr-2" />
              <span className="text-sm font-bold">Simple, Transparent Processes</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
              <span className="block">How It</span>
              <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent mt-2">
                Works
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent processes for all our financial solutions. Get started quickly and start earning or saving today.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <button className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-28" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="#F5F7FA"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Layers className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Our Services</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Step-by-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service that fits your needs and follow our simple process
            </p>
          </div>

          <div className="space-y-24 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                    
                    <div className={`absolute top-8 left-8 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-4xl font-extrabold text-[#0B3C5D] mb-10">{service.title}</h3>
                  
                  <div className="space-y-6">
                    {service.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start group">
                        <div className="relative">
                          <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500`}>
                            <span className="text-sm">{step.num}</span>
                          </div>
                        </div>
                        <div className="ml-5 pt-1">
                          <h4 className="font-bold text-[#0B3C5D] text-xl mb-2">{step.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-lg font-medium">{step.desc}</p>
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

      {/* Getting Started */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Quick Start</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Getting Started is Easy</h2>
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
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="w-28 h-28 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-3xl flex items-center justify-center mx-auto shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-500">
                        <step.icon className="w-14 h-14 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#F5B700] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        0{index + 1}
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0B3C5D] text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-14 left-[calc(100%+1.5rem)] w-12 h-1 bg-gradient-to-r from-[#1F6AE1] to-[#0B3C5D] opacity-30">
                      <ArrowRight className="w-6 h-6 text-[#1F6AE1] absolute -right-3 -top-2.5 opacity-50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Who Benefits</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Solutions for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to benefit all stakeholders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-[#0B3C5D]/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed pt-0.5 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 text-white">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-6 py-2.5 rounded-full mb-6 border border-white/30">
                <Zap className="w-4 h-4 mr-2 text-[#F5B700]" />
                <span className="text-sm font-bold">Our Performance</span>
              </div>
              <h2 className="text-5xl font-extrabold mb-6">By The Numbers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { value: '24h', label: 'Quick Setup', desc: 'Get started in less than a day', icon: Clock },
                { value: '24/7', label: 'Support Available', desc: 'Round-the-clock assistance', icon: Shield },
                { value: '99.9%', label: 'System Uptime', desc: 'Reliable service always', icon: TrendingUp }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 border border-white/20">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white mb-4">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                  <p className="text-gray-200">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
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
              <p className="text-xl text-gray-600">Everything you need to know to get started</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F5F7FA] border-2 border-transparent rounded-2xl overflow-hidden hover:border-[#1F6AE1] transition-all duration-300 hover:shadow-lg">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
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
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join thousands who trust Xash Solutions for their financial needs. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Create Account
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;