import {
    ArrowRight,
    CheckCircle,
    FileText,
    MapPin,
    MessageSquare,
    Search,
    Target,
    Users
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function CareerCounseling() {
  const [activeOffer, setActiveOffer] = useState(0);
  const offerCategories = [
    {
      icon: Target,
      title: "Career Assessment",
      description: "In-depth evaluation of skills, qualifications, experience, and career aspirations to define clear career pathways.",
      items: [
        "Skills & Competency Analysis",
        "Experience Evaluation",
        "Career Aspiration Mapping",
        "Strength & Weakness Assessment"
      ]
    },
    {
      icon: Search,
      title: "Job Search Strategy",
      description: "Structured job search methodology with targeted approaches to identify and secure the best opportunities globally.",
      items: [
        "Market Research & Opportunity Identification",
        "Application Strategy & Targeting",
        "Networking & Referral Guidance",
        "Job Portal Optimization"
      ]
    },
    {
      icon: MapPin,
      title: "Industry & Role Mapping",
      description: "Strategic alignment of your profile with high-demand industries, roles, and geographies for maximum career impact.",
      items: [
        "Industry Demand Analysis",
        "Role Suitability Matching",
        "Country & Market Selection",
        "Growth Potential Evaluation"
      ]
    },
    {
      icon: FileText,
      title: "Resume & Profile Optimization",
      description: "Professionally crafted resumes, cover letters, and LinkedIn profiles designed to meet global hiring standards.",
      items: [
        "ATS-Optimized Resume Writing",
        "LinkedIn Profile Enhancement",
        "Cover Letter & SOP Drafting",
        "Portfolio & Profile Review"
      ]
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      description: "Comprehensive mock interviews, behavioral coaching, and confidence-building sessions for all interview formats.",
      items: [
        "Mock Interview Sessions",
        "Behavioral & Technical Coaching",
        "Body Language & Communication Training",
        "Salary Negotiation Guidance"
      ]
    },
    {
      icon: Users,
      title: "Career Coaching & Mentorship",
      description: "Ongoing one-on-one mentorship with experienced career advisors to guide your professional journey long-term.",
      items: [
        "Personalized Mentoring Sessions",
        "Career Transition Support",
        "Professional Development Planning",
        "Accountability & Progress Tracking"
      ]
    }
  ];
  const journeySteps = [
    {
      step: "1",
      title: "Profile & Goal Assessment",
      description: "We evaluate your skills, experience, and aspirations to define a clear global career direction."
    },
    {
      step: "2",
      title: "Strategic Career Planning",
      description: "We design a personalized career and job search roadmap aligned with international market demands."
    },
    {
      step: "3",
      title: "Role & Market Alignment",
      description: "We identify suitable job roles, industries, and countries that match your profile and growth potential."
    },
    {
      step: "4",
      title: "Application & Profile Support",
      description: "We optimize your resume, LinkedIn profile, and applications to meet global hiring standards."
    },
    {
      step: "5",
      title: "Interview & Placement Support",
      description: "We prepare you for interviews and provide follow-up support until successful placement and onboarding."
    }
  ];
  const freeOfferBenefits = [
    "Identify your core strengths and transferable skills",
    "Evaluate your experience against global job market standards",
    "Explore suitable roles, industries, and international destinations",
    "Build a clear, actionable roadmap for your next career move"
  ];
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1618218168350-6e7c81151b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwcHJvZmVzc2lvbmFsJTIwZ3VpZGFuY2V8ZW58MXx8fHwxNzczMzgyNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Career counseling session"
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
              Navigate Your Career with Expert Guidance
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Whether you're a fresh graduate, a working professional, or
              planning a career switch - our certified counselors help you make
              informed decisions and achieve your professional goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
  >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
    href="#services"
    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/30"
  >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Our Services Section */
  }
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  Career Guidance
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  Strategic Career Development & Global Opportunity Support
                </h2>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, we offer structured career guidance
                  services designed to help individuals make informed, confident
                  career decisions. Our expert advisors support job seekers and
                  professionals at every stage - whether entering the workforce,
                  upskilling, or pursuing international career opportunities.
                </p>
                <p className="text-[#0A192F]/70">
                  We provide personalized career assessments, overseas job
                  readiness guidance, resume and profile enhancement, interview
                  preparation, and end-to-end mentorship. With deep industry
                  insights and global market exposure, we help candidates align
                  their skills with the right roles, industries, and countries -
                  accelerating career growth and long-term success.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
    src="https://images.unsplash.com/photo-1589639293663-f9399bb41721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBjb2FjaGluZyUyMHNlc3Npb24lMjBvZmZpY2V8ZW58MXx8fHwxNzczMzgyNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Career mentoring session"
    className="w-full rounded-2xl"
  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* What We Offer Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Professional Career Guidance & Global Career Support
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Our guidance helps professionals and job seekers make strategic
                career decisions, improve employability, and secure the right
                opportunities.
              </p>
            </div>

            {
    /* Category tiles */
  }
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {offerCategories.map((cat, index) => <button
    key={index}
    onClick={() => setActiveOffer(index)}
    className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left cursor-pointer ${activeOffer === index ? "bg-[#FF6600] border-[#FF6600] text-white" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-[#FF6600]/30"}`}
  >
                  <cat.icon
    className={`w-5 h-5 flex-shrink-0 ${activeOffer === index ? "text-white" : "text-[#FF6600]"}`}
  />
                  <span className="text-sm">{cat.title}</span>
                </button>)}
            </div>

            {
    /* Active category detail */
  }
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#FF6600]/20 w-12 h-12 rounded-full flex items-center justify-center">
                      {(() => {
    const Icon = offerCategories[activeOffer].icon;
    return <Icon className="w-6 h-6 text-[#FF6600]" />;
  })()}
                    </div>
                    <h3 className="text-xl text-white">
                      {offerCategories[activeOffer].title}
                    </h3>
                  </div>
                  <p className="text-white/60 mb-6">
                    {offerCategories[activeOffer].description}
                  </p>
                  <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-5 py-2.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors text-sm"
  >
                    Enquire About This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <ul className="space-y-3">
                    {offerCategories[activeOffer].items.map((item, i) => <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                        <span className="text-white/70">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Your Journey Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Your Journey
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Your Global Career Success Path
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Our structured 5-step framework guides you from career clarity
                to international opportunities with expert support at every
                stage.
              </p>
            </div>

            <div className="relative">
              {
    /* Vertical timeline line - desktop only */
  }
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-[#FF6600]/20" />

              <div className="space-y-6">
                {journeySteps.map((item, index) => <div key={index} className="relative group">
                    <div className="md:pl-20">
                      <div className="bg-white border border-[#FF6600]/10 rounded-xl p-8 hover:border-[#FF6600]/30 transition-all">
                        <div className="flex items-start gap-5">
                          {
    /* Step number - mobile */
  }
                          <div className="md:hidden w-12 h-12 rounded-full bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                            <span className="text-sm text-[#FF6600] group-hover:text-white transition-colors">
                              {item.step}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg text-[#0A192F] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-[#0A192F]/60">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {
    /* Step number on timeline - desktop */
  }
                    <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FF6600]/10 items-center justify-center group-hover:bg-[#FF6600] transition-colors border-4 border-[#FAF9F6]">
                      <span className="text-[#FF6600] group-hover:text-white transition-colors">
                        {item.step}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Free Offer Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Free Offer
              </span>
              <p className="text-[#FF6600] tracking-widest uppercase text-xs mb-4">
                FREE CAREER ASSESSMENT
              </p>
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                Get Your Professional Global Career Evaluation
              </h2>
              <p className="text-white/60 max-w-3xl mx-auto mb-4">
                Your career is not just a job - it's a gateway to global growth,
                stability, and long-term success. At Career Hub Technology, we
                recognize that every professional has a unique background,
                ambition, and career path.
              </p>
              <p className="text-white/60 max-w-3xl mx-auto">
                Whether you are a student planning an overseas career, a skilled
                professional seeking international opportunities, or an
                individual exploring a career transition, our expert guidance
                empowers you to make informed and confident decisions.
              </p>
            </div>

            <div className="flex justify-center mb-10">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                Start Your Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-center text-xs text-white/40 mb-14">
              No registration required - 100% Free - Expert-driven insights
            </p>

            {
    /* What You'll Get */
  }
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-14">
              <h3 className="text-lg text-white mb-6 text-center">
                What You'll Get
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {freeOfferBenefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{benefit}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
    CareerCounseling
};
