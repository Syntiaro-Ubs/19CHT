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
  Building2,
  PencilRuler,
  Box,
  Camera,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function GoogleSketchUpTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to SketchUp Interface",
    "SketchUp User Interface Overview",
    "Drawing Methods and Tools",
    "Creating and Managing Solids",
    "Managing Models Using Layers",
    "Camera Tools and View Control",
    "Assigning and Managing Materials",
    "Managing Styles and Visual Settings",
    "Generating Reports",
    "Working with 3D Warehouse",
    "Working with Plugins",
    "Extension Warehouse Setup",
    "Layout for Documentation",
    "Style Builder",
    "V-Ray Integration for Rendering",
    "Project Preparation and Workflow"
  ];
  const courseOverview = [
    "Google SketchUp enables fast, efficient, and intuitive 3D modeling for design and visualization workflows across civil and construction domains.",
    "It is widely used across architecture, interiors, landscape architecture, civil and mechanical engineering, construction planning, film, and game design.",
    "The platform supports quick concept development and effective design communication with an easy-to-learn interface.",
    "Career Hub Technology training is project-based and aligned with real industry usage across India and Gulf markets."
  ];
  const whoCanJoin = [
    "Civil and structural engineering students",
    "Architecture and interior design aspirants",
    "Landscape and urban planning professionals",
    "Construction and real estate teams",
    "Site engineers and project managers",
    "Beginners entering the 3D design field"
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Google SketchUp course?",
      answer: "No prerequisites are required. The course starts from fundamentals and is suitable for beginners as well as professionals."
    },
    {
      question: "What is the training duration?",
      answer: "The course typically runs 1-2 months depending on the batch schedule. Flexible weekday and weekend options are available."
    },
    {
      question: "Will I work on real projects during training?",
      answer: "Yes, the course includes hands-on projects covering 3D modeling, rendering, and documentation workflows."
    },
    {
      question: "Is V-Ray rendering included in the course?",
      answer: "Yes, V-Ray integration for rendering is covered as part of the course modules."
    },
    {
      question: "Is the certification globally recognized?",
      answer: "Yes, Career Hub Technology certification is accepted by architecture firms, construction companies, and design studios worldwide."
    },
    {
      question: "Is placement assistance provided?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support for all students."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1631799200294-0f1212ae90f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFyY2hpdGVjdHVyYWwlMjBtb2RlbCUyMGRlc2lnbiUyMHZpc3VhbGl6YXRpb24lMjBza2V0Y2h1cHxlbnwxfHx8fDE3NzM0MDIwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Google SketchUp Training"
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
              Practical training to build fast, accurate 3D modeling skills for
              real-world architectural and design visualization projects.
              Millions of professionals rely on SketchUp daily.
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
                  Google SketchUp Training Institute - Civil CAD
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Practical training to build fast, accurate 3D modeling skills
                  for real-world architectural and design visualization projects.
                  Millions of professionals rely on SketchUp daily, and this
                  training helps learners confidently work on concept design,
                  documentation, and presentation workflows.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, the SketchUp course for Civil CAD
                  focuses on engineering and construction applications - from
                  site modeling to V-Ray rendering integration - giving learners
                  a complete design presentation toolkit.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "3D modeling & visualization",
    "V-Ray rendering integration",
    "Construction documentation",
    "Project-based training"
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
                  Who Can Join This Course?
                </h3>
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
                Our Google SketchUp program delivers comprehensive 3D modeling
                and visualization skills for civil and architectural careers.
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
    /* Course Overview - 4 Key Topic Cards */
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
              {[
    {
      icon: Box,
      title: "3D Modeling & Solids",
      description: "Fast, efficient, and intuitive 3D modeling for design and visualization across civil and construction domains."
    },
    {
      icon: Building2,
      title: "Architecture & Interiors",
      description: "Widely used across architecture, interiors, landscape architecture, civil engineering, and construction planning."
    },
    {
      icon: PencilRuler,
      title: "Concept Development",
      description: "Quick concept development and effective design communication with an easy-to-learn interface."
    },
    {
      icon: Camera,
      title: "V-Ray Rendering",
      description: "V-Ray integration for photorealistic rendering aligned with real industry usage across India and Gulf markets."
    }
  ].map((item, idx) => {
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
                  Why Choose SketchUp at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our program focuses on engineering and construction
                  applications with a complete design presentation toolkit:
                </p>
                <ul className="space-y-3">
                  {[
    "Project-based training aligned with real industry usage",
    "From site modeling to V-Ray rendering integration",
    "Complete design presentation toolkit for civil projects",
    "Training aligned with India and Gulf market standards",
    "Expert instructors with practical design experience",
    "Flexible online and classroom training options"
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
                  The course covers SketchUp from interface basics to advanced
                  rendering workflows:
                </p>
                <ul className="space-y-3">
                  {[
    "SketchUp interface, drawing methods, and tool mastery",
    "Creating and managing solids, layers, and materials",
    "Camera tools, view control, and visual settings",
    "3D Warehouse, plugins, and extension warehouse setup",
    "Layout for documentation and style builder",
    "V-Ray integration for photorealistic rendering"
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
                  recognized and valued by architecture firms, construction
                  companies, and design studios worldwide.
                </p>
                <p className="text-sm text-white/70">
                  The certification reflects practical 3D modeling proficiency
                  and professional readiness for civil and architectural design
                  roles.
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
                  3D modeling, architectural visualization, and construction
                  documentation.
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
                Find answers to common questions about our Google SketchUp
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
                Master Google SketchUp for Civil Projects
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Learn the world's most intuitive 3D modeling software for civil,
                architectural, and construction visualization with Career Hub
                Technology.
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
  GoogleSketchUpTraining
};
