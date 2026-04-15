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
  Layers,
  Settings,
  PenTool,
  FileText,
  Box,
  Cpu,
  Wrench,
  BadgeCheck,
  UserCheck,
  Cog,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
function PlasticProductDesign() {
  const [openFaq, setOpenFaq] = useState(null);
  const courseHighlights = [
    {
      icon: Box,
      title: "Plastics Fundamentals & DFM",
      description: "Plastic material selection, properties, and design-for-manufacturability rules for injection molding."
    },
    {
      icon: PenTool,
      title: "3D Modeling of Plastic Parts",
      description: "Draft, ribs, bosses, snap fits, wall thickness standards, and feature-based part modeling."
    },
    {
      icon: Layers,
      title: "Tooling & Mold Design Basics",
      description: "Introduction to injection mold design, parting lines, gates, ejectors, and mold flow concepts."
    },
    {
      icon: FileText,
      title: "Production Drawings & QC",
      description: "Dimensioning, GD&T application, surface finish specifications, and quality documentation."
    }
  ];
  const curriculum = [
    "Introduction to Plastics and Polymer Types",
    "Plastic Product Development Process & Flow",
    "Design for Manufacturing (DFM) - Core Rules",
    "Wall Thickness Standards and Uniformity",
    "Draft Angles and Undercut Management",
    "Ribs, Bosses, and Gussets Design",
    "Snap Fits and Living Hinges",
    "Gate Types, Parting Line, and Ejector Design Basics",
    "Introduction to Injection Mold Design",
    "Mold Flow Concepts and Warpage Prevention",
    "3D Modeling of Plastic Components (CATIA / SolidWorks)",
    "Production Drawing - Dimensioning, GD&T, Surface Finish",
    "Industry Case Studies - Automotive & Consumer Products",
    "Capstone Project - Manufacturable Plastic Component"
  ];
  const careerScope = [
    {
      icon: Cog,
      title: "Plastic Product Design Engineer",
      description: "Design injection-molded components for automotive, consumer, and medical product lines."
    },
    {
      icon: Wrench,
      title: "Tooling Design Engineer",
      description: "Design injection molds and tooling for plastic parts with DFM compliance."
    },
    {
      icon: Cpu,
      title: "Product Development Engineer",
      description: "Lead conceptual development of new plastic products from ideation to production."
    },
    {
      icon: Layers,
      title: "Mold Flow Analyst",
      description: "Analyze mold filling, warpage, and cooling using simulation tools."
    },
    {
      icon: Settings,
      title: "Manufacturing Process Engineer",
      description: "Optimize plastic injection molding processes for quality and cycle time reduction."
    },
    {
      icon: Briefcase,
      title: "R&D Design Engineer",
      description: "Research new materials and design techniques for next-generation plastic products."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for this course?",
      answer: "Basic knowledge of mechanical design or CAD is helpful but not mandatory for beginners."
    },
    {
      question: "Which CAD software is used in training?",
      answer: "Training is delivered using CATIA V5 or SolidWorks depending on the batch and project requirements."
    },
    {
      question: "Is this course suitable for freshers?",
      answer: "Yes, fresh graduates from mechanical and plastics engineering are welcome."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support for product design roles."
    },
    {
      question: "Will I work on real projects?",
      answer: "Yes, the course includes hands-on case studies and a capstone plastic product design project."
    },
    {
      question: "Is the certificate industry-recognized?",
      answer: "Yes, Career Hub Technology certifications are accepted by product design and manufacturing companies in India and abroad."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1571233594617-434b02ec3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwaW5qZWN0aW9uJTIwbW9sZGluZyUyMG1hbnVmYWN0dXJpbmclMjBwYXJ0c3xlbnwxfHx8fDE3NzMzOTkwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Plastic Product Design Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Plastic Product Design
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Plastic Product Design Course at Career Hub
              Technology. A high-demand engineering skill used in automotive,
              consumer goods, medical devices, and industrial product
              development - enabling lightweight, cost-effective, and
              manufacturing-friendly product solutions.
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
                  Professional Plastic Product Design Course at Career Hub
                  Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Plastic product design is a high-demand engineering skill
                  used in automotive, consumer goods, medical devices, and
                  industrial product development - enabling lightweight,
                  cost-effective, and manufacturing-friendly product solutions.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our training
                  emphasizes practical workflow, engineering design rules, and
                  project-based implementation - structured from concept
                  development and 3D modeling through design standards and
                  production-oriented documentation to prepare learners for
                  real industry roles.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical workflow focus",
    "Engineering design rules",
    "Project-based implementation",
    "Production-oriented training"
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
                  Modules You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "Plastics Fundamentals",
      desc: "Material selection, properties & DFM rules"
    },
    {
      name: "3D Part Modeling",
      desc: "Draft, ribs, bosses, snap fits & wall thickness"
    },
    {
      name: "Mold Design Basics",
      desc: "Parting lines, gates, ejectors & mold flow"
    },
    {
      name: "Production Drawings",
      desc: "GD&T, dimensioning & surface finish specs"
    },
    {
      name: "Industry Projects",
      desc: "Automotive & consumer product case studies"
    }
  ].map((tool, idx) => <div
    key={idx}
    className="flex items-start gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
  >
                      <div className="bg-[#FF6600]/15 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <Settings className="w-5 h-5 text-[#FF6600]" />
                      </div>
                      <div>
                        <div className="text-white">{tool.name}</div>
                        <div className="text-sm text-white/50">{tool.desc}</div>
                      </div>
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
                Our plastic product design training delivers the practical
                skills and industry knowledge needed to excel in product
                engineering and manufacturing.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led, industry-focused training" },
    { icon: BookOpen, text: "Weekly doubt-clearing and mentoring sessions" },
    { icon: Award, text: "Lifetime assistance for revision and guidance" },
    { icon: Monitor, text: "Lifetime login access to student dashboard" },
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
                      <span className="text-white/80 text-sm pt-1.5">{item.text}</span>
                    </div>;
  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Course Highlights */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Course Highlights
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Key Topics You Will Master
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                From plastics fundamentals and DFM to mold design and
                production drawings - gain complete command over plastic
                product design for manufacturing.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {courseHighlights.map((item, index) => {
    const Icon = item.icon;
    return <div
      key={index}
      className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group relative overflow-hidden"
    >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF6600]/5 rounded-bl-full" />
                    <div className="relative">
                      <div className="bg-[#0A192F] w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-[#0A192F] mb-3">{item.title}</h3>
                      <p className="text-sm text-[#0A192F]/60">
                        {item.description}
                      </p>
                    </div>
                  </div>;
  })}
            </div>

            {
    /* Why Choose & What You Will Learn */
  }
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Why Choose CHT for Plastic Product Design?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This course is ideal for:
                </p>
                <ul className="space-y-3">
                  {[
    "Mechanical and plastics engineering students",
    "Product design and tooling aspirants",
    "CAD professionals moving into plastics domain",
    "Working engineers upgrading design-for-manufacturing skills"
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
                  The curriculum is structured to move from fundamentals to
                  application-focused design execution:
                </p>
                <ul className="space-y-3">
                  {[
    "Understand plastics fundamentals and product development flow",
    "Create manufacturable 3D plastic components",
    "Apply draft, ribs, bosses, snaps, and wall-thickness standards",
    "Develop production-ready models and detailed drawings"
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
                <p className="text-sm text-white/70">
                  On successful completion, learners receive a Career Hub
                  Technology Plastic Product Design Certification recognized by
                  product design firms, automotive suppliers, and consumer
                  goods manufacturers in India and internationally.
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
                <p className="text-sm text-white/70">
                  All Career Hub Technology Plastic Product Design trainers are
                  experienced engineers with 5+ years in plastic part design,
                  tooling, and DFM - delivering practical, industry-aligned
                  training with real product case studies.
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
                Plastic Product Design Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is periodically updated based on industry
                trends, tooling practices, and production requirements.
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
                Career Opportunities After This Course
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Plastic product design skills open doors to high-value career
                paths in automotive, consumer products, medical devices, and
                advanced manufacturing.
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
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                FAQ
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Frequently Asked Questions
              </h2>
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
                    {openFaq === index ? <ChevronUp className="w-5 h-5 text-[#FF6600] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#0A192F]/40 shrink-0" />}
                  </button>
                  {openFaq === index && <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-[#0A192F]/60">{faq.answer}</p>
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
                Build Your Product Design Career with Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Whether you are starting your design career or enhancing your
                experience, Career Hub Technology helps you gain practical
                plastic product design skills that employers value - in India,
                Dubai, and globally.
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
  PlasticProductDesign
};
