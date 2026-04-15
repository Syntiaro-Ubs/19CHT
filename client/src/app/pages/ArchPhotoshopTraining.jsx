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
  Briefcase,
  Palette,
  Megaphone,
  Layout,
  PenTool,
  Image,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function ArchPhotoshopTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Basics of Photoshop - Introduction, applications, and workspace overview",
    "User Interface - Panels, tools, menus, and shortcuts",
    "Image Basics - Resolution, color modes, and file formats",
    "Selection Tools - Marquee, Lasso, Magic Wand, and Quick Selection",
    "Layers and Masks - Layer management, blending modes, and masks",
    "Image Retouching - Healing brush, clone stamp, and content-aware tools",
    "Color Correction - Levels, curves, hue, and saturation",
    "Text and Typography - Text tools, styles, and effects",
    "Filters and Effects - Smart filters, effects, and adjustments",
    "Smart Objects - Non-destructive editing techniques",
    "Working with Brushes - Custom brushes and effects",
    "Photo Manipulation - Creative compositions and montage",
    "Architectural Presentation - Layouts, plans, and elevation enhancement",
    "Export and Output - Web and print-ready file formats",
    "Project Work - Real-time practical projects"
  ];
  const whyLearn = [
    "Industry-oriented curriculum",
    "Practical, project-based learning",
    "Experienced trainers with real-world exposure",
    "Suitable for students, working professionals, and freelancers",
    "Career-focused training aligned with current industry needs",
    "Training support for India and Dubai job markets"
  ];
  const applications = [
    "Architectural and interior presentations",
    "Real estate marketing creatives",
    "Social media and digital marketing designs",
    "Product visualization",
    "Photo editing and retouching",
    "Branding and advertising materials"
  ];
  const whoCanJoin = [
    "Architecture and Civil Engineering students",
    "Interior designers and visualizers",
    "Graphic designers and digital marketers",
    "Photographers",
    "Freelancers and entrepreneurs",
    "Beginners looking to build creative skills"
  ];
  const trainingOutcomes = [
    "Create professional-quality designs independently",
    "Enhance architectural and engineering visuals",
    "Design marketing creatives for digital and print",
    "Work confidently on real-world client projects"
  ];
  const careerScope = [
    {
      icon: Palette,
      title: "Graphic Designer",
      description: "Design print and digital creatives for brands, agencies, and marketing firms."
    },
    {
      icon: Monitor,
      title: "Visualizer / Presentation Designer",
      description: "Create architectural and interior design presentation graphics."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Executive",
      description: "Design social media, campaign, and promotional creatives."
    },
    {
      icon: Layout,
      title: "UI Creative Designer",
      description: "Build UI mockups, app screens, and web design assets."
    },
    {
      icon: PenTool,
      title: "Freelance Designer",
      description: "Offer independent design services across industries."
    },
    {
      icon: Briefcase,
      title: "Marketing & Branding Assistant",
      description: "Support brand identity creation and marketing collateral production."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Photoshop course?",
      answer: "No prerequisites are required. The course starts from fundamentals and is suitable for complete beginners as well as working professionals."
    },
    {
      question: "What is the training duration?",
      answer: "The course typically runs 1-2 months depending on the batch schedule. Both weekday and weekend options are available."
    },
    {
      question: "Is this course suitable for architects and engineers?",
      answer: "Yes, the course includes dedicated modules on architectural presentation, plan enhancement, and elevation graphics specifically designed for architecture and engineering professionals."
    },
    {
      question: "Will I work on real projects during training?",
      answer: "Yes, the training includes hands-on assignments and real-time practical projects to build portfolio-ready work."
    },
    {
      question: "Can I use Photoshop skills for digital marketing?",
      answer: "Absolutely. Photoshop is essential for creating social media graphics, campaign creatives, branding materials, and marketing collateral."
    },
    {
      question: "Is the certification globally recognized?",
      answer: "Yes, Career Hub Technology certification is accepted by design studios, marketing agencies, architecture firms, and creative companies worldwide."
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
    src="https://images.unsplash.com/photo-1764974033674-fe324b36c1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGhvdG8lMjBlZGl0aW5nJTIwY3JlYXRpdmUlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNDAzMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Architecture Photoshop Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Photoshop Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Learn Adobe Photoshop for architecture, engineering, interior
              design, digital marketing, and media workflows with practical,
              industry-focused training. Adobe Photoshop is one of the most
              widely used tools for image editing and design across every
              creative industry.
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
                  Master Professional Image Editing and Design Skills
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Learn Adobe Photoshop for architecture, engineering, interior
                  design, digital marketing, and media workflows with practical,
                  industry-focused training. Adobe Photoshop is one of the most
                  widely used tools for image editing and design across every
                  creative industry.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, the course focuses on practical,
                  real-time application through assignments and live projects.
                  Learners build the ability to create high-quality visuals,
                  presentation graphics, and marketing creatives with precision
                  and creativity.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Image editing & retouching",
    "Architectural presentations",
    "Marketing creatives",
    "Portfolio-ready projects"
  ].map((item, idx) => <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="bg-[#0A192F] rounded-2xl p-8">
                <h3
    className="text-xl text-white mb-2"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Who Can Join This Course?
                </h3>
                <p className="text-sm text-white/50 mb-6">
                  Open to all creative and technical backgrounds
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
                Our Photoshop program delivers comprehensive image editing and
                design skills for architecture, marketing, and creative careers.
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
    /* Applications of Photoshop Cards */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Applications
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Applications of Photoshop
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((item, idx) => {
    const icons = [Image, Briefcase, Megaphone, Monitor, Palette, PenTool];
    const Icon = icons[idx];
    return <div
      key={idx}
      className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group text-center"
    >
                    <div className="bg-[#FF6600]/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-[#0A192F] text-sm">{item}</h3>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Learn & Training Outcomes */
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
                  Why Learn Photoshop at Career Hub Technology?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Photoshop skills are essential across architecture, marketing,
                  and creative industries:
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
                  Training Outcomes
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  After completing this course, learners will be able to:
                </p>
                <ul className="space-y-3">
                  {trainingOutcomes.map((item, idx) => <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0A192F]/70">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {
    /* Certification & Trainer Standards */
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
                  Technology Adobe Photoshop Certification that is globally
                  recognized and industry-relevant.
                </p>
                <p className="text-sm text-white/70">
                  The certification validates image editing, design, and
                  presentation skills for design studios, marketing agencies,
                  architecture firms, and creative companies worldwide.
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
                  All Career Hub Technology instructors are experienced creative
                  professionals with 5+ years of hands-on industry experience in
                  image editing, graphic design, and architectural presentation.
                </p>
                <p className="text-sm text-white/70">
                  Training is practical, project-based, and industry-driven to
                  ensure employable outcomes for every learner.
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
                Adobe Photoshop - Course Content
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: Course syllabus may be updated as per industry
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
                Career Opportunities After Photoshop Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Photoshop skills open doors to graphic design, marketing,
                architectural presentation, and freelance creative careers.
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
                Find answers to common questions about our Photoshop training
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
                Master Adobe Photoshop with Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Build professional design and image editing skills that open
                doors across architecture, media, and marketing industries.
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
  ArchPhotoshopTraining
};
