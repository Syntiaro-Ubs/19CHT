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
function SolidworksTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const courseHighlights = [
    {
      icon: PenTool,
      title: "Sketcher & Part Design",
      description: "Parametric sketch creation and solid part modeling with intelligent feature management."
    },
    {
      icon: Box,
      title: "Assembly Design",
      description: "Component mates, motion study, assembly configurations, and BOM-ready structures."
    },
    {
      icon: Layers,
      title: "Sheet Metal & Weldments",
      description: "Sheet metal bends, flanges, forming tools, weldment profiles, and structural members."
    },
    {
      icon: FileText,
      title: "Drafting & Surface Design",
      description: "Production-ready 2D drawings, GD&T annotations, surface lofts, and advanced geometry."
    }
  ];
  const curriculum = [
    "Introduction to SolidWorks Interface and Workspace",
    "Sketch Fundamentals - Entities, Constraints, Relations",
    "Part Design - Boss-Extrude, Cut-Extrude, Revolve",
    "Sweep, Loft, and Pattern Features",
    "Design Intent and Parametric Control",
    "Assembly Design - Mates, Configurations, and Motion",
    "BOM and Assembly Exploded Views",
    "Drafting - 2D Drawings, GD&T, Annotations",
    "Sheet Metal Design - Bends, Flanges, Forming Tools",
    "Weldments - Structural Members and Cut Lists",
    "Surface Modeling - Loft, Boundary, and Fill Surfaces",
    "SolidWorks Simulation Introduction",
    "Rendering and PhotoView 360",
    "Industry Project - Full Product Assembly Documentation"
  ];
  const careerScope = [
    {
      icon: Cog,
      title: "SolidWorks Design Engineer",
      description: "Design mechanical components and assemblies for product development projects."
    },
    {
      icon: Cpu,
      title: "Product Development Engineer",
      description: "Lead 3D concept development, prototyping, and production documentation."
    },
    {
      icon: Layers,
      title: "Sheet Metal Design Engineer",
      description: "Design enclosures, brackets, frames, and sheet metal products for manufacturing."
    },
    {
      icon: Wrench,
      title: "Tooling & Fixture Designer",
      description: "Develop jigs, fixtures, and tooling using SolidWorks for production environments."
    },
    {
      icon: Settings,
      title: "FEA / Simulation Analyst",
      description: "Perform structural and thermal simulations using SolidWorks Simulation."
    },
    {
      icon: Briefcase,
      title: "CAD Detailing Engineer",
      description: "Produce accurate manufacturing drawings and documentation from 3D models."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for SolidWorks training?",
      answer: "Basic mechanical knowledge is helpful. The course is also suitable for absolute beginners."
    },
    {
      question: "What is the duration of the course?",
      answer: "Flexible batch durations are available to suit working professionals and students."
    },
    {
      question: "Will I work on real industry projects?",
      answer: "Yes, the course includes practical assignments and a capstone industry project."
    },
    {
      question: "Is the SolidWorks certificate industry-recognized?",
      answer: "Yes, Career Hub Technology certifications are accepted by engineering firms in India and internationally."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support."
    },
    {
      question: "Can I learn SolidWorks online?",
      answer: "Yes, both online and classroom training modes are available at Career Hub Technology."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1769151174211-a1b2d41117bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJvZHVjdCUyMGRlc2lnbiUyMHByb3RvdHlwZSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzczMzk4NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="SolidWorks Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              SolidWorks Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional SolidWorks Course at Career Hub Technology.
              SolidWorks is a leading 3D CAD platform used for product design,
              assembly development, simulation-ready modeling, and
              manufacturing documentation - the most widely used parametric
              CAD software for mechanical engineering globally.
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
    /* About SolidWorks Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  About SolidWorks
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional SolidWorks Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  SolidWorks is a leading 3D CAD platform used for product
                  design, assembly development, simulation-ready modeling, and
                  manufacturing documentation across industries - the most
                  widely used parametric CAD software for mechanical
                  engineering globally.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our SolidWorks
                  training focuses on practical CAD skills, project-driven
                  learning, and industry-standard workflows through structured
                  modules in sketching, part design, assembly, drafting, sheet
                  metal, weldments, and surface modeling.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical CAD skills",
    "Project-driven learning",
    "Industry-standard workflows",
    "Expert trainer guidance"
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
                  SolidWorks Modules You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "Sketcher & Part Design",
      desc: "Parametric solid modeling with feature control"
    },
    {
      name: "Assembly Design",
      desc: "Mates, configurations, and motion study"
    },
    {
      name: "Sheet Metal & Weldments",
      desc: "Bends, flanges, structural members"
    },
    {
      name: "Surface Modeling",
      desc: "Loft, boundary, and fill surfaces"
    },
    {
      name: "Drafting & Simulation",
      desc: "2D drawings, GD&T, FEA introduction"
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
                Our SolidWorks training program delivers the practical skills
                and confidence needed to excel in product design and
                mechanical engineering.
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
                From sketcher and part design to sheet metal, weldments, and
                simulation - gain complete command over SolidWorks for
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
                  Why Choose SolidWorks Training at Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This course is designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Mechanical engineering students and diploma holders",
    "Product design and manufacturing aspirants",
    "CAD users transitioning to SolidWorks workflows",
    "Working professionals upgrading 3D design capability"
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
                  The curriculum is built to deliver practical capability from
                  core CAD fundamentals to advanced design workflows:
                </p>
                <ul className="space-y-3">
                  {[
    "Create accurate parametric 3D part models",
    "Build assemblies with proper mates and motion understanding",
    "Generate production drawings and BOM-ready documentation",
    "Apply sheet metal, weldment, and surface tools in projects"
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
                  Technology SolidWorks Certification that is globally
                  recognized and valued by product design, manufacturing, and
                  engineering companies in India and internationally.
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
                  All Career Hub Technology SolidWorks trainers are certified
                  professionals with 5+ years of industry experience in
                  mechanical product design, assembly, and manufacturing
                  documentation using SolidWorks.
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
                SolidWorks Training Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is updated periodically to align with
                current SolidWorks versions and evolving industry requirements.
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
                SolidWorks skills open doors to high-value career paths in
                product design, manufacturing, simulation, and engineering
                documentation.
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
                Build Your CAD Career with SolidWorks at Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Whether you are a beginner or an experienced professional,
                Career Hub Technology SolidWorks training helps you gain
                practical expertise for stronger career opportunities in
                product and mechanical design.
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
  SolidworksTraining
};
