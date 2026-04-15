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
  Building2,
  BarChart3,
  ShieldCheck,
  Columns3,
  HardHat,
  Calculator,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function EtabsTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to ETABS and structural engineering workflow",
    "Interface setup, units, grids, and modeling environment",
    "Material properties and section property definitions",
    "Modeling beams, columns, slabs, shear walls, and supports",
    "Load patterns, combinations, and load assignment methods",
    "Static and dynamic analysis concepts and execution",
    "Wind and seismic analysis fundamentals",
    "Design checks for RCC and steel structural elements",
    "Result extraction, interpretation, and validation",
    "Report generation and project documentation",
    "Hands-on industry-oriented structural projects"
  ];
  const courseHighlights = [
    {
      icon: Columns3,
      title: "Basic Modeling Skills",
      description: "Grid systems, drawing tools, draw modes, and precision controls for structural layouts."
    },
    {
      icon: Calculator,
      title: "Engineering Calculations",
      description: "Structural concepts, load calculations, and design fundamentals."
    },
    {
      icon: Building2,
      title: "Structural Modeling",
      description: "Material properties, section assignments, and loading workflows for real buildings."
    },
    {
      icon: BarChart3,
      title: "Analysis & Verification",
      description: "Result interpretation, design checks, validation, and professional report generation."
    }
  ];
  const careerScope = [
    {
      icon: Building2,
      title: "Structural Design Engineer",
      description: "Design and analyze RCC and steel structures for residential and commercial projects."
    },
    {
      icon: Settings,
      title: "Structural Consultant",
      description: "Provide structural analysis and design services to architects and contractors."
    },
    {
      icon: Columns3,
      title: "BIM Structural Modeler",
      description: "Create and manage BIM-integrated structural models for multi-discipline projects."
    },
    {
      icon: HardHat,
      title: "Site / Project Engineer",
      description: "Execute structural designs on site with proper engineering documentation."
    },
    {
      icon: ShieldCheck,
      title: "Seismic Analysis Specialist",
      description: "Analyze buildings for earthquake resistance per international codes."
    },
    {
      icon: Briefcase,
      title: "Design Office Engineer",
      description: "Work in structural design departments of consulting and contracting firms."
    }
  ];
  const faqs = [
    {
      question: "What is ETABS Training?",
      answer: "ETABS Training is a professional course that teaches structural analysis and design of multi-storey buildings using ETABS software. You'll learn structural modeling, load analysis, seismic and wind analysis, design verification, and result interpretation."
    },
    {
      question: "Who should enroll in this course?",
      answer: "This course is ideal for civil engineering students, structural engineers, site engineers, design office professionals, and anyone looking to build a career in structural analysis and design consultancy."
    },
    {
      question: "Do I need prior structural analysis experience?",
      answer: "Basic knowledge of structural engineering concepts is helpful but not mandatory. The course starts from ETABS fundamentals and progressively covers advanced analysis and design workflows."
    },
    {
      question: "What certification will I receive?",
      answer: "Upon successful completion, you will receive a Career Hub Technology ETABS Certification that is globally recognized by structural design firms, engineering consultancies, and construction companies."
    },
    {
      question: "What design codes are covered?",
      answer: "The training covers international structural design standards including IS codes, ACI, Eurocode, and other relevant standards used in structural analysis and design practice worldwide."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You will work on industry-oriented structural projects including multi-storey residential buildings, commercial structures, seismic analysis models, wind load analysis, and complete structural documentation sets."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1668482369101-959263da2e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZyUyMGFuYWx5c2lzJTIwZGVzaWdufGVufDF8fHx8MTc3MzQwMDMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="ETABS Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              ETABS Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional ETABS Structural Analysis & Design Course. ETABS is a
              leading structural analysis and design software used by civil and
              structural engineers for multi-storey building projects worldwide.
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
                  About ETABS
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional ETABS Structural Analysis & Design Course
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  ETABS (Extended Three-Dimensional Analysis of Building
                  Systems) is a leading structural analysis and design software
                  used by civil and structural engineers for multi-storey
                  building projects worldwide.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, our ETABS training is designed to
                  provide practical, industry-oriented learning using real
                  building models. The course focuses on structural modeling,
                  load analysis, seismic and wind analysis, design verification,
                  and result interpretation - combining core concepts with
                  hands-on practice so learners can confidently work on real
                  engineering projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Real building models",
    "Seismic & wind analysis",
    "Design verification",
    "Industry-oriented learning"
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
                  Course Objectives & Outcomes
                </h3>
                <p className="text-sm text-white/60 mb-5">
                  By the end of ETABS training, you will be able to:
                </p>
                <div className="space-y-4">
                  {[
    "Create accurate structural models for multi-storey buildings",
    "Perform load calculations and apply design loads correctly",
    "Analyze buildings for gravity, wind, and seismic forces",
    "Verify analysis results and prepare professional reports",
    "Design as per international structural standards",
    "Improve employability in structural design and consultancy firms"
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
                Our ETABS program delivers practical structural analysis skills
                with real building models and industry-standard workflows.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led practical training" },
    { icon: BookOpen, text: "Weekly doubt-clearing sessions" },
    { icon: Award, text: "Lifetime assistance for revision" },
    { icon: Monitor, text: "Lifetime student dashboard access" },
    { icon: GraduationCap, text: "Worldwide valid certification" },
    { icon: FileText, text: "Real industry project exposure" }
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
                Key Topics You Will Master
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
                  Why Choose ETABS Training at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our ETABS program is built for practical structural
                  engineering skill development:
                </p>
                <ul className="space-y-3">
                  {[
    "Learn with real multi-storey building models",
    "Hands-on seismic and wind analysis practice",
    "Industry-standard design verification workflows",
    "Expert trainers with 5+ years structural experience",
    "Global structural design code coverage"
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
                  The course structure builds from fundamentals to professional
                  structural analysis workflows:
                </p>
                <ul className="space-y-3">
                  {[
    "ETABS interface, grids, and modeling environment setup",
    "Material and section property definitions",
    "Beam, column, slab, and shear wall modeling",
    "Load patterns, combinations, and assignments",
    "Static, dynamic, seismic, and wind analysis",
    "RCC and steel design checks and reporting"
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
                  Certification Support
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Learners receive guidance aligned to professional project
                  standards and course completion outcomes, helping build
                  stronger profiles for design and consultancy opportunities.
                </p>
                <p className="text-sm text-white/70">
                  The learning track is structured to make you confident with
                  real structural analysis workflows and documentation across
                  global engineering standards.
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
                  All Career Hub Technology ETABS trainers are experienced
                  structural engineers with 5+ years in structural analysis,
                  design, and consultancy projects.
                </p>
                <p className="text-sm text-white/70">
                  Course content is regularly updated to match current ETABS
                  software versions and structural engineering requirements
                  across India and the Gulf region.
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
                ETABS Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: Curriculum is periodically updated based on software
                updates and current structural engineering requirements.
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
                Build Your Structural Design Career with ETABS
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                ETABS skills open doors to roles in structural design,
                consultancy, BIM modeling, and construction engineering globally.
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
                Find answers to common questions about our ETABS training
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
                Master ETABS at Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Gain in-demand structural analysis skills and improve your
                readiness for opportunities in design offices and consultancy
                firms.
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
  EtabsTraining
};
