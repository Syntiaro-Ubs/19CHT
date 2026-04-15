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
  BarChart3,
  Table2,
  Calculator,
  LayoutDashboard,
  HardHat,
  ClipboardList,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function ExcelTraining() {
  const [openFaq, setOpenFaq] = useState(null);
  const curriculum = [
    "Introduction to Microsoft Excel - Interface and Workspace",
    "Working with Worksheets and Workbooks",
    "Data Entry, Formatting, and Cell References",
    "Basic Formulas - SUM, AVERAGE, COUNT, MAX, MIN",
    "Conditional Formatting and Data Validation",
    "Sorting, Filtering, and Grouping Data",
    "VLOOKUP, HLOOKUP, INDEX, MATCH Functions",
    "Logical Functions - IF, IFS, AND, OR, NESTED IF",
    "Text Functions - CONCATENATE, LEFT, RIGHT, MID, TRIM",
    "Date and Time Functions",
    "Financial Functions - PMT, NPV, IRR",
    "Creating Charts, Graphs, and Visual Reports",
    "Pivot Tables and Pivot Charts",
    "Dashboard Creation and Reporting Layouts",
    "Introduction to Excel Macros and Automation",
    "Real Dataset Project - Industry Report Simulation"
  ];
  const courseHighlights = [
    {
      icon: Table2,
      title: "Excel Fundamentals & Interface",
      description: "Understanding the Excel environment, worksheets, formatting, and basic formulas."
    },
    {
      icon: BarChart3,
      title: "Data Management & Analysis",
      description: "Sorting, filtering, conditional formatting, and data validation workflows."
    },
    {
      icon: Calculator,
      title: "Advanced Excel Functions",
      description: "Logical, lookup, text, date, and financial functions for complex data tasks."
    },
    {
      icon: LayoutDashboard,
      title: "Reporting, Dashboards & Automation",
      description: "Pivot tables, charts, dashboards, and Excel automation for productivity."
    }
  ];
  const careerScope = [
    {
      icon: BarChart3,
      title: "Data Analyst",
      description: "Analyze business data and prepare reports and dashboards using Excel."
    },
    {
      icon: ClipboardList,
      title: "Project Planning Engineer",
      description: "Track project costs, schedules, and resources using Excel-based tools."
    },
    {
      icon: Calculator,
      title: "Finance & Accounts Executive",
      description: "Manage financial data, budgets, and reporting using advanced Excel formulas."
    },
    {
      icon: FileText,
      title: "MIS Executive",
      description: "Generate management information reports for decision-making."
    },
    {
      icon: HardHat,
      title: "Site / Construction Planner",
      description: "Track material quantities, costs, and progress using Excel BOQs."
    },
    {
      icon: Briefcase,
      title: "Operations Coordinator",
      description: "Monitor and report on operational metrics using data dashboards."
    }
  ];
  const faqs = [
    {
      question: "Is there any prerequisite for the Excel course?",
      answer: "No prior experience is required. The course starts from basics."
    },
    {
      question: "What is the daily training duration?",
      answer: "Flexible batch timings are available."
    },
    {
      question: "Will I get study material and practice files?",
      answer: "Yes, complete study material, datasets, and practice files are provided."
    },
    {
      question: "How will I receive my certificate?",
      answer: "The certificate is awarded after successful course completion."
    },
    {
      question: "Is the certificate industry-recognized?",
      answer: "Yes, it is accepted by companies in India and abroad."
    },
    {
      question: "How long can I access the student dashboard?",
      answer: "Lifetime access is provided."
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
    src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJlYWRzaGVldCUyMGRhdGElMjBhbmFseXNpcyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM0MDA5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Excel Training"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Excel Training
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
              Professional Microsoft Excel Course at Career Hub Technology.
              Microsoft Excel is one of the most widely used tools for data
              analysis, reporting, and decision-making across corporate,
              engineering, construction, finance, and operations roles worldwide.
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
                  About Excel Training
                </span>
                <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  Professional Microsoft Excel Course at Career Hub Technology
                </h2>
                <p className="text-[#0A192F]/70 mb-5">
                  Microsoft Excel is one of the most widely used tools for data
                  analysis, reporting, and decision-making across corporate,
                  engineering, construction, finance, and operations roles
                  worldwide.
                </p>
                <p className="text-[#0A192F]/70 mb-6">
                  This Excel training at Career Hub Technology helps learners
                  work efficiently with large datasets, create professional
                  reports, analyze trends, and automate repetitive tasks - with
                  hands-on exercises, real business scenarios, and
                  industry-relevant case studies aligned to India and Gulf region
                  job markets.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
    "Beginner to advanced Excel",
    "Real business scenarios",
    "Dashboard & reporting",
    "Macro automation basics"
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
                  Key Benefits of Excel Training
                </h3>
                <div className="space-y-4">
                  {[
    "Strong foundation from beginner to advanced Excel",
    "Hands-on practice with real datasets and reports",
    "Industry-oriented reporting and dashboard creation",
    "Improved productivity and analytical skills",
    "Career support for corporate and technical roles",
    "Training aligned with India and Gulf region job markets"
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
                Our Excel program delivers practical data analysis, reporting,
                and automation skills for corporate and technical careers.
              </p>
            </div>

            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
    { icon: Users, text: "Instructor-led practical training" },
    { icon: BookOpen, text: "Weekly doubt-clearing and revision sessions" },
    { icon: Award, text: "Lifetime assistance for learning and career guidance" },
    { icon: Monitor, text: "Lifetime access to student learning dashboard" },
    { icon: GraduationCap, text: "Worldwide valid certification" },
    { icon: FileText, text: "Study material, assignments, and real-time projects" }
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
                  Why Choose Excel Training at CHT?
                </h3>
                <p className="text-sm text-[#0A192F]/60 mb-5">
                  Our Excel program is built for professionals and freshers
                  across all industries:
                </p>
                <ul className="space-y-3">
                  {[
    "Beginner-friendly with progressive advanced modules",
    "Real datasets and business case studies",
    "Industry-oriented dashboard and reporting skills",
    "Expert trainers with corporate Excel experience",
    "Aligned with India and Gulf region job requirements"
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
                  The course structure covers everything from basics to
                  automation:
                </p>
                <ul className="space-y-3">
                  {[
    "Excel interface, worksheets, formatting, and cell references",
    "Formulas: SUM, AVERAGE, COUNT, VLOOKUP, INDEX-MATCH",
    "Logical, text, date, and financial functions",
    "Conditional formatting, sorting, filtering, and validation",
    "Pivot tables, charts, dashboards, and visual reports",
    "Introduction to Excel macros and automation"
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
                  Technology Excel Training Certification that is globally
                  recognized and valued by corporates, consultancies, and
                  organizations across industries.
                </p>
                <p className="text-sm text-white/70">
                  The certification demonstrates practical Excel proficiency and
                  helps learners stand out in interviews and workplace
                  evaluations.
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
                  All Career Hub Technology Excel trainers are certified
                  professionals with extensive industry experience, focused on
                  practical learning, accuracy, and real-time applications.
                </p>
                <p className="text-sm text-white/70">
                  Course content is regularly updated to meet current corporate
                  and industry requirements.
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
                Excel Course Curriculum
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Note: Course content is updated regularly to meet current
                corporate and industry requirements.
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
                Career Opportunities After Excel Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Excel skills are essential across every industry - from finance
                and engineering to operations and management.
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
                Find answers to common questions about our Excel training
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
                Master Excel with Career Hub Technology
              </h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Boost your data analysis and reporting skills valued by
                employers across every industry - enroll with our expert
                trainers today.
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
  ExcelTraining
};
