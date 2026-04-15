import {
    AlertTriangle,
    ArrowRight,
    CheckCircle,
    ChevronDown,
    Clock,
    Edit3,
    FileQuestion,
    FileText,
    RefreshCw,
    Shield,
    Users
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function PassportServices() {
  const [activeServiceTab, setActiveServiceTab] = useState("new");
  const [activeDocTab, setActiveDocTab] = useState("additional");
  const [openFaq, setOpenFaq] = useState(null);
  const services = [
    {
      id: "new",
      title: "New Passport Application",
      description: "Guidance for first-time passport applicants, ensuring correct documentation and smooth submission.",
      icon: <FileText className="w-5 h-5" />,
      features: [
        "Eligibility Assessment",
        "Complete Document Checklist",
        "Online Form Filling Support",
        "Submission to Passport Seva"
      ]
    },
    {
      id: "renewal",
      title: "Passport Renewal",
      description: "Assistance with passport renewal before or after expiry, including Tatkal and normal processing..",
      icon: <RefreshCw className="w-5 h-5" />,
      features: [
        "Old Passport Verification",
        "Tatkal & Normal Option",
        "Address Change Support",
        "End-to-End Tracking"
      ]
    },
    {
      id: "corrections",
      title: "Passport Corrections",
      description: "Expert guidance for correcting errors in name, address, DOB, or other passport details.",
      icon: <Edit3 className="w-5 h-5" />,
      features: [
        "Error Identification",
        "Supporting Document Preparation",
        "Correction Application Filing",
        "Verification Support"
      ]
    },
    {
      id: "tatkal",
      title: "Tatkal Passport Services",
      description: "Fast-track urgent passport processing with priority scheduling and expedited handling.",
      icon: <Clock className="w-5 h-5" />,
      features: [
        "Urgent Processing",
        "Priority Appointment Booking",
        "Expedited Filing",
        "Emergency Travel Support"
      ]
    },
    {
      id: "minor",
      title: "Minor Passport Services",
      description: "Specialized support for passports for minors, including parental consent and documentation.",
      icon: <Users className="w-5 h-5" />,
      features: [
        "Parental Consent Guidance",
        "Birth Certificate Verification",
        "Minor-Specific Documentation",
        "Appointment Scheduling"
      ]
    },
    {
      id: "lost",
      title: "Lost or Damaged Passport",
      description: "Complete support for re-issuing lost, stolen, or damaged passports with proper documentation.",
      icon: <AlertTriangle className="w-5 h-5" />,
      features: [
        "Police Report Assistance",
        "Tracking & Delivary",
        "Re-issue Application",
        "Verification Support"
      ]
    }
  ];
  const processSteps = [
    {
      number: "01",
      title: "Consultation & Eligibility Check",
      description: "We assess your case, verify eligibility, and identify the correct passport service type for your situation."
    },
    {
      number: "02",
      title: "Document Preparation & Verification",
      description: "We prepare and verify all required documents (DOB, address, identity, photos) with replacement/attestation guidance."
    },
    {
      number: "03",
      title: "Application Filling & Submission",
      description: "Accurate online form filling and submission to Passport Seva with correctly formatted documents to avoid rejections."
    },
    {
      number: "04",
      title: "Appointment & Biometric Visit",
      description: "We help schedule and prepare you for the PSK/POPSK appointment including biometrics, fee payment, and verification."
    },
    {
      number: "05",
      title: "Verification, Tracking & Delivery",
      description: "Support during police verification, continuous status tracking, and assistance until passport delivery."
    }
  ];
  const whyChooseUs = [
    "End-to-end support from document prep to delivery",
    "Expert guidance to avoid rejection or delays",
    "Tatkal & urgent processing handled efficiently",
    "Transparent process with regular status updates"
  ];
  const freshPassportDocs = [
    "Proof of Date of Birth (Birth Certificate / 10th Marksheet / PAN Card)",
    "Proof of Address (Aadhaar Card / Voter ID / Electricity Bill / Bank Passbook)",
    "Identity Proof (Aadhaar Card / PAN Card / Voter ID)",
    "Passport-size photographs (as per guidelines)"
  ];
  const renewalDocs = [
    "Old Passport (original + self-attested copies)",
    "Address Proof (if address has changed)",
    "Identity Proof",
    "Date of Birth Proof (if required)"
  ];
  const additionalDocs = [
    "Marriage Certificate (for spouse name addition)",
    "Divorce Decree (if applicable)",
    "Change of Name Notification (Gazette)",
    "Annexure documents as per Passport Seva norms"
  ];
  const pricingData = [
    {
      service: "Normal Passport (Fresh / Renewal)",
      timeline: "20-30 Working Days",
      fee: "-1,500 - -2,000*"
    },
    {
      service: "Tatkal Passport",
      timeline: "3-7 Working Days",
      fee: "-3,500 - -4,000*"
    },
    {
      service: "Minor Passport",
      timeline: "20-30 Working Days",
      fee: "-1,000 - -1,500*"
    },
    {
      service: "Passport Renewal",
      timeline: "15-25 Working Days",
      fee: "-1,500 - -2,000*"
    },
    {
      service: "Lost / Damaged Passport",
      timeline: "20-30 Working Days",
      fee: "-3,000 - -5,000*"
    },
    {
      service: "Name / Address Change",
      timeline: "20-30 Working Days",
      fee: "-1,500 - -2,500*"
    },
    {
      service: "ECNR / ECR Correction",
      timeline: "20-25 Working Days",
      fee: "-1,500 - -2,000*"
    }
  ];
  const faqs = [
    {
      question: "What documents are required to apply for a passport?",
      answer: "For a fresh passport, you generally need proof of date of birth, proof of address, identity proof, and passport-size photographs. Specific documents vary based on your application type and category."
    },
    {
      question: "How long does it take to get a passport?",
      answer: "Normal passport processing takes 20-30 working days. Tatkal service takes 3-7 working days. Actual timelines depend on police verification and documentation accuracy."
    },
    {
      question: "Can I apply for a passport online?",
      answer: "Yes, all applications must be submitted online to Passport Seva. We assist with the complete online process including form filling, document uploads, and appointment scheduling."
    },
    {
      question: "What is the Tatkal passport service?",
      answer: "Tatkal is an expedited processing service for urgent passport needs, significantly reducing processing time for an additional government fee."
    },
    {
      question: "Can minors apply for a passport?",
      answer: "Yes, minors can apply. They require specific documentation including parental consent annexures and birth certificates."
    }
  ];
  const activeService = services.find((s) => s.id === activeServiceTab) || services[0];
  return <div className="bg-white min-h-screen">
      {
    /* Hero Section */
  }
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-br from-[#FF6600]/10 to-orange-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#FF6600]/10 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-orange-300/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Hassle-Free <span className="text-[#FF6600]">Passport Assistance</span> Made Simple
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Career Hub Technology, we provide end-to-end passport services designed to make the application, renewal, and correction process smooth, fast, and stress-free.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you are applying for a new passport, renewing an existing one, or updating details, our experts guide you at every step with accuracy, transparency, and compliance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FF6600] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e65c00] transition-colors shadow-lg shadow-[#FF6600]/30 flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-[#FF6600] hover:text-[#FF6600] transition-colors flex items-center gap-2">
                  Expert Guidance
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
              <ImageWithFallback
    src="https://images.unsplash.com/photo-1706880471208-88328ff11505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXNzcG9ydCUyMHRyYXZlbHxlbnwxfHx8fDE3NzMzMzMwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    alt="Indian Passport Travel"
    className="w-full h-auto rounded-3xl shadow-2xl relative z-10 border-4 border-white object-cover aspect-[4/3]"
  />
              
              {
    /* Floating badges */
  }
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 border border-gray-100">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Success Rate</p>
                  <p className="text-xl font-bold text-gray-900">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Services Tabs Section */
  }
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Passport Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete support from start to finish for every type of passport need.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {
    /* Sidebar Tabs */
  }
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {services.map((service) => <button
    key={service.id}
    onClick={() => setActiveServiceTab(service.id)}
    className={`flex items-center gap-4 w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${activeServiceTab === service.id ? "bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/20 scale-[1.02]" : "bg-white text-gray-700 hover:bg-orange-50 hover:text-[#FF6600] border border-gray-100 shadow-sm"}`}
  >
                  <div className={`p-2 rounded-lg ${activeServiceTab === service.id ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}>
                    {service.icon}
                  </div>
                  {service.title}
                </button>)}
            </div>

            {
    /* Content Area */
  }
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] mb-6">
                  {activeService.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
                <p className="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  {activeService.description}
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-6 mb-10">
                  {activeService.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#FF6600] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </li>)}
                </ul>
                
                <Link to="/contact" className="bg-[#FF6600] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#FF6600]/90 active:bg-[#FF6600]/80 transition-colors w-full sm:w-auto inline-block text-center">
                  Enquire About This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Process Section */
  }
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full font-semibold mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600">
                Simple, transparent and reliable - from consultation to passport delivery.
              </p>
            </div>

            <div className="relative">
              {
    /* Vertical line connecting steps */
  }
              <div className="absolute left-[39px] top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block" />
              
              <div className="space-y-12">
                {processSteps.map((step, index) => <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative group">
                    <div className="bg-white border-4 border-gray-100 group-hover:border-[#FF6600]/30 transition-colors text-[#FF6600] text-2xl font-bold w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                      {step.number}
                    </div>
                    <div className="flex-1 bg-gray-50 p-8 rounded-2xl group-hover:bg-orange-50/50 transition-colors border border-transparent group-hover:border-orange-100">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Free Offer CTA Section */
  }
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold tracking-wider text-sm mb-6 uppercase">
              Free Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              FREE PASSPORT ASSISTANCE
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-8 text-white/90">
              Let Our Experts Handle the Paperwork
            </p>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Passport applications can be stressful - wrong documents, incorrect forms, or missed appointments can delay your travel plans. At Career Hub Technology, we remove all that stress with expert, end-to-end guidance.
            </p>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Whether you are applying for the first time, renewing, or making corrections, our specialists ensure every step is completed accurately and efficiently - saving you time and eliminating rejection risks.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Link to="/contact" className="bg-[#FF6600] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-600 active:bg-green-700 transition-colors shadow-lg shadow-[#FF6600]/30 inline-flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Choose Us */
  }
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us for Passport Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  </div>
                  <p className="text-lg text-gray-800 font-medium pt-1">{reason}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Required Documents */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Required Documents by Category
              </h2>
            </div>

            {
    /* Tab Navigation */
  }
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
    onClick={() => setActiveDocTab("fresh")}
    className={`px-6 py-3 rounded-full font-semibold transition-all ${activeDocTab === "fresh" ? "bg-gray-900 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
  >
                Fresh Passport
              </button>
              <button
    onClick={() => setActiveDocTab("renewal")}
    className={`px-6 py-3 rounded-full font-semibold transition-all ${activeDocTab === "renewal" ? "bg-gray-900 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
  >
                Renewal / Reissue
              </button>
              <button
    onClick={() => setActiveDocTab("additional")}
    className={`px-6 py-3 rounded-full font-semibold transition-all ${activeDocTab === "additional" ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
  >
                Additional Documents
              </button>
            </div>

            {
    /* Tab Content */
  }
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
              {activeDocTab === "fresh" && <div className="space-y-6">
                  {freshPassportDocs.map((doc, index) => <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                      <span className="bg-gray-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <p className="text-lg text-gray-800 pt-1 font-medium">{doc}</p>
                    </div>)}
                </div>}

              {activeDocTab === "renewal" && <div className="space-y-6">
                  {renewalDocs.map((doc, index) => <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                      <span className="bg-gray-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <p className="text-lg text-gray-800 pt-1 font-medium">{doc}</p>
                    </div>)}
                </div>}

              {activeDocTab === "additional" && <div className="space-y-6">
                  {additionalDocs.map((doc, index) => <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-orange-50">
                      <span className="bg-[#FF6600]/10 text-[#FF6600] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <p className="text-lg text-gray-800 pt-1 font-medium">{doc}</p>
                    </div>)}
                </div>}
            </div>
          </div>
        </div>
      </section>

      {
    /* Pricing Table */
  }
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full font-semibold mb-4">
                Timelines & Fees
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Processing Information
              </h2>
              <p className="text-xl text-gray-600">
                Passport processing timelines & service fees at a glance.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Service Type</th>
                      <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Processing Timeline</th>
                      <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Service Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.map((item, index) => <tr key={index} className="hover:bg-orange-50/50 transition-colors">
                        <td className="px-6 py-5 text-gray-900 font-semibold">{item.service}</td>
                        <td className="px-6 py-5 text-gray-600">{item.timeline}</td>
                        <td className="px-6 py-5 font-bold text-[#FF6600]">{item.fee}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  * Fees are approximate and subject to government regulations. Actual charges may vary based on individual requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* FAQ Section */
  }
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full font-semibold mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => <div
    key={index}
    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? "border-[#FF6600] shadow-md" : "border-gray-200 hover:border-gray-300"}`}
  >
                  <button
    onClick={() => setOpenFaq(openFaq === index ? null : index)}
    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white"
  >
                    <span className="font-bold text-lg text-gray-900 pr-4 flex items-center gap-3">
                      <FileQuestion className={`w-5 h-5 ${openFaq === index ? "text-[#FF6600]" : "text-gray-400"}`} />
                      {faq.question}
                    </span>
                    <ChevronDown
    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-[#FF6600]" : "text-gray-400"}`}
  />
                  </button>
                  <div
    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
  >
                    <div className="pl-8">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Final CTA */
  }
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMG9yYW5nZXxlbnwxfHx8fDE3NzMzMzQwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Need Passport Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let our experts handle the paperwork - quickly, accurately, and stress-free. First consultation is always FREE.
            </p>
            <Link to="/contact" className="bg-[#FF6600] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-600 active:bg-green-700 transition-colors shadow-lg shadow-[#FF6600]/30 inline-flex items-center gap-2">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>;
}
export {
    PassportServices
};
