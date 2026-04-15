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
function UnigraphicsTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const courseHighlights = [
    {
      icon: PenTool,
      title: "Sketching & Part Modeling",
      description: "Precise sketching with constraints and parametric 3D solid modeling in NX12."
    },
    {
      icon: Layers,
      title: "Surface & Sheet Metal Design",
      description: "Advanced surfacing for complex geometry and sheet metal components with flat pattern output."
    },
    {
      icon: Box,
      title: "Assembly Design",
      description: "Multi-component assemblies using NX constraints, interference checking, and motion studies."
    },
    {
      icon: FileText,
      title: "Drafting & CAM Basics",
      description: "2D manufacturing drawings with GD&T, annotations, and introduction to NX CAM machining."
    }
  ];
  const curriculum = [
    "Introduction to Siemens NX12 Interface and Environment",
    "Coordinate Systems, Datum Planes, and Reference Geometry",
    "Sketch Tools - Constraints, Dimensions, Parametric Control",
    "Part Modeling - Extrude, Revolve, Sweep, and Boolean Operations",
    "Advanced Features - Holes, Patterns, Mirror, and Blend",
    "Surface Design - Through Curves, N-sided, and Advanced Surfaces",
    "Sheet Metal Design - Bends, Flanges, and Flat Pattern Extraction",
    "Assembly Design - Component Assembly, Constraints, and Interference",
    "Assembly Configurations and Exploded Views",
    "Drafting - Drawing Views, GD&T, and Annotations",
    "NX CAM Introduction - Milling and Turning Basics",
    "Visualization & Rendering in NX",
    "Industry Project - Mechanical Assembly and Documentation"
  ];
  const careerScope = [
    {
      icon: Cog,
      title: "NX12 / Unigraphics Design Engineer",
      description: "Design and develop mechanical parts and assemblies for automotive and industrial clients."
    },
    {
      icon: Cpu,
      title: "CAD/CAM Engineer",
      description: "Link NX design models to CNC programming using NX CAM for machined components."
    },
    {
      icon: Wrench,
      title: "Automotive Tool & Die Designer",
      description: "Create precision stamping dies and tooling using NX12 for automotive OEM projects."
    },
    {
      icon: Layers,
      title: "Aerospace Structural Engineer",
      description: "Design and document aircraft structural components using Siemens NX."
    },
    {
      icon: Settings,
      title: "NX CAM Programmer",
      description: "Generate CNC toolpaths for milling, turning, and multi-axis machining using NX CAM."
    },
    {
      icon: Briefcase,
      title: "PLM / Teamcenter Integration Specialist",
      description: "Manage design data and product lifecycle using Siemens Teamcenter with NX."
    }
  ];
  const faqs = [
    {
      question: "Is prior CAD experience required for this course?",
      answer: "Basic mechanical knowledge is helpful. The course is structured to accommodate beginners."
    },
    {
      question: "Which version of NX is covered?",
      answer: "The course covers NX12 with concepts applicable to newer NX versions as well."
    },
    {
      question: "Can I learn NX online?",
      answer: "Yes, both online and classroom batch options are available at Career Hub Technology."
    },
    {
      question: "Is the certificate industry-recognized?",
      answer: "Yes, Career Hub Technology NX certifications are valued by automotive and aerospace firms in India and abroad."
    },
    {
      question: "Will I work on real projects?",
      answer: "Yes, the course includes guided project work and a final industry-level assembly project."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support for NX-related roles."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1705614681501-a7f60c15bc97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBlbmdpbmVlcmluZyUyMGFpcmNyYWZ0JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzMzOTg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Unigraphics NX12 Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Unigraphics NX12
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Unigraphics NX12 Course at Career Hub Technology.
              Siemens NX is a powerful CAD/CAM/CAE platform used for product
              engineering, advanced mechanical design, and
              manufacturing-oriented development - the tool of choice for
              automotive, aerospace, and heavy equipment manufacturers.
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
    /* About NX12 Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  About Unigraphics NX12
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional Unigraphics NX12 Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Unigraphics NX12 (Siemens NX) is a powerful CAD/CAM/CAE
                  platform used for product engineering, advanced mechanical
                  design, and manufacturing-oriented development in modern
                  industries - the tool of choice for automotive, aerospace,
                  and heavy equipment manufacturers.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our Unigraphics
                  NX12 training focuses on practical hands-on learning,
                  project-based execution, and industry-relevant CAD workflows
                  - covering sketching, part modeling, assembly, surfacing, and
                  drafting for real-world mechanical design requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Hands-on practical learning",
    "Project-based execution",
    "Industry-relevant workflows",
    "Expert NX trainer guidance"
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
                  NX12 Modules You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "Sketching & Part Modeling",
      desc: "Parametric 3D solid modeling in NX12"
    },
    {
      name: "Surface Design",
      desc: "Through curves, N-sided, advanced surfaces"
    },
    {
      name: "Sheet Metal Design",
      desc: "Bends, flanges, and flat pattern extraction"
    },
    {
      name: "Assembly Design",
      desc: "Constraints, interference checking, motion"
    },
    {
      name: "Drafting & NX CAM",
      desc: "Manufacturing drawings & CNC basics"
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
    /* Training Highlights Section */
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
                Our NX12 training program delivers the practical skills and
                confidence needed to excel in automotive, aerospace, and
                advanced mechanical design.
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
    /* Course Highlights Section */
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
                From sketching and part modeling to surfacing, sheet metal, and
                NX CAM - gain complete command over Siemens NX12 for
                mechanical product design.
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
                  Why Choose Unigraphics NX12 Training at Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This course is designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Mechanical engineering students and fresh graduates",
    "Tool design, product design, and automotive aspirants",
    "CAD/CAM professionals upgrading to NX workflows",
    "Working engineers seeking advanced modeling and drafting skills"
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
                  The curriculum is structured to build capability from CAD
                  fundamentals to advanced NX12 implementation:
                </p>
                <ul className="space-y-3">
                  {[
    "Create parametric 3D parts and complex assemblies in NX12",
    "Develop production-ready 2D drawings from 3D models",
    "Apply surfacing techniques for advanced product geometry",
    "Use practical workflows aligned with industry design standards"
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
                  On successful completion, students receive a Career Hub
                  Technology Unigraphics NX12 Certification recognized by
                  automotive OEMs, aerospace companies, and
                  Siemens-ecosystem engineering firms in India and
                  internationally.
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
                  All Career Hub Technology NX12 trainers are experienced
                  professionals with 5+ years in mechanical design using
                  Siemens NX, delivering structured project-based learning
                  aligned with global automotive and manufacturing standards.
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
                Unigraphics NX12 Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is updated periodically according to latest
                industry practices and current NX software workflows.
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
    /* Career Scope Section */
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
                NX12 skills open doors to high-value career paths in
                automotive, aerospace, tool design, and advanced
                manufacturing.
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
                Build Your Engineering Career with Unigraphics NX12 at CHT
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Whether you are a beginner or a working professional, Career
                Hub Technology NX12 training helps you build practical skills
                for better mechanical design opportunities - in India, Dubai,
                and globally.
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
  UnigraphicsTraining
};
