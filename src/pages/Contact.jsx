import React, { useState } from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Headphones,
  Send,
  Building,
  Globe,
  Shield,
  Award
} from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+263 77 922 2722',
      description: 'Mon-Fri: 8AM-5PM',
      link: '+263 77 922 2722',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@xash.network',
      description: 'Response within 24 hours',
      link: 'mailto:info@xash.network',
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+263 71 640 9412',
      description: '24/7 instant messaging',
      link: 'https://wa.me/263716409412',
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
    }
  ];

  const faqs = [
    {
      question: 'What is the response time for support queries?',
      answer: 'Technical support: Within 2 hours for critical issues, 24 hours for non-critical. Sales inquiries: Within 24 hours.'
    },
    {
      question: 'Do you offer on-site training and setup?',
      answer: 'Yes, we offer on-site training and setup for enterprise clients. Contact our sales team to discuss your requirements.'
    },
    {
      question: 'How do I become an agent?',
      answer: 'Visit xash.co.zw and click on "Become an Agent". You can also visit our office or contact our sales team for assistance.'
    },
    {
      question: 'Is API documentation available?',
      answer: 'Yes, our API documentation is publicly available. You can also request a sandbox account for testing.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                <Headphones className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm font-bold">We're Here to Help</span>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="block">Get in</span>
                  <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Have questions about our financial solutions? Our expert team is here to help you succeed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <a href="mailto:info@xash.network" className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Email Us Now
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </a>
                <a href="+263 77 922 2722" className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                  Call Us
                </a>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Support</div>
                </div>
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">&lt;24h</div>
                  <div className="text-sm text-gray-300 font-medium">Response</div>
                </div>
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-300 font-medium">Satisfaction</div>
                </div>
                <div>
                  <div className="lg:text-4xl md:text-2xl text-lg font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">3+</div>
                  <div className="text-sm text-gray-300 font-medium">Countries</div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F5B700] to-[#1F6AE1] rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop" 
                    alt="Customer support team"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-[#0B3C5D]/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                        <Phone className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Quick Call</div>
                        <div className="text-lg font-bold">Available</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                        <MessageCircle className="w-8 h-8 text-[#F5B700] mb-3" />
                        <div className="text-sm text-gray-300 mb-1">Chat Now</div>
                        <div className="text-lg font-bold">Online</div>
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

      {/* Contact Methods */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Globe className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Reach Out</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Contact Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.link}
                className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1] text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 group-hover:text-[#1F6AE1] transition-colors">{method.title}</h3>
                <div className="text-lg font-bold text-[#1F6AE1] mb-3">{method.details}</div>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </a>
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
              {/* Office Images */}
              <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop" 
                    alt="Office interior"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/20 to-[#1F6AE1]/20"></div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" 
                      alt="Team workspace"
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/20 to-transparent"></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" 
                      alt="Office building"
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F6AE1]/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-4xl font-extrabold text-[#0B3C5D] mb-10">Contact Information</h3>
                
                <div className="space-y-6 mb-10">
                  {[
                    { icon: MapPin, title: 'Address', content: '63 Embassy Building, Aerodrome Rd\nMutare, Zimbabwe' },
                    { icon: Phone, title: 'Phone', content: '+263 77 922 2722', link: '+263 77 922 2722' },
                    { icon: Mail, title: 'Email', content: 'info@xash.network', link: 'mailto:info@xash.network' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-[#0B3C5D] text-xl mb-2">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-gray-600 font-medium hover:text-[#1F6AE1] transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 font-medium whitespace-pre-line">{item.content}</p>
                        )}
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

                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 group px-10 py-5 bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  Get Directions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop" 
                    alt="Support team"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/40 to-[#1F6AE1]/30"></div>
                  
                  <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#F5B700] to-[#F5B700]/80 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Headphones className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <h2 className="text-4xl font-extrabold text-[#0B3C5D] mb-6">
                  Our Support Team is Ready to Help
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                  Whether you need technical assistance, sales information, or partnership opportunities, our dedicated team is here to support you every step of the way.
                </p>
                <ul className="space-y-6">
                  {[
                    { icon: Phone, title: 'Call Us Directly', desc: 'Speak with our team in real-time' },
                    { icon: Mail, title: 'Email Support', desc: 'Get detailed responses within 24 hours' },
                    { icon: MessageCircle, title: 'WhatsApp Chat', desc: 'Quick responses via instant messaging' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="pt-2">
                        <h4 className="font-bold text-[#0B3C5D] text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 font-medium">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
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
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">FAQ</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600">Quick answers to frequently asked questions</p>
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
              Whether you need POS solutions, bill payments, or financial software, we have the right solution for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:info@xash.network" className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Contact Sales
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="+263 77 922 2722" className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;