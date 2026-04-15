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
function BiwWeldingFixture() {
  const [openFaq, setOpenFaq] = useState(null);
  const courseHighlights = [
    {
      icon: Box,
      title: "BIW Structure & Terminology",
      description: "Understanding BIW scope, domain overview, terminology, and automotive manufacturing flow."
    },
    {
      icon: PenTool,
      title: "Fixture Unit Design",
      description: "Locating principles, clamp unit design, pin unit design, and shimming concepts."
    },
    {
      icon: Wrench,
      title: "Welding Technology",
      description: "Pneumatics, hydraulics, robotic weld guns, geo station, and re-spot station concepts."
    },
    {
      icon: FileText,
      title: "GD&T & Process Planning",
      description: "Tolerance stack-up, GD&T application, and production-ready drawing release workflows."
    }
  ];
  const curriculum = [
    "Introduction to BIW Welding Fixture Design",
    "Definition and Scope of BIW",
    "BIW Welding Fixture Domain Overview",
    "BIW Terminology and Definitions",
    "Inputs Required for BIW Welding Fixture Design",
    "3-2-1 Locating Principle",
    "Clamp Unit Design Methodology",
    "Pin Unit Design Methodology",
    "Shimming Concept and Importance (Minimum 0.5 mm Shim)",
    "Materials Used in BIW Welding Fixtures",
    "Role of Pneumatics and Hydraulics in BIW",
    "Geo Station - Concept and Function",
    "Re-Spot Station - Concept and Function",
    "Types of Weld Guns Used in Robotic Welding"
  ];
  const careerScope = [
    {
      icon: Cog,
      title: "BIW Fixture Design Engineer",
      description: "Design welding and checking fixtures for automotive body assembly lines."
    },
    {
      icon: Wrench,
      title: "Tooling Design Engineer",
      description: "Develop production tooling for stamped and welded body panel assemblies."
    },
    {
      icon: Cpu,
      title: "Automotive Manufacturing Engineer",
      description: "Plan and implement body-in-white manufacturing processes for OEM projects."
    },
    {
      icon: Layers,
      title: "Quality & GD&T Engineer",
      description: "Apply dimensional standards and tolerance stack-up to production fixtures."
    },
    {
      icon: Settings,
      title: "Robotics Integration Engineer",
      description: "Integrate robotic welding systems with fixture stations on automotive lines."
    },
    {
      icon: Briefcase,
      title: "Process Planning Engineer",
      description: "Plan welding sequences and fixture utilization for BIW production workflows."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for BIW training?",
      answer: "Basic knowledge of mechanical design or CAD is helpful but not mandatory."
    },
    {
      question: "Is the course suitable for freshers?",
      answer: "Yes, fresh graduates from mechanical and automobile engineering backgrounds are welcome."
    },
    {
      question: "What software is used in BIW training?",
      answer: "Fixture design is taught using CATIA or similar industry-standard 3D CAD tools."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support for automotive roles."
    },
    {
      question: "Will I get study material?",
      answer: "Yes, study material, assignments, and fixture design references are provided."
    },
    {
      question: "Is the certificate globally accepted?",
      answer: "Yes, Career Hub Technology certifications are recognized in India and international automotive markets."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1727373203627-73457889fe0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd2VsZGluZyUyMHJvYm90JTIwZmFjdG9yeSUyMGFzc2VtYmx5fGVufDF8fHx8MTc3MzM5OTE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="BIW Welding Fixture Design Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              BIW Welding Fixture Design
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional BIW Welding Fixture Course at Career Hub Technology.
              A critical skill in automotive manufacturing, ensuring part
              accuracy, repeatability, and efficient production performance.
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
                  Professional BIW Welding Fixture Course at Career Hub
                  Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  BIW (Body in White) welding fixture design is a critical
                  skill in automotive manufacturing, ensuring part accuracy,
                  repeatability, and efficient production performance.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our BIW welding
                  fixture training is focused on practical design logic,
                  manufacturing-friendly workflows, and industry-oriented
                  project implementation - bridging the gap through structured
                  modules in fixture fundamentals, unit design, layout
                  planning, design standards, and drawing release workflows.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical design logic",
    "Manufacturing-friendly workflows",
    "Industry-oriented projects",
    "Expert automotive trainers"
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
                  Modules You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "BIW Fundamentals",
      desc: "Scope, terminology & manufacturing flow"
    },
    {
      name: "Fixture Unit Design",
      desc: "Locating, clamping, pin units & shimming"
    },
    {
      name: "Welding Technology",
      desc: "Pneumatics, hydraulics & robotic weld guns"
    },
    {
      name: "Station Design",
      desc: "Geo station & re-spot station concepts"
    },
    {
      name: "GD&T & Drawing Release",
      desc: "Tolerance stack-up & production drawings"
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
                Our BIW welding fixture training delivers practical skills and
                automotive industry knowledge to help you excel in fixture
                design and manufacturing.
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
                From BIW fundamentals and fixture unit design to welding
                technology and GD&T - gain complete command over automotive
                fixture design.
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
                  Why Choose BIW Training at Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This course is designed for:
                </p>
                <ul className="space-y-3">
                  {[
    "Mechanical and automobile engineering students",
    "Fresh graduates targeting automotive body design roles",
    "CAD professionals moving into BIW fixture design",
    "Working engineers upgrading welding fixture skills"
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
                  The curriculum delivers practical BIW fixture design
                  capability aligned with automotive industry expectations:
                </p>
                <ul className="space-y-3">
                  {[
    "Understand BIW structure and automotive manufacturing flow",
    "Design welding fixtures with practical locating and clamping logic",
    "Apply GD&T, tolerance stack-up, and process planning basics",
    "Create production-ready fixture concepts and engineering drawings"
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
                  Technology BIW Welding Fixture Design Certification
                  recognized by automotive OEMs, Tier-1 suppliers, and fixture
                  manufacturing companies in India and globally.
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
                  All Career Hub Technology BIW trainers are experienced
                  automotive professionals with 5+ years of hands-on fixture
                  design and manufacturing experience, delivering
                  project-based learning aligned with current OEM
                  requirements.
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
                BIW Welding Fixture Design Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is periodically updated according to current
                automotive manufacturing practices and industry requirements.
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
                Career Opportunities After This Course
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                BIW fixture design skills open doors to high-value career paths
                in automotive OEMs, Tier-1 suppliers, and manufacturing firms.
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
                Build Your Automotive Design Career with Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Learn BIW welding fixture design with industry-focused guidance
                and move toward better opportunities in automotive
                manufacturing and design - in India, Dubai, and globally.
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
  BiwWeldingFixture
};
