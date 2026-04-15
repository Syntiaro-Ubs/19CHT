import {
  ArrowRight,
  Building2,
  CheckCircle,
  Globe,
  Users,
  FileText,
  Landmark,
  Briefcase,
  BadgeCheck,
  CreditCard,
  Scale,
  Star,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function BusinessSetupMainZone() {
  const heroFeatures = [
    { icon: BadgeCheck, text: "100% Foreign Ownership Permitted" },
    { icon: Globe, text: "Operate Anywhere Across the UAE" },
    { icon: Building2, text: "Option to Own or Rent Office Space in Mainland Dubai" },
    { icon: Landmark, text: "Eligibility to Work with Government & Semi-Government Entities" },
    { icon: CreditCard, text: "Hassle-Free Corporate Bank Account Opening" },
    { icon: Users, text: "Scalable Business Model with Multiple Visa Allocations" }
  ];
  const overviewStats = [
    { value: "500+", label: "Businesses Established" },
    { value: "98%", label: "Approval Success Rate" },
    { value: "7-14", label: "Days Average Setup" },
    { value: "50+", label: "Business Activities Covered" }
  ];
  const licenseTypes = [
    {
      icon: FileText,
      title: "Professional License",
      description: "For service-oriented businesses such as consultancies, IT firms, marketing agencies, and legal practices."
    },
    {
      icon: Briefcase,
      title: "Commercial License",
      description: "For trading activities including import, export, distribution, and general trading across the UAE."
    },
    {
      icon: Building2,
      title: "Industrial License",
      description: "For manufacturing, processing, and industrial operations with dedicated production facilities."
    }
  ];
  const overviewDetails = [
    "Issued by the Department of Economic Development (DED)",
    "Covers professional, commercial, and industrial activities",
    "No geographical restrictions within the UAE",
    "Eligible for government and semi-government contracts",
    "Flexible office space options across Dubai",
    "Recent reforms allow 100% foreign ownership for most activities"
  ];
  const advantages = [
    {
      icon: Globe,
      title: "Unrestricted Business Operations",
      description: "Operate freely across the UAE, within free zones, and internationally without geographical limitations.",
      bullets: [
        "Trade across all UAE Emirates",
        "No geographic restrictions",
        "International trade permitted"
      ]
    },
    {
      icon: Building2,
      title: "Strong Market Presence",
      description: "Establish a credible and recognized business entity in Dubai that strengthens your brand identity and client trust across the region.",
      bullets: [
        "Enhanced brand credibility",
        "Access to local and regional clients",
        "Recognized by banks and partners"
      ]
    },
    {
      icon: Landmark,
      title: "Access to Government Projects",
      description: "Mainland companies are eligible to bid on and secure government and semi-government contracts - a key revenue stream unavailable to free zone entities.",
      bullets: [
        "Bid on federal and local tenders",
        "Semi-government contract eligibility",
        "Priority for public sector partnerships"
      ]
    },
    {
      icon: Scale,
      title: "No Currency Restrictions",
      description: "Enjoy complete freedom to repatriate profits and capital without currency controls, conversion barriers, or financial limitations.",
      bullets: [
        "Full profit repatriation",
        "No capital conversion barriers",
        "Multi-currency account support"
      ]
    },
    {
      icon: Users,
      title: "Flexible Visa Allocation",
      description: "Mainland licenses offer scalable employee visa allocations based on your office space size, enabling rapid and unlimited team expansion.",
      bullets: [
        "Visa quota based on office size",
        "Scalable team growth",
        "Family and dependent visas available"
      ]
    }
  ];
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const processSteps = [
    {
      step: "01",
      title: "Choose Your Business Activity",
      description: "Identify your business activity from 2,000+ DED-approved options. We ensure alignment with Dubai Mainland regulations."
    },
    {
      step: "02",
      title: "Find the Ideal Location",
      description: "Select the perfect location in Dubai that suits your business needs, budget, and market reach."
    },
    {
      step: "03",
      title: "Determine Legal Structure",
      description: "Decide on your preferred entity type - sole proprietor, partnership, or LLC - with our strategic guidance."
    },
    {
      step: "04",
      title: "Obtain Local Sponsor / Agent",
      description: "Complete sponsorship requirements through our trusted local agent network in full DED compliance."
    },
    {
      step: "05",
      title: "Name Your Company",
      description: "Choose and register your company name with the DED, including availability check and final approval."
    },
    {
      step: "06",
      title: "Apply for Trade License",
      description: "Submit your comprehensive trade license application to DED with complete documentation and follow-up."
    },
    {
      step: "07",
      title: "Secure Office Space",
      description: "Finalize your office arrangement with proper Ejari registration and tenancy contracts for full compliance."
    },
    {
      step: "08",
      title: "Apply for Visas",
      description: "Initiate visa applications for you and your team, including medical tests, Emirates ID, and residency permits."
    }
  ];
  const packages = [
    {
      name: "0 Visa - Mainland Business License",
      tagline: "Ideal for startups, consultants & trading firms without visa requirements",
      highlight: false
    },
    {
      name: "1 Visa - Mainland Business License",
      tagline: "Perfect for entrepreneurs needing residency & operational presence",
      highlight: false
    }
  ];
  const mainlandBenefits = [
    "100% Foreign Ownership Permitted",
    "Operate Anywhere Across the UAE",
    "Option to Own or Rent Office Space in Mainland Dubai",
    "Eligibility to Work with Government & Semi-Government Entities",
    "Hassle-Free Corporate Bank Account Opening",
    "Scalable Business Model with Multiple Visa Allocations"
  ];
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[580px] md:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBidXNpbmVzcyUyMHRvd2Vyc3xlbnwxfHx8fDE3NzMzODM5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Dubai skyline"
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
              Trusted Mainland Company Setup in Dubai
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
            {
    /* Main content area */
  }
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full mb-6">
                  <Building2 className="w-4 h-4" />
                  Dubai Mainland License
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  Trusted Mainland Company Setup in Dubai
                </h2>
                <p className="text-[#0A192F]/70 mb-6">
                  A Dubai Mainland business license allows you to conduct onshore
                  business activities across the UAE and internationally. Issued by
                  the Department of Economic Development (DED), this license is
                  ideal for entrepreneurs and companies seeking operational
                  flexibility and long-term growth.
                </p>
                <p className="text-[#0A192F]/60 mb-8">
                  With Career Hub Technology's Mainland Company Setup services, you
                  receive end-to-end support for professional, commercial, and
                  industrial licenses - aligned precisely with your business
                  objectives.
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
    href="#advantages"
    className="inline-flex items-center gap-2 border border-[#0A192F]/20 text-[#0A192F] px-6 py-3 rounded-lg hover:bg-[#0A192F]/5 transition-colors"
  >
                    View Advantages
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

            {
    /* Stats */
  }
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {overviewStats.map((stat, index) => <div key={index} className="bg-white border border-[#FF6600]/10 rounded-xl p-6 text-center hover:border-[#FF6600]/30 transition-all">
                  <div className="bg-[#FF6600]/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <p className="text-2xl text-[#0A192F]">{stat.value}</p>
                  <p className="text-xs text-[#0A192F]/60">{stat.label}</p>
                </div>)}
            </div>

            {
    /* License Types */
  }
            <div className="grid md:grid-cols-3 gap-6">
              {licenseTypes.map((item, index) => <div
    key={index}
    className="bg-white border border-[#FF6600]/10 rounded-xl p-6 hover:border-[#FF6600]/30 transition-all group"
  >
                  <div className="bg-[#FF6600]/10 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <item.icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg text-[#0A192F] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#0A192F]/60">
                    {item.description}
                  </p>
                </div>)}
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-6">
                  Mainland Company Setup
                </h2>
                <p className="text-white/60 mb-6">
                  Planning to start your business in Dubai, UAE? A Mainland
                  Company Setup is the smartest way to enter the UAE market with
                  complete operational freedom. At Career Hub Technology, we
                  simplify the entire mainland business formation process,
                  helping entrepreneurs and companies turn their business ideas
                  into reality - quickly and compliantly.
                </p>
                <p className="text-white/60 mb-8">
                  Whether you are launching a commercial, industrial, or
                  professional business, our experts provide customized mainland
                  setup solutions aligned with your goals.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#FF6600]/30 transition-all group">
                    <div className="bg-[#FF6600]/10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <CreditCard className="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-white/80">Bank Account Opening Assistance</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#FF6600]/30 transition-all group">
                    <div className="bg-[#FF6600]/10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <FileText className="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-white/80">Corporate Tax Registration</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#FF6600]/30 transition-all group">
                    <div className="bg-[#FF6600]/10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <BadgeCheck className="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-white/80">100% Foreign Ownership</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#FF6600]/30 transition-all group">
                    <div className="bg-[#FF6600]/10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <Globe className="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-white/80">Dubai Investor Visa</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white text-xl mb-6">
                  Mainland at a Glance
                </h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50">Licensing Authority</span>
                    <span className="text-white">DED (Dubai)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50">Foreign Ownership</span>
                    <span className="text-white">Up to 100%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50">Office Requirement</span>
                    <span className="text-white">Flexi Desk / Physical</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50">Visa Allocation</span>
                    <span className="text-white">Based on Office Size</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50">Market Access</span>
                    <span className="text-white">UAE-wide + International</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50">Govt. Contracts</span>
                    <span className="text-white">Eligible</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Setup Timeline</span>
                    <span className="text-white">7-14 Working Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Advantages Section */
  }
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Advantages
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Advantages of a Mainland Business License
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Select each advantage to understand the full business benefits
                of setting up on the Dubai Mainland.
              </p>
            </div>

            <div className="grid md:grid-cols-[320px_1fr] gap-8">
              {
    /* Left - Selectable tabs */
  }
              <div className="space-y-3">
                {advantages.map((item, index) => {
    const Icon = item.icon;
    const isActive = activeAdvantage === index;
    return <button
      key={index}
      onClick={() => setActiveAdvantage(index)}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all ${isActive ? "bg-[#FF6600] text-white" : "bg-white border border-[#FF6600]/10 text-[#0A192F] hover:border-[#FF6600]/30"}`}
    >
                      <div
      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "bg-white/20" : "bg-[#FF6600]/10"}`}
    >
                        <Icon
      className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-[#FF6600]"}`}
    />
                      </div>
                      <span className={isActive ? "text-white" : "text-[#0A192F]/80"}>
                        {item.title}
                      </span>
                    </button>;
  })}
              </div>

              {
    /* Right - Detail panel */
  }
              <div className="bg-white border border-[#FF6600]/10 rounded-2xl p-8 md:p-10">
                {(() => {
    const active = advantages[activeAdvantage];
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
                      <ul className="space-y-3 mb-8">
                        {active.bullets.map((bullet, i) => <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0" />
                            <span className="text-[#0A192F]/70">{bullet}</span>
                          </li>)}
                      </ul>
                      <Link
      to="/contact"
      className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
    >
                        Start Your Mainland Setup
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
                Setting Up a Business in Dubai Mainland
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Our structured 8-step process ensures your business is
                registered quickly, compliantly, and efficiently.
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
    /* Packages Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {
    /* Header area */
  }
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  Our Packages
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                  Dubai Mainland Company Setup Packages
                </h2>
                <h3 className="text-xl text-[#0A192F]/80 mb-6">
                  Choose the Plan That Fits Your Business Stage
                </h3>
                <p className="text-[#0A192F]/60 mb-6">
                  We offer flexible mainland company setup packages designed to
                  meet the needs of different business stages. Whether you need a
                  license-only setup or full residency visa support, our team
                  handles everything end-to-end.
                </p>
                <p className="text-[#0A192F]/60 mb-8">
                  Every package includes dedicated relationship manager support,
                  trade name reservation, and all mandatory DED documentation -
                  ensuring a smooth and compliant business launch in Dubai.
                </p>
                <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                  Discuss Your Requirements
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {
    /* Benefits sidebar */
  }
              <div className="bg-[#0A192F] rounded-2xl p-8">
                <h3 className="text-white text-lg mb-6">
                  Dubai Mainland License Benefits
                </h3>
                <ul className="space-y-4">
                  {mainlandBenefits.map((benefit, index) => <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{benefit}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {
    /* Package Cards */
  }
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg, index) => <div
    key={index}
    className="bg-white border border-[#FF6600]/10 rounded-2xl p-8 hover:border-[#FF6600]/30 transition-all group flex flex-col"
  >
                  <div className="bg-[#FF6600]/10 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <Briefcase className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl text-[#0A192F] mb-3">{pkg.name}</h3>
                  <p className="text-sm text-[#0A192F]/60 mb-8 flex-1">
                    {pkg.tagline}
                  </p>
                  <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 transition-colors self-start"
  >
                    Choose Plan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  BusinessSetupMainZone
};
