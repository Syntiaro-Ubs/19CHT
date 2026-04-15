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
  Ruler,
  Building2,
  Wrench,
  Printer,
  BadgeCheck,
  UserCheck
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
function AutocadTraining() {
  const courseHighlights = [
    {
      icon: Ruler,
      title: "Drafting Standards & Interface",
      description: "AutoCAD interface mastery, workspace customization, and professional drafting standards."
    },
    {
      icon: Layers,
      title: "Layer & Object Management",
      description: "Layer management, linetypes, lineweights, blocks, XREFs, and content reuse workflows."
    },
    {
      icon: PenTool,
      title: "Annotation & Dimensioning",
      description: "Smart dimensioning, MText, annotation standards, fields, tables, and hatch patterns."
    },
    {
      icon: Printer,
      title: "Layouts & Output",
      description: "Paper space layouts, viewports, plotting, printing, and professional output settings."
    }
  ];
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
      icon: Wrench,
      title: "Mechanical Draftsman",
      description: "Prepare 2D engineering drawings for mechanical components, assemblies, and systems."
    },
    {
      icon: PenTool,
      title: "CAD Design Engineer",
      description: "Create detailed design drawings for product development and manufacturing."
    },
    {
      icon: Building2,
      title: "Structural Detailing Engineer",
      description: "Produce structural connection drawings and shop drawings for steel construction."
    },
    {
      icon: Layers,
      title: "Interior & Architectural Drafter",
      description: "Create space plans, furniture layouts, and interior design documentation."
    },
    {
      icon: Briefcase,
      title: "Construction Site Drafter",
      description: "Prepare as-built drawings and construction documentation for site teams."
    },
    {
      icon: Settings,
      title: "Plant Layout Designer",
      description: "Design equipment layouts, piping arrangements, and plant facility drawings."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1769152683420-f4eff91cb30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMHRlY2huaWNhbCUyMGRyYXdpbmd8ZW58MXx8fHwxNzczMzk1ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="AutoCAD Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              AutoCAD Mechanical
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional AutoCAD Mechanical Course at Career Hub Technology.
              Master the industry-standard drafting and design platform used
              across architecture, engineering, construction, interior design,
              and manufacturing.
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
    /* Mechanical AutoCAD Info Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  About Mechanical CAD
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional AutoCAD Mechanical Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  AutoCAD remains one of the most widely used drafting and
                  design platforms in architecture, engineering, construction,
                  interior design, and manufacturing - essential for any
                   technical professional working with drawings and
                   documentation.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, we offer
                  industry-oriented AutoCAD Mechanical training programs
                  designed to help students and professionals build strong
                  technical skills, with practical hands-on learning, real
                  project exposure, and industry standards so learners are
                  fully job-ready.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical hands-on learning",
    "Real project exposure",
    "Industry standards training",
    "Fully job-ready skills"
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
                  Software & Tools You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "AutoCAD Mechanical",
      desc: "Complete 2D & 3D design suite"
    },
    {
      name: "AutoCAD Standard Libraries",
      desc: "Fasteners, bolts, gears, springs"
    },
    {
      name: "Drawing Templates",
      desc: "IS / ASME / ISO standard templates"
    },
    {
      name: "AutoLISP Basics",
      desc: "Automation & customization scripts"
    },
    {
      name: "Plotting & Publishing",
      desc: "PDF, DWF & print-ready outputs"
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
                Our AutoCAD training program is designed to give you the
                practical skills and confidence needed to excel in the
                engineering industry.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led practical training" },
    { icon: BookOpen, text: "Weekly doubt-clearing and revision sessions" },
    { icon: Award, text: "Lifetime assistance for learning and career guidance" },
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
                From basic 2D drafting to advanced 3D modeling - gain complete
                command over AutoCAD for mechanical engineering applications.
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
    /* Why Choose AutoCAD Training at CHT */
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
                  Why Choose AutoCAD Training at Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our AutoCAD Mechanical courses are designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Students seeking job-ready drafting and design skills",
    "Civil, mechanical, and architectural aspirants",
    "Interior designers and construction professionals",
    "Working professionals looking to upgrade skills"
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
                  Industry-Focused AutoCAD Learning
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  AutoCAD is a powerful CAD software by Autodesk used for 2D
                  drafting and 3D design across industries:
                </p>
                <ul className="space-y-3">
                  {[
    "Understand professional drafting standards",
    "Work efficiently with industry tools and commands",
    "Create accurate and systematic technical designs",
    "Stay updated with the latest AutoCAD features"
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
                  Technology AutoCAD Mechanical Certification that is globally
                  recognized and valued by engineering firms, construction
                  companies, and manufacturing industries in India and abroad.
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
                  All Career Hub Technology AutoCAD trainers are experienced
                  technical professionals focused on practical learning,
                  real-world applications, and the latest AutoCAD tools and
                  workflows. Course content is regularly updated.
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
                AutoCAD Mechanical Curriculum
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
                AutoCAD skills open doors to diverse career paths in
                engineering, manufacturing, construction, and design industries.
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

            {
    /* CTA Banner */
  }
            <div className="mt-16 bg-[#0A192F] rounded-2xl p-8 md:p-12 text-center">
              <h3
    className="text-2xl md:text-3xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Ready to Start Your AutoCAD Journey?
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Join Career Hub Technology's AutoCAD training program and
                kickstart your career in mechanical design engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                  Enroll Now <ArrowRight className="w-4 h-4" />
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
  AutocadTraining
};
