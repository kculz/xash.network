import React, { useState } from 'react';
import { 
  CreditCard,
  Smartphone,
  Tablet,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Cpu,
  DollarSign,
  ShoppingCart,
  PieChart,
  FileText,
  Star,
  Clock,
  ChevronDown
} from 'lucide-react';

const PosSolutions = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: CreditCard,
      title: 'Multi-Payment Support',
      description: 'Accept airtime, electricity bills, DSTV, water bills, and mobile data bundles across all major providers.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reporting',
      description: 'Live dashboard with transaction analytics, commission tracking, and performance metrics.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level encryption with PCI DSS compliance for all payment processing.'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Process transactions in USD, ZWL, and other currencies with automatic conversion.'
    },
    {
      icon: Users,
      title: 'Agent Management',
      description: 'Manage multiple agents with individual performance tracking and commission rates.'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Transactions completed in under 30 seconds with immediate confirmation.'
    }
  ];

  const benefits = [
    {
      title: 'For Retail Merchants',
      icon: ShoppingCart,
      items: [
        'Increase store foot traffic with bill payment services',
        'Earn additional revenue from commissions',
        'No technical expertise required',
        '24/7 transaction capability',
        'Detailed sales reporting'
      ]
    },
    {
      title: 'For Mobile Agents',
      icon: Smartphone,
      items: [
        'Work anywhere with mobile POS capability',
        'Earn commissions on every transaction',
        'Low startup costs with mobile app',
        'Flexible working hours',
        'Real-time commission tracking'
      ]
    },
    {
      title: 'For Business Owners',
      icon: PieChart,
      items: [
        'Streamline multiple payment channels',
        'Automated reconciliation',
        'Custom reporting and analytics',
        'Scalable as business grows',
        'API integration options'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'No monthly fees',
      description: 'Perfect for individual agents',
      features: [
        'Mobile POS app',
        'Basic transaction processing',
        'Standard commissions',
        'Email support',
        'Up to 50 transactions/day'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: 'per month',
      description: 'Ideal for small businesses',
      features: [
        'All Starter features',
        'Advanced reporting',
        'Priority support',
        'API access',
        'Multi-user accounts',
        'Unlimited transactions'
      ],
      cta: 'Start Business Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Tailored pricing',
      description: 'For large organizations',
      features: [
        'All Business features',
        'White-label solution',
        'Dedicated account manager',
        'Custom integration',
        'Advanced security features',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Chido M.',
      business: 'Corner Store, Harare',
      content: 'Since adding Xash POS, our daily revenue increased by 40%. Bill payments bring customers in daily.',
      rating: 5
    },
    {
      name: 'Tendai K.',
      business: 'Mobile Agent, Bulawayo',
      content: 'The mobile app makes it easy to process transactions anywhere. Commissions are paid on time.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What do I need to get started?',
      answer: 'You need a smartphone (Android or iOS) with internet access, valid ID for registration, and a bank account for commission withdrawals.'
    },
    {
      question: 'How are commissions calculated?',
      answer: 'Commissions vary by service: Airtime (1-3%), Electricity bills (0.5-2%), DSTV (1-2%), Data bundles (2-4%). Higher volume agents get better rates.'
    },
    {
      question: 'Is there a minimum balance required?',
      answer: 'No minimum balance required. You can start with any amount and top up as needed.'
    },
    {
      question: 'How fast are transactions processed?',
      answer: 'Most transactions process in under 30 seconds. Airtime and data bundles are instant, bill payments take 30-60 seconds.'
    },
    {
      question: 'How do I withdraw my commissions?',
      answer: 'Commissions can be withdrawn daily to your bank account or mobile money wallet. Processing takes 24 hours on business days.'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white border-opacity-20">
                <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
                <span className="text-sm">Trusted by 10,000+ Agents</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                POS Software & Integration
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive point-of-sale system. Process payments, earn commissions, and grow your revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#1F6AE1] text-white px-8 py-4 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold">
                  Request Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">&lt;30s</div>
                  <div className="text-sm text-gray-300">Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20">
                <div className="aspect-video bg-[#1F6AE1] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-12 h-12" />
                    </div>
                    <p className="text-sm">POS Dashboard</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <div className="font-bold">Airtime Sales</div>
                    <div className="text-sm text-gray-300">Instant</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <div className="font-bold">Bill Payments</div>
                    <div className="text-sm text-gray-300">All Providers</div>
                  </div>
                </div>
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful POS business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              Our POS solutions are designed for various business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#0B3C5D] p-8 text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#1F6AE1] mt-0.5 mr-3 flex-shrink-0" />
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

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-[#1F6AE1] shadow-xl' : 'border-gray-200'} relative hover:shadow-xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F5B700] text-white px-4 py-1 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#0B3C5D]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <p className="text-gray-600 mb-8">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#1F6AE1] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-[#1F6AE1] text-white hover:bg-[#1558B8]'
                    : 'bg-[#0B3C5D] text-white hover:bg-[#092f48]'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Commission Info */}
          <div className="mt-20 bg-[#F5F7FA] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-[#0B3C5D] mb-8">
              Commission Structure
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">1-3%</div>
                <div className="text-gray-600 text-sm">Airtime Sales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">0.5-2%</div>
                <div className="text-gray-600 text-sm">Electricity Bills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">1-2%</div>
                <div className="text-gray-600 text-sm">DSTV Payments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">2-4%</div>
                <div className="text-gray-600 text-sm">Data Bundles</div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 text-sm mt-6">
              *Higher commission rates available for high-volume agents
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our satisfied customers</p>
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
                    <p className="text-gray-600 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0B3C5D] mb-12">
              Frequently Asked Questions
            </h2>
            
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

      {/* CTA Section */}
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your POS Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of successful agents and merchants using Xash POS
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PosSolutions;