import {
    ArrowRight,
    Award,
    BadgeCheck,
    Banknote,
    BookOpen,
    Building2,
    CheckCircle,
    ChevronDown,
    ClipboardList,
    CreditCard,
    FileText,
    FolderOpen,
    Globe,
    Layers,
    Lock,
    Receipt,
    ScrollText,
    Stamp,
    Star,
    UserCheck,
    Users,
    Zap
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function BusinessSetupFreeZone() {
  const heroFeatures = [
    { icon: BadgeCheck, text: "100% Foreign Ownership Rights Guaranteed" },
    { icon: Zap, text: "Fast, Simple, and Hassle-Free Setup" },
    { icon: Globe, text: "Full Profit Repatriation Anywhere Globally" },
    {
      icon: Building2,
      text: "State-of-the-Art Modern Business Infrastructure"
    },
    { icon: Star, text: "Tax Benefits with Worldwide Global Market Access" },
    { icon: Users, text: "Complete End-to-End Business Support Services" }
  ];
  const overviewCards = [
    { icon: Banknote, text: "Bank Account Opening Assistance" },
    { icon: Receipt, text: "Corporate Tax Registration" },
    { icon: Lock, text: "100% Foreign Ownership" },
    { icon: UserCheck, text: "Dubai Investor Visa" }
  ];
  const documents = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Complete the official application form issued by the respective Free Zone authority to initiate the setup process.",
      bullets: [
        "Free Zone Authority Form",
        "Business Activity Declaration",
        "Shareholder Details Form"
      ]
    },
    {
      icon: FolderOpen,
      title: "Passport Copies",
      description: "Provide clear, colored copies of valid passports for all shareholders, directors, and managers involved in the company.",
      bullets: [
        "Minimum 6 months validity required",
        "All pages with stamps included",
        "Notarized copies if requested"
      ]
    },
    {
      icon: ScrollText,
      title: "Business Plan",
      description: "Submit a concise business plan outlining your company objectives, target market, and projected operations within the Free Zone.",
      bullets: [
        "Executive summary & objectives",
        "Revenue model & projections",
        "Operational plan overview"
      ]
    },
    {
      icon: UserCheck,
      title: "Visa Eligibility Proof",
      description: "Provide documentation proving your eligibility for UAE residence visa, including existing visa copies or NOC from current sponsor.",
      bullets: [
        "Current visa copy (if applicable)",
        "Entry permit details",
        "Sponsor NOC letter"
      ]
    },
    {
      icon: Building2,
      title: "Lease Agreement",
      description: "Submit your office or facility lease agreement within the Free Zone, including Ejari registration where applicable.",
      bullets: [
        "Tenancy contract",
        "Ejari registration certificate",
        "Facility allocation letter"
      ]
    },
    {
      icon: BookOpen,
      title: "MOA / AOA",
      description: "Memorandum of Association and Articles of Association defining company structure, shareholder rights, and operational guidelines.",
      bullets: [
        "Shareholder agreement details",
        "Capital distribution breakdown",
        "Director appointment clauses"
      ]
    },
    {
      icon: Stamp,
      title: "No Objection Certificate",
      description: "NOC from your current UAE sponsor (if applicable) permitting you to establish or join a new business entity in the Free Zone.",
      bullets: [
        "Employer NOC (for employed individuals)",
        "Sponsor consent letter",
        "Attested and notarized copy"
      ]
    },
    {
      icon: ClipboardList,
      title: "Board Resolution",
      description: "Board resolution authorizing the establishment of a branch or subsidiary in the UAE Free Zone, signed by all directors.",
      bullets: [
        "Resolution for branch setup",
        "Authorized signatory details",
        "Company seal & attestation"
      ]
    },
    {
      icon: CreditCard,
      title: "Bank Reference Letter",
      description: "Bank reference letter from an existing bank for each shareholder, confirming good financial standing and account history.",
      bullets: [
        "Issued within last 3 months",
        "On bank letterhead",
        "Account details & standing confirmation"
      ]
    },
    {
      icon: Award,
      title: "Trade Name Certificate",
      description: "Certificate confirming reservation and approval of your chosen company trade name by the respective Free Zone authority.",
      bullets: [
        "Name availability confirmation",
        "Authority approval stamp",
        "Valid reservation period noted"
      ]
    }
  ];
  const processSteps = [
    {
      step: "01",
      title: "Free Zone Selection",
      description: "We help you shortlist the most suitable Free Zone based on your business activity, budget, and expansion plans."
    },
    {
      step: "02",
      title: "Business Activity Finalization",
      description: "Define and finalize your business activities in alignment with Free Zone regulations and operational flexibility."
    },
    {
      step: "03",
      title: "Legal Structure Determination",
      description: "Choose the optimal legal structure-LLC, General Partnership, or Branch-based on your business needs."
    },
    {
      step: "04",
      title: "Trade Name Reservation",
      description: "Submit and reserve your company's unique trade name with the Free Zone authority."
    },
    {
      step: "05",
      title: "License Application",
      description: "Prepare and submit comprehensive license applications with all required documentation and compliance checks."
    },
    {
      step: "06",
      title: "Office Space Setup",
      description: "Secure professional office space or flexi-desk arrangements within your chosen Free Zone."
    },
    {
      step: "07",
      title: "Visa Processing",
      description: "Manage visa applications, medical tests, Emirates ID, and residency permits for all business owners."
    },
    {
      step: "08",
      title: "Bank Account Opening",
      description: "Facilitate seamless corporate bank account opening with leading UAE banks for smooth operations."
    }
  ];
  const keyAdvantages = [
    "100% Foreign Ownership Rights Guaranteed",
    "Fast, Simple, and Hassle-Free Setup",
    "Full Profit Repatriation Anywhere Globally",
    "State-of-the-Art Modern Business Infrastructure",
    "Strong Business Networking Opportunities Available",
    "Exclusive Industry-Specific Advantages & Perks",
    "Complete End-to-End Business Support Services",
    "Tax Benefits with Worldwide Global Market Access"
  ];
  const [activeDoc, setActiveDoc] = useState(0);
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[580px] md:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1668949698231-b2734f0a0bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGZyZWUlMjB6b25lJTIwYnVzaW5lc3MlMjBkaXN0cmljdCUyMG1vZGVybnxlbnwxfHx8fDE3NzMzODQ5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Dubai free zone business district"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white"
    style={{ lineHeight: 1.15 }}
  >
              Free Zone Company Setup in Dubai, UAE
            </h1>
          </div>
        </div>
      </section>

      {
    /* Business Setup UAE Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full mb-6">
                  <Layers className="w-4 h-4" />
                  UAE Free Zone License
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  Trusted Free Zone Company Setup in UAE
                </h2>
                <p className="text-[#0A192F]/70 mb-8">
                  Discover the power of UAE Free Zones with Career Hub
                  Technology, your trusted partner for seamless business setup
                  solutions. With access to 50+ strategically located Free Zones
                  across the UAE, we help entrepreneurs, startups, and
                  established businesses choose the most suitable jurisdiction
                  based on their business activity, budget, and growth plans.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
    href="#benefits"
    className="inline-flex items-center gap-2 border border-[#0A192F]/20 text-[#0A192F] px-6 py-3 rounded-lg hover:bg-[#0A192F]/5 transition-colors"
  >
                    View Details
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {heroFeatures.map((feature, index) => <div
    key={index}
    className="flex items-center gap-4 bg-white border border-[#FF6600]/10 rounded-xl px-5 py-4 hover:border-[#FF6600]/30 transition-all group"
  >
                    <div className="bg-[#FF6600]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[#0A192F]/80">{feature.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Overview Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-6">
                  Free Zone Company Setup
                </h2>
                <p className="text-white/60 mb-6">
                  Start your Free Zone business in Dubai or across the UAE with
                  Career Hub Technology, your trusted partner for end-to-end Free
                  Zone company formation. We simplify the entire setup process by
                  helping you choose the right Free Zone based on your business
                  activity, budget, and expansion goals.
                </p>
                <p className="text-white/60 mb-8">
                  With world-class infrastructure, flexible business models, and
                  global connectivity, UAE Free Zones offer the perfect
                  environment for sustainable growth. We manage
                  everything-from company registration and licensing to visa
                  processing and PRO services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {overviewCards.map((item, index) => <div
    key={index}
    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#FF6600]/30 transition-all group"
  >
                      <div className="bg-[#FF6600]/10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                        <item.icon className="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm text-white/80">{item.text}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white text-xl mb-6">
                  Free Zone at a Glance
                </h3>
                <div className="space-y-5">
                  {[
    {
      label: "Regulatory Authority",
      value: "Individual Free Zone Authority"
    },
    {
      label: "Foreign Ownership",
      value: "100% Permitted"
    },
    {
      label: "Local Sponsor",
      value: "Not Required"
    },
    {
      label: "Office Requirement",
      value: "Flexi Desk / Dedicated Office"
    },
    {
      label: "Tax Benefits",
      value: "0% Income Tax / Exemptions"
    },
    {
      label: "Market Access",
      value: "International + Within Zone"
    },
    {
      label: "Setup Timeline",
      value: "5-10 Working Days"
    }
  ].map((item, index, arr) => <div
    key={index}
    className={`flex justify-between items-center ${index < arr.length - 1 ? "border-b border-white/10 pb-4" : ""}`}
  >
                      <span className="text-white/50">{item.label}</span>
                      <span className="text-white">{item.value}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Document Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Required Documents
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Required Documents
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Ensure a smooth setup process with proper documentation. Select
                each category to view the requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-[320px_1fr] gap-8">
              {
    /* Left - Selectable tabs */
  }
              <div className="space-y-2">
                {documents.map((doc, index) => {
    const Icon = doc.icon;
    const isActive = activeDoc === index;
    return <button
      key={index}
      onClick={() => setActiveDoc(index)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${isActive ? "bg-[#FF6600] text-white" : "bg-white border border-[#FF6600]/10 text-[#0A192F] hover:border-[#FF6600]/30"}`}
    >
                      <div
      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "bg-white/20" : "bg-[#FF6600]/10"}`}
    >
                        <Icon
      className={`w-4 h-4 transition-colors ${isActive ? "text-white" : "text-[#FF6600]"}`}
    />
                      </div>
                      <span
      className={`text-sm ${isActive ? "text-white" : "text-[#0A192F]/80"}`}
    >
                        {doc.title}
                      </span>
                    </button>;
  })}
              </div>

              {
    /* Right - Detail panel */
  }
              <div className="bg-white border border-[#FF6600]/10 rounded-2xl p-8 md:p-10">
                {(() => {
    const active = documents[activeDoc];
    const ActiveIcon = active.icon;
    return <div>
                      <div className="bg-[#FF6600]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                        <ActiveIcon className="w-7 h-7 text-[#FF6600]" />
                      </div>
                      <h3 className="text-2xl text-[#0A192F] mb-4">
                        {active.title}
                      </h3>
                      <p className="text-[#0A192F]/70 mb-8">
                        {active.description}
                      </p>
                      <div className="bg-[#FAF9F6] border border-[#FF6600]/10 rounded-xl p-6 mb-8">
                        <ul className="space-y-3">
                          {active.bullets.map((bullet, i) => <li key={i} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0" />
                              <span className="text-[#0A192F]/70 text-sm">
                                {bullet}
                              </span>
                            </li>)}
                        </ul>
                      </div>
                      <Link
      to="/contact"
      className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
    >
                        Get Full Document Checklist
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>;
  })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Work Process Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Work Process
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Setting Up Your UAE Free Zone Company
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Our structured 8-step framework ensures a smooth, compliant, and
                fast Free Zone business launch.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#FF6600]/30 transition-all group"
  >
                  <div className="w-12 h-12 rounded-full bg-[#FF6600]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <span className="text-[#FF6600] group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Benefits Section */
  }
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {
    /* Left - Content */
  }
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  Why Choose UAE Free Zones
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  Maximize Your Business Potential
                </h2>
                <p className="text-[#0A192F]/70 mb-6">
                  UAE Free Zones offer unmatched advantages for global
                  entrepreneurs and businesses. With 100% foreign ownership,
                  zero tax on profits, and world-class infrastructure, Free
                  Zones have become the preferred destination for international
                  business setup.
                </p>
                <p className="text-[#0A192F]/60 mb-8">
                  Career Hub Technology connects you to the right Free Zone,
                  handles all legal and administrative procedures, and ensures
                  your business is operational in the shortest possible time.
                </p>
                <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
  >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {
    /* Right - Key Advantages */
  }
              <div className="bg-[#0A192F] rounded-2xl p-8">
                <h3 className="text-white text-lg mb-6">Key Advantages</h3>
                <ul className="space-y-4">
                  {keyAdvantages.map((advantage, index) => <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{advantage}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
    BusinessSetupFreeZone
};
