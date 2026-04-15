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
  Layers,
  PenTool,
  Ruler,
  LayoutGrid,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function ArchAutoCADTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to AutoCAD and Drafting Concepts",
    "AutoCAD Interface and Workspace Customization",
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
  const whoCanJoin = [
    "Students seeking job-ready drafting and design skills",
    "Civil, mechanical, and architectural aspirants",
    "Interior designers and construction professionals",
    "Working professionals looking to upgrade skills"
  ];
  const learningOutcomes = [
    "Understand professional drafting standards",
    "Work efficiently with industry tools and commands",
    "Create accurate and systematic technical designs",
    "Stay updated with the latest AutoCAD features"
  ];
  const courseOverviewCards = [
    {
      icon: PenTool,
      title: "2D Drafting Mastery",
      description: "Master professional 2D drafting workflows with accurate line work, dimensioning, and annotation standards."
    },
    {
      icon: Layers,
      title: "Layer & File Management",
      description: "Organize complex drawings with systematic layer management, XREFs, and design center tools."
    },
    {
      icon: Ruler,
      title: "Dimensioning & Output",
      description: "Smart dimensioning, paper space layouts, viewports, and professional plotting settings."
    },
    {
      icon: LayoutGrid,
      title: "Industry Projects",
      description: "Hands-on practice with real-world architectural drafting projects aligned with current standards."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Architecture AutoCAD course?",
      answer: "No prerequisites are required. The course starts from fundamentals and is suitable for complete beginners as well as working professionals."
    },
    {
      question: "What is the training duration?",
      answer: "The course typically runs 1-2 months depending on the batch schedule. Both weekday and weekend options are available."
    },
    {
      question: "Is this course different from the Mechanical AutoCAD course?",
      answer: "Yes. The Architecture AutoCAD course focuses on architectural drafting, floor plans, elevations, sections, and construction documentation specific to the architecture domain."
    },
    {
      question: "Will I work on real architectural projects?",
      answer: "Yes, the course includes industry-oriented practical projects covering floor plans, elevations, sections, and complete construction drawing sets."
    },
    {
      question: "Is the certification globally recognized?",
      answer: "Yes, Career Hub Technology certification is accepted by architecture firms, construction companies, and design consultancies worldwide."
    },
    {
      question: "Is placement assistance provided?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support for all students completing the program."
    },
    {
      question: "Can I attend online classes?",
      answer: "Yes, both classroom and live online interactive sessions are available. You can choose the mode that suits your schedule."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZHJhZnRpbmclMjBmbG9vciUyMHBsYW4lMjBkZXNpZ258ZW58MXx8fHwxNzczNDAyNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Architecture AutoCAD Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              AutoCAD Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              AutoCAD remains one of the most widely used drafting and design
              software tools across architecture, engineering, construction,
              interiors, and manufacturing industries.
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
    /* About */
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
                  Professional AutoCAD Courses at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  AutoCAD remains one of the most widely used drafting and
                  design software tools across architecture, engineering,
                  construction, interiors, and manufacturing industries.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, the training approach is
                  industry-oriented and built on practical, hands-on learning
                  with real-world project exposure and current drafting
                  standards. Whether you are a beginner or a professional, the
                  course helps you stay relevant and job-ready.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Industry-oriented training",
    "Hands-on project exposure",
    "Current drafting standards",
    "Job-ready skill building"
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
                  Why Choose AutoCAD Training at CHT?
                </h3>
                <p className="text-sm text-white/60 mb-5">
                  Our AutoCAD courses are designed for:
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
                <p className="text-sm text-white/50 mt-5">
                  Structured practice helps learners build confidence for
                  professional drawings and technical project delivery.
                </p>
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
                Our Architecture AutoCAD program delivers comprehensive drafting
                and design skills for architecture and construction careers.
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
    /* Industry-Focused Learning & What You Will Learn */
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
                  Industry-Focused Learning Outcomes
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  AutoCAD by Autodesk supports 2D drafting and 3D design for
                  multiple sectors. The program delivers practical and
                  employable outcomes:
                </p>
                <ul className="space-y-3">
                  {learningOutcomes.map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/50 mt-5">
                  The curriculum is structured to make learners competent,
                  confident, and job-ready.
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
                  What You Will Learn
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  The course covers AutoCAD from interface basics to advanced
                  architectural drafting workflows:
                </p>
                <ul className="space-y-3">
                  {[
    "AutoCAD interface, workspace customization, and drawing setup",
    "Layer management, linetypes, and lineweight standards",
    "Blocks, XREFs, design center, and content reuse",
    "Hatch patterns, annotations, and dimensioning",
    "Paper space layouts, viewports, and plotting",
    "Industry-oriented practical project execution"
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
                  Technology AutoCAD Certification that is globally recognized
                  and valued by architecture firms, construction companies, and
                  engineering consultancies worldwide.
                </p>
                <p className="text-sm text-white/70">
                  The certification reflects practical drafting proficiency and
                  professional readiness for architectural design and
                  construction documentation roles.
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
                  architectural drafting, construction documentation, and
                  project coordination.
                </p>
                <p className="text-sm text-white/70">
                  Training focuses on practical output quality and professional
                  project readiness for modern architecture and construction
                  industry demands.
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
                AutoCAD Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is periodically updated to align with the
                latest AutoCAD versions and industry requirements.
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
                Find answers to common questions about our Architecture AutoCAD
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
                Upgrade Your Skills with Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Build in-demand AutoCAD skills and improve your career
                opportunities across design and construction roles.
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
  ArchAutoCADTraining
};
