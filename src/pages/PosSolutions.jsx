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
  Sparkles
} from 'lucide-react';

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
      {/* Hero Section - Kept as is with white background */}
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
                <span className="text-sm font-medium">Trusted by 10,000+ Agents</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                POS Software &
                <span className="block bg-gradient-to-r from-[#F5B700] to-white bg-clip-text  mt-2">
                  Integration
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Transform your business with our comprehensive point-of-sale system. Process payments, earn commissions, and grow your revenue.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">99.9%</div>
                  <div className="text-sm text-gray-300 font-medium">Uptime</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">&lt;30s</div>
                  <div className="text-sm text-gray-300 font-medium">Processing</div>
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                  alt="POS system in use"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-[#F5B700]" />
                        <div className="text-sm text-gray-300">Airtime Sales</div>
                        <div className="text-lg font-bold">Instant</div>
                      </div>
                      <div className="text-center">
                        <Zap className="w-8 h-8 mx-auto mb-2 text-[#F5B700]" />
                        <div className="text-sm text-gray-300">Bill Payments</div>
                        <div className="text-lg font-bold">All Providers</div>
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

      {/* Features Section - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">Powerful Features</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools to run a successful POS business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
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

      {/* Benefits Section with Images - Changed to white */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0B3C5D]">Solutions For Everyone</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Who Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our POS solutions are designed for various business needs
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
                      className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
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

      {/* Commission Structure - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-sm font-semibold text-[#0B3C5D]">Earnings</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Commission Structure</h2>
              <p className="text-xl text-gray-600">Competitive rates across all services</p>
            </div>

            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">1-3%</div>
                  <div className="text-gray-600 font-medium">Airtime Sales</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">0.5-2%</div>
                  <div className="text-gray-600 font-medium">Electricity Bills</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Tablet className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">1-2%</div>
                  <div className="text-gray-600 font-medium">DSTV Payments</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">2-4%</div>
                  <div className="text-gray-600 font-medium">Data Bundles</div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600 text-lg">
                  <Sparkles className="w-5 h-5 inline-block text-[#F5B700] mr-2" />
                  Higher commission rates available for high-volume agents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Changed to white */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0B3C5D]">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                <div className="p-10">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < testimonial.rating ? 'text-[#F5B700] fill-[#F5B700]' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover mr-4 shadow-lg"
                    />
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-lg">{testimonial.name}</p>
                      <p className="text-[#1F6AE1] font-medium">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Changed to grayscale */}
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
              <p className="text-xl text-gray-600">Everything you need to know</p>
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

export default PosSolutions;