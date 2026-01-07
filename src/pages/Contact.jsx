import React, { useState } from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+263 78 123 4567',
      description: 'Mon-Fri: 8AM-5PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@xash.network',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Mutare, Zimbabwe',
      description: 'Visit by appointment'
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0B3C5D] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our financial solutions? Our team is here to help you succeed.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
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
              Choose your preferred way to get in touch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{method.title}</h3>
                <div className="text-lg font-semibold text-[#1F6AE1] mb-2">{method.details}</div>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">Send a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800">Message Sent!</div>
                    <div className="text-green-600 text-sm">We'll get back to you soon.</div>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F6AE1] focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F6AE1] focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F6AE1] focus:border-transparent outline-none"
                    placeholder="+263 78 123 4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F6AE1] focus:border-transparent outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F6AE1] focus:border-transparent outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-[#1F6AE1] text-white py-4 rounded-lg hover:bg-[#1558B8] transition-colors font-semibold flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* Office Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8">Our Office</h2>
              
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
                    <div className="text-gray-600">+263 78 123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#1F6AE1] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">Email</div>
                    <div className="text-gray-600">info@xash.network</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Common Questions</h2>
              <p className="text-lg text-gray-600">Quick answers to frequently asked questions</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
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
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Whether you need POS solutions, bill payments, or financial software, we have the right solution for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg flex items-center justify-center group">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;