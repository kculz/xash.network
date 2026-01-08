import React, { useState } from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+263 78 123 4567',
      description: 'Mon-Fri: 8AM-5PM',
      link: 'tel:+263781234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@xash.network',
      description: 'Response within 24 hours',
      link: 'mailto:info@xash.network'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+263 77 987 6543',
      description: '24/7 instant messaging',
      link: 'https://wa.me/263779876543'
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
      <Helmet >
        <title>Contact Us - Xash.network Customer Support</title>
        <meta name="description" content="Get in touch with Xash Solutions customer support for POS systems, bill payments, and financial software inquiries. We're here to help!" />
        <meta property="og:title" content="Contact Us - Xash Solutions Customer Support" />
        <meta property="og:description" content="Get in touch with Xash Solutions customer support for POS systems, bill payments, and financial software inquiries. We're here to help!" />
        <meta property="og:url" content="https://xash.network/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xash.network/images/logo.jpg" />
        <link rel="canonical" href="https://xash.network/contact" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-[#0B3C5D] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our financial solutions? Our team is here to help you succeed.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">&lt;24h</div>
                  <div className="text-sm text-gray-300">Response</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">98%</div>
                  <div className="text-sm text-gray-300">Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-[#F5B700]">3+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop" 
                alt="Customer support team" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.link}
                className="bg-[#F5F7FA] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{method.title}</h3>
                <div className="text-lg font-semibold text-[#1F6AE1] mb-2">{method.details}</div>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section with Images */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Our headquarters in Mutare, Zimbabwe</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Office Images */}
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop" 
                  alt="Office interior" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" 
                    alt="Team workspace" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" 
                    alt="Office building" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#1F6AE1] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Address</div>
                      <div className="text-gray-600">
                        63 Embassy Building, Aerodrome Rd<br />
                        Mutare, Zimbabwe
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#1F6AE1] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Phone</div>
                      <a href="tel:+263781234567" className="text-gray-600 hover:text-[#1F6AE1]">+263 78 123 4567</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#1F6AE1] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Email</div>
                      <a href="mailto:info@xash.network" className="text-gray-600 hover:text-[#1F6AE1]">info@xash.network</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#1F6AE1] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Business Hours</div>
                      <div className="text-gray-600">
                        Mon-Fri: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 w-full bg-[#1F6AE1] text-white py-3 rounded-lg hover:bg-[#1558B8] transition-colors font-semibold text-center block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">
                  Our Support Team is Ready to Help
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you need technical assistance, sales information, or partnership opportunities, our dedicated team is here to support you every step of the way.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#0B3C5D] rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Call Us Directly</div>
                      <div className="text-gray-600">Speak with our team in real-time</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#1F6AE1] rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">Email Support</div>
                      <div className="text-gray-600">Get detailed responses within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">WhatsApp Chat</div>
                      <div className="text-gray-600">Quick responses via instant messaging</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop" 
                  alt="Support team" 
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Common Questions</h2>
              <p className="text-lg text-gray-600">Quick answers to frequently asked questions</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F5F7FA] transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-lg text-[#1A1A1A] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#1F6AE1] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Whether you need POS solutions, bill payments, or financial software, we have the right solution for you.
            </p>
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;