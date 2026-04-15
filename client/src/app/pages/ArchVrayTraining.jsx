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
  Palette,
  Camera,
  Image,
  Paintbrush,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function ArchVrayTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to V-Ray interface and workflow",
    "Lighting techniques (natural and artificial)",
    "Materials, textures, and reflections",
    "Camera settings and composition",
    "Exterior and interior rendering",
    "Global illumination and render settings",
    "Noise control and render optimization",
    "Realistic shadows, glass, and metals",
    "Post-processing and final output"
  ];
  const courseOverviewCards = [
    {
      icon: Image,
      title: "Photorealistic Output",
      description: "Industry-preferred rendering engine for photorealistic output with advanced lighting, textures, materials, and animation quality."
    },
    {
      icon: Users,
      title: "For All Professionals",
      description: "Designed for students, architects, interior designers, civil engineers, and 3D visualization professionals."
    },
    {
      icon: Settings,
      title: "Real Studio Workflows",
      description: "Practical and project-based to match real workflows used in architecture and design studios."
    },
    {
      icon: Paintbrush,
      title: "Client-Ready Capability",
      description: "Build client-ready rendering capability for interior, exterior, and product visualization projects."
    }
  ];
  const whyLearn = [
    "Create photorealistic renders that win clients",
    "Improve lighting, materials, and texture quality",
    "Enhance design presentation quality for clients",
    "Increase employability in BIM and 3D visualization roles",
    "Work on real-time and production-level rendering projects"
  ];
  const whatYouWillLearn = [
    "Introduction to V-Ray interface and workflow",
    "Lighting techniques (natural and artificial)",
    "Materials, textures, and reflections",
    "Camera settings and composition",
    "Exterior and interior rendering",
    "Global illumination and render settings",
    "Noise control and render optimization",
    "Realistic shadows, glass, and metals",
    "Post-processing and final output"
  ];
  const whoCanJoin = [
    "Architecture and interior design students",
    "AutoCAD, SketchUp, 3ds Max, and Revit users",
    "Working professionals upgrading rendering skills",
    "Beginners interested in 3D visualization",
    "Freelancers and entrepreneurs in design fields"
  ];
  const trainingMethodology = [
    "Instructor-led classroom training",
    "Live online interactive sessions",
    "Hands-on practical assignments",
    "Real-time industry projects",
    "Personalized guidance and doubt-solving"
  ];
  const careerScope = [
    {
      icon: Image,
      title: "3D Visualizer",
      description: "Create photorealistic 3D renders for architecture and design firms."
    },
    {
      icon: Camera,
      title: "Architectural Renderer",
      description: "Produce high-quality exterior and interior renders for presentations."
    },
    {
      icon: Palette,
      title: "Interior Design Visualizer",
      description: "Visualize interior concepts with lifelike material and lighting quality."
    },
    {
      icon: Monitor,
      title: "BIM & Rendering Specialist",
      description: "Integrate rendering workflows within BIM project pipelines."
    },
    {
      icon: Briefcase,
      title: "Freelance Rendering Artist",
      description: "Offer rendering services independently to studios and real estate firms."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Architecture V-Ray course?",
      answer: "Basic knowledge of any 3D modeling software such as SketchUp, 3ds Max, or Revit is helpful but not mandatory. The course is designed to accommodate beginners."
    },
    {
      question: "What is the training duration?",
      answer: "The course typically runs 1-2 months depending on the batch schedule. Both weekday and weekend options are available."
    },
    {
      question: "Which 3D software does V-Ray integrate with?",
      answer: "V-Ray integrates with SketchUp, 3ds Max, Revit, Rhino, and other popular 3D modeling platforms used in architecture studios."
    },
    {
      question: "Is this course different from the Civil CAD V-Ray course?",
      answer: "Yes, this Architecture V-Ray course focuses on architectural presentation workflows, studio-level rendering, and design visualization specific to architecture professionals."
    },
    {
      question: "Will I work on real rendering projects?",
      answer: "Yes, the course includes hands-on projects covering interior, exterior, and product rendering workflows aligned with real studio standards."
    },
    {
      question: "Is the certification globally recognized?",
      answer: "Yes, Career Hub Technology certification is accepted by architecture firms, design studios, and visualization consultancies worldwide."
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
    src="https://images.unsplash.com/photo-1533904842716-e7071a20656d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b3JlYWxpc3RpYyUyMGFyY2hpdGVjdHVyYWwlMjByZW5kZXJpbmclMjBleHRlcmlvciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzQwMjYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Architecture V-Ray Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              V-Ray Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Build professional photorealistic rendering skills for
              architecture, interiors, and product visualization with
              project-focused training. V-Ray is the world's most widely used
              rendering engine - trusted by top architecture and design studios
              globally.
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
                  V-Ray Training Institute by Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Build professional photorealistic rendering skills for
                  architecture, interiors, and product visualization with
                  project-focused training. V-Ray is the world's most widely
                  used rendering engine - trusted by top architecture and design
                  studios globally.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, our V-Ray training is practical,
                  hands-on, and aligned with current studio workflows - giving
                  learners client-ready rendering skills from day one.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Studio-aligned workflows",
    "Client-ready rendering",
    "Advanced lighting & materials",
    "Project-focused training"
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
                  Who Can Join?
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
                Our Architecture V-Ray program delivers comprehensive
                photorealistic rendering skills for architecture and design
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
    /* Why Learn V-Ray & Training Methodology */
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
                  Why Learn V-Ray?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  V-Ray rendering skills are essential for modern architecture
                  and design professionals:
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
                  Training Methodology at CHT
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Expert-led mentoring ensures clear conceptual understanding
                  and strong practical exposure:
                </p>
                <ul className="space-y-3">
                  {trainingMethodology.map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {
    /* What You Will Learn - numbered list */
  }
            <div className="mt-8 bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-md transition-all">
              <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-5 h-5 text-[#FF6600]" />
              </div>
              <h3
    className="text-xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                What You Will Learn in V-Ray Training
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {whatYouWillLearn.map((item, idx) => <div
    key={idx}
    className="flex items-center gap-3 bg-[#0A192F]/3 rounded-xl p-4"
  >
                    <span className="bg-[#FF6600]/15 text-[#FF6600] w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-[#0A192F]/70">{item}</span>
                  </div>)}
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
                  Technology V-Ray Certification that is globally recognized and
                  valued by architecture firms, design studios, and
                  visualization consultancies worldwide.
                </p>
                <p className="text-sm text-white/70">
                  The certification reflects practical rendering proficiency and
                  professional readiness for architectural visualization and 3D
                  rendering roles.
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
                  All Career Hub Technology instructors are experienced
                  visualization professionals with 5+ years of hands-on industry
                  experience in photorealistic rendering, architectural
                  visualization, and studio workflows.
                </p>
                <p className="text-sm text-white/70">
                  Training focuses on client-ready output quality and
                  professional project delivery for modern architecture and
                  design industry demands.
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
                V-Ray Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is periodically updated to align with the
                latest V-Ray version and industry requirements.
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
                Career Opportunities After V-Ray Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                V-Ray rendering skills open doors to 3D visualization,
                architectural rendering, and design consultancy roles worldwide.
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
                Find answers to common questions about our Architecture V-Ray
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
                Master V-Ray Rendering at Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Build photorealistic rendering skills that employers and clients
                demand - with expert-led, hands-on V-Ray training.
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
  ArchVrayTraining
};
