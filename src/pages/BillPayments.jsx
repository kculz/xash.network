import React, { useState } from 'react';
import { 
  Zap,
  Shield,
  Clock,
  Globe,
  Smartphone,
  Wifi,
  Tv,
  Droplets,
  CreditCard,
  Users,
  TrendingUp,
  CheckCircle,
  BarChart3,
  ArrowRight,
  DollarSign,
  ChevronDown,
  Star,
  Sparkles
} from 'lucide-react';

const BillPayments = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const billProviders = [
    {
      icon: Zap,
      name: 'ZESA',
      category: 'Electricity',
      description: 'Prepaid and postpaid electricity payments with instant token generation',
      processingTime: '30-60 seconds',
      commission: '0.5-2%',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Tv,
      name: 'DSTV',
      category: 'TV & Entertainment',
      description: 'Monthly subscriptions, Box Office, and premium packages',
      processingTime: 'Instant',
      commission: '1-2%',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Droplets,
      name: 'Water Bills',
      category: 'Municipal Services',
      description: 'Municipal water bill payments with digital receipts',
      processingTime: '45-90 seconds',
      commission: '0.5-1.5%',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Smartphone,
      name: 'Mobile Airtime',
      category: 'Mobile Services',
      description: 'Instant airtime topup for all major networks',
      processingTime: 'Instant',
      commission: '2-4%',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Wifi,
      name: 'Internet',
      category: 'Internet Services',
      description: 'Internet bill payments and data bundle purchases',
      processingTime: 'Instant',
      commission: '1-3%',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Smartphone,
      name: 'Data Bundles',
      category: 'Mobile Services',
      description: 'Mobile data bundles for all major networks',
      processingTime: 'Instant',
      commission: '2-4%',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Instant Processing',
      description: 'Most bills processed within 30 seconds',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-level security for all transactions',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Globe,
      title: 'Multi-Country',
      description: 'Services across multiple markets',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: TrendingUp,
      title: 'Commission Earnings',
      description: 'Earn on every transaction processed',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: BarChart3,
      title: 'Real-time Reports',
      description: 'Track all transactions instantly',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const processSteps = [
    { num: '01', title: 'Select Biller', desc: 'Choose from supported providers', icon: CreditCard },
    { num: '02', title: 'Enter Details', desc: 'Input account or meter number', icon: CheckCircle },
    { num: '03', title: 'Make Payment', desc: 'Complete secure transaction', icon: DollarSign },
    { num: '04', title: 'Get Confirmation', desc: 'Receive instant digital receipt', icon: Sparkles }
  ];

  const faqs = [
    {
      question: 'How long does bill processing take?',
      answer: 'Airtime and data bundles are instant. Electricity tokens take 30-60 seconds. TV subscriptions are instant. Water and municipal bills take 45-90 seconds.'
    },
    {
      question: 'What commission do agents earn?',
      answer: 'Commissions vary by service: Electricity (0.5-2%), TV subscriptions (1-2%), Water bills (0.5-1.5%), Mobile topups (2-4%), Data bundles (2-4%).'
    },
    {
      question: 'Can I schedule recurring payments?',
      answer: 'Yes, you can schedule recurring payments for regular bills like DSTV, electricity, and water. Set it once and payments are made automatically.'
    },
    {
      question: 'What if I enter wrong details?',
      answer: 'We validate account details before processing. If wrong details are entered, the transaction will fail and funds are refunded within 24 hours.'
    },
    {
      question: 'How do I get receipts?',
      answer: 'Digital receipts are sent via SMS and email instantly. You can also download receipts from your transaction history in the dashboard.'
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

        <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
                <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-medium">50+ Supported Billers</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Bill Payments
                <span className="block bg-gradient-to-r from-[#F5B700] to-white bg-clip-text  mt-2">
                  Made Simple
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Pay electricity, DSTV, water, mobile, and internet bills instantly. Earn commissions as an agent or simplify your business payments.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">Instant</div>
                  <div className="text-sm text-gray-300 font-medium">Processing</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">50+</div>
                  <div className="text-sm text-gray-300 font-medium">Billers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Available</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" 
                  alt="Person making mobile payment"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"></div>
                
                {/* Floating Cards */}
                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F5B700] to-[#d4a000] rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">Electricity</div>
                          <div className="font-bold">Instant</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#1558B8] rounded-xl flex items-center justify-center">
                          <Tv className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">TV & Media</div>
                          <div className="font-bold">Instant</div>
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

      {/* Supported Bills - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">Payment Options</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Supported Bill Providers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay all your bills from one convenient platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {billProviders.map((provider, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${provider.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${provider.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <provider.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Processing</div>
                      <div className="font-bold text-[#1F6AE1] text-sm">{provider.processingTime}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{provider.name}</h3>
                  <div className="text-sm text-[#1F6AE1] font-semibold mb-4">{provider.category}</div>
                  <p className="text-gray-600 mb-8 leading-relaxed">{provider.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Commission</div>
                      <div className="font-bold text-[#0B3C5D] text-lg">{provider.commission}</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#1F6AE1] group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Changed to white */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80" 
                  alt="Mobile payment process"
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/20 to-transparent"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-[#0B3C5D]">Simple Process</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">How It Works</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Simple four-step process for all bill payments
              </p>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <step.icon className="w-7 h-7 mb-0.5" />
                      <span className="text-xs font-bold">{step.num}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold text-[#1A1A1A] text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Changed to grayscale */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features for all your bill payment needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure - Changed to white */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-gray-50 px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-[#0B3C5D]">Earnings</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Commission Structure</h2>
              <p className="text-xl text-gray-600">Earn on every transaction you process</p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">0.5-2%</div>
                  <div className="text-gray-600 font-medium">Electricity</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Tv className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">1-2%</div>
                  <div className="text-gray-600 font-medium">TV Bills</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0B3C5D] mb-3">2-4%</div>
                  <div className="text-gray-600 font-medium">Airtime</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Wifi className="w-10 h-10 text-white" />
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

export default BillPayments;