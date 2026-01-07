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
  Clock
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'POS Software & Integration',
      description: 'Advanced point-of-sale systems with seamless integration, multi-currency support, and real-time transaction tracking.',
      link: '/pos'
    },
    {
      icon: Smartphone,
      title: 'Bill Payments',
      description: 'Instant payments for electricity, DSTV, water, airtime, and mobile data bundles with 24/7 availability.',
      link: '/bill-payments'
    },
    {
      icon: BarChart3,
      title: 'Business Financial Software',
      description: 'Comprehensive accounting, reporting, and reconciliation tools designed for modern businesses.',
      link: '/financial-software'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Secure Transactions', desc: 'Bank-level security with 99.9% uptime' },
    { icon: Zap, title: 'Fast Processing', desc: 'Real-time updates and instant confirmations' },
    { icon: Globe, title: 'Multi-Country', desc: 'Services across multiple markets' },
    { icon: TrendingUp, title: 'Commission Based', desc: 'Earn as you transact' }
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
      content: 'The POS software has significantly improved our daily reconciliation process. Very efficient and reliable.',
      rating: 5
    },
    {
      name: 'Sarah K.',
      role: 'Mobile Agent',
      content: 'Earning commissions through bill payments has been straightforward. The platform is dependable and easy to use.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0B3C5D] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white border-opacity-20">
                <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm">Trusted Financial Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Simplifying Financial Solutions
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced POS systems, instant bill payments, and comprehensive financial software for businesses and individuals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#1F6AE1] text-white px-8 py-4 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold">
                  Contact Sales
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">10K+</div>
                  <div className="text-sm text-gray-300">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1F6AE1] rounded-2xl p-6 text-center">
                      <DollarSign className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold">$50M+</div>
                      <div className="text-sm opacity-90">Processed</div>
                    </div>
                    <div className="bg-[#F5B700] rounded-2xl p-6 text-center">
                      <Users className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm opacity-90">Agents</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center col-span-2">
                      <Clock className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-bold">Instant Processing</div>
                      <div className="text-sm opacity-90">Real-time transactions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-[#F5F7FA] rounded-2xl p-8 h-full border-2 border-transparent hover:border-[#1F6AE1] transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-[#1F6AE1] font-semibold hover:text-[#0B3C5D] transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Why Choose Xash.network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for efficiency, reliability, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#0B3C5D] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#0B3C5D] mb-6">
                  Supported Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#1F6AE1] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#0B3C5D] rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses already using our platform to streamline operations and increase revenue.
                </p>
                <button className="w-full bg-[#1F6AE1] text-white py-4 rounded-lg hover:bg-[#1558B8] transition-colors font-semibold">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in four simple steps</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Sign Up', desc: 'Register as merchant or agent in minutes' },
                { num: '02', title: 'Select Service', desc: 'Choose your preferred solution' },
                { num: '03', title: 'Start Processing', desc: 'Begin accepting transactions' },
                { num: '04', title: 'Track Performance', desc: 'Monitor and optimize results' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-[#0B3C5D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                      {step.num}
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200"></div>
                    )}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by businesses across multiple countries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#F5B700] fill-[#F5B700]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0B3C5D] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of successful businesses using Xash.network for their financial needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;