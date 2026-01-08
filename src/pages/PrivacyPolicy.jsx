import React from 'react';
import { Shield, Lock, Eye, Users, Globe, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Shield,
      items: [
        'Personal identification information (name, email, phone number)',
        'Business information (company name, registration details)',
        'Financial information (transaction history, payment details)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (how you interact with our services)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      items: [
        'To provide and maintain our services',
        'To process transactions and prevent fraud',
        'To communicate with you about updates and offers',
        'To improve our services and develop new features',
        'To comply with legal obligations'
      ]
    },
    {
      title: 'Data Protection',
      icon: Lock,
      items: [
        '256-bit encryption for all data transmission',
        'Secure servers with regular security audits',
        'Access controls and authentication protocols',
        'Regular data backup and disaster recovery',
        'Employee training on data protection'
      ]
    },
    {
      title: 'Your Rights',
      icon: Users,
      items: [
        'Right to access your personal data',
        'Right to correct inaccurate data',
        'Right to request data deletion',
        'Right to restrict data processing',
        'Right to data portability'
      ]
    },
    {
      title: 'Data Retention',
      icon: Clock,
      items: [
        'Transaction data: 7 years for tax compliance',
        'Account information: Until account closure + 2 years',
        'Technical logs: 12 months for security monitoring',
        'Marketing data: Until consent withdrawal',
        'Backup data: 30 days before permanent deletion'
      ]
    },
    {
      title: 'International Transfers',
      icon: Globe,
      items: [
        'Data processed in secure data centers',
        'Compliance with GDPR and local regulations',
        'Standard contractual clauses for transfers',
        'Data protection impact assessments',
        'Cross-border data flow monitoring'
      ]
    }
  ];

  const compliance = [
    { name: 'GDPR', desc: 'General Data Protection Regulation' },
    { name: 'POPIA', desc: 'Protection of Personal Information Act' },
    { name: 'PCI DSS', desc: 'Payment Card Industry Data Security' },
    { name: 'ISO 27001', desc: 'Information Security Management' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1F6AE1] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1F6AE1] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#F5B700] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-28 lg:py-40 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
              <span className="text-sm font-medium">Transparent & Secure</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Privacy
              <span className="block bg-gradient-to-r from-[#F5B700] to-white bg-clip-text  mt-2">
                Policy
              </span>
            </h1>

            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal data.
              Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C360,100 720,40 1080,70 C1440,100 1440,120 1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Our Commitment to Privacy</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Xash.network, we take your privacy seriously. This policy explains how we collect, use, disclose, 
                and safeguard your information when you use our services. We comply with data protection regulations 
                and implement industry-standard security measures.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6">Policy Updates</h3>
                  <p className="text-gray-600 mb-4">
                    We may update this policy periodically to reflect changes in our practices or legal requirements.
                    We will notify you of significant changes through email or in-app notifications.
                  </p>
                  <p className="text-gray-600">
                    Last updated: January 15, 2024
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    If you have questions about this privacy policy or your data, please contact our Data Protection Officer:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Email: privacy@xash.network</li>
                    <li>Phone: +263 242 123 456</li>
                    <li>Address: 123 Finance Street, Harare, Zimbabwe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-4">
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">{section.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#1F6AE1] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Compliance Standards</h2>
              <p className="text-xl text-gray-600">
                We adhere to international and local data protection standards
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {compliance.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xl font-bold text-[#0B3C5D] mb-2">{item.name}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-3xl p-12 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8">Additional Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Cookies and Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use cookies and similar tracking technologies to improve your experience. 
                    You can control cookies through your browser settings. Essential cookies are 
                    required for our services to function properly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Third-Party Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may use third-party services for payment processing, analytics, and communication. 
                    These services have their own privacy policies and we ensure they meet our security standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Data Breach Response</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In the unlikely event of a data breach, we have procedures in place to respond quickly. 
                    We will notify affected users and relevant authorities within 72 hours of discovery.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Children's Privacy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our services are not directed to individuals under 18. We do not knowingly collect 
                    personal information from children. If we become aware of such collection, we will 
                    take steps to delete the information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default PrivacyPolicy;