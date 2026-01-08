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
  Play
} from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1F6AE1] text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1F6AE1] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#F5B700] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/15 transition-all">
                <Sparkles className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-medium">Trusted by 10,000+ Users</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Simplifying
                <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-white bg-clip-text  mt-2">
                  Financial Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                Advanced POS systems, instant bill payments, and comprehensive financial software for businesses and individuals across Zimbabwe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-[#1F6AE1] to-[#1558B8] text-white px-10 py-5 rounded-xl hover:shadow-2xl hover:shadow-[#1F6AE1]/50 transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">10K+</div>
                  <div className="text-sm text-gray-300 font-medium">Active Users</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">99.9%</div>
                  <div className="text-sm text-gray-300 font-medium">Uptime</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#F5B700] to-white bg-clip-text ">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80" 
                  alt="Business professional using financial software"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#1558B8] rounded-xl flex items-center justify-center">
                          <DollarSign className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-300">Total Processed</div>
                          <div className="text-2xl font-bold">$50M+</div>
                        </div>
                      </div>
                      <div className="text-green-400 text-sm font-semibold">↑ 24%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#F5F7FA] px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0B3C5D]">What We Offer</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl overflow-hidden h-full border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-[#1F6AE1] font-bold hover:text-[#0B3C5D] transition-colors group/link text-lg"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-3 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className="py-28 bg-gradient-to-br from-[#F5F7FA] to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Business analytics dashboard"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                    <div className="text-2xl font-bold text-[#0B3C5D]">99.9%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-block bg-white px-6 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-sm font-semibold text-[#0B3C5D]">Our Advantages</span>
              </div>
              <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">Why Choose Xash.network</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Built for efficiency, reliability, and growth with enterprise-grade features.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] mb-1 text-lg">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Showcase */}
          <div className="bg-gradient-to-br from-white to-[#F5F7FA] rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold text-[#0B3C5D] mb-8">
                  Everything You Need
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/80 to-[#1F6AE1]/60 flex items-center justify-center">
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
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#F5F7FA] px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-[#0B3C5D]">Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in four simple steps</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { num: '01', title: 'Sign Up', desc: 'Register as merchant or agent in minutes', icon: Users },
                { num: '02', title: 'Select Service', desc: 'Choose your preferred solution', icon: CheckCircle },
                { num: '03', title: 'Start Processing', desc: 'Begin accepting transactions', icon: Zap },
                { num: '04', title: 'Track Performance', desc: 'Monitor and optimize results', icon: TrendingUp }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex flex-col items-center justify-center text-white mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <step.icon className="w-8 h-8 mb-1" />
                      <span className="text-lg font-bold">{step.num}</span>
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

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-white px-6 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#0B3C5D]">Testimonials</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0B3C5D] mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses across multiple countries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
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
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-[#1F6AE1] font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80" 
            alt="Business team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/95 via-[#0B3C5D]/90 to-[#1F6AE1]/95"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-[#F5B700]" />
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join thousands of successful businesses using Xash.network for their financial needs
            </p>

            <button className="group bg-gradient-to-r from-[#1F6AE1] to-[#1558B8] text-white px-12 py-6 rounded-xl hover:shadow-2xl hover:shadow-[#1F6AE1]/50 transition-all duration-300 font-bold text-xl inline-flex items-center">
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;