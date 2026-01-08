import React from 'react';
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
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level security for all transactions and data'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Solutions designed for real user needs'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly improving and adding features'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Building strong relationships with partners'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', desc: 'Xash.network established' },
    { year: '2019', title: 'Platform Launch', desc: 'Launched POS platform' },
    { year: '2021', title: 'Multi-Country', desc: 'Expanded across Africa' },
    { year: '2023', title: '10K+ Agents', desc: 'Reached major milestone' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0B3C5D] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white border-opacity-20">
                <span className="text-sm">Since 2018</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About Xash.network
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're building the financial infrastructure that enables businesses and individuals to thrive through accessible, reliable, and innovative payment solutions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">5+</div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">10K+</div>
                  <div className="text-sm text-gray-300">Agents</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">3</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#F5F7FA] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#0B3C5D] rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0B3C5D]">Our Mission</h2>
              </div>
              
              {/* Mission Image */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop" 
                alt="Team collaboration" 
                className="mb-6 w-full aspect-video object-cover rounded-xl"
              />
              
              <p className="text-gray-700 text-lg mb-6">
                To democratize access to financial services by providing affordable, reliable, and innovative payment solutions that empower businesses and individuals across Africa.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Make financial services accessible to everyone</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Simplify bill payments and transactions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Create earning opportunities through commissions</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#1F6AE1] rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0B3C5D]">Our Vision</h2>
              </div>
              
              {/* Vision Image */}
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop" 
                alt="Business growth" 
                className="mb-6 w-full aspect-video object-cover rounded-xl"
              />
              
              <p className="text-gray-700 text-lg mb-6">
                To become Africa's leading financial technology platform, connecting millions of users to essential services and creating economic opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Expand to 10+ African countries</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Serve 1 million active users monthly</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Launch new financial products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a single POS solution to a comprehensive financial network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location with Image */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Our headquarters in Mutare, Zimbabwe</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Office Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                  alt="Office building" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Address</p>
                      <p className="text-gray-600">63 Embassy Building, Aerodrome Rd<br/>Mutare, Zimbabwe</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Phone</p>
                      <p className="text-gray-600">+263 78 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#1F6AE1] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Email</p>
                      <p className="text-gray-600">info@xash.network</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-[#1A1A1A] mb-4">Office Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mon - Fri</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing Network
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Become part of the financial revolution in Africa. Whether as an agent, merchant, or partner, we have opportunities for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg flex items-center justify-center group">
                Become an Agent
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
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