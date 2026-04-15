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
  ClipboardList,
  Calculator,
  BarChart3,
  FileSpreadsheet,
  HardHat,
  TrendingUp,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function EstimationCostingTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to Estimation & Costing",
    "Types of Estimates in Civil Projects",
    "Reading and Interpreting Drawings",
    "Quantity Take-Off for Earthwork",
    "Foundation and Substructure Estimation",
    "Superstructure - Brickwork and Masonry",
    "Concrete and RCC Quantity Calculations",
    "Finishing Works - Plastering, Tiling, Painting",
    "BOQ (Bill of Quantities) Preparation",
    "Rate Analysis - Material, Labor, Equipment",
    "Abstract of Estimated Cost",
    "Tender Document Preparation",
    "Cost Comparison and Value Engineering",
    "Progress Billing and Valuation Methods",
    "Real Project BOQ - Practical Case Study"
  ];
  const courseHighlights = [
    {
      icon: Calculator,
      title: "Fundamentals of Estimation & Costing",
      description: "Introduction to estimation, types of estimates, and project costing basics for civil and building works."
    },
    {
      icon: ClipboardList,
      title: "Quantity Take-Off & BOQ Preparation",
      description: "Detailed quantity calculations for civil works with professional BOQ preparation."
    },
    {
      icon: BarChart3,
      title: "Rate Analysis",
      description: "Material, labor, and equipment rate analysis as per current market standards."
    },
    {
      icon: FileSpreadsheet,
      title: "Project Cost Control & Tendering",
      description: "Tender documents, cost comparison, billing, and valuation methods."
    }
  ];
  const careerScope = [
    {
      icon: ClipboardList,
      title: "Quantity Surveyor (QS)",
      description: "Prepare and manage cost estimates and BOQs for construction projects."
    },
    {
      icon: HardHat,
      title: "Site Engineer",
      description: "Oversee material usage, costing, and project execution at site level."
    },
    {
      icon: FileText,
      title: "Estimator / Billing Engineer",
      description: "Prepare tenders, billing, and progress reports for contractors."
    },
    {
      icon: TrendingUp,
      title: "Project Cost Manager",
      description: "Monitor and control project budgets and cost performance."
    },
    {
      icon: BarChart3,
      title: "Planning Engineer",
      description: "Plan resource allocation and cost scheduling for project timelines."
    },
    {
      icon: Briefcase,
      title: "Construction Consultant",
      description: "Advise on project costs, feasibility, and value engineering strategies."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Estimation & Costing course?",
      answer: "Basic knowledge of civil engineering concepts is preferred but not mandatory."
    },
    {
      question: "What is the daily training duration?",
      answer: "Training schedules are flexible and vary by batch."
    },
    {
      question: "Will I receive study material and BOQs?",
      answer: "Yes, complete study material, drawings, BOQs, and assignments are provided."
    },
    {
      question: "How will I get my certificate?",
      answer: "The certificate is issued after successful course completion."
    },
    {
      question: "Is the certificate industry-recognized?",
      answer: "Yes, it is accepted by construction companies and consultants in India and abroad."
    },
    {
      question: "How long can I access the student dashboard?",
      answer: "Lifetime access is provided for revision and reference."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes, Career Hub Technology provides career guidance and placement support."
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1581674662583-5e89b374fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjb3N0JTIwZXN0aW1hdGlvbiUyMGJ1ZGdldCUyMHBsYW5uaW5nJTIwYmx1ZXByaW50fGVufDF8fHx8MTc3MzQwMTMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Estimation & Costing Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Estimation & Costing
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Estimation & Costing Course at Career Hub Technology.
              Estimation & Costing is a core construction management skill that
              helps deliver projects within budget while maintaining quality and
              timelines.
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
                  About Estimation & Costing
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional Estimation & Costing Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Estimation & Costing is a core construction management skill
                  that helps deliver projects within budget while maintaining
                  quality and timelines.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  The course at Career Hub Technology provides in-depth training
                  on quantity surveying techniques, cost estimation, and
                  financial planning used in modern construction projects - with
                  hands-on experience through real project drawings, BOQs,
                  billing formats, and case studies aligned to practices in India
                  and Gulf countries such as Dubai, UAE.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Quantity surveying techniques",
    "BOQ & billing formats",
    "Rate analysis methods",
    "Real project case studies"
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
                  Key Benefits of Estimation & Costing Training
                </h3>
                <div className="space-y-4">
                  {[
    "Strong foundation in quantity surveying concepts",
    "Hands-on practice with real construction drawings",
    "Exposure to industry-standard formats and methods",
    "Career support for site, QS, and planning roles",
    "Flexible learning options (Online / Offline)",
    "Alignment with India and Gulf region industry standards"
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
                Our Estimation & Costing program delivers practical quantity
                surveying and cost management skills for construction careers.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led, practical-oriented training" },
    { icon: BookOpen, text: "Weekly doubt-clearing and revision sessions" },
    { icon: Award, text: "Lifetime assistance for learning and career guidance" },
    { icon: Monitor, text: "Lifetime access to student learning dashboard" },
    { icon: GraduationCap, text: "Worldwide valid certification" },
    { icon: FileText, text: "Study material, assignments, BOQs, and live projects" }
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
                  Why Choose Estimation & Costing at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our program is designed for civil engineers, quantity
                  surveyors, and construction professionals:
                </p>
                <ul className="space-y-3">
                  {[
    "Real project drawings and BOQ preparation",
    "Industry-standard rate analysis methods",
    "Tender document preparation and billing",
    "Expert trainers with construction experience",
    "Aligned with India and Gulf region practices"
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
                  The course covers estimation from fundamentals to project
                  execution:
                </p>
                <ul className="space-y-3">
                  {[
    "Types of estimates and costing fundamentals",
    "Quantity take-off for earthwork, foundation, and superstructure",
    "RCC, finishing works, and material calculations",
    "BOQ preparation and rate analysis",
    "Tender documents, cost comparison, and value engineering",
    "Progress billing and valuation methods"
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
                  Technology Estimation & Costing Certification that is globally
                  recognized and valued by construction companies, consultants,
                  and contractors in India and abroad.
                </p>
                <p className="text-sm text-white/70">
                  The certification reflects practical skill proficiency and
                  industry readiness for job applications and project bidding
                  processes.
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
                  All Career Hub Technology instructors are experienced civil and
                  construction professionals with 5+ years of hands-on industry
                  experience in estimation, billing, and project cost management.
                </p>
                <p className="text-sm text-white/70">
                  Course content is regularly updated to meet current
                  construction industry requirements.
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
                Estimation & Costing Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: The syllabus is periodically updated to align with current
                construction industry standards.
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
                Estimation & Costing skills are in high demand across
                construction, consulting, and project management firms globally.
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
                Find answers to common questions about our Estimation & Costing
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
                Build Your Career in Estimation & Costing
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Master quantity surveying skills valued by construction firms in
                India, Dubai, and globally with Career Hub Technology's
                expert-led training.
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
  EstimationCostingTraining
};
