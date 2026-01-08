import React from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Award,
  FileText,
  AlertCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet';

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
      ],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
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
      ],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
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
      ],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
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
      ],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
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
      ],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
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
      ],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
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
        <Helmet>

            <title>Privacy Policy - Xash Solutions Data Protection</title>
            <meta name="description" content="Read Xash Solutions's privacy policy. Learn how we collect, use, and protect your personal data while using our financial services." />
            <meta property="og:title" content="Privacy Policy - Xash Solutions Data Protection" />
            <meta property="og:description" content="Read Xash Solutions's privacy policy. Learn how we collect, use, and protect your personal data while using our financial services." />
            <meta property="og:url" content="https://xash.network/privacy" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://xash.network/images/logo.jpg" />
            <link rel="canonical" href="https://xash.network/privacy" />
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
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-[#F5B700]/50 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#F5B700] rounded-full mr-3 animate-pulse"></div>
              <Shield className="w-4 h-4 text-[#F5B700] mr-2" />
              <span className="text-sm font-bold">Transparent & Secure</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                <span className="block">Privacy</span>
                <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal data. Learn how we collect, use, and protect your information.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <a href="#contact" className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Contact Privacy Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
            </div>

            <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">256-bit</div>
                <div className="text-sm text-gray-300 font-medium">Encryption</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">GDPR</div>
                <div className="text-sm text-gray-300 font-medium">Compliant</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-300 font-medium">Protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-300 font-medium">Secure</div>
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

      {/* Introduction */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <FileText className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Our Commitment</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Our Commitment to Privacy</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Xash Solutions, we take your privacy seriously. This policy explains how we collect, use, disclose, 
                and safeguard your information when you use our services. We comply with data protection regulations 
                and implement industry-standard security measures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-transparent hover:border-[#1F6AE1] transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">Policy Updates</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may update this policy periodically to reflect changes in our practices or legal requirements. 
                      We will notify you of significant changes through email or in-app notifications.
                    </p>
                    <p className="text-gray-600 font-semibold">
                      Last updated: January 15, 2024
                    </p>
                  </div>
                </div>
              </div>

              <div id="contact" className="bg-white rounded-3xl p-10 shadow-xl border-2 border-transparent hover:border-[#1F6AE1] transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">Contact Us</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have questions about this privacy policy or your data, please contact our Data Protection Officer:
                    </p>
                    <ul className="space-y-2 text-gray-600 font-medium">
                      <li>Email: privacy@xash.network</li>
                      <li>Phone: +263 242 123 456</li>
                      <li>Address: 123 Finance Street, Harare, Zimbabwe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Privacy Details</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">How We Protect Your Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive measures to keep your information safe and secure
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="group bg-[#F5F7FA] rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                  <div className={`w-20 h-20 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <section.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6 leading-tight group-hover:text-[#1F6AE1] transition-colors">{section.title}</h3>
                  
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#1F6AE1] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
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
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Standards</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Compliance Standards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We adhere to international and local data protection standards
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {compliance.map((item, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#0B3C5D] mb-3 group-hover:text-[#1F6AE1] transition-colors">{item.name}</div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">More Information</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Additional Details</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Important information about how we handle your data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cookies and Tracking',
                  content: 'We use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings. Essential cookies are required for our services to function properly.',
                  icon: Eye
                },
                {
                  title: 'Third-Party Services',
                  content: 'We may use third-party services for payment processing, analytics, and communication. These services have their own privacy policies and we ensure they meet our security standards.',
                  icon: Globe
                },
                {
                  title: 'Data Breach Response',
                  content: 'In the unlikely event of a data breach, we have procedures in place to respond quickly. We will notify affected users and relevant authorities within 72 hours of discovery.',
                  icon: AlertCircle
                },
                {
                  title: 'Children\'s Privacy',
                  content: 'Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information.',
                  icon: Shield
                }
              ].map((item, index) => (
                <div key={index} className="group bg-[#F5F7FA] rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 group-hover:text-[#1F6AE1] transition-colors">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.content}</p>
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
              Questions About Your Privacy?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Our data protection team is here to help answer any questions you may have about how we handle your personal information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:privacy@xash.network" className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Contact Privacy Team
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#contact" className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                View Contact Info
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;