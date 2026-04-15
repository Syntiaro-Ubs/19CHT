import {
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle,
  GraduationCap,
  Target,
  Users,
  Briefcase,
  Monitor,
  Settings,
  FileText,
  BadgeCheck,
  UserCheck,
  Wind,
  Zap,
  Droplets,
  Flame,
  Layers,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function RevitMepTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to BIM and Revit MEP Workflow",
    "Revit MEP Interface, Templates, and Setup",
    "Mechanical - HVAC Duct System Modeling",
    "HVAC Equipment Placement and Coordination",
    "Airflow Analysis and System Layout",
    "Electrical - Lighting Layout and Circuits",
    "Electrical Panels, Cable Trays, and Power Systems",
    "Electrical Load Calculations",
    "Plumbing - Fixture Placement and Pipe Routing",
    "Sanitary and Domestic Water Piping Systems",
    "Firefighting System Modeling",
    "Clash Detection and Multi-discipline Coordination",
    "BOQ Extraction and Quantity Schedules",
    "Construction Documentation and Sheets",
    "Real Industry MEP Project Simulation"
  ];
  const courseHighlights = [
    {
      icon: Layers,
      title: "BIM & Revit MEP Fundamentals",
      description: "Understanding BIM workflow, Revit MEP interface, templates, and system settings."
    },
    {
      icon: Wind,
      title: "Mechanical (HVAC) Systems Modeling",
      description: "Ductwork, HVAC equipment, airflow analysis, and system coordination."
    },
    {
      icon: Zap,
      title: "Electrical Systems Design",
      description: "Lighting, power, cable trays, panels, and electrical load calculations."
    },
    {
      icon: Droplets,
      title: "Plumbing & Firefighting Systems",
      description: "Plumbing fixtures, piping systems, fire protection, and documentation."
    }
  ];
  const careerScope = [
    {
      icon: Layers,
      title: "BIM MEP Engineer",
      description: "Design and coordinate HVAC, electrical, and plumbing systems using Revit MEP."
    },
    {
      icon: Settings,
      title: "MEP Coordinator",
      description: "Manage and coordinate multi-discipline MEP systems for clash-free construction."
    },
    {
      icon: Wind,
      title: "HVAC Design Engineer",
      description: "Design mechanical ventilation and air-conditioning systems for buildings."
    },
    {
      icon: Zap,
      title: "Electrical BIM Modeler",
      description: "Model electrical distribution, lighting, and power systems in BIM environments."
    },
    {
      icon: Flame,
      title: "Plumbing & Fire Protection Engineer",
      description: "Design plumbing and fire protection systems per international standards."
    },
    {
      icon: Briefcase,
      title: "BIM Project Manager",
      description: "Lead BIM implementation and coordination on large-scale construction projects."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for Revit MEP training?",
      answer: "Basic knowledge of construction or MEP systems is recommended but not mandatory."
    },
    {
      question: "What is the daily training duration?",
      answer: "Flexible weekday and weekend batches are available."
    },
    {
      question: "Do I get study material and project files?",
      answer: "Yes, complete study material, assignments, and live project files are provided."
    },
    {
      question: "How will I receive the certificate?",
      answer: "After successful course completion."
    },
    {
      question: "Is the certificate accepted internationally?",
      answer: "Yes, it is valid for India, UAE, and other international markets."
    },
    {
      question: "How long can I access the student dashboard?",
      answer: "Lifetime access is provided."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology offers career guidance and placement support."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNRVAlMjBtZWNoYW5pY2FsJTIwZWxlY3RyaWNhbCUyMHBsdW1iaW5nJTIwYnVpbGRpbmclMjBzeXN0ZW1zfGVufDF8fHx8MTc3MzQwMTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Revit MEP Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Revit MEP Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Revit MEP Course at Career Hub Technology. Revit MEP
              is a BIM software used for designing, coordinating, and
              documenting building services such as HVAC, electrical, plumbing,
              and fire protection systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
    href="#curriculum"
    className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
  >
                View Curriculum
              </a>
            </div>

          </div>
        </div>
      </section>

      {
    /* About Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  About Revit MEP Training
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional Revit MEP Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Revit MEP is a BIM software used for designing, coordinating,
                  and documenting building services such as HVAC, electrical,
                  plumbing, and fire protection systems.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  Revit MEP Training at Career Hub Technology provides in-depth
                  knowledge of MEP modeling, clash-free coordination, and
                  construction-ready documentation. The course focuses on
                  real-time projects, industry workflows, and multidisciplinary
                  coordination for BIM MEP roles in India and the Gulf region,
                  including Dubai (UAE).
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "HVAC system modeling",
    "Electrical BIM design",
    "Plumbing & fire protection",
    "Clash detection workflows"
  ].map((item, idx) => <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#0A192F] rounded-2xl p-8">
                <h3
    className="text-xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Key Benefits of Revit MEP Training
                </h3>
                <div className="space-y-4">
                  {[
    "Strong foundation in BIM-based MEP design",
    "Hands-on experience with HVAC, Electrical & Plumbing systems",
    "Industry-oriented documentation and BOQ extraction",
    "Exposure to real project coordination workflows",
    "Career readiness for global BIM MEP roles",
    "Training aligned with India and Gulf construction standards"
  ].map((item, idx) => <div
    key={idx}
    className="flex items-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
  >
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Training Highlights */
  }
      <section className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Training Highlights
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                What's Included in Your Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Our Revit MEP program delivers comprehensive MEP modeling,
                coordination, and documentation skills for BIM careers.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led practical training" },
    { icon: BookOpen, text: "Weekly doubt-clearing and revision sessions" },
    { icon: Award, text: "Lifetime assistance for learning and career support" },
    { icon: Monitor, text: "Lifetime access to student dashboard" },
    { icon: GraduationCap, text: "Worldwide valid certification" },
    { icon: FileText, text: "Study material, assignments, and live projects" }
  ].map((item, idx) => {
    const Icon = item.icon;
    return <div
      key={idx}
      className="flex items-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
    >
                      <div className="bg-[#FF6600]/15 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <span className="text-white/80 text-sm pt-1.5">
                        {item.text}
                      </span>
                    </div>;
  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Course Highlights - 4 Key Topic Cards */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Course Highlights
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                MEP Systems You Will Learn
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseHighlights.map((item, idx) => {
    const Icon = item.icon;
    return <div
      key={idx}
      className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group text-center"
    >
                    <div className="bg-[#FF6600]/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-[#0A192F] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#0A192F]/60">
                      {item.description}
                    </p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Choose & What You Will Learn */
  }
      <section className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Why Choose Revit MEP Training at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our Revit MEP program is designed for engineers, drafters, and
                  BIM professionals:
                </p>
                <ul className="space-y-3">
                  {[
    "Complete HVAC, electrical, and plumbing BIM modeling",
    "Real-time project coordination and clash detection",
    "BOQ extraction and construction documentation",
    "Expert trainers with MEP industry experience",
    "Aligned with India and Gulf construction standards"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
              </div>

              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  What You Will Learn
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  The course covers all MEP disciplines with hands-on projects:
                </p>
                <ul className="space-y-3">
                  {[
    "BIM workflow, Revit MEP interface, and system setup",
    "HVAC duct modeling, equipment placement, and airflow analysis",
    "Electrical lighting, panels, cable trays, and load calculations",
    "Plumbing fixtures, piping, sanitary, and water systems",
    "Fire protection system modeling and coordination",
    "Clash detection, BOQ extraction, and documentation"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {
    /* Certification & Instructor Standards */
  }
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-[#0A192F] rounded-2xl p-8">
                <div className="bg-[#FF6600]/15 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <BadgeCheck className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Certification Process
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  After successful completion, students receive a Career Hub
                  Technology Revit MEP Certification that is globally valid and
                  industry-recognized.
                </p>
                <p className="text-sm text-white/70">
                  This certification validates BIM MEP skills and improves
                  employability in consultancies, contracting firms, and
                  multinational projects.
                </p>
              </div>

              <div className="bg-[#0A192F] rounded-2xl p-8">
                <div className="bg-[#FF6600]/15 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <UserCheck className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Our Instructor Standards
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  All Career Hub Technology Revit MEP trainers are certified BIM
                  professionals with 5+ years of industry experience, focused on
                  practical modeling, coordination, and global BIM standards.
                </p>
                <p className="text-sm text-white/70">
                  Course content is regularly updated to meet international
                  construction requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Curriculum Section */
  }
      <section id="curriculum" className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Curriculum
              </span>
              <h2
    className="text-3xl md:text-4xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Revit MEP Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is updated regularly to reflect current BIM
                MEP industry standards.
              </p>
            </div>
            <div className="space-y-3">
              {curriculum.map((topic, index) => <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#FF6600]/30 hover:bg-white/8 transition-all flex items-center gap-4"
  >
                  <span className="bg-[#FF6600]/15 text-[#FF6600] w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-white">{topic}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Career Scope */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Career Scope
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Career Opportunities After Revit MEP
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Revit MEP skills open doors to BIM MEP engineering,
                coordination, and project management roles worldwide.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerScope.map((career, index) => {
    const Icon = career.icon;
    return <div
      key={index}
      className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group"
    >
                    <div className="mb-4">
                      <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#FF6600] transition-colors">
                        <Icon className="w-5 h-5 text-[#FF6600] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-[#0A192F] mb-2">{career.title}</h3>
                    <p className="text-sm text-[#0A192F]/60">
                      {career.description}
                    </p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* FAQ Section */
  }
      <section className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                FAQs
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Frequently Asked Questions
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Find answers to common questions about our Revit MEP training
                program.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => <div
    key={index}
    className="bg-white border border-[#0A192F]/6 rounded-xl overflow-hidden hover:border-[#FF6600]/30 transition-all"
  >
                  <button
    onClick={() => setOpenFaq(openFaq === index ? null : index)}
    className="w-full flex items-center justify-between p-5 text-left"
  >
                    <span className="text-[#0A192F] pr-4">{faq.question}</span>
                    <ChevronDown
    className={`w-5 h-5 text-[#FF6600] shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
  />
                  </button>
                  {openFaq === index && <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-[#0A192F]/70">{faq.answer}</p>
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* CTA Banner */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-12 text-center">
              <h3
    className="text-2xl md:text-3xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Launch Your BIM MEP Career with CHT
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Master HVAC, electrical, and plumbing BIM workflows valued by
                top construction firms in India, UAE, and worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                  Enroll for Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
    to="/contact"
    className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
  >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  RevitMepTraining
};
