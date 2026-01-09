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
  Sparkles,
  Award,
  Target,
  Layers,
  Play
} from 'lucide-react';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Bill Payments - Pay ZESA, DSTV, Water & Mobile Bills - Xash Solutions</title>
        <meta name="description" content="Instant bill payments for electricity (ZESA), DSTV, water, airtime, and mobile data bundles. 50+ supported billers with 24/7 availability." />
        <meta property="og:title" content="Bill Payments - Pay ZESA, DSTV, Water & Mobile Bills - Xash Solutions" />
        <meta property="og:description" content="Instant bill payments for electricity (ZESA), DSTV, water, airtime, and mobile data bundles. 50+ supported billers with 24/7 availability." />
        <meta property="og:url" content="https://xash.network/bill-payments" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/bill-payments" />
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
                <span className="text-sm font-bold">50+ Supported Billers</span>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="block">Pay All Your</span>
                  <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                    Bills Instantly
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Electricity, DSTV, water, mobile, and internet bills. All in one place. Earn commissions as you transact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Start Paying Bills
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                  View Billers
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">Instant</div>
                  <div className="text-sm text-gray-300 font-medium">Processing</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-300 font-medium">Billers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Available</div>
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
                        <p className="text-sm text-gray-300 mb-1">Monthly Volume</p>
                        <h3 className="text-3xl font-bold">$1.2M+</h3>
                      </div>
                      <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl text-sm font-bold border border-green-500/30">
                        ↑ 35%
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Zap className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Electricity</div>
                        <div className="text-xl font-bold">30-60s</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Tv className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">TV Bills</div>
                        <div className="text-xl font-bold">Instant</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Smartphone className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Airtime</div>
                        <div className="text-xl font-bold">Instant</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                        <Wifi className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Data</div>
                        <div className="text-xl font-bold">Real-time</div>
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
                    <p className="text-xs text-gray-400">Success</p>
                    <p className="text-sm font-bold">99.8%</p>
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

      {/* Supported Bills */}
      <section className="py-24 bg-[#F5F7FA] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Layers className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Payment Options</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Supported Bill Providers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay all your bills from one convenient platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {billProviders.map((provider, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${provider.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <provider.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Processing</div>
                    <div className="font-bold text-[#1F6AE1] text-sm">{provider.processingTime}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2 group-hover:text-[#1F6AE1] transition-colors">{provider.name}</h3>
                <div className="text-sm text-[#1F6AE1] font-semibold mb-4">{provider.category}</div>
                <p className="text-gray-600 mb-8 leading-relaxed">{provider.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 font-medium">Commission</div>
                    <div className="font-bold text-[#0B3C5D] text-lg">{provider.commission}</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#1F6AE1] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80" 
                  alt="Mobile payment process"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-xl flex items-center justify-center shadow-xl">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-white">
                        <p className="text-sm mb-1">Transaction</p>
                        <p className="text-lg font-bold">Successful</p>
                      </div>
                    </div>
                    <div className="text-white text-2xl font-bold">$125</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Simple Process</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">How It Works</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Simple four-step process for all bill payments
              </p>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500">
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F5B700] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {step.num}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold text-[#0B3C5D] text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features for all your bill payment needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 group-hover:text-[#1F6AE1] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
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
              <p className="text-xl text-gray-200">Earn on every transaction you process</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">0.5-2%</div>
                  <div className="text-gray-200 font-medium">Electricity</div>
                </div>
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Tv className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">1-2%</div>
                  <div className="text-gray-200 font-medium">TV Bills</div>
                </div>
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3">2-4%</div>
                  <div className="text-gray-200 font-medium">Airtime</div>
                </div>
                <div className="text-center group text-white">
                  <div className="w-20 h-20 bg-[#F5B700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Wifi className="w-10 h-10 text-white" />
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Star className="w-4 h-4 mr-2" />
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
              Ready to Start Paying Bills?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join thousands who trust Xash Solutions for their bill payments. Earn commissions on every transaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/263716409412">
                <button className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                  Get Started Now
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </a>
              <a href="mailto:support@xash.network">
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

export default BillPayments;