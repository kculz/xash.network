import React from 'react';
import { 
  CreditCard, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Sparkles,
  Play,
  Award,
  Target,
  Layers
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'POS Software & Integration',
      description: 'Advanced point-of-sale systems with seamless integration, multi-currency support, and real-time transaction tracking.',
      link: '/pos',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      icon: Smartphone,
      title: 'Bill Payments',
      description: 'Instant payments for electricity, DSTV, water, airtime, and mobile data bundles with 24/7 availability.',
      link: '/bill-payments',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
    },
    {
      icon: BarChart3,
      title: 'Business Financial Software',
      description: 'Comprehensive accounting, reporting, and reconciliation tools designed for modern businesses.',
      link: '/financial-software',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Secure Transactions', desc: 'Bank-level security with 99.9% uptime', color: 'from-[#0B3C5D] to-[#1F6AE1]' },
    { icon: Zap, title: 'Fast Processing', desc: 'Real-time updates and instant confirmations', color: 'from-[#1F6AE1] to-[#0B3C5D]' },
    { icon: Globe, title: 'Multi-Country', desc: 'Services across multiple markets', color: 'from-[#0B3C5D] to-[#1F6AE1]' },
    { icon: TrendingUp, title: 'Commission Based', desc: 'Earn as you transact', color: 'from-[#1F6AE1] to-[#0B3C5D]' }
  ];

  const features = [
    'Multi-currency support',
    'Real-time reporting',
    'Transaction reconciliation',
    'API integration',
    'Agent commissions',
    '24/7 customer support'
  ];

  const testimonials = [
    {
      name: 'Tinashe M.',
      role: 'Business Owner',
      company: 'TechHub Mutare',
      content: 'The POS software has significantly improved our daily reconciliation process. Very efficient and reliable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
    },
    {
      name: 'Sarah K.',
      role: 'Mobile Agent',
      company: 'Agent Network ZW',
      content: 'Earning commissions through bill payments has been straightforward. The platform is dependable and easy to use.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
    }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users', color: 'from-[#F5B700] to-[#F5B700]' },
    { icon: Award, value: '99.9%', label: 'Uptime', color: 'from-[#1F6AE1] to-[#0B3C5D]' },
    { icon: Target, value: '$50M+', label: 'Processed', color: 'from-[#0B3C5D] to-[#1F6AE1]' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'from-[#F5B700] to-[#F5B700]' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Xash Solutions - Financial Solutions for Zimbabwe & Africa</title>
        <meta name="description" content="Advanced POS systems, instant bill payments, and comprehensive financial software for businesses and individuals across Zimbabwe." />
        <meta property="og:title" content="Xash Solutions - Financial Solutions for Zimbabwe & Africa" />
        <meta property="og:description" content="Advanced POS systems, instant bill payments, and comprehensive financial software for businesses and individuals across Zimbabwe." />
        <meta property="og:url" content="https://xash.network/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/" />
      </Helmet>

{/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] text-white overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#F5B700] rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#1F6AE1] rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-[#F5B700]/50 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-2 h-2 bg-[#F5B700] rounded-full mr-3 animate-pulse"></div>
                <Sparkles className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-bold">Trusted by 10,000+ Users Worldwide</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="block">Empowering</span>
                  <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                    Financial Growth
                  </span>
                  <span className="block">Across Africa</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Transform your business with cutting-edge POS systems, instant bill payments, and comprehensive financial software.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5B700] to-[#FFF] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
                
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D]"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-300 ml-2">10K+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F5B700] fill-[#F5B700]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="lg:col-span-5 relative">
              {/* Main Dashboard Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F5B700] to-[#1F6AE1] rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                    <div>
                      <p className="text-sm text-gray-300">Total Revenue</p>
                      <h3 className="text-3xl font-bold">$50M+</h3>
                    </div>
                    <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl text-sm font-bold border border-green-500/30">
                      ↑ 24.5%
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.slice(0, 4).map((stat, index) => (
                      <div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity Bar */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Transaction Success</span>
                      <span className="font-bold">99.9%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#F5B700] to-[#1F6AE1] rounded-full" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Cards */}
              <div className="absolute -left-6 top-1/4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-xl hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Verified</p>
                    <p className="text-sm font-bold">Secure</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-xl hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Processing</p>
                    <p className="text-sm font-bold">Instant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-28" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="#F5F7FA"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F5F7FA] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Layers className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">What We Offer</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-[#0B3C5D]/40 to-transparent"></div>
                    <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <CheckCircle className="w-12 h-12 mx-auto mb-3" />
                        <p className="text-lg font-semibold">Explore Service</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 leading-tight group-hover:text-[#1F6AE1] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-[#1F6AE1] font-bold hover:text-[#0B3C5D] transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F6AE1] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B3C5D] rounded-full opacity-5 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Business analytics dashboard"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/30 to-[#1F6AE1]/30"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-6 shadow-2xl max-w-xs border-2 border-[#1F6AE1]/20">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] bg-clip-text text-transparent">99.9%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Our Advantages</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Why Choose Xash Solutions</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Built for efficiency, reliability, and growth with enterprise-grade features that power your success.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B3C5D] text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Showcase */}
          <div className="bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B700] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h3 className="text-4xl font-extrabold mb-8">
                  Everything You Need to Succeed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-8 h-8 rounded-xl bg-[#F5B700] flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#0B3C5D] ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Target className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Simple Process</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in four simple steps</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Sign Up', desc: 'Register as merchant or agent in minutes', icon: Users },
                { num: '02', title: 'Select Service', desc: 'Choose your preferred solution', icon: CheckCircle },
                { num: '03', title: 'Start Processing', desc: 'Begin accepting transactions', icon: Zap },
                { num: '04', title: 'Track Performance', desc: 'Monitor and optimize results', icon: TrendingUp }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#1F6AE1]">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl">
                        <step.icon className="w-10 h-10" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#F5B700] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.num}
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0B3C5D] text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(100%+1rem)] w-8 h-1 bg-gradient-to-r from-[#1F6AE1] to-[#0B3C5D]">
                      <ArrowRight className="w-6 h-6 text-[#1F6AE1] absolute -right-3 -top-2.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2 fill-[#F5B700]" />
              <span className="text-sm font-bold">Testimonials</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses across multiple countries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#0B3C5D]/10 hover:border-[#1F6AE1] p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < testimonial.rating ? 'text-[#F5B700] fill-[#F5B700]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 shadow-lg border-2 border-[#1F6AE1]"
                  />
                  <div>
                    <p className="font-bold text-[#0B3C5D] text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#1F6AE1] font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join thousands of successful businesses using Xash Solutions for their financial needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Get Started Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;