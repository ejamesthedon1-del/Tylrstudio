import { Camera, Mail } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Camera className="w-8 h-8 text-blue-500" />
                <span className="text-2xl">Tyler Taylor Studio</span>
              </div>
              <p className="text-white/70 max-w-md leading-relaxed">
                Professional photography services for brands that want to stand out. 
                Creating visual stories that captivate and convert.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-blue-500 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-blue-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-blue-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-blue-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:tylrmadestudios@yahoo.com" className="text-white/70 hover:text-blue-500 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    tylrmadestudios@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} Tyler Taylor Studio. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-white/50 hover:text-blue-500 transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl mb-6 text-black">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <section>
                <h3 className="text-xl mb-2 text-black">Information Collection</h3>
                <p>Tyler Taylor Studio collects information that you provide directly to us, including name, email address, company name, and project details through our contact form.</p>
              </section>
              
              <section>
                <h3 className="text-xl mb-2 text-black">Use of Information</h3>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Respond to your inquiries and provide photography services</li>
                  <li>Send you updates about our services and projects</li>
                  <li>Improve our website and customer experience</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Payment Processing</h3>
                <p>All payment transactions are processed securely through Heartland Payment Systems. We comply with all PCI DSS requirements and do not store credit card information on our servers. Heartland Payment Systems maintains full compliance with payment card industry standards.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except as required for payment processing or as required by law.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal information at any time. Contact us at tylrmadestudios@yahoo.com to exercise these rights.</p>
              </section>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={() => setShowTerms(false)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl mb-6 text-black">Terms of Service</h2>
            <div className="space-y-4 text-gray-700">
              <section>
                <h3 className="text-xl mb-2 text-black">Services</h3>
                <p>Tyler Taylor Studio provides professional photography services including brand photography, product photography, and commercial shoots. Specific deliverables and timelines will be outlined in individual project agreements.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Payment Terms</h3>
                <p>Payment terms are as follows:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>50% deposit required upon project confirmation</li>
                  <li>Remaining 50% due upon delivery of final images</li>
                  <li>All payments processed securely through Heartland Payment Systems</li>
                  <li>Late payments may incur a 1.5% monthly service charge</li>
                  <li>All fees are non-refundable once work has commenced</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Payment Processing Compliance</h3>
                <p>In compliance with Heartland Payment Systems requirements:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>All transactions are processed in accordance with PCI DSS standards</li>
                  <li>Client payment information is encrypted and securely transmitted</li>
                  <li>We maintain proper documentation of all transactions</li>
                  <li>Chargebacks are handled in accordance with card network rules</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Copyright and Usage Rights</h3>
                <p>Tyler Taylor Studio retains copyright of all images. Clients receive usage rights as specified in the project agreement. Unauthorized reproduction or distribution is prohibited.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Cancellation Policy</h3>
                <p>Cancellations made less than 48 hours before a scheduled shoot will forfeit the deposit. Rescheduling is subject to availability and may incur additional fees.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Liability</h3>
                <p>Tyler Taylor Studio maintains professional liability insurance. Our liability is limited to the total amount paid for services. We are not responsible for indirect or consequential damages.</p>
              </section>

              <section>
                <h3 className="text-xl mb-2 text-black">Dispute Resolution</h3>
                <p>Any disputes arising from these terms will be resolved through binding arbitration in accordance with applicable state laws.</p>
              </section>
            </div>
            <button
              onClick={() => setShowTerms(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
