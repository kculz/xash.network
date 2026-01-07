import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  BarChart3, 
  UserPlus, 
  Settings, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Shield,
  ChevronDown
} from 'lucide-react';

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: CreditCard,
      title: 'POS Solutions',
      steps: [
        { num: '01', title: 'Sign Up & Register', desc: 'Create your merchant account and complete verification' },
        { num: '02', title: 'Hardware Setup', desc: 'Get your POS device or install our mobile app' },
        { num: '03', title: 'Start Transactions', desc: 'Begin processing payments and earning commissions' },
        { num: '04', title: 'Track & Withdraw', desc: 'Monitor earnings and withdraw commissions daily' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Bill Payments',
      steps: [
        { num: '01', title: 'Customer Identification', desc: 'Customer provides bill details or account number' },
        { num: '02', title: 'Payment Processing', desc: 'Select payment method and complete transaction' },
        { num: '03', title: 'Commission Calculation', desc: 'Automatic commission credited to your account' },
        { num: '04', title: 'Receipt & Confirmation', desc: 'Digital receipt sent instantly to customer' }
      ]
    },
    {
      icon: BarChart3,
      title: 'Financial Software',
      steps: [
        { num: '01', title: 'System Assessment', desc: 'Evaluate your current financial processes' },
        { num: '02', title: 'Setup & Integration', desc: 'Configure software and integrate with systems' },
        { num: '03', title: 'Training & Onboarding', desc: 'Train your team on using the software' },
        { num: '04', title: 'Go Live & Optimize', desc: 'Launch and continuously improve your system' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'For Merchants & Agents',
      items: [
        'Earn commissions on every transaction',
        'Multiple revenue streams',
        '24/7 transaction capability',
        'Real-time commission tracking',
        'Comprehensive training'
      ]
    },
    {
      title: 'For Business Users',
      items: [
        'Streamlined operations',
        'Automated reconciliation',
        'Multi-currency support',
        'Real-time reporting',
        'API integration'
      ]
    },
    {
      title: 'For End Customers',
      items: [
        'One-stop bill payment solution',
        'Instant processing',
        'Multiple payment options',
        'Digital receipts',
        'Secure transactions'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get started?',
      answer: 'For POS solutions, you can start within 24 hours after registration. Bill payment access is instant after verification. Financial software implementation typically takes 2-5 business days.'
    },
    {
      question: 'What commissions do agents earn?',
      answer: 'Commission rates vary by service. Airtime sales typically earn 1-3%, bill payments 0.5-2%, and data bundles 2-4%. Higher volume agents qualify for increased rates.'
    },
    {
      question: 'Is there a minimum transaction amount?',
      answer: 'No, there is no minimum transaction amount. You can process transactions of any value.'
    },
    {
      question: 'How do I withdraw my commissions?',
      answer: 'Commissions can be withdrawn daily to your registered bank account or mobile money wallet. Withdrawals are processed within 24 hours during business days.'
    },
    {
      question: 'What support is available?',
      answer: 'We provide 24/7 customer support via phone, email, and WhatsApp. Additionally, we offer comprehensive documentation and regular training.'
    }
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How It Works
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Simple, transparent processes for all our financial solutions. Get started quickly and start earning or saving today.
            </p>
          </div>
        </div>

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
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the service that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">{service.title}</h3>
                
                <div className="space-y-6">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-10 h-10 bg-[#1F6AE1] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
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
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Who Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solutions are designed for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0B3C5D] p-6 text-white">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#1F6AE1] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Getting Started is Easy</h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to begin your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: UserPlus, title: 'Register', desc: 'Create your account' },
                { icon: Settings, title: 'Setup', desc: 'Configure your system' },
                { icon: CreditCard, title: 'Transact', desc: 'Start processing' },
                { icon: TrendingUp, title: 'Earn', desc: 'Track and withdraw' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-[#0B3C5D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                      <step.icon className="w-10 h-10" />
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200"></div>
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

      {/* FAQ */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0B3C5D] mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
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
              Join thousands of users already benefiting from our services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg flex items-center justify-center group">
                Sign Up Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
                Contact Sales
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5B700] mb-2">24h</div>
                <div className="text-sm text-gray-300">Quick Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5B700] mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5B700] mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;