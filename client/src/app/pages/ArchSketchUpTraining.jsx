import {
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle,
  GraduationCap,
  Target,
  Users,
  Monitor,
  Settings,
  FileText,
  BadgeCheck,
  UserCheck,
  Box,
  Layers,
  Camera,
  PencilRuler,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function ArchSketchUpTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to SketchUp Interface",
    "Drawing Methods and Basic Tools",
    "Creating and Managing 3D Solids",
    "Managing Models Using Layers",
    "Camera Tools and View Control",
    "Assigning and Managing Materials",
    "Managing Styles and Visual Settings",
    "Generating Reports and Quantity Takeoffs",
    "Working with 3D Warehouse",
    "Working with Plugins & Extensions",
    "Extension Warehouse Setup",
    "Layout for Professional Documentation",
    "Style Builder",
    "V-Ray Integration for Rendering",
    "Project Preparation and Workflow",
    "Industry Project - Portfolio Build"
  ];
  const courseOverviewCards = [
    {
      icon: Box,
      title: "Fast 3D Modeling",
      description: "Fast, efficient, and intuitive 3D modeling for design and visualization workflows."
    },
    {
      icon: Layers,
      title: "Multi-Industry Use",
      description: "Widely used across architecture, interiors, landscape, civil engineering, construction, film, and game design."
    },
    {
      icon: PencilRuler,
      title: "Beginner-Friendly",
      description: "Create quick and accurate 3D models without requiring advanced design software experience."
    },
    {
      icon: Camera,
      title: "Project-Based Learning",
      description: "Practical and project-based training for real-world design and presentation use cases."
    }
  ];
  const whyLearn = [
    "Fastest 3D modeling tool for architects and designers",
    "Easy to learn with a beginner-friendly interface",
    "Used globally in architecture, interior, and construction firms",
    "Integrates seamlessly with V-Ray, Lumion, and AutoCAD",
    "Great for concept design, site modeling, and client presentations",
    "Strong job market demand across India and UAE"
  ];
  const whoCanJoin = [
    "Architecture and civil engineering students",
    "Interior designers and visualizers",
    "Landscape and urban planning students",
    "Construction and real estate professionals",
    "Mechanical and product design students",
    "Beginners entering the 3D design field"
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Architecture SketchUp course?",
      answer: "No prerequisites are required. The course starts from fundamentals and is suitable for complete beginners as well as working professionals."
    },
    {
      question: "What is the training duration?",
      answer: "The course typically runs 1-2 months depending on the batch schedule. Both weekday and weekend options are available."
    },
    {
      question: "Is this course different from the Civil CAD SketchUp course?",
      answer: "Yes, this Architecture SketchUp course focuses on architectural design workflows, concept presentations, and portfolio building specific to architecture professionals."
    },
    {
      question: "Will I learn V-Ray rendering as part of this course?",
      answer: "Yes, V-Ray integration for rendering is included as part of the course modules to help you create photorealistic presentations."
    },
    {
      question: "Will I build a portfolio during the course?",
      answer: "Yes, the final module is dedicated to an industry project and portfolio build to showcase your skills to employers and clients."
    },
    {
      question: "Is the certification globally recognized?",
      answer: "Yes, Career Hub Technology certification is accepted by architecture firms, design studios, and construction companies worldwide."
    },
    {
      question: "Is placement assistance provided?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support for all students completing the program."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1765162308598-e67b089969c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFyY2hpdGVjdHVyYWwlMjBtb2RlbCUyMGJ1aWxkaW5nJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzQwMjczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Architecture Google SketchUp Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Google SketchUp Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Build practical 3D modeling skills for architecture & design.
              Google SketchUp is one of the world's most popular 3D modeling
              tools, known for its intuitive interface and fast workflows.
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
                  Build Practical 3D Modeling Skills for Architecture & Design
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Google SketchUp is one of the world's most popular 3D modeling
                  tools, known for its intuitive interface and fast workflows.
                  At Career Hub Technology, our training focuses on practical,
                  project-based learning for real-world architecture and design
                  use cases.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  From basic 3D creation to advanced rendering integration with
                  V-Ray, learners develop complete design presentation skills
                  for architecture, interior, and landscape projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Intuitive 3D modeling",
    "V-Ray rendering integration",
    "Architecture & interiors",
    "Portfolio-ready projects"
  ].map((item, idx) => <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#0A192F] rounded-2xl p-8">
                <h3
    className="text-xl text-white mb-2"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Who Can Join
                </h3>
                <p className="text-sm text-white/50 mb-6">
                  This Course is For
                </p>
                <div className="space-y-4">
                  {whoCanJoin.map((item, idx) => <div
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
                Our Architecture SketchUp program delivers comprehensive 3D
                modeling and visualization skills for architecture and design
                careers.
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
    { icon: FileText, text: "Study material and live projects" }
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
    /* Course Overview Cards */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Course Overview
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Key Topics You Will Master
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseOverviewCards.map((item, idx) => {
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
    /* Why Learn SketchUp & What You Will Learn */
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
                  Why Learn SketchUp at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  SketchUp is the fastest path to professional 3D modeling for
                  architecture and design:
                </p>
                <ul className="space-y-3">
                  {whyLearn.map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
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
                  The course covers SketchUp from interface basics to advanced
                  rendering and portfolio building:
                </p>
                <ul className="space-y-3">
                  {[
    "SketchUp interface, drawing methods, and 3D solid creation",
    "Layer management, materials, and visual style settings",
    "Camera tools, view control, and presentation techniques",
    "3D Warehouse, plugins, and extension warehouse setup",
    "Layout for professional documentation and style builder",
    "V-Ray integration and industry portfolio project"
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
                  Technology Google SketchUp Certification that is globally
                  recognized and valued by architecture firms, design studios,
                  and construction companies worldwide.
                </p>
                <p className="text-sm text-white/70">
                  The certification reflects practical 3D modeling proficiency
                  and professional readiness for architectural design,
                  visualization, and presentation roles.
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
                  All Career Hub Technology instructors are experienced design
                  professionals with 5+ years of hands-on industry experience in
                  3D modeling, architectural visualization, and design
                  presentation.
                </p>
                <p className="text-sm text-white/70">
                  Training focuses on practical output quality and professional
                  project readiness for modern architecture and design industry
                  demands - in India, UAE, and globally.
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
                Course Content
              </span>
              <h2
    className="text-3xl md:text-4xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Google SketchUp - Course Modules
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The course syllabus is subject to change as per current
                industry requirements.
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
                Find answers to common questions about our Architecture Google
                SketchUp training program.
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
                Master Google SketchUp with CHT
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Learn the world's most intuitive 3D modeling software with
                hands-on, project-focused training by industry experts.
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
  ArchSketchUpTraining
};
