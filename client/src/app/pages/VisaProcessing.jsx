import {
  ArrowRight,
  CheckCircle,
  Globe,
  FileText,
  Clock,
  Briefcase,
  GraduationCap,
  ChevronDown,
  MapPin,
  HelpCircle,
  Building,
  Camera,
  Stethoscope,
  CreditCard,
  Luggage,
  ShieldCheck
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function VisaProcessing() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openDoc, setOpenDoc] = useState(null);
  const visaTypes = [
    {
      icon: GraduationCap,
      title: "Student Visas"
    },
    {
      icon: Briefcase,
      title: "Work Visas"
    },
    {
      icon: Globe,
      title: "Tourist & Visitor Visas"
    },
    {
      icon: MapPin,
      title: "Permanent Residence"
    },
    {
      icon: Building,
      title: "Business & Investment"
    },
    {
      icon: Stethoscope,
      title: "Medical Visas"
    }
  ];
  const howItWorks = [
    {
      step: "01",
      title: "Initial Consultation & Eligibility Review",
      description: "We conduct a detailed profile assessment to identify the most suitable visa category and country-specific requirements."
    },
    {
      step: "02",
      title: "Documentation & Compliance Preparation",
      description: "Our experts assist in compiling, verifying, and formatting all required documents including attestations and translations."
    },
    {
      step: "03",
      title: "Application Filing & Embassy Coordination",
      description: "We manage complete application submission, biometric scheduling, interview preparation, and embassy coordination."
    },
    {
      step: "04",
      title: "Tracking, Approval & Post-Visa Support",
      description: "Continuous application tracking, status updates, visa collection, and post-approval guidance for a smooth transition."
    }
  ];
  const documentCategories = [
    {
      icon: FileText,
      title: "Identity & Civil Documents",
      description: "Mandatory for all visa categories.",
      items: [
        "Valid passport (minimum 6 months validity)",
        "Birth certificate (attested / apostilled if required)",
        "Marriage certificate (if applicable)",
        "National ID card / Aadhaar card",
        "Name change documents (if applicable)"
      ]
    },
    {
      icon: GraduationCap,
      title: "Academic & Educational Documents",
      description: "Required for Student, Skilled Work, and Immigration visas.",
      items: [
        "All degree certificates & transcripts",
        "Mark sheets (10th, 12th, graduation, post-graduation)",
        "Language proficiency scores (IELTS, TOEFL, PTE, etc.)",
        "University admission / offer letter",
        "Statement of Purpose (SOP)",
        "Letters of recommendation"
      ]
    },
    {
      icon: Briefcase,
      title: "Employment & Professional Documents",
      description: "Applicable for Work, Skilled Migration, and Business visas.",
      items: [
        "Employment letter / contract from current employer",
        "Experience certificates from previous employers",
        "Resume / Curriculum Vitae (CV)",
        "No Objection Certificate (NOC) from employer",
        "Professional registration / license (if applicable)",
        "Skills assessment report (for migration visas)"
      ]
    },
    {
      icon: CreditCard,
      title: "Financial Proof & Funding Documents",
      description: "Required for most visa categories to demonstrate financial stability.",
      items: [
        "Bank statements (last 6-12 months)",
        "Income tax returns (last 2-3 years)",
        "Sponsorship / affidavit of support letter",
        "Proof of funds / fixed deposits / savings",
        "Scholarship award letter (if applicable)",
        "Property valuation documents (if applicable)"
      ]
    },
    {
      icon: Camera,
      title: "Photographs & Biometrics",
      description: "Strictly as per embassy or consulate specifications.",
      items: [
        "Passport-size photographs (country-specific dimensions)",
        "White or light-blue background (as required)",
        "Biometric enrollment confirmation (where applicable)",
        "Digital photo specifications compliance"
      ]
    },
    {
      icon: Luggage,
      title: "Travel & Supporting Documents",
      description: "Primarily for Tourist, Business, and Family Visit visas.",
      items: [
        "Flight itinerary / booking confirmation",
        "Hotel reservation / accommodation proof",
        "Travel insurance policy",
        "Invitation letter from host (if applicable)",
        "Conference or event registration (for business travel)",
        "Previous travel history / old passports"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Medical & Police Clearance",
      description: "Commonly required for Work, Student, and Permanent Residence visas.",
      items: [
        "Medical examination report from approved panel physician",
        "Chest X-ray and blood test results",
        "Vaccination records (Yellow Fever, COVID-19, etc.)",
        "Police Clearance Certificate (PCC) from relevant authorities",
        "Character reference letters (if required)"
      ]
    }
  ];
  const timelineData = [
    { category: "Tourist Visa", timeline: "7 - 15 working days" },
    { category: "Student Visa", timeline: "1 - 2 months" },
    { category: "Work Visa", timeline: "3 - 6 months" },
    { category: "Permanent Residence", timeline: "6 - 18 months" }
  ];
  const serviceFees = [
    {
      service: "Consultation",
      description: "Initial profile assessment & visa guidance",
      fee: "FREE"
    },
    {
      service: "Document Preparation",
      description: "Document review, compilation & compliance checks",
      fee: "Contact Us"
    },
    {
      service: "Application Processing",
      description: "Application filing, tracking & embassy coordination",
      fee: "Contact Us"
    },
    {
      service: "Premium Processing",
      description: "Priority handling & expedited case management",
      fee: "Contact Us"
    }
  ];
  const faqs = [
    {
      question: "How long does visa processing take?",
      answer: "Processing times vary by visa type and destination country. Tourist visas typically take 7-15 working days, student visas 1-2 months, work visas 3-6 months, and permanent residence applications 6-18 months. Timelines are indicative and subject to embassy workload and country-specific regulations."
    },
    {
      question: "What documents do I need for my visa application?",
      answer: "Document requirements vary by visa category. Generally, you will need a valid passport, identity documents, financial proof (bank statements, ITR), photographs, and category-specific documents such as academic transcripts for student visas or employment letters for work visas. Our consultants provide a personalized checklist during your initial consultation."
    },
    {
      question: "Can I apply for a visa after a previous rejection?",
      answer: "Yes, a previous rejection does not permanently disqualify you. Our team reviews the rejection reasons in detail, identifies gaps in the previous application, and prepares a stronger re-application with additional documentation, updated financial proof, and thorough interview preparation to maximize your approval chances."
    },
    {
      question: "How much financial proof is required for a visa?",
      answer: "Financial requirements vary by country and visa type. Generally, you need to demonstrate sufficient funds to cover tuition (for student visas), living expenses, travel costs, and return ticket. This is typically shown through bank statements (6-12 months), fixed deposits, income tax returns, and sponsorship letters. Our experts guide you on exact amounts for your specific case."
    },
    {
      question: "Do I need confirmed flight tickets before applying?",
      answer: "Most embassies do not require confirmed flight tickets at the time of visa application. A flight itinerary or tentative booking is usually sufficient. We advise against purchasing confirmed tickets until your visa is approved. Our team provides guidance on the specific requirements for your destination country."
    },
    {
      question: "What if my passport expires while my visa is valid?",
      answer: "If your passport expires while your visa is still valid, you will typically need to get a new passport and may need to transfer the visa to the new passport or carry both documents when traveling. The process varies by country - some countries allow visa transfers while others require a fresh application. We assist with the entire transfer process."
    }
  ];
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2ElMjB0cmF2ZWwlMjBkb2N1bWVudHMlMjBhaXJwb3J0fGVufDF8fHx8MTc3MzM4MTE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Visa processing and travel documents"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/75" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ lineHeight: 1.15 }}
  >
              Seamless Visa Solutions for a Borderless Future
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              From student and work visas to permanent residency - Career Hub
              Technology delivers expert-led visa processing with precision,
              transparency, and a proven track record of success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 active:bg-[#FF6600]/80 transition-colors"
  >
                Start Your Application
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
    href="#visa-types"
    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/30"
  >
                Explore Visa Types
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Global Mobility Services Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  Visa Processing
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  Reliable Visa Solutions with End-to-End Expertise
                </h2>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, we simplify the visa journey with
                  expert guidance and meticulous execution. Our dedicated visa
                  specialists manage every stage of the application process -
                  ensuring accuracy, compliance, and timely submissions.
                </p>
                <p className="text-[#0A192F]/70 mb-8">
                  Our proven systems and regulatory expertise deliver a{" "}
                  <span className="text-[#FF6600]">98% visa success rate</span>{" "}
                  across multiple countries and visa categories.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
    src="https://images.unsplash.com/photo-1771240730126-594a8ab66be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1pZ3JhdGlvbiUyMGNvbnN1bHRpbmclMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMzgxMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Immigration consulting"
    className="w-full rounded-2xl"
  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Visa Types Section */
  }
      <section id="visa-types" className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Comprehensive Visa Services
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Visa Types We Process
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                We manage a wide spectrum of visa applications with regulatory
                precision, country-specific expertise, and end-to-end support.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {visaTypes.map((visa, index) => <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#FF6600]/30 transition-all group text-center"
  >
                  <div className="bg-[#FF6600]/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6600] transition-colors">
                    <visa.icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white">{visa.title}</h3>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* How It Works Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Our Visa Process
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                A structured, compliant, and transparent approach ensuring
                accurate submissions and timely visa approvals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((item) => <div key={item.step} className="relative group">
                  <div className="bg-white border border-[#FF6600]/10 rounded-xl p-8 hover:border-[#FF6600]/30 transition-all h-full">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                        <span className="text-sm text-[#FF6600] group-hover:text-white transition-colors">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[#0A192F] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#0A192F]/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Documentation Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Documentation
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Required Documents
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                A complete and accurate document set is critical for successful
                visa processing. Each visa category has specific requirements.
                Click each category below to view the full checklist.
              </p>
            </div>

            <div className="bg-[#FF6600]/5 border border-[#FF6600]/10 rounded-xl p-6 mb-10 text-center">
              <p className="text-sm text-[#0A192F]/70 mb-4">
                Our visa experts provide a personalized document checklist
                during your initial consultation, ensuring nothing is missed and
                every document meets embassy standards.
              </p>
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-2.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors text-sm"
  >
                Get Document Checklist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mb-6">
              <h3 className="text-sm text-[#0A192F]/50 tracking-wider uppercase mb-4">
                Document Categories
              </h3>
            </div>

            <div className="space-y-3">
              {documentCategories.map((doc, index) => {
    const isDocOpen = openDoc === index;
    return <div
      key={index}
      className={`border rounded-xl overflow-hidden transition-all ${isDocOpen ? "border-[#FF6600]/30 bg-[#FF6600]/5" : "border-[#0A192F]/10"}`}
    >
                    <button
      onClick={() => setOpenDoc(isDocOpen ? null : index)}
      className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#FF6600]/5 transition-colors"
    >
                      <div
      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isDocOpen ? "bg-[#FF6600] text-white" : "bg-[#FF6600]/10 text-[#FF6600]"}`}
    >
                        <doc.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#0A192F] text-sm">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-[#0A192F]/50 mt-0.5">
                          {doc.description}
                        </p>
                      </div>
                      <ChevronDown
      className={`w-5 h-5 text-[#FF6600] transition-transform flex-shrink-0 ${isDocOpen ? "rotate-180" : ""}`}
    />
                    </button>
                    <div
      className="overflow-hidden transition-all"
      style={{
        maxHeight: isDocOpen ? "500px" : "0px",
        opacity: isDocOpen ? 1 : 0,
        transition: "max-height 0.3s ease, opacity 0.2s ease"
      }}
    >
                      <div className="px-6 pb-5 pl-[4.5rem]">
                        <ul className="space-y-2.5">
                          {doc.items.map((item, itemIndex) => <li
      key={itemIndex}
      className="flex items-start gap-2"
    >
                              <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[#0A192F]/70">
                                {item}
                              </span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* Timelines & Fees Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Timelines & Fees
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Processing Information
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Standard processing timelines and professional service charges
                to help you plan confidently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {
    /* Processing Timelines */
  }
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FF6600]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <h3 className="text-lg text-[#0A192F]">
                    Processing Timelines by Visa Category
                  </h3>
                </div>
                <div className="border border-[#FF6600]/10 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#0A192F]">
                        <th className="text-left px-5 py-3 text-sm text-white">
                          Visa Category
                        </th>
                        <th className="text-left px-5 py-3 text-sm text-white">
                          Timeline
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {timelineData.map((item, index) => <tr
    key={index}
    className={`border-b border-[#FF6600]/5 hover:bg-[#FF6600]/5 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-[#FAF9F6]"}`}
  >
                          <td className="px-5 py-3.5 text-sm text-[#0A192F]">
                            {item.category}
                          </td>
                          <td className="px-5 py-3.5 text-sm text-[#0A192F]/70">
                            {item.timeline}
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#0A192F]/40 mt-3">
                  *Timelines are indicative and may vary depending on country
                  regulations and embassy workload.
                </p>
              </div>

              {
    /* Service Fees */
  }
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FF6600]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <h3 className="text-lg text-[#0A192F]">Service Fees</h3>
                </div>
                <div className="border border-[#FF6600]/10 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#0A192F]">
                        <th className="text-left px-5 py-3 text-sm text-white">
                          Service
                        </th>
                        <th className="text-left px-5 py-3 text-sm text-white">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceFees.map((item, index) => <tr
    key={index}
    className={`border-b border-[#FF6600]/5 hover:bg-[#FF6600]/5 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-[#FAF9F6]"}`}
  >
                          <td className="px-5 py-3.5">
                            <p className="text-sm text-[#0A192F]">
                              {item.service}
                            </p>
                            <p className="text-xs text-[#0A192F]/50 mt-0.5">
                              {item.description}
                            </p>
                          </td>
                          <td className="px-5 py-3.5 text-sm">
                            {item.fee === "FREE" ? <span className="inline-flex items-center bg-[#FF6600]/10 text-[#FF6600] px-3 py-1 rounded-full text-xs">
                                FREE
                              </span> : <Link
    to="/contact"
    className="text-[#FF6600] hover:underline text-sm"
  >
                                {item.fee}
                              </Link>}
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#0A192F]/40 mt-3">
                  *Government, embassy, biometric, and third-party charges are
                  excluded and payable separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* FAQ Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
    const isOpen = openFaq === index;
    return <div
      key={index}
      className={`border rounded-xl overflow-hidden transition-all ${isOpen ? "border-[#FF6600]/30 bg-white/10" : "border-white/10 bg-white/5"}`}
    >
                    <button
      onClick={() => setOpenFaq(isOpen ? null : index)}
      className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer hover:bg-white/5 transition-colors"
    >
                      <div
      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-[#FF6600] text-white" : "bg-[#FF6600]/20 text-[#FF6600]"}`}
    >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <h3 className="flex-1 text-white text-sm">
                        {faq.question}
                      </h3>
                      <ChevronDown
      className={`w-5 h-5 text-[#FF6600] transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
    />
                    </button>
                    <div
      className="overflow-hidden transition-all"
      style={{
        maxHeight: isOpen ? "300px" : "0px",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 0.3s ease, opacity 0.2s ease"
      }}
    >
                      <div className="px-6 pb-5 pl-[3.75rem]">
                        <p className="text-sm text-white/60">{faq.answer}</p>
                      </div>
                    </div>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  VisaProcessing
};
