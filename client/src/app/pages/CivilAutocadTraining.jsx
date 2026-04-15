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
  Ruler,
  PenTool,
  LayoutGrid,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function CivilAutocadTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to AutoCAD and Drafting Concepts",
    "AutoCAD Interface & Workspace Customization",
    "New Project Planning and Drawing Standards",
    "Starting and Managing Drawings in AutoCAD",
    "Drawing File Management and Organization",
    "Layer Management Techniques",
    "Effective Use of Linetypes and Lineweights",
    "User Coordinate System (UCS)",
    "Object Properties and Information Extraction",
    "Object Selection Tools and Manipulation",
    "Creating, Editing, and Using Blocks",
    "Working with External References (XREFs)",
    "Design Center and Content Reuse",
    "Hatch Patterns and Area Representation",
    "Text, MText, and Annotation Standards",
    "Working with OLE Objects",
    "Smart and Intelligent Dimensioning",
    "Using Fields and Tables",
    "Paper Space Layouts and Viewports",
    "Plotting, Printing, and Output Settings",
    "Industry-Oriented Practical Projects"
  ];
  const careerScope = [
    {
      icon: Ruler,
      title: "Civil CAD Draftsman",
      description: "Create accurate 2D plans, sections, and elevations for civil and structural projects."
    },
    {
      icon: Building2,
      title: "Site Planning Engineer",
      description: "Prepare site layout drawings, grading plans, and infrastructure documentation."
    },
    {
      icon: LayoutGrid,
      title: "Structural Detailer",
      description: "Draft structural drawings including foundations, beams, columns, and reinforcement details."
    },
    {
      icon: PenTool,
      title: "Infrastructure Design Assistant",
      description: "Support road, bridge, and utility design teams with professional CAD documentation."
    },
    {
      icon: FileText,
      title: "Construction Documentation Specialist",
      description: "Manage project drawings, revisions, and construction document workflows."
    },
    {
      icon: Briefcase,
      title: "Civil Project Coordinator",
      description: "Coordinate drafting deliverables across design and construction teams."
    }
  ];
  const faqs = [
    {
      question: "What is Civil AutoCAD Training?",
      answer: "Civil AutoCAD Training teaches you practical drafting and documentation skills required for construction, infrastructure, and structural projects. You'll learn to create accurate 2D plans, sections, elevations, and project documentation using AutoCAD."
    },
    {
      question: "Who should enroll in this course?",
      answer: "This course is ideal for civil engineering students, fresh graduates, site engineers, planning professionals, structural design aspirants, and working professionals looking to upgrade to Civil CAD workflows."
    },
    {
      question: "Do I need prior AutoCAD experience?",
      answer: "No prior experience is required. The curriculum starts from AutoCAD fundamentals and drafting concepts, then progressively moves to advanced civil-specific drafting and project-level documentation."
    },
    {
      question: "What certification will I receive?",
      answer: "Upon successful completion, you will receive a Career Hub Technology Civil CAD Certification that is globally valid and recognized by construction firms, engineering consultancies, and infrastructure companies."
    },
    {
      question: "Is online training available?",
      answer: "Yes, we offer both instructor-led classroom sessions at our Pune and Dubai centers, as well as live online training with flexible batch timings for weekdays and weekends."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You will work on industry-oriented practical projects including residential and commercial building plans, site layouts, structural drawings, section details, and complete construction documentation sets."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1758574697284-8e84046a45ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwYmx1ZXByaW50JTIwZGVzaWdufGVufDF8fHx8MTc3MzQwMDAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Civil AutoCAD Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Civil AutoCAD Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Civil CAD Course at Career Hub Technology. Practical
              drafting and documentation skills required for construction,
              infrastructure, and structural projects across architecture,
              engineering, and planning domains.
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
                  About Civil AutoCAD
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional Civil CAD Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Civil CAD training focuses on practical drafting and
                  documentation skills required for construction,
                  infrastructure, and structural projects across architecture,
                  engineering, and planning domains.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our Civil CAD
                  program is built around practical, hands-on learning, real
                  project exposure, and current industry standards so learners
                  become job-ready for global construction markets.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical hands-on learning",
    "Real project exposure",
    "Industry standard workflows",
    "Expert civil trainers"
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
                  Key Skills You'll Develop
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "2D Plans & Sections",
      desc: "Accurate floor plans, sections & elevations"
    },
    {
      name: "Layer Management",
      desc: "Professional layer organization & standards"
    },
    {
      name: "Blocks & XREFs",
      desc: "Reusable components & external references"
    },
    {
      name: "Annotation & Dimensioning",
      desc: "Text, MText, GD&T & smart dimensions"
    },
    {
      name: "Plotting & Output",
      desc: "Paper space layouts & printing workflows"
    }
  ].map((tool, idx) => <div
    key={idx}
    className="flex items-start gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
  >
                      <div className="bg-[#FF6600]/15 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-[#FF6600]" />
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
                Our Civil CAD program delivers hands-on skills and confidence
                for civil drafting, construction documentation, and
                infrastructure design.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led practical training" },
    { icon: BookOpen, text: "Weekly doubt-clearing sessions" },
    { icon: Award, text: "Lifetime assistance for revision and learning" },
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
    /* Why Choose & Industry-Focused Learning */
  }
      <section className="py-20">
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
                  Why Choose Civil CAD Training at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our Civil CAD program is designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Civil engineering students and fresh graduates",
    "Site engineers and planning professionals",
    "Structural and infrastructure design aspirants",
    "Working professionals upgrading to Civil CAD workflows"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/60 mt-5">
                  Through structured guidance and practical exercises, learners
                  gain confidence to prepare professional civil drawings and
                  project documentation.
                </p>
              </div>

              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Industry-Focused Civil CAD Learning
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  The course structure moves from fundamentals to project-level
                  drafting so learners can work efficiently in professional
                  teams:
                </p>
                <ul className="space-y-3">
                  {[
    "Understand drafting standards used in civil and construction projects",
    "Create accurate 2D plans, sections, elevations, and detailing sheets",
    "Work with layers, annotation standards, and plotting workflows",
    "Develop project-ready drawings aligned with industry practices"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/60 mt-5">
                  Our training helps learners become competent, confident, and
                  employable in civil drafting roles.
                </p>
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
                  Upon successful completion, students receive a Career Hub
                  Technology Civil CAD Certification that is globally valid and
                  recognized by construction firms, engineering consultancies,
                  and infrastructure companies.
                </p>
                <p className="text-sm text-white/70">
                  The certification validates civil drafting skills, drawing
                  documentation, and AutoCAD proficiency for roles in civil
                  engineering and construction sectors.
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
                  All Career Hub Technology Civil CAD trainers are experienced
                  professionals with 5+ years in civil drafting, structural
                  design, and construction documentation.
                </p>
                <p className="text-sm text-white/70">
                  Course content is regularly updated to meet current AutoCAD
                  workflows and civil industry requirements in India and the
                  Gulf region.
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
                Civil CAD Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is periodically updated to align with
                current software workflows and civil industry requirements.
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
                Career Opportunities After Civil AutoCAD
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Civil CAD skills open doors to roles across construction,
                infrastructure, structural design, and engineering
                consultancies globally.
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
                Find answers to common questions about our Civil AutoCAD
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
                Upgrade Your Civil CAD Skills with CHT
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Build strong drafting skills and improve your career
                opportunities in civil engineering and construction design.
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
  CivilAutocadTraining
};
