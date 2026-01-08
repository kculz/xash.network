import React from 'react';
import { FileText, Scale, CheckCircle, AlertCircle, Clock, Shield, Users, BookOpen, ArrowRight } from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      title: 'Account Terms',
      icon: Users,
      items: [
        'You must be 18+ or have parental consent',
        'Provide accurate and complete information',
        'Keep login credentials secure and confidential',
        'Notify us immediately of unauthorized access',
        'One account per individual/business'
      ]
    },
    {
      title: 'Service Usage',
      icon: BookOpen,
      items: [
        'Use services for lawful purposes only',
        'No fraud, money laundering, or illegal activities',
        'Comply with all applicable laws and regulations',
        'No reverse engineering or hacking attempts',
        'Respect intellectual property rights'
      ]
    },
    {
      title: 'Transaction Rules',
      icon: Scale,
      items: [
        'All transactions are final once processed',
        'Commission rates are subject to change',
        'Chargebacks may result in account suspension',
        'Transaction limits may apply',
        'Valid identification required for large transactions'
      ]
    },
    {
      title: 'Fees & Charges',
      icon: FileText,
      items: [
        'Commission fees apply to all transactions',
        'No hidden fees - all charges disclosed upfront',
        'Third-party fees may apply for certain services',
        'Monthly subscription fees for premium features',
        'Bank transfer fees may apply for withdrawals'
      ]
    },
    {
      title: 'Liability',
      icon: Shield,
      items: [
        'We are not liable for third-party actions',
        'Service provided "as is" without warranties',
        'Maximum liability limited to fees paid',
        'Not responsible for indirect damages',
        'Force majeure events excluded'
      ]
    },
    {
      title: 'Termination',
      icon: Clock,
      items: [
        'Either party may terminate with notice',
        'Immediate termination for policy violations',
        'Settlements must be completed before closure',
        'Data retention as per privacy policy',
        'Outstanding fees must be settled'
      ]
    }
  ];

  const importantPoints = [
    {
      title: 'Dispute Resolution',
      desc: 'All disputes shall be resolved through arbitration in Harare, Zimbabwe. Both parties agree to attempt mediation before legal action.',
      icon: Scale
    },
    {
      title: 'Intellectual Property',
      desc: 'All software, trademarks, and content are owned by Xash.network. No right to reproduce or distribute without written permission.',
      icon: Shield
    },
    {
      title: 'Service Changes',
      desc: 'We reserve the right to modify, suspend, or discontinue services at any time. Significant changes will be communicated in advance.',
      icon: AlertCircle
    },
    {
      title: 'Governing Law',
      desc: 'These terms are governed by the laws of Zimbabwe. International users must comply with their local laws and regulations.',
      icon: BookOpen
    }
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
              <FileText className="w-4 h-4 text-[#F5B700] mr-2" />
              <span className="text-sm font-medium">Legal Agreement</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Terms &
              <span className="block bg-gradient-to-r from-[#F5B700] to-white bg-clip-text  mt-2">
                Conditions
              </span>
            </h1>

            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. By accessing our platform,
              you agree to be bound by these terms and conditions.
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
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Legal Agreement</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                These Terms and Conditions govern your use of Xash.network services. By registering for an account
                or using our services, you agree to these terms. If you disagree with any part, you may not use our services.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6">Effective Date</h3>
                  <p className="text-gray-600 mb-4">
                    These terms are effective from January 15, 2024 and replace all previous versions.
                  </p>
                  <div className="flex items-center space-x-4 mt-6">
                    <AlertCircle className="w-6 h-6 text-[#F5B700]" />
                    <span className="text-gray-700 font-medium">Important: Please read carefully</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6">Updates & Notifications</h3>
                  <p className="text-gray-600 mb-4">
                    We may update these terms periodically. Continued use after changes constitutes acceptance.
                    We will notify you of significant changes via email or platform notifications.
                  </p>
                  <p className="text-gray-600">
                    Last updated: January 15, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms */}
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

      {/* Important Points */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Key Legal Points</h2>
              <p className="text-xl text-gray-600">
                Important legal aspects of our agreement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-4">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">{point.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-3xl p-12 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-8">Additional Provisions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Intellectual Property Rights</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    All intellectual property rights in the services, including software, trademarks, logos, 
                    and content, are owned by Xash.network or our licensors. You are granted a limited, 
                    non-exclusive, non-transferable license to use the services as provided.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You may not copy, modify, distribute, sell, or lease any part of our services or software.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Limitation of Liability</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To the maximum extent permitted by law, Xash.network shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including loss of profits, data, 
                    or business opportunities.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our total liability for any claims arising from these terms shall not exceed the total 
                    fees you have paid to us in the 12 months preceding the claim.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Indemnification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to indemnify and hold harmless Xash.network, its officers, directors, employees, 
                    and agents from any claims, damages, losses, liabilities, costs, and expenses arising from 
                    your use of the services, violation of these terms, or infringement of any rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Severability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If any provision of these terms is found to be unenforceable or invalid, that provision 
                    shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
                    shall remain in full force and effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance & Contact */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Scale className="w-16 h-16 text-[#0B3C5D] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Acceptance & Contact</h2>
            <p className="text-xl text-gray-600 mb-8">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Legal Department</h3>
                  <p className="text-gray-600">legal@xash.network</p>
                  <p className="text-gray-600">+263 242 123 456</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Registered Address</h3>
                  <p className="text-gray-600">123 Finance Street</p>
                  <p className="text-gray-600">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;