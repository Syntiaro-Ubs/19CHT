import {
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  Globe,
  CheckCircle,
  GraduationCap,
  Target,
  Mic,
  Headphones,
  PenTool,
  ChevronDown,
  Users,
  BarChart3,
  Layers,
  Monitor
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function IeltsTraining() {
  const [activeModule, setActiveModule] = useState("academic");
  const [activeExamModule, setActiveExamModule] = useState("listening");
  const examModuleData = {
    listening: {
      icon: Headphones,
      title: "Listening",
      subtitle: "4 sections - conversations and monologues",
      duration: "40 minutes",
      questions: "40 questions",
      skill: "Listening",
      tip: "You hear each recording only once. Practice active listening daily."
    },
    reading: {
      icon: BookOpen,
      title: "Reading",
      subtitle: "3 passages - academic or general interest texts",
      duration: "60 minutes",
      questions: "40 questions",
      skill: "Reading",
      tip: "Skim for main ideas first, then scan for specific answers. Time management is key."
    },
    writing: {
      icon: PenTool,
      title: "Writing",
      subtitle: "2 tasks - report/letter and essay",
      duration: "60 minutes",
      questions: "2 tasks",
      skill: "Writing",
      tip: "Spend 20 minutes on Task 1 and 40 minutes on Task 2. Always plan before you write."
    },
    speaking: {
      icon: Mic,
      title: "Speaking",
      subtitle: "3-part face-to-face interview",
      duration: "15 minutes",
      questions: "Live interview",
      skill: "Speaking",
      tip: "Speak naturally, extend answers, and use topic vocabulary with confidence."
    }
  };
  const academicModules = [
    {
      icon: BookOpen,
      title: "Reading",
      duration: "60 minutes",
      tasks: "3 passages, 40 questions",
      description: "Academic texts from books, journals, magazines, and newspapers. Tests a range of reading skills including skimming, scanning, and understanding logical argument."
    },
    {
      icon: PenTool,
      title: "Writing",
      duration: "60 minutes",
      tasks: "2 tasks",
      description: "Task 1: Describe a graph, table, chart or diagram (150 words). Task 2: Write an essay in response to an argument or problem (250 words)."
    },
    {
      icon: Headphones,
      title: "Listening",
      duration: "30 minutes",
      tasks: "4 sections, 40 questions",
      description: "Four recorded monologues and conversations. Includes a range of accents and tests understanding of main ideas, factual information, and opinions."
    },
    {
      icon: Mic,
      title: "Speaking",
      duration: "11-14 minutes",
      tasks: "3 parts",
      description: "Face-to-face interview with an examiner. Part 1: Introduction & interview. Part 2: Long turn (cue card). Part 3: Two-way discussion on abstract topics."
    }
  ];
  const generalModules = [
    {
      icon: BookOpen,
      title: "Reading",
      duration: "60 minutes",
      tasks: "3 sections, 40 questions",
      description: "Extracts from books, magazines, newspapers, notices, advertisements, and company handbooks. Tests everyday English reading skills in a practical context."
    },
    {
      icon: PenTool,
      title: "Writing",
      duration: "60 minutes",
      tasks: "2 tasks",
      description: "Task 1: Write a letter (formal, semi-formal, or informal - 150 words). Task 2: Write an essay in response to a point of view or problem (250 words)."
    },
    {
      icon: Headphones,
      title: "Listening",
      duration: "30 minutes",
      tasks: "4 sections, 40 questions",
      description: "Same as Academic - four recorded monologues and conversations testing comprehension of main ideas, specific factual information, and speaker attitudes."
    },
    {
      icon: Mic,
      title: "Speaking",
      duration: "11-14 minutes",
      tasks: "3 parts",
      description: "Same format as Academic - face-to-face interview covering introduction, a cue card topic, and a follow-up discussion on related abstract themes."
    }
  ];
  const bandScores = [
    { band: "9", level: "Expert User", description: "Full command of the language - appropriate, accurate, and fluent with complete understanding." },
    { band: "8", level: "Very Good User", description: "Fully operational command with occasional unsystematic inaccuracies. Handles complex arguments well." },
    { band: "7", level: "Good User", description: "Operational command with occasional inaccuracies. Generally handles complex language and detailed reasoning." },
    { band: "6", level: "Competent User", description: "Generally effective command despite some inaccuracies. Can use and understand fairly complex language in familiar situations." },
    { band: "5", level: "Modest User", description: "Partial command of the language. Copes with overall meaning in most situations but likely to make many mistakes." },
    { band: "4", level: "Limited User", description: "Basic competence limited to familiar situations. Frequent problems in understanding and expression." },
    { band: "3", level: "Extremely Limited", description: "Conveys and understands only general meaning in very familiar situations. Frequent breakdowns in communication." }
  ];
  const whyChooseUs = [
    {
      icon: Users,
      title: "Small Batch Sizes",
      description: "Personalized attention with small groups to ensure every learner gets individual feedback."
    },
    {
      icon: Award,
      title: "Expert Trainers",
      description: "IELTS-certified trainers with proven track records of helping students achieve Band 7+."
    },
    {
      icon: Target,
      title: "Mock Tests & Analysis",
      description: "Regular full-length mock tests with detailed feedback and band score projection."
    },
    {
      icon: Layers,
      title: "Module-Specific Practice",
      description: "Dedicated practice sessions for Listening, Reading, Writing, and Speaking."
    },
    {
      icon: Clock,
      title: "Flexible Batch Timings",
      description: "Morning, evening, and weekend batches available for students and working professionals."
    },
    {
      icon: Monitor,
      title: "Online & Offline Modes",
      description: "Join live online sessions or attend in-person classes at our Pune centre."
    }
  ];
  const currentModules = activeModule === "academic" ? academicModules : generalModules;
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[580px] md:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1705573383706-b8b1e5db637a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJRUxUUyUyMEVuZ2xpc2glMjBsYW5ndWFnZSUyMHRlc3QlMjBleGFtJTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzczMzkzMzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="IELTS Training"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ lineHeight: 1.15 }}
  >
              IELTS Training at Career Hub Technology
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-10">
              Achieve your target band score with expert-led IELTS coaching.
              Comprehensive preparation for Academic and General Training modules
              with proven strategies and personalised feedback.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-7 py-3.5 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
  >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
    href="#modules"
    className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
  >
                Explore Modules
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Academic & General Training Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Two Modules
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Academic & General Training
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                IELTS offers two test modules designed for different purposes. Choose
                the one that matches your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {
    /* Academic Card */
  }
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group">
                <div className="bg-[#0A192F] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#0A192F] mb-3">Academic</h3>
                <p className="text-sm text-[#0A192F]/60 mb-6">
                  Required for undergraduate and postgraduate admissions at universities worldwide.
                </p>
                <div className="space-y-2.5">
                  {[
    "USA, UK, Canada, Australia",
    "Germany, New Zealand, Ireland",
    "Academic institutions globally"
  ].map((item, i) => <div key={i} className="flex items-start gap-2.5 text-sm text-[#0A192F]/70">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>)}
                </div>
              </div>

              {
    /* General Training Card */
  }
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group">
                <div className="bg-[#0A192F] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#0A192F] mb-3">General Training</h3>
                <p className="text-sm text-[#0A192F]/60 mb-6">
                  Required for work experience, secondary education or immigration to English-speaking countries.
                </p>
                <div className="space-y-2.5">
                  {[
    "UK, Canada, Australia immigration",
    "Work visa applications",
    "Secondary school admissions"
  ].map((item, i) => <div key={i} className="flex items-start gap-2.5 text-sm text-[#0A192F]/70">
                      <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Exam Modules Section */
  }
      <section id="modules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Exam Structure
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                IELTS Exam Modules
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Select a module to see the format, timing, and expert tips used in our training.
              </p>
            </div>

            {
    /* Module Tabs */
  }
            <div className="flex justify-center mb-12">
              <div className="bg-white border border-[#0A192F]/8 rounded-xl p-1.5 inline-flex flex-wrap gap-1">
                {["listening", "reading", "writing", "speaking"].map((key) => {
    const Icon = examModuleData[key].icon;
    return <button
      key={key}
      onClick={() => setActiveExamModule(key)}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg transition-all text-sm ${activeExamModule === key ? "bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/25" : "text-[#0A192F]/60 hover:text-[#0A192F]"}`}
    >
                      <Icon className="w-4 h-4" />
                      {examModuleData[key].title}
                    </button>;
  })}
              </div>
            </div>

            {
    /* Active Module Detail */
  }
            {(() => {
    const mod = examModuleData[activeExamModule];
    const Icon = mod.icon;
    return <div className="max-w-4xl mx-auto">
                  {
      /* Module Header */
    }
                  <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 md:p-10 hover:border-[#FF6600]/30 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-[#FF6600]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#FF6600]" />
                      </div>
                      <div>
                        <h3 className="text-xl text-[#0A192F]">{mod.title} - {mod.duration}</h3>
                        <p className="text-sm text-[#0A192F]/50">{mod.subtitle}</p>
                      </div>
                    </div>

                    {
      /* Expert Tip */
    }
                    <div className="bg-[#FF6600]/5 border border-[#FF6600]/15 rounded-xl p-5 mt-8 mb-8">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm text-[#FF6600] mb-1 block">Expert Tip</span>
                          <p className="text-sm text-[#0A192F]/70">{mod.tip}</p>
                        </div>
                      </div>
                    </div>

                    {
      /* Stats Grid */
    }
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#FAF9F6] rounded-xl p-5 text-center">
                        <Clock className="w-5 h-5 text-[#FF6600] mx-auto mb-3" />
                        <span className="text-xs text-[#0A192F]/40 block mb-1">Duration</span>
                        <span className="text-sm text-[#0A192F]">{mod.duration}</span>
                      </div>
                      <div className="bg-[#FAF9F6] rounded-xl p-5 text-center">
                        <Layers className="w-5 h-5 text-[#FF6600] mx-auto mb-3" />
                        <span className="text-xs text-[#0A192F]/40 block mb-1">Questions / Tasks</span>
                        <span className="text-sm text-[#0A192F]">{mod.questions}</span>
                      </div>
                      <div className="bg-[#FAF9F6] rounded-xl p-5 text-center">
                        <BarChart3 className="w-5 h-5 text-[#FF6600] mx-auto mb-3" />
                        <span className="text-xs text-[#0A192F]/40 block mb-1">Skill Tested</span>
                        <span className="text-sm text-[#0A192F]">{mod.skill}</span>
                      </div>
                    </div>
                  </div>
                </div>;
  })()}
          </div>
        </div>
      </section>

      {
    /* Band Score Guide Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Scoring
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                IELTS Band Score Guide
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                IELTS results are reported on a 9-band scale. Each band corresponds
                to a level of English competence. Understand what each score means.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
              {bandScores.map((score, index) => <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-[#FF6600]/30 transition-all"
  >
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="bg-[#FF6600] w-14 h-14 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">{score.band}</span>
                    </div>
                    <div className="sm:w-44">
                      <span className="text-white">{score.level}</span>
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-white/10 sm:pl-6 flex-1">
                    <p className="text-sm text-white/50">{score.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="text-center mt-12">
              <p className="text-white/40 text-sm">
                Most universities require Band 6.0-7.0 ?? Immigration typically requires Band 6.0-7.0 ?? Top institutions may require Band 7.5+
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Choose CHT Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Why Choose CHT
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Why Prepare for IELTS with Career Hub Technology?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => {
    const Icon = item.icon;
    return <div
      key={index}
      className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 hover:shadow-md transition-all group"
    >
                    <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-5 h-5 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-[#0A192F] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#0A192F]/60">{item.description}</p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  IeltsTraining
};
