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
  Columns3,
  HardHat,
  Activity,
  Landmark,
  PencilRuler,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function StaadProTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    {
      title: "Introduction",
      desc: "Introduction to Structural Engineering and STAAD.Pro V8i fundamentals."
    },
    {
      title: "STAAD Basics",
      desc: "Getting familiar with the STAAD window and model generation using the STAAD editor."
    },
    {
      title: "Modeling Techniques",
      desc: "Snap node and beam concepts, Node/Beam editor workflows, and translational repeat model generation."
    },
    {
      title: "Properties & Loads",
      desc: "Assigning properties, supports, and loading conditions."
    },
    {
      title: "Structural Analysis",
      desc: "Structure analysis, simply supported beam analysis, and framed structure beam analysis."
    },
    {
      title: "Load Applications",
      desc: "Floor loads, wind analysis, seismic analysis, and load combinations."
    },
    {
      title: "Advanced Analysis",
      desc: "Dynamic analysis, response spectrum analysis, and framed structure analysis including slabs."
    },
    {
      title: "Design Modules",
      desc: "Column and beam design, RCC design, staircase analysis, steel design, and rectangular water tank design."
    },
    {
      title: "Special Topics",
      desc: "Moving loads and foundation design."
    },
    {
      title: "Output & Reporting",
      desc: "Report generation and professional engineering output documentation."
    }
  ];
  const courseHighlights = [
    {
      icon: Building2,
      title: "Structural Modeling",
      description: "Model generation, snap node/beam concepts, and translational repeat workflows in STAAD Pro."
    },
    {
      icon: Activity,
      title: "Analysis Techniques",
      description: "1st order static, P-Delta, dynamic, seismic, and response spectrum analysis methods."
    },
    {
      icon: Columns3,
      title: "Design Modules",
      description: "RCC design, steel design, column/beam design, staircase analysis, and water tank design."
    },
    {
      icon: FileText,
      title: "Output & Documentation",
      description: "Report generation, load combinations, and professional engineering output documentation."
    }
  ];
  const careerScope = [
    {
      icon: PencilRuler,
      title: "Structural Design Engineer",
      description: "Analyze and design RCC and steel structures using STAAD Pro for real buildings."
    },
    {
      icon: Briefcase,
      title: "Structural Consultant",
      description: "Provide STAAD-based analysis and design services to architects and contractors."
    },
    {
      icon: HardHat,
      title: "Civil Site Engineer",
      description: "Execute structural designs on site with sound engineering foundations."
    },
    {
      icon: Landmark,
      title: "Bridge / Infrastructure Engineer",
      description: "Design and analyze bridges, industrial structures, and infrastructure systems."
    },
    {
      icon: Activity,
      title: "Seismic Analysis Engineer",
      description: "Perform earthquake-resistant design per IS and international codes."
    },
    {
      icon: Building2,
      title: "Design Office Engineer",
      description: "Work in structural departments of consultancy and EPC contracting firms."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for STAAD Pro training?",
      answer: "Basic knowledge of civil or structural engineering concepts is preferred but not mandatory."
    },
    {
      question: "What is the daily training duration?",
      answer: "Flexible weekday and weekend batches are available."
    },
    {
      question: "Will I receive study material and project files?",
      answer: "Yes, complete study material, assignments, and project files are provided."
    },
    {
      question: "How will I receive my certificate?",
      answer: "Certificates are issued after successful course completion."
    },
    {
      question: "Is the certificate accepted internationally?",
      answer: "Yes, the certification is widely accepted in India and abroad."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology offers career guidance and placement support."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1610551675799-50d4d0fe0252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBzdGVlbCUyMGZyYW1lJTIwY29uc3RydWN0aW9uJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzczNDAxNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="STAAD Pro Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              STAAD Pro Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Structural Analysis & Design Training at CHT.
              Develop practical structural engineering expertise with STAAD Pro
              for analysis, design, and documentation of real-world civil
              projects.
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
                  About STAAD Pro
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  STAAD Pro Training Institute in Dubai & Pune
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  STAAD Pro is used globally for structural analysis and design
                  across buildings, bridges, towers, tunnels, and industrial
                  plants.
                </p>
                <p className="text-[#0A192F]/70 mb-5">
                  It supports multiple materials including steel, concrete,
                  timber, and aluminum for practical design workflows.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  The program at Career Hub Technology covers model development,
                  verification, analysis, design, and result interpretation for
                  practical structural engineering projects - with hands-on
                  exposure to advanced techniques including 1st order static
                  analysis, 2nd order P-Delta analysis, and geometric nonlinear
                  analysis.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Steel & concrete design",
    "Seismic & wind analysis",
    "P-Delta analysis",
    "Real project exposure"
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
                  Why Learn STAAD Pro at CHT?
                </h3>
                <div className="space-y-4">
                  {[
    "Learn the latest STAAD Pro workflows used in the industry",
    "Perform structural analysis for steel, concrete, and timber systems",
    "Evaluate load effects, displacement behavior, and internal forces",
    "Build practical capability for civil projects, planning, estimation, and RC/steel design",
    "Prepare for structural design roles with real project-based training",
    "Access project guidance, internships, and career-oriented support"
  ].map((item, idx) => <div
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
                Our STAAD Pro program delivers comprehensive structural
                analysis and design skills for civil engineering careers.
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
    { icon: FileText, text: "Real industry project exposure" }
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
    /* Course Highlights - 4 Key Topic Cards */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Course Highlights
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Key Topics You Will Master
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseHighlights.map((item, idx) => {
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
                  Why Choose Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  The training approach focuses on strong conceptual clarity and
                  practical structural design capability:
                </p>
                <ul className="space-y-3">
                  {[
    "Industry-expert trainers with practical project experience",
    "Project-based learning with real structural examples",
    "Structured curriculum aligned to industry expectations",
    "Flexible batch options (weekdays and weekends)",
    "Online and classroom training availability",
    "Career-oriented skill development and mentoring"
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
                  The course covers structural analysis from fundamentals to
                  advanced design:
                </p>
                <ul className="space-y-3">
                  {[
    "STAAD Pro interface, model generation, and editor workflows",
    "Properties, supports, and loading conditions assignment",
    "Static, dynamic, seismic, and wind load analysis",
    "RCC design, steel design, and column/beam design",
    "Foundation design, staircase, and water tank analysis",
    "Report generation and professional output documentation"
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
                  Career Hub Technology certifications are industry-recognized
                  and globally accepted. On successful completion, students
                  receive a worldwide valid certificate that strengthens
                  opportunities in India, Dubai, and international job markets.
                </p>
                <p className="text-sm text-white/70">
                  Training is delivered by experienced professionals focused on
                  project-based learning and real-world structural applications.
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
                  Career Hub Technology trainers are qualified industry
                  professionals with 5+ years of hands-on experience in
                  structural analysis, design, and construction technologies.
                </p>
                <p className="text-sm text-white/70">
                  The delivery approach emphasizes practical execution,
                  code-based engineering practices, and global construction
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
                STAAD Pro Course Content
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus may be updated to match current industry
                requirements and software advancements.
              </p>
            </div>
            <div className="space-y-3">
              {curriculum.map((topic, index) => <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#FF6600]/30 hover:bg-white/8 transition-all flex items-start gap-4"
  >
                  <span className="bg-[#FF6600]/15 text-[#FF6600] w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-white">{topic.title}</span>
                    <p className="text-sm text-white/50 mt-1">{topic.desc}</p>
                  </div>
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
                Career Opportunities After STAAD Pro
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                STAAD Pro skills open doors to structural design, consultancy,
                and infrastructure engineering roles worldwide.
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
                Find answers to common questions about our STAAD Pro training
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
                Build Your Structural Engineering Career with STAAD Pro
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Gain in-demand structural analysis skills and improve your
                readiness for structural design and consultancy roles - in
                India, Dubai, and worldwide.
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
  StaadProTraining
};
