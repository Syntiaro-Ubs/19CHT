import {
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle,
  GraduationCap,
  Users,
  Briefcase,
  Monitor,
  Settings,
  FileText,
  BadgeCheck,
  UserCheck,
  Building2,
  Layers,
  Box,
  Eye,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function BimCivilArchTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to BIM Concepts and Workflow",
    "Revit Architecture Interface and Setup",
    "Project Templates and BIM Standards",
    "Creating Walls, Floors, Roofs, and Ceilings",
    "Doors, Windows, Curtain Walls and Openings",
    "Stairs, Ramps, and Railings Modeling",
    "Site Modeling and Topography",
    "Family Creation and Custom Components",
    "Sheets, Views, and Annotation Drafting",
    "Revit Structure - Structural Modeling",
    "Linking Architectural and Structural Models",
    "Navisworks Coordination and Clash Detection",
    "Construction Documentation and Schedules",
    "Rendering and Visualization in Revit",
    "Final Industry Project - BIM Workflow"
  ];
  const courseHighlights = [
    {
      icon: Building2,
      title: "Revit Architecture",
      description: "Understanding BIM concepts, project setup, Revit templates, and architectural documentation."
    },
    {
      icon: Settings,
      title: "Advanced Modeling Techniques",
      description: "Reference planes, parameters, constraints, rendering, and plotting designs."
    },
    {
      icon: Layers,
      title: "Revit Structure",
      description: "Structural modeling and seamless linking with architectural models for coordination."
    },
    {
      icon: Eye,
      title: "Navisworks",
      description: "Introduction to Navisworks and multi-discipline trade model coordination workflows."
    }
  ];
  const careerScope = [
    {
      icon: Building2,
      title: "BIM Modeler",
      description: "Create and manage BIM models for architecture, structural, and MEP disciplines."
    },
    {
      icon: Layers,
      title: "BIM Coordinator",
      description: "Coordinate multi-discipline models, detect clashes, and manage BIM workflows."
    },
    {
      icon: Box,
      title: "Revit Designer",
      description: "Design architectural and structural models using Revit for residential and commercial projects."
    },
    {
      icon: Eye,
      title: "Navisworks Specialist",
      description: "Perform clash detection, model reviews, and construction simulation using Navisworks."
    },
    {
      icon: FileText,
      title: "Construction Documentation Lead",
      description: "Manage project documentation, schedules, and BIM deliverables for construction teams."
    },
    {
      icon: Briefcase,
      title: "BIM Project Consultant",
      description: "Provide BIM implementation and consulting services to architecture and engineering firms."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for this training?",
      answer: "Basic knowledge of civil or architectural concepts is preferred but not mandatory."
    },
    {
      question: "What is the daily training duration?",
      answer: "Training duration varies by batch, with flexible timings available."
    },
    {
      question: "Will I receive study material?",
      answer: "Yes, complete study material, assignments, and project files are provided."
    },
    {
      question: "How will I get my certificate?",
      answer: "Certificates are issued after successful course completion."
    },
    {
      question: "Is the certificate accepted by industry or colleges?",
      answer: "Yes, the certification is widely accepted in India and abroad."
    },
    {
      question: "How long can I access the student dashboard?",
      answer: "Lifetime access is provided for revision and reference."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, career guidance and placement support are provided."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1648139731984-56bcce3b86e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzczNDAwNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="BIM Civil & Architecture Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              BIM Civil & Architecture
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional BIM Training at Career Hub Technology. Building
              Information Modeling (BIM) is a digital construction process used
              to plan, design, construct, and manage buildings efficiently across
              architecture, engineering, and construction workflows.
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
                  About BIM Civil & Architecture
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional BIM Training at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Building Information Modeling (BIM) is a digital construction
                  process used to plan, design, construct, and manage buildings
                  efficiently across architecture, engineering, and construction
                  workflows.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  The BIM Civil & Architecture course at Career Hub Technology
                  provides in-depth knowledge of BIM workflows using globally
                  accepted tools and standards - with hands-on exposure through
                  real-time projects aligned with international practices
                  followed in Dubai, UAE, and other Gulf countries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Revit Architecture & Structure",
    "Navisworks coordination",
    "Global BIM standards",
    "Real-time project exposure"
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
                  Key Benefits of BIM Training
                </h3>
                <div className="space-y-4">
                  {[
    "Access to student learning panel and resources",
    "Study materials, e-books, tutorials, and project files",
    "Practical exposure through industry-oriented projects",
    "Career guidance and placement support",
    "Flexible learning options (Online / Offline)",
    "Training aligned with global BIM standards"
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
                Our BIM program delivers comprehensive skills in Revit,
                Navisworks, and construction documentation workflows.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led, industry-focused training" },
    { icon: BookOpen, text: "Weekly doubt-clearing and mentoring sessions" },
    { icon: Award, text: "Lifetime assistance for revision and guidance" },
    { icon: Monitor, text: "Lifetime login access to student learning dashboard" },
    { icon: GraduationCap, text: "Worldwide valid certification" },
    { icon: FileText, text: "Study material, assignments, and live projects included" }
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
    /* Certification & Instructor Standards */
  }
      <section className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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
                  Career Hub Technology certifications are industry-recognized
                  and globally accepted. On successful completion, students
                  receive a worldwide valid certificate that strengthens
                  opportunities in India, Dubai, and international job markets.
                </p>
                <p className="text-sm text-white/70">
                  Training is delivered by experienced professionals focused on
                  project-based learning and real-world BIM applications.
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
                  Career Hub Technology trainers are qualified industry
                  professionals with 5+ years of hands-on experience in BIM,
                  CAD, and construction technologies.
                </p>
                <p className="text-sm text-white/70">
                  The delivery approach emphasizes practical execution,
                  coordination workflows, and global construction standards.
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
                BIM Civil & Architecture Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Periodically updated to align with the latest BIM tools and
                international construction standards.
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
                Career Opportunities After BIM Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                BIM skills open doors to roles in architecture, structural
                engineering, MEP coordination, and construction management
                globally.
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
                Find answers to common questions about our BIM Civil &
                Architecture training program.
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
                Start Your BIM Career with Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Master BIM workflows and Revit tools with hands-on,
                project-based training by certified industry professionals.
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
  BimCivilArchTraining
};
