import React, { useState } from 'react';
import { 
  CreditCard,
  Smartphone,
  Tablet,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Cpu,
  DollarSign,
  ShoppingCart,
  PieChart,
  FileText,
  Star,
  Clock,
  ChevronDown,
  Sparkles,
  Award,
  Target,
  Layers,
  TrendingDown
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const PosSolutions = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: CreditCard,
      title: 'Multi-Payment Support',
      description: 'Accept airtime, electricity bills, DSTV, water bills, and mobile data bundles across all major providers.',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reporting',
      description: 'Live dashboard with transaction analytics, commission tracking, and performance metrics.',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level encryption with PCI DSS compliance for all payment processing.',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Process transactions in USD, ZWL, and other currencies with automatic conversion.',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Users,
      title: 'Agent Management',
      description: 'Manage multiple agents with individual performance tracking and commission rates.',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Transactions completed in under 30 seconds with immediate confirmation.',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const benefits = [
    {
      title: 'For Retail Merchants',
      icon: ShoppingCart,
      items: [
        'Increase store foot traffic with bill payment services',
        'Earn additional revenue from commissions',
        'No technical expertise required',
        '24/7 transaction capability',
        'Detailed sales reporting'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      title: 'For Mobile Agents',
      icon: Smartphone,
      items: [
        'Work anywhere with mobile POS capability',
        'Earn commissions on every transaction',
        'Low startup costs with mobile app',
        'Flexible working hours',
        'Real-time commission tracking'
      ],
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80'
    },
    {
      title: 'For Business Owners',
      icon: PieChart,
      items: [
        'Streamline multiple payment channels',
        'Automated reconciliation',
        'Custom reporting and analytics',
        'Scalable as business grows',
        'API integration options'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Chido M.',
      business: 'Corner Store, Harare',
      content: 'Since adding Xash POS, our daily revenue increased by 40%. Bill payments bring customers in daily.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80'
    },
    {
      name: 'Tendai K.',
      business: 'Mobile Agent, Bulawayo',
      content: 'The mobile app makes it easy to process transactions anywhere. Commissions are paid on time.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&q=80'
    }
  ];

  const faqs = [
    {
      question: 'What do I need to get started?',
      answer: 'You need a smartphone (Android or iOS) with internet access, valid ID for registration, and a bank account for commission withdrawals.'
    },
    {
      question: 'How are commissions calculated?',
      answer: 'Commissions vary by service: Airtime (1-3%), Electricity bills (0.5-2%), DSTV (1-2%), Data bundles (2-4%). Higher volume agents get better rates.'
    },
    {
      question: 'Is there a minimum balance required?',
      answer: 'No minimum balance required. You can start with any amount and top up as needed.'
    },
    {
      question: 'How fast are transactions processed?',
      answer: 'Most transactions process in under 30 seconds. Airtime and data bundles are instant, bill payments take 30-60 seconds.'
    },
    {
      question: 'How do I withdraw my commissions?',
      answer: 'Commissions can be withdrawn daily to your bank account or mobile money wallet. Processing takes 24 hours on business days.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>POS Software & Integration - Xash Solutions</title>
        <meta name="description" content="Advanced POS systems with seamless integration for processing airtime, bill payments, and mobile data bundles. Earn commissions on every transaction." />
        <meta property="og:title" content="POS Software & Integration - Xash Solutions" />
        <meta property="og:description" content="Advanced POS systems with seamless integration for processing airtime, bill payments, and mobile data bundles. Earn commissions on every transaction." />
        <meta property="og:url" content="https://xash.network/pos" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/pos" />
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
                <span className="text-sm font-bold">Trusted by 10,000+ Agents</span>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="block">POS Software &</span>
                  <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                    Integration
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Transform your business with our comprehensive point-of-sale system. Process payments, earn commissions, and grow your revenue.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <a href="https://wa.me/263716409412">
                  <button className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center justify-center">
                      Start Earning Today
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </a>
                <a href="https://docs.xash.co.zw">
                  <button className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                    Start Integration
                  </button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-gray-300 font-medium">Uptime</div>
                </div>
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">&lt;30s</div>
                  <div className="text-sm text-gray-300 font-medium">Processing</div>
                </div>
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">24/7</div>
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
                        <p className="text-sm text-gray-300 mb-1">Transaction Volume</p>
                        <h3 className="text-3xl font-bold">$2.5M+</h3>
                      </div>
                      <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl text-sm font-bold border border-green-500/30">
                        ↑ 40%
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <CreditCard className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Airtime</div>
                        <div className="text-xl font-bold">Instant</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Zap className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Bills</div>
                        <div className="text-xl font-bold">All Providers</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Globe className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Data</div>
                        <div className="text-xl font-bold">Real-time</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <DollarSign className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Commission</div>
                        <div className="text-xl font-bold">Up to 4%</div>
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
                    <p className="text-xs text-gray-400">Status</p>
                    <p className="text-sm font-bold">Active</p>
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
              <span className="text-sm font-bold">Powerful Features</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools to run a successful POS business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
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
              <span className="text-sm font-bold">Solutions For Everyone</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Who Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our POS solutions are designed for various business needs
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

      {/* Commission Structure */}
      <section className="py-24 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 text-white">
              <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-6 py-2.5 rounded-full mb-6 border border-white/30">
                <DollarSign className="w-4 h-4 mr-2 text-[#F5B700]" />
                <span className="text-sm font-bold">Earnings</span>
              </div>
              <h2 className="text-5xl font-extrabold mb-6">Commission Structure</h2>
              <p className="text-xl text-gray-200">Competitive rates across all services</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">1-3%</div>
                  <div className="text-gray-200 font-medium">Airtime Sales</div>
                </div>
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">0.5-2%</div>
                  <div className="text-gray-200 font-medium">Electricity Bills</div>
                </div>
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Tablet className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">1-2%</div>
                  <div className="text-gray-200 font-medium">DSTV Payments</div>
                </div>
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">2-4%</div>
                  <div className="text-gray-200 font-medium">Data Bundles</div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-[#F5B700]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#F5B700]/40">
                  <Sparkles className="w-5 h-5 text-[#F5B700] mr-2" />
                  <p className="text-white font-medium text-lg">
                    Higher commission rates available for high-volume agents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2 fill-[#F5B700]" />
              <span className="text-sm font-bold">Success Stories</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#0B3C5D]/10 hover:border-[#1F6AE1] p-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < testimonial.rating ? 'text-[#F5B700] fill-[#F5B700]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 shadow-lg border-2 border-[#1F6AE1]"
                  />
                  <div>
                    <p className="font-bold text-[#0B3C5D] text-lg">{testimonial.name}</p>
                    <p className="text-[#1F6AE1] font-semibold">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">FAQ</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know</p>
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
              Ready to Start Earning?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join thousands of successful agents and merchants using Xash POS solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://docs.xash.co.zw">
              <button className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                View Documentation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              </a>
              <a href="mailto:info@xash.network">
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Contact Support
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PosSolutions;