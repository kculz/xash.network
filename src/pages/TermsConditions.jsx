import React from 'react';
import { 
  FileText, 
  Scale, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Shield, 
  Users, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Award,
  Gavel,
  Lock
} from 'lucide-react';
import { Helmet } from 'react-helmet';

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
      ],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
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
      ],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
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
      ],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
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
      ],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
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
      ],
      gradient: 'from-[#0B3C5D] to-[#1F6AE1]'
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
      ],
      gradient: 'from-[#1F6AE1] to-[#0B3C5D]'
    }
  ];

  const importantPoints = [
    {
      title: 'Dispute Resolution',
      desc: 'All disputes shall be resolved through arbitration in Harare, Zimbabwe. Both parties agree to attempt mediation before legal action.',
      icon: Gavel
    },
    {
      title: 'Intellectual Property',
      desc: 'All software, trademarks, and content are owned by Xash.network. No right to reproduce or distribute without written permission.',
      icon: Lock
    },
    {
      title: 'Service Changes',
      desc: 'We reserve the right to modify, suspend, or discontinue services at any time. Significant changes will be communicated in advance.',
      icon: AlertCircle
    },
    {
      title: 'Governing Law',
      desc: 'These terms are governed by the laws of Zimbabwe. International users must comply with their local laws and regulations.',
      icon: Scale
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Helmet>
            <title>Terms & Conditions - Xash Solutions Legal Agreement</title>
            <meta name="description" content="Read Xash Solutions's terms and conditions. Understand the legal agreement governing your use of our financial services and solutions." />
            <meta property="og:title" content="Terms & Conditions - Xash Solutions Legal Agreement" />
            <meta property="og:description" content="Read Xash Solutions's terms and conditions. Understand the legal agreement governing your use of our financial services and solutions." />
            <meta property="og:url" content="https://xash.network/terms-conditions" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://xash.network/images/logo.jpg" />
            <link rel="canonical" href="https://xash.network/terms" />
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
              <FileText className="w-4 h-4 text-[#F5B700] mr-2" />
              <span className="text-sm font-bold">Legal Agreement</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                <span className="block">Terms &</span>
                <span className="block bg-gradient-to-r from-[#F5B700] via-[#F5B700] to-[#FFF] bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms and conditions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <a href="#contact" className="group relative px-8 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#F5B700]/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Contact Legal Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
              <a href="/privacy" className="px-8 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                Privacy Policy
              </a>
            </div>

            <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">Legal</div>
                <div className="text-sm text-gray-300 font-medium">Binding</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">Clear</div>
                <div className="text-sm text-gray-300 font-medium">Terms</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">Fair</div>
                <div className="text-sm text-gray-300 font-medium">Agreement</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5B700] to-white bg-clip-text text-transparent">2024</div>
                <div className="text-sm text-gray-300 font-medium">Updated</div>
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
                <Scale className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Legal Agreement</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Binding Agreement</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                These Terms and Conditions govern your use of Xash.network services. By registering for an account or using our services, you agree to these terms. If you disagree with any part, you may not use our services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-transparent hover:border-[#1F6AE1] transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">Effective Date</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      These terms are effective from January 15, 2024 and replace all previous versions.
                    </p>
                    <div className="flex items-center space-x-3 bg-[#FFF9E6] px-4 py-3 rounded-xl border border-[#F5B700]/30">
                      <AlertCircle className="w-5 h-5 text-[#F5B700] flex-shrink-0" />
                      <span className="text-gray-700 font-semibold text-sm">Important: Please read carefully</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-transparent hover:border-[#1F6AE1] transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B3C5D] mb-3">Updates & Notifications</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may update these terms periodically. Continued use after changes constitutes acceptance. We will notify you of significant changes via email or platform notifications.
                    </p>
                    <p className="text-gray-600 font-semibold">
                      Last updated: January 15, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
              <FileText className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">Terms Overview</span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Core Terms & Conditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential rules and guidelines for using our services
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

      {/* Important Points */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Key Points</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Key Legal Points</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Important legal aspects of our agreement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {importantPoints.map((point, index) => (
                <div key={index} className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#1F6AE1]">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 group-hover:text-[#1F6AE1] transition-colors">{point.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Provisions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Additional Terms</span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Additional Provisions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed legal provisions and protections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Intellectual Property Rights',
                  content: 'All intellectual property rights in the services, including software, trademarks, logos, and content, are owned by Xash.network or our licensors. You are granted a limited, non-exclusive, non-transferable license to use the services as provided. You may not copy, modify, distribute, sell, or lease any part of our services or software.',
                  icon: Lock
                },
                {
                  title: 'Limitation of Liability',
                  content: 'To the maximum extent permitted by law, Xash.network shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability for any claims arising from these terms shall not exceed the total fees you have paid to us in the 12 months preceding the claim.',
                  icon: Shield
                },
                {
                  title: 'Indemnification',
                  content: 'You agree to indemnify and hold harmless Xash.network, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the services, violation of these terms, or infringement of any rights.',
                  icon: Users
                },
                {
                  title: 'Severability',
                  content: 'If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.',
                  icon: Scale
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

      {/* Acceptance & Contact */}
      <section id="contact" className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B3C5D] mb-6">Acceptance & Contact</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B3C5D]">Legal Department</h3>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">
                    <a href="mailto:legal@xash.network" className="hover:text-[#1F6AE1] transition-colors">legal@xash.network</a>
                  </p>
                  <p className="text-gray-600 font-medium text-lg">
                    <a href="tel:+263242123456" className="hover:text-[#1F6AE1] transition-colors">+263 242 123 456</a>
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B3C5D]">Registered Address</h3>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">123 Finance Street</p>
                  <p className="text-gray-600 font-medium text-lg">Harare, Zimbabwe</p>
                </div>
              </div>
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
              Questions About Our Terms?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Our legal team is available to clarify any aspect of these terms and conditions. We're committed to transparency and fairness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:legal@xash.network" className="group px-10 py-5 bg-[#F5B700] text-[#0B3C5D] rounded-2xl font-bold text-xl hover:bg-[#F5B700]/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105">
                Contact Legal Team
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="/privacy" className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                View Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;