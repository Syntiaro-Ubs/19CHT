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
  Clock,
  Star,
  Globe,
  Wrench,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function EplanTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const courseHighlights = [
    {
      icon: CircuitBoard,
      title: "Schematic Creation & Device Tagging",
      description: "Create professional electrical schematics and apply industry-standard device tagging workflows in EPLAN."
    },
    {
      icon: Database,
      title: "Macro-Driven Circuit Libraries",
      description: "Build and manage macro-driven reusable circuit libraries for faster and error-free design."
    },
    {
      icon: FileText,
      title: "Automated Report Generation",
      description: "Generate BOMs, terminal plans, wire lists, and cable reports automatically from your EPLAN projects."
    },
    {
      icon: Layers,
      title: "Panel Layout & Standards",
      description: "Apply industrial electrical standards and produce panel layout documentation aligned with project requirements."
    }
  ];
  const curriculum = [
    "Introduction to EPLAN Electric P8 - Interface & Workspace",
    "Project Setup - Structure, Standards, and Drawing Templates",
    "Schematic Drafting - Symbols, Connections, and Wire Routing",
    "Device Tagging and Component Management",
    "DT (Device Tag) and Function Templates",
    "Macro Creation and Macro-Driven Design Workflows",
    "Connection Point Definitions and Cross-Referencing",
    "Terminal Diagrams and Terminal Strip Editing",
    "Cable Management and Cable Documentation",
    "PLC I/O Configuration and Representation",
    "Panel Layout - Device Placement and 2D Panel Design",
    "Parts Management and EPLAN Data Portal Integration",
    "Automated Report Generation - BOM, Wire Lists, Terminal Plans",
    "Revision Management and Project Documentation",
    "Industry Standards - IEC 81346, IEC 60617, and EN 61082",
    "Real-World Industrial Project Simulation"
  ];
  const careerScope = [
    {
      icon: Zap,
      title: "EPLAN Electrical Designer",
      description: "Design control panel schematics and terminal diagrams using EPLAN P8 for industrial clients."
    },
    {
      icon: Settings,
      title: "Control Panel Engineer",
      description: "Build and document control panels, switchgear, and MCC panels using EPLAN workflows."
    },
    {
      icon: Cpu,
      title: "Automation Design Engineer",
      description: "Create PLC I/O schematics and automation documentation for manufacturing plants."
    },
    {
      icon: FileText,
      title: "Electrical Documentation Engineer",
      description: "Generate and manage BOMs, terminal plans, wire lists, and cable reports using EPLAN."
    },
    {
      icon: Wrench,
      title: "OEM Electrical CAD Specialist",
      description: "Support original equipment manufacturers with EPLAN-based product documentation."
    },
    {
      icon: Briefcase,
      title: "Switchgear & Panel Design Lead",
      description: "Lead electrical design teams delivering switchgear and power distribution solutions."
    }
  ];
  const faqs = [
    {
      question: "What is EPLAN and why should I learn it?",
      answer: "EPLAN is the global leader in electrical CAD software, used by top OEMs and engineering firms worldwide. Learning EPLAN gives you access to high-demand career opportunities in automation, panel building, and switchgear industries across India, UAE, Germany, and globally."
    },
    {
      question: "Who is this EPLAN training designed for?",
      answer: "This course is ideal for electrical engineering students, diploma holders, control panel and switchgear design aspirants, automation technicians, maintenance engineers, and working professionals upgrading their electrical CAD skills."
    },
    {
      question: "Do I need prior CAD experience to join?",
      answer: "No prior CAD experience is required. Our curriculum starts from EPLAN fundamentals and progresses to advanced project workflows, making it suitable for beginners and experienced professionals alike."
    },
    {
      question: "What certification will I receive after completion?",
      answer: "You will receive a Career Hub Technology EPLAN Certification that is globally valid and recognized by electrical engineering firms, panel builders, and OEMs across India, UAE, and internationally."
    },
    {
      question: "Is this training available online?",
      answer: "Yes, we offer both instructor-led classroom sessions at our Pune and Dubai centers, as well as live online training with flexible batch timings including weekday and weekend options."
    },
    {
      question: "What kind of projects will I work on during training?",
      answer: "You will work on real-world industrial project simulations including control panel schematics, terminal diagrams, PLC I/O configurations, cable management documentation, and automated report generation using EPLAN P8."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBhdXRvbWF0aW9uJTIwc2NoZW1hdGljJTIwZGVzaWdufGVufDF8fHx8MTc3MzM5OTc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="EPLAN Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              EPLAN Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional EPLAN Course at Career Hub Technology. A leading
              electrical CAD platform used for control panel design, automation
              engineering, power distribution documentation, and industrial
              electrical project execution.
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
                  About EPLAN
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional EPLAN Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  EPLAN is a leading electrical CAD platform used for control
                  panel design, automation engineering, power distribution
                  documentation, and industrial electrical project execution.
                  Trusted by the world's top OEMs, EPLAN is the gold standard
                  for electrical engineering software.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our EPLAN
                  training is built around practical design workflows, real
                  project case studies, and job-oriented implementation skills
                  - covering schematic creation, device tagging, macro usage,
                  panel layout basics, and automated report generation to make
                  learners ready for practical engineering roles.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical design workflows",
    "Real project case studies",
    "Job-oriented skills",
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
      desc: "Symbols, connections & wire routing"
    },
    {
      name: "Device Tagging",
      desc: "Component management & function templates"
    },
    {
      name: "Macro-Driven Design",
      desc: "Reusable circuit libraries & workflows"
    },
    {
      name: "Panel Layout",
      desc: "Device placement & 2D panel design"
    },
    {
      name: "Report Generation",
      desc: "BOM, wire lists & terminal plans"
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
                Our EPLAN program delivers hands-on skills and confidence for
                electrical design, panel engineering, and automation
                documentation.
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
                From schematic creation and device tagging to macro-driven
                libraries and automated reporting - master every aspect of
                EPLAN Electric P8.
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
                  Why Choose EPLAN Training at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This course is designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Electrical engineering students and diploma holders",
    "Control panel and switchgear design aspirants",
    "Automation technicians and maintenance engineers",
    "Working professionals upgrading electrical CAD skills"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/60 mt-5">
                  With guided assignments and hands-on projects, learners
                  build confidence to handle industrial electrical
                  documentation tasks.
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
                  The curriculum is structured to provide clear practical
                  capability from fundamentals to advanced EPLAN project
                  workflows:
                </p>
                <ul className="space-y-3">
                  {[
    "Create professional electrical schematics in EPLAN",
    "Build macro-driven circuit libraries for faster design",
    "Generate reports, BOMs, and terminal plans automatically",
    "Apply practical standards used in industrial projects"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <p className="text-sm text-[#0A192F]/60 mt-5">
                  Training emphasizes design accuracy, productivity, and
                  standards-based outputs used by industry.
                </p>
              </div>
            </div>

            {
    /* Why Learn EPLAN & Training Methodology */
  }
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-[#0A192F] mb-5"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Why Learn EPLAN?
                </h3>
                <ul className="space-y-3">
                  {[
    "EPLAN is the global leader in electrical CAD software used by top OEMs and engineering firms",
    "High demand for EPLAN-certified professionals in Germany, UAE, and India",
    "Faster and error-free schematic design using intelligent automation",
    "Integrated data management for consistent, standards-compliant documentation",
    "Improves employability in automation, panel building, and switchgear industries",
    "Bridges the gap between design engineering and manufacturing execution"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
              </div>

              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5 text-[#FF6600]" />
                </div>
                <h3
    className="text-xl text-[#0A192F] mb-5"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Training Methodology
                </h3>
                <ul className="space-y-3">
                  {[
    "Instructor-led classroom and live online sessions",
    "Hands-on practical assignments with industrial project files",
    "Real-time industry project simulation",
    "Personalized guidance and weekly doubt-clearing",
    "Flexible batch timings - weekdays and weekends"
  ].map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
                <div className="mt-6 bg-[#0A192F] rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#FF6600]" />
                    <div>
                      <div className="text-white text-sm">EPLAN Industrial Automation</div>
                      <div className="text-white/50 text-xs mt-0.5">
                        Industry-standard EPLAN training for real engineering
                        roles in India, UAE, and globally.
                      </div>
                    </div>
                  </div>
                </div>
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
                  After successful completion, students receive a Career Hub
                  Technology EPLAN Certification that is globally valid and
                  industry-recognized by electrical engineering firms, panel
                  builders, and OEMs across India, UAE, and internationally.
                </p>
                <p className="text-sm text-white/70">
                  The certification validates schematic design, automation
                  documentation, and panel layout skills sought by industrial
                  employers.
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
                  All Career Hub Technology EPLAN trainers are certified
                  professionals with 5+ years of hands-on experience in
                  electrical panel design, industrial automation, and EPLAN
                  project execution.
                </p>
                <p className="text-sm text-white/70">
                  Course content is continuously updated to meet current EPLAN
                  P8, EPLAN Pro Panel, and international electrical design
                  standards.
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
                EPLAN Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is regularly updated to match current EPLAN
                tools and evolving industry requirements.
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
                Career Opportunities After EPLAN Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                EPLAN skills are in high demand across automation, panel
                building, switchgear manufacturing, oil & gas, and heavy
                industries globally.
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
                Find answers to common questions about our EPLAN training
                program.
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
                Build Your Electrical CAD Career with EPLAN at CHT
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Learn EPLAN through project-oriented training and move toward
                stronger opportunities in electrical design and industrial
                automation - in India, Dubai, and worldwide.
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
  EplanTraining
};
