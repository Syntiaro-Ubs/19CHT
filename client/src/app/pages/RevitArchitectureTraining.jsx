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
  Layers,
  PencilRuler,
  Boxes,
  LayoutGrid,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function RevitArchitectureTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to BIM Concepts with Revit Architecture",
    "Revit Interface, Project Setup, and Templates",
    "Levels, Grids, and Reference Planes",
    "Wall Modeling - Basic and Compound Walls",
    "Doors, Windows, and Curtain Wall Systems",
    "Floor, Roof, and Ceiling Modeling",
    "Stairs, Ramps, and Railings",
    "Site Modeling and Topography",
    "Room and Area Calculations",
    "Custom Family Creation",
    "View Management - Plans, Sections, Elevations",
    "Schedules and Quantity Take-offs",
    "Sheet Setup and Annotation",
    "Multidisciplinary Linking and Coordination",
    "Rendering and 3D Visualization in Revit",
    "Final BIM Architecture Project"
  ];
  const courseHighlights = [
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Beginner fundamentals to advanced architectural modeling and documentation workflows."
    },
    {
      icon: Building2,
      title: "Practical Hands-on Projects",
      description: "Real-time projects to understand workflow, coordination, and project delivery."
    },
    {
      icon: Boxes,
      title: "BIM Integration",
      description: "Collaboration with structural, MEP, and other disciplines using Revit tools."
    },
    {
      icon: GraduationCap,
      title: "Professional Readiness",
      description: "Skills aligned for architecture, construction, engineering, and BIM careers globally."
    }
  ];
  const careerScope = [
    {
      icon: Building2,
      title: "BIM Architect",
      description: "Design and document architectural projects using Revit BIM workflows."
    },
    {
      icon: PencilRuler,
      title: "Revit Draftsman",
      description: "Produce accurate construction drawings and documentation using Revit."
    },
    {
      icon: Layers,
      title: "BIM Coordinator",
      description: "Coordinate and manage multi-discipline BIM models for construction projects."
    },
    {
      icon: Briefcase,
      title: "Architecture Project Manager",
      description: "Lead architectural design delivery using BIM tools and collaborative workflows."
    },
    {
      icon: LayoutGrid,
      title: "Interior BIM Designer",
      description: "Design interior spaces and produce BIM-based interior documentation."
    },
    {
      icon: Users,
      title: "AEC Consultant",
      description: "Provide BIM consulting services to architecture, engineering, and construction clients."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Revit Architecture course?",
      answer: "Basic knowledge of architectural or civil engineering concepts is helpful but not mandatory. The course starts from fundamentals."
    },
    {
      question: "What is the training duration?",
      answer: "The course typically runs 2-3 months depending on the batch schedule. Flexible weekday and weekend options are available."
    },
    {
      question: "Will I work on real projects during training?",
      answer: "Yes, the course includes hands-on projects covering 3D modeling, documentation, and a final BIM architecture project."
    },
    {
      question: "Is the certification globally recognized?",
      answer: "Yes, Career Hub Technology certification is accepted by architecture firms, construction companies, and BIM consultancies worldwide."
    },
    {
      question: "Is online training available?",
      answer: "Yes, online live virtual classrooms and in-person training at Pune and Dubai centers are available."
    },
    {
      question: "Is placement assistance provided?",
      answer: "Yes, Career Hub Technology provides career guidance, placement support, and project mentoring."
    },
    {
      question: "How long can I access the student dashboard?",
      answer: "Lifetime access is provided for revision and reference materials."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1762338693540-9011e09846de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMDNEJTIwbW9kZWwlMjByZW5kZXJpbmd8ZW58MXx8fHwxNzczNDAxOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Revit Architecture Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Revit Architecture
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Revit Architecture Training at Career Hub Technology.
              Future-focused training to build practical BIM and architectural
              design capability for real-world AEC projects.
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
                  About This Course
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Revit Architecture Training at CHT
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Revit Architecture is a BIM platform used by architects,
                  engineers, and construction teams for design, visualization,
                  and project management.
                </p>
                <p className="text-[#0A192F]/70 mb-5">
                  Training includes 3D architectural modeling, construction
                  documentation, and project workflow execution.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  The course covers floor plans, elevations, sections,
                  schedules, families, templates, and multidisciplinary
                  collaboration.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "3D architectural modeling",
    "BIM collaboration workflows",
    "Construction documentation",
    "Custom family creation"
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
                  Why Learn Revit at Career Hub Technology?
                </h3>
                <div className="space-y-4">
                  {[
    "Guidance from experienced instructors and industry experts",
    "Practical workflows for accurate architectural models and documentation",
    "Structured project-based training to overcome self-learning gaps",
    "Planning, designing, and managing building projects efficiently",
    "Career preparation for BIM and architectural design roles",
    "Training aligned with UAE, India, and international AEC standards"
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
                Our Revit Architecture program delivers comprehensive BIM and
                architectural design skills for AEC careers.
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
                Key Highlights
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Why This Training Stands Out
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
              {
    /* 5th card: Flexible Training Modes */
  }
              <div className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group text-center sm:col-span-2 lg:col-span-4">
                <div className="bg-[#FF6600]/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#FF6600] transition-colors">
                  <Monitor className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#0A192F] mb-2">Flexible Training Modes</h3>
                <p className="text-sm text-[#0A192F]/60 max-w-lg mx-auto">
                  Online, live virtual classrooms, and in-person training at
                  Pune and Dubai centers.
                </p>
              </div>
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
                  Why Choose Revit Architecture at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our program is designed for architects, civil engineers, and
                  BIM professionals seeking global career readiness:
                </p>
                <ul className="space-y-3">
                  {[
    "Guidance from experienced instructors and industry experts",
    "Practical workflows for accurate architectural models",
    "Structured project-based training approach",
    "Planning, designing, and managing building projects",
    "Career preparation for BIM and design roles",
    "Aligned with UAE, India, and international AEC standards"
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
                  The course covers BIM architecture from fundamentals to
                  advanced project delivery:
                </p>
                <ul className="space-y-3">
                  {[
    "BIM concepts, Revit interface, and project setup",
    "Wall modeling, doors, windows, and curtain wall systems",
    "Floor, roof, ceiling, stairs, ramps, and railings",
    "Site modeling, room calculations, and custom families",
    "View management, schedules, and sheet annotation",
    "Rendering, 3D visualization, and final BIM project"
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
                  After successful completion, learners receive a Career Hub
                  Technology Revit Architecture Certification that is globally
                  recognized and valued by architecture firms, construction
                  companies, and BIM consultancies worldwide.
                </p>
                <p className="text-sm text-white/70">
                  The certification reflects practical BIM skill proficiency and
                  professional readiness for architectural design and AEC
                  consulting roles.
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
                  All Career Hub Technology instructors are experienced
                  architects and BIM professionals with 5+ years of hands-on
                  industry experience in architectural design, documentation,
                  and project coordination.
                </p>
                <p className="text-sm text-white/70">
                  Training focuses on practical output quality and professional
                  project readiness for modern industry demands - in India,
                  Dubai, and globally.
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
                Revit Architecture Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is updated to align with the latest Revit
                versions and global AEC industry requirements.
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
                Career Opportunities After Revit Architecture
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Revit Architecture skills open opportunities in architecture,
                interior design, construction management, BIM coordination, and
                AEC consulting environments.
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
                Find answers to common questions about our Revit Architecture
                training program.
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
                Start Your Revit Architecture Journey at CHT
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Build professional BIM and architectural design skills for a
                global career in architecture, construction, and AEC consulting.
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
  RevitArchitectureTraining
};
