import React, { useState } from 'react';
import { 
  Zap,
  Shield,
  Clock,
  Globe,
  Smartphone,
  Wifi,
  Tv,
  Droplets,
  CreditCard,
  Users,
  TrendingUp,
  CheckCircle,
  BarChart3,
  ArrowRight,
  DollarSign,
  ChevronDown,
  Star
} from 'lucide-react';

const BillPayments = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const billProviders = [
    {
      icon: Zap,
      name: 'ZESA',
      category: 'Electricity',
      description: 'Prepaid and postpaid electricity payments with instant token generation',
      processingTime: '30-60 seconds',
      commission: '0.5-2%'
    },
    {
      icon: Tv,
      name: 'DSTV',
      category: 'TV & Entertainment',
      description: 'Monthly subscriptions, Box Office, and premium packages',
      processingTime: 'Instant',
      commission: '1-2%'
    },
    {
      icon: Droplets,
      name: 'Water Bills',
      category: 'Municipal Services',
      description: 'Municipal water bill payments with digital receipts',
      processingTime: '45-90 seconds',
      commission: '0.5-1.5%'
    },
    {
      icon: Smartphone,
      name: 'Mobile Airtime',
      category: 'Mobile Services',
      description: 'Instant airtime topup for all major networks',
      processingTime: 'Instant',
      commission: '2-4%'
    },
    {
      icon: Wifi,
      name: 'Internet',
      category: 'Internet Services',
      description: 'Internet bill payments and data bundle purchases',
      processingTime: 'Instant',
      commission: '1-3%'
    },
    {
      icon: Smartphone,
      name: 'Data Bundles',
      category: 'Mobile Services',
      description: 'Mobile data bundles for all major networks',
      processingTime: 'Instant',
      commission: '2-4%'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Instant Processing',
      description: 'Most bills processed within 30 seconds'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-level security for all transactions'
    },
    {
      icon: Globe,
      title: 'Multi-Country',
      description: 'Services across multiple markets'
    },
    {
      icon: TrendingUp,
      title: 'Commission Earnings',
      description: 'Earn on every transaction processed'
    },
    {
      icon: BarChart3,
      title: 'Real-time Reports',
      description: 'Track all transactions instantly'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  const processSteps = [
    { num: '01', title: 'Select Biller', desc: 'Choose from supported providers' },
    { num: '02', title: 'Enter Details', desc: 'Input account or meter number' },
    { num: '03', title: 'Make Payment', desc: 'Complete secure transaction' },
    { num: '04', title: 'Get Confirmation', desc: 'Receive instant digital receipt' }
  ];

  const faqs = [
    {
      question: 'How long does bill processing take?',
      answer: 'Airtime and data bundles are instant. Electricity tokens take 30-60 seconds. TV subscriptions are instant. Water and municipal bills take 45-90 seconds.'
    },
    {
      question: 'What commission do agents earn?',
      answer: 'Commissions vary by service: Electricity (0.5-2%), TV subscriptions (1-2%), Water bills (0.5-1.5%), Mobile topups (2-4%), Data bundles (2-4%).'
    },
    {
      question: 'Can I schedule recurring payments?',
      answer: 'Yes, you can schedule recurring payments for regular bills like DSTV, electricity, and water. Set it once and payments are made automatically.'
    },
    {
      question: 'What if I enter wrong details?',
      answer: 'We validate account details before processing. If wrong details are entered, the transaction will fail and funds are refunded within 24 hours.'
    },
    {
      question: 'How do I get receipts?',
      answer: 'Digital receipts are sent via SMS and email instantly. You can also download receipts from your transaction history in the dashboard.'
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
                <span className="text-sm">50+ Supported Billers</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bill Payments Made Simple
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Pay electricity, DSTV, water, mobile, and internet bills instantly. Earn commissions as an agent or simplify your business payments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#1F6AE1] text-white px-8 py-4 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold flex items-center justify-center group">
                  Start Paying Bills
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold">
                  Become an Agent
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">Instant</div>
                  <div className="text-sm text-gray-300">Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">50+</div>
                  <div className="text-sm text-gray-300">Billers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F5B700] mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
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
                    <p className="text-sm">Bill Payment Dashboard</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <Zap className="w-8 h-8 text-[#F5B700] mx-auto mb-2" />
                    <div className="text-sm">Electricity</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <Tv className="w-8 h-8 text-[#F5B700] mx-auto mb-2" />
                    <div className="text-sm">TV & Entertainment</div>
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

      {/* Supported Bills */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Supported Bill Providers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pay all your bills from one convenient platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {billProviders.map((provider, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#1F6AE1]">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center">
                    <provider.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Processing</div>
                    <div className="font-bold text-[#1F6AE1]">{provider.processingTime}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{provider.name}</h3>
                <div className="text-sm text-[#1F6AE1] font-medium mb-3">{provider.category}</div>
                <p className="text-gray-600 mb-6">{provider.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500">Commission</div>
                    <div className="font-bold text-[#0B3C5D]">{provider.commission}</div>
                  </div>
                  <button className="text-[#1F6AE1] font-semibold hover:text-[#0B3C5D] transition-colors">
                    Pay Bill →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple four-step process for all bill payments</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
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

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Why Choose Xash for Bills</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive features for all your bill payment needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0B3C5D] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Commission Structure</h2>
              <p className="text-lg text-gray-600">Earn on every transaction you process</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">0.5-2%</div>
                <div className="text-gray-600">Electricity</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">1-2%</div>
                <div className="text-gray-600">TV Bills</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">2-4%</div>
                <div className="text-gray-600">Airtime</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#0B3C5D] mb-2">2-4%</div>
                <div className="text-gray-600">Data Bundles</div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-8">
              *Higher commission rates available for high-volume agents
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="py-24 bg-[#0B3C5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Paying Bills Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of users who trust Xash for their bill payments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1F6AE1] text-white px-10 py-5 rounded-lg hover:bg-[#1558B8] transition-all duration-300 font-semibold text-lg">
                Pay Bills Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-semibold text-lg">
                Become an Agent
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillPayments;