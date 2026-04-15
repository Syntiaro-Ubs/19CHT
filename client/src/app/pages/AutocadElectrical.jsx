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
  Zap,
  FileText,
  CircuitBoard,
  Database,
  BadgeCheck,
  UserCheck,
  Cpu,
  Wrench
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
function AutocadElectrical() {
  const courseHighlights = [
    {
      icon: CircuitBoard,
      title: "Schematic Drawing & Circuit Design",
      description: "Create professional electrical schematics using the full AutoCAD Electrical toolset and standard symbol libraries."
    },
    {
      icon: Layers,
      title: "Panel Layout & Wire Numbering",
      description: "Design panel layouts, automate wire numbering, cross-references, and component tagging workflows."
    },
    {
      icon: FileText,
      title: "Reports & Documentation",
      description: "Generate BOM reports, terminal plans, cable schedules, and PLC I/O drawings automatically."
    },
    {
      icon: Database,
      title: "Component Libraries & Standards",
      description: "Build reusable symbol libraries, custom component databases, and standards-compliant project outputs."
    }
  ];
  const curriculum = [
    "Introduction to AutoCAD Electrical & Interface Overview",
    "Electrical Circuit Fundamentals - Voltage, Current, Resistance, Power",
    "Blueprint Interpretation - Symbols, Layouts, and Components",
    "Project Setup - Templates, Standards, and Drawing Configuration",
    "Schematic Drawing Tools and Wire Management",
    "Symbol Insertion - Electrical Components and Custom Libraries",
    "Wire Numbering, Cross-Referencing, and Signal Tags",
    "Ladder Diagram Design and PLC I/O Drawings",
    "Panel Layout Design and Component Placement",
    "Wiring Diagrams, System Schematics, and Best Practices",
    "Automated Report Generation - BOM, Terminal Plans, Cable Schedules",
    "Safety Regulations, Electrical Standards, and Code Compliance",
    "Project Coordination and Documentation Workflows",
    "Real-World Practical Projects and Industry Simulation"
  ];
  const careerScope = [
    {
      icon: Zap,
      title: "Electrical CAD Designer",
      description: "Create schematic and panel layout drawings for industrial and commercial projects."
    },
    {
      icon: Settings,
      title: "Control Panel Engineer",
      description: "Design control panels, wiring harnesses, and protection relay schemes."
    },
    {
      icon: FileText,
      title: "Electrical Documentation Specialist",
      description: "Produce BOM, terminal plans, cable schedules, and project reports."
    },
    {
      icon: Cpu,
      title: "Automation Design Engineer",
      description: "Design PLC I/O, motor control, and automation schematics for manufacturing plants."
    },
    {
      icon: Wrench,
      title: "Instrumentation Engineer",
      description: "Create instrument loop diagrams and P&ID documentation for process plants."
    },
    {
      icon: Briefcase,
      title: "Electrical Project Engineer",
      description: "Manage electrical drawings, revisions, and documentation for large-scale projects."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwd2lyaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzMzOTk0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="AutoCAD Electrical Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              AutoCAD Electrical Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional AutoCAD Electrical Course at Career Hub Technology.
              An industry-focused CAD solution for electrical control systems,
              panel design, schematic drafting, and documentation automation
              used in manufacturing and plant engineering projects worldwide.
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
                  About AutoCAD Electrical
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional AutoCAD Electrical Course at Career Hub
                  Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  AutoCAD Electrical is an industry-focused CAD solution for
                  electrical control systems, panel design, schematic drafting,
                  and documentation automation used in manufacturing and plant
                  engineering projects worldwide.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our AutoCAD
                  Electrical training focuses on practical workflows,
                  project-based learning, and standards-driven drafting -
                  covering schematic design, panel layout fundamentals,
                  component tagging, PLC I/O drawing workflows, and full
                  report generation to prepare learners for real industrial
                  requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical workflow training",
    "Project-based learning",
    "Standards-driven drafting",
    "Industry expert trainers"
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
                  Key Modules You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "Schematic Design",
      desc: "Circuit diagrams & electrical schematics"
    },
    {
      name: "Panel Layout",
      desc: "Component placement & wire routing"
    },
    {
      name: "PLC I/O Drawings",
      desc: "Ladder diagrams & automation schematics"
    },
    {
      name: "Report Generation",
      desc: "BOM, terminal plans & cable schedules"
    },
    {
      name: "Standards & Libraries",
      desc: "Custom components & compliance outputs"
    }
  ].map((tool, idx) => <div
    key={idx}
    className="flex items-start gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
  >
                      <div className="bg-[#FF6600]/15 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-[#FF6600]" />
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
                Our AutoCAD Electrical program delivers hands-on skills and
                confidence for electrical design, panel engineering, and
                documentation automation.
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
                From schematic drawing and panel layout to automated
                documentation and standards compliance - master every aspect
                of AutoCAD Electrical.
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
                  Why Choose AutoCAD Electrical Training at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This program is designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Electrical and electronics engineering students",
    "Panel design and wiring professionals",
    "Automation and control system technicians",
    "Working professionals transitioning to electrical CAD"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/60 mt-5">
                  Learners get hands-on practice with real-style projects to
                  improve drafting speed, accuracy, and confidence.
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
                  The training path is structured from fundamentals to
                  advanced project-level documentation and automation
                  techniques:
                </p>
                <ul className="space-y-3">
                  {[
    "Create schematic drawings using AutoCAD Electrical toolset",
    "Build reusable symbol libraries and custom component databases",
    "Automate wire numbering, cross-references, and tagging workflows",
    "Generate reports such as BOM, terminal plans, and cable schedules"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/60 mt-5">
                  You will gain practical capabilities aligned with modern
                  electrical CAD jobs in design and automation sectors.
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
                  On successful completion, students receive a Career Hub
                  Technology AutoCAD Electrical Certification that is globally
                  valid and industry-recognized across India, UAE, and
                  international markets.
                </p>
                <p className="text-sm text-white/70">
                  The certification validates electrical schematic design,
                  documentation automation, and panel layout skills for roles
                  in manufacturing, automation, and electrical engineering
                  firms.
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
                  Our Trainers
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  All Career Hub Technology AutoCAD Electrical trainers are
                  certified industry professionals with 5+ years of hands-on
                  experience in electrical design, panel engineering, and
                  automation documentation.
                </p>
                <p className="text-sm text-white/70">
                  Course content is regularly updated to meet current AutoCAD
                  Electrical toolset workflows and industry requirements in
                  India and the Gulf region.
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
                AutoCAD Electrical Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is updated periodically to align with the
                latest AutoCAD Electrical toolset workflows and industry
                requirements.
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
                Career Opportunities After AutoCAD Electrical
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                AutoCAD Electrical skills open doors to roles across
                manufacturing, automation, oil & gas, power distribution, and
                industrial plant engineering sectors.
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
    </div>;
}
export {
  AutocadElectrical
};
