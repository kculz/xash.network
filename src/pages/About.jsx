import React, { useState } from 'react';
import { 
  Target,
  Eye,
  Shield,
  Users,
  Zap,
  Handshake,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Award,
  Sparkles,
  TrendingUp,
  Building,
  Globe,
  Clock,
  Layers
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level security for all transactions and data',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Solutions designed for real user needs',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly improving and adding features',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Building strong relationships with partners',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const milestones = [
    { 
      year: '2018', 
      title: 'Company Founded', 
      desc: 'Xash.network was established in Harare, Zimbabwe with a vision to simplify financial transactions across Africa.',
      icon: '🏢'
    },
    { 
      year: '2019', 
      title: 'MVP Launch', 
      desc: 'Launched our first POS platform in Harare with 50 pilot merchants. Processed $500K in first-year transactions.',
      icon: '🚀'
    },
    { 
      year: '2020', 
      title: 'Bill Payments Integration', 
      desc: 'Integrated electricity, DSTV, and water bill payments. Expanded to 500+ agents nationwide.',
      icon: '⚡'
    },
    { 
      year: '2021', 
      title: 'Regional Expansion', 
      desc: 'Expanded operations to Zambia and Botswana. Launched multi-currency support.',
      icon: '🌍'
    },
    { 
      year: '2022', 
      title: 'Mobile App Launch', 
      desc: 'Released Android & iOS apps. Introduced real-time analytics and reporting dashboard.',
      icon: '📱'
    },
    { 
      year: '2023', 
      title: '10K+ Agent Network', 
      desc: 'Reached milestone of 10,000+ registered agents. Processed over $50M in total transactions.',
      icon: '📊'
    },
    { 
      year: '2024', 
      title: 'Financial Software Suite', 
      desc: 'Launched comprehensive business financial software with API integration for enterprises.',
      icon: '💼'
    },
    { 
      year: '2025', 
      title: 'Expansion & Innovation', 
      desc: 'Planning expansion to 3 new African countries. Developing AI-powered financial insights.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - Xash Solutions</title>
        <meta name="description" content="Learn about Xash Solutions, our mission, vision, and the team dedicated to simplifying bill payments and POS solutions across Africa." />
        <meta property="og:title" content="About Us - Xash Solutions" />
        <meta property="og:description" content="Learn about Xash Solutions, our mission, vision, and the team dedicated to simplifying bill payments and POS solutions across Africa." />
        <meta property="og:url" content="https://xash.network/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/about" />
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
                <Award className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-bold">Since 2018</span>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="block">About</span>
                  <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                    Xash Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Building the financial infrastructure that enables businesses and individuals to thrive through accessible, reliable, and innovative payment solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Become an Agent
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                  Partner With Us
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-gray-300 font-medium">Years</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">10K+</div>
                  <div className="text-sm text-gray-300 font-medium">Agents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">3</div>
                  <div className="text-sm text-gray-300 font-medium">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Company Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F5B700] to-[#1F6AE1] rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-[#0B3C5D]/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                        <Target className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Mission</div>
                        <div className="text-lg font-bold">Driven</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                        <TrendingUp className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Growth</div>
                        <div className="text-lg font-bold">Focused</div>
                      </div>
                    </div>
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

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-7xl mx-auto">
            {/* Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                  
                  <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-[#0B3C5D] mb-10">Our Mission</h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  To democratize access to financial services by providing affordable, reliable, and innovative payment solutions that empower businesses and individuals across Africa.
                </p>
                <ul className="space-y-6">
                  {[
                    'Make financial services accessible to everyone',
                    'Simplify bill payments and transactions',
                    'Create earning opportunities through commissions'
                  ].map((item, idx) => (
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

            {/* Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop" 
                    alt="Business growth"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                  
                  <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <h3 className="text-4xl font-extrabold text-[#0B3C5D] mb-10">Our Vision</h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  To become Africa's leading financial technology platform, connecting millions of users to essential services and creating economic opportunities.
                </p>
                <ul className="space-y-6">
                  {[
                    'Expand to 10+ African countries',
                    'Serve 1 million active users monthly',
                    'Launch new financial products'
                  ].map((item, idx) => (
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
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Our Story</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single POS solution to a comprehensive financial network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="group bg-[#F5F7FA] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{milestone.icon}</div>
                <div className="text-3xl font-bold text-[#F5B700] mb-3">{milestone.year}</div>
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-4 group-hover:text-[#1F6AE1] transition-colors">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">What Drives Us</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 leading-tight group-hover:text-[#1F6AE1] transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Visit Us</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our headquarters in Mutare, Zimbabwe
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Office Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                    alt="Office building"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                  
                  <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-4xl font-extrabold text-[#0B3C5D] mb-10">Contact Information</h3>
                
                <div className="space-y-6 mb-10">
                  {[
                    { icon: MapPin, title: 'Address', content: '63 Embassy Building, Aerodrome Rd\nMutare, Zimbabwe' },
                    { icon: Phone, title: 'Phone', content: '+263 78 123 4567' },
                    { icon: Mail, title: 'Email', content: 'info@xash.network' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-[#0B3C5D] text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 font-medium whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F5F7FA] rounded-2xl p-8 border-2 border-gray-200">
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-[#1F6AE1] mr-3" />
                    <h4 className="font-bold text-[#0B3C5D] text-xl">Office Hours</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Monday - Friday</span>
                      <span className="font-bold text-[#0B3C5D]">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Saturday</span>
                      <span className="font-bold text-[#0B3C5D]">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Sunday</span>
                      <span className="font-bold text-[#0B3C5D]">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
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
              Join Our Growing Network
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Become part of the financial revolution in Africa. Whether as an agent, merchant, or partner, we have opportunities for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Become an Agent
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;