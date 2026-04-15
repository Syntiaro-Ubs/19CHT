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
  Cog
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
function CreoTraining() {
  const courseHighlights = [
    {
      icon: PenTool,
      title: "Sketcher & Part Design",
      description: "2D sketch creation with constraints and 3D solid modeling with robust feature control."
    },
    {
      icon: Layers,
      title: "Surface & Sheet Metal Design",
      description: "Advanced surface modeling tools and sheet metal design with bends, flanges, and flat patterns."
    },
    {
      icon: Box,
      title: "Assembly Design",
      description: "Component relationships, assembly constraints, and motion simulation workflows."
    },
    {
      icon: FileText,
      title: "Drafting & Visualization",
      description: "Manufacturing drawings, GD&T annotations, BOMs, and product rendering."
    }
  ];
  const curriculum = [
    "Introduction to CAD / CAM / CAE",
    "Product Design Fundamentals",
    "Sketcher - 2D Sketch Creation and Constraints",
    "Part Design - 3D Solid Modeling and Feature Creation",
    "Surface Design - Advanced Surface Modeling Tools",
    "Sheet Metal Design - Bends, Flanges, and Flat Patterns",
    "Product Visualization & Rendering",
    "Assembly Design - Component Relationships and Constraints",
    "Drafting - Manufacturing Drawings and Annotations",
    "Industry Workshops by Working Professionals",
    "Projects & Assessments - Real-World Design Assignments"
  ];
  const careerScope = [
    {
      icon: Cog,
      title: "CREO Product Design Engineer",
      description: "Design mechanical products and assemblies for manufacturing using CREO Parametric."
    },
    {
      icon: Wrench,
      title: "Mechanical Design Engineer",
      description: "Develop production-ready 3D models and 2D drawings for industrial products."
    },
    {
      icon: Layers,
      title: "Sheet Metal Design Specialist",
      description: "Design sheet metal components, brackets, and enclosures using CREO sheet metal tools."
    },
    {
      icon: Cpu,
      title: "Automotive Design Engineer",
      description: "Work on vehicle component design, fixtures, and tooling using CREO CAD."
    },
    {
      icon: Settings,
      title: "CAD/CAM Process Engineer",
      description: "Link design-to-manufacturing workflows using CREO CAM and NC programming modules."
    },
    {
      icon: Briefcase,
      title: "Tooling & Die Design Engineer",
      description: "Design molds, dies, and jigs for plastic and metal manufacturing applications."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1645754884761-6ada0d53807b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBtYW51ZmFjdHVyaW5nJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzczMzk4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="CREO Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              CREO Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional CREO Course at Career Hub Technology. CREO by PTC
              is a modern CAD platform used for product design, engineering
              development, and manufacturing-ready modeling - combining
              parametric solid modeling, surfacing, and direct modeling in a
              unified environment.
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
    /* About Creo */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  About CREO
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional CREO Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  CREO by PTC is a modern CAD platform used for product design,
                  engineering development, and manufacturing-ready modeling in
                  global industries - combining parametric solid modeling,
                  surfacing, and direct modeling in a unified environment.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology in Pune and Dubai, our CREO course
                  focuses on practical implementation, hands-on training, and
                  project-based learning through structured modules in
                  sketching, part design, assembly design, sheet metal,
                  surfacing, and drafting to build industry-ready CAD skills.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Practical implementation focus",
    "Project-based learning",
    "Expert trainer guidance",
    "Industry-ready CAD skills"
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
                  CREO Modules You'll Learn
                </h3>
                <div className="space-y-4">
                  {[
    {
      name: "Sketcher & Part Design",
      desc: "Parametric 3D solid modeling techniques"
    },
    {
      name: "Surface Design",
      desc: "Advanced surface modeling tools"
    },
    {
      name: "Sheet Metal Design",
      desc: "Bends, flanges, and flat patterns"
    },
    {
      name: "Assembly Design",
      desc: "Component relationships & constraints"
    },
    {
      name: "Drafting & Visualization",
      desc: "Manufacturing drawings & rendering"
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
                Our CREO training program is designed to give you the
                practical skills and confidence needed to excel in product
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
                From sketcher and part design to surfacing and sheet metal -
                gain complete command over CREO for mechanical product design.
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
    /* Why Choose CREO Training at CHT */
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
                  Why Choose CREO Training at Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  This course is suitable for:
                </p>
                <ul className="space-y-3">
                  {[
    "Mechanical and automobile engineering students",
    "Diploma holders and graduates entering product design",
    "CAD professionals shifting to Creo workflows",
    "Working engineers improving modeling and detailing speed"
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
                  The CREO curriculum is designed to build capability from
                  fundamentals to advanced mechanical design tasks:
                </p>
                <ul className="space-y-3">
                  {[
    "Create parametric 3D parts with robust feature control",
    "Build and manage assemblies using practical constraints",
    "Develop production drawings and annotations from models",
    "Apply sheet metal and surfacing tools for real projects"
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
                  Technology CREO Certification recognized by product design
                  firms, manufacturing companies, and engineering consultancies
                  in India and internationally.
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
                  All Career Hub Technology CREO trainers are certified
                  professionals with 5+ years of industry experience in
                  mechanical product design, focused on practical skill
                  delivery and industry-standard workflows.
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
                CREO Training Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is updated periodically to match recent
                CREO versions and current mechanical design requirements.
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
                CREO skills open doors to rewarding career paths in product
                design, automotive engineering, and advanced manufacturing.
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
                Advance Your CAD Career with CREO at Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Whether you are a beginner or a working professional, Career
                Hub Technology CREO training helps you build practical design
                expertise for better career opportunities in product and
                mechanical design.
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
  CreoTraining
};
