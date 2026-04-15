import {
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  Globe,
  CheckCircle,
  GraduationCap,
  Mic,
  ChevronDown,
  Briefcase,
  Languages
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
function JapaneseLanguage() {
  const [activeLevel, setActiveLevel] = useState(0);
  const levels = [
    {
      code: "N5",
      title: "Beginner Level",
      subtitle: "N5 Level - Beginner Level",
      description: "Start from zero and build confidence with essential Japanese basics.",
      totalHours: "80 Hrs Total",
      hoursBreakdown: "30 Hours Grammar + 50 Hours Course Books + 40 Hours Exam Preparation",
      outcomes: [
        "Learn hiragana, katakana, and beginner-level kanji.",
        "Understand simple phrases and classroom conversations."
      ],
      batches: [
        {
          id: 1,
          type: "Regular Batch",
          daily: "2 Hours",
          duration: "45 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 2,
          type: "Intensive Batch",
          daily: "2.5 Hours",
          duration: "40 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 3,
          type: "Fast-Track Batch",
          daily: "4 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Weekend Batch",
          daily: "3 Hours",
          duration: "3-4 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    },
    {
      code: "N4",
      title: "Elementary Level",
      subtitle: "N4 Level - Elementary Level",
      description: "Develop strong grammar and vocabulary foundations for practical use.",
      totalHours: "100 Hrs Total",
      hoursBreakdown: "40 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
      outcomes: [
        "Read basic passages and short notices in Japanese.",
        "Understand routine conversations spoken slowly.",
        "Use common sentence structures for daily interactions."
      ],
      batches: [
        {
          id: 1,
          type: "Regular Batch",
          daily: "2 Hours",
          duration: "50 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 2,
          type: "Intensive Batch",
          daily: "2.5 Hours",
          duration: "45 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 3,
          type: "Fast-Track Batch",
          daily: "4 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Weekend Batch",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    },
    {
      code: "N3",
      title: "Intermediate Level",
      subtitle: "N3 Level - Intermediate Level",
      description: "Strengthen practical conversation and reading skills for daily communication.",
      totalHours: "180 Hrs Total",
      hoursBreakdown: "50 Hours Grammar + 60 Hours Course Books + 50 Hours Exam Preparation",
      outcomes: [
        "Read everyday Japanese text with growing fluency and confidence.",
        "Understand medium-speed conversations and key details.",
        "Express opinions and experiences in more natural sentence patterns."
      ],
      batches: [
        {
          id: 1,
          type: "Regular Batch",
          daily: "2 Hours",
          duration: "55 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 2,
          type: "Intensive Batch",
          daily: "3 Hours",
          duration: "45 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 3,
          type: "Fast-Track Batch",
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Weekend Batch",
          daily: "3 Hours",
          duration: "5-6 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    },
    {
      code: "N2",
      title: "Upper-Intermediate Level",
      subtitle: "N2 Level - Upper-Intermediate Level",
      description: "Build professional-level Japanese for workplace and higher studies.",
      totalHours: "250 Hrs Total",
      hoursBreakdown: "60 Hours Grammar + 70 Hours Course Books + 50 Hours Exam Preparation",
      outcomes: [
        "Understand newspapers, reports, and essays on familiar and general topics.",
        "Follow spoken Japanese in structured conversations and presentations.",
        "Communicate confidently in business and academic settings."
      ],
      batches: [
        {
          id: 1,
          type: "Regular Batch",
          daily: "2 Hours",
          duration: "60 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 2,
          type: "Intensive Batch",
          daily: "3 Hours",
          duration: "50 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 3,
          type: "Fast-Track Batch",
          daily: "5 Hours",
          duration: "2 Months",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Weekend Batch",
          daily: "3 Hours",
          duration: "6-7 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    },
    {
      code: "N1",
      title: "Advanced Level",
      subtitle: "N1 Level - Advanced Level",
      description: "Master the Japanese language at the highest proficiency.",
      totalHours: "350 Hrs Total",
      hoursBreakdown: "70 Hours Grammar + 80 Hours Course Books + 50 Hours Exam Preparation",
      outcomes: [
        "Read and deeply understand complex, abstract Japanese materials.",
        "Comprehensively understand native Japanese spoken at natural speed.",
        "Qualify for technical, academic, and interpretation-focused careers requiring high-level Japanese."
      ],
      batches: [
        {
          id: 1,
          type: "Regular Batch",
          daily: "2 Hours",
          duration: "70 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 2,
          type: "Intensive Batch",
          daily: "3 Hours",
          duration: "55 Working Days",
          coverage: "Grammar + Course Books + Exam Prep"
        },
        {
          id: 3,
          type: "Fast-Track Batch",
          daily: "5 Hours",
          duration: "2 Months 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Weekend Batch",
          daily: "3 Hours",
          duration: "7-8 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    }
  ];
  const courses = [
    {
      icon: Languages,
      title: "Conversational Japanese",
      description: "Master everyday Japanese conversation with native-style pronunciation, polite forms (Keigo), and practical dialogue practice."
    },
    {
      icon: BookOpen,
      title: "Kanji & Writing System",
      description: "Learn Hiragana, Katakana, and Kanji systematically with stroke order practice, mnemonics, and reading exercises."
    },
    {
      icon: Briefcase,
      title: "Business Japanese",
      description: "Professional Japanese for corporate environments - emails, meetings, presentations, and workplace etiquette."
    },
    {
      icon: GraduationCap,
      title: "JLPT Preparation",
      description: "Focused exam preparation for all JLPT levels (N5-N1) with mock tests, section-wise strategy, and timed practice."
    },
    {
      icon: Globe,
      title: "Japanese for Travel",
      description: "Essential phrases, cultural tips, and practical vocabulary for navigating Japan with confidence."
    },
    {
      icon: Mic,
      title: "Anime & Pop Culture Japanese",
      description: "Learn Japanese through anime, manga, J-pop, and drama - casual speech, slang, and cultural references."
    }
  ];
  const certifications = [
    {
      icon: Award,
      title: "Career Hub Technology Certification",
      description: "Recognized certificate upon successful course completion"
    },
    {
      icon: Globe,
      title: "International Certificate: JLPT",
      description: "Japanese-Language Proficiency Test"
    }
  ];
  const whyChooseUs = [
    "Career Hub Technology offers Japanese courses online as well as classroom sessions at our foreign language institute in Pune.",
    "Career Hub Technology provides customised Japanese classes covering language and Japanese culture training.",
    "Interactive live online Japanese classes with experienced JLPT-certified trainers.",
    "Maximum 10 students per batch to ensure personal attention and effective group activities.",
    "Special batches for kids and teens from age 6 to 16.",
    "Choose Japanese group classes, one-to-one classes, or private classes."
  ];
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[580px] md:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1772868747180-1b0f57d213b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMFRva3lvJTIwY2l0eXNjYXBlJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MzM5MjEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Japanese language education"
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
              Learn Japanese with Career Hub Technology
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-10">
              Master the Japanese language from N5 to N1 with certified trainers,
              JLPT-focused curriculum, and flexible learning options. Your gateway
              to study, work, and live in Japan.
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
    href="#levels"
    className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
  >
                View JLPT Levels
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* About Japanese Language - Konnichiwa Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                  ----- - Konnichiwa
                </span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  About the Japanese Language
                </h2>
                <div className="space-y-4 text-[#0A192F]/60">
                  <p>
                    Japanese is one of the most fascinating and rewarding languages
                    to learn. Spoken by over 125 million people, it is the gateway
                    to Japan's rich culture, cutting-edge technology, and thriving
                    economy - the third largest in the world.
                  </p>
                  <p>
                    The Japanese writing system combines three scripts - Hiragana,
                    Katakana, and Kanji - making it unique among world languages.
                    Learning Japanese opens doors to careers in automotive, robotics,
                    anime, gaming, and IT industries.
                  </p>
                  <p>
                    At Career Hub Technology, we provide structured Japanese language
                    training from absolute beginner (N5) to advanced proficiency (N1),
                    preparing you for JLPT certification and real-world communication
                    in Japan.
                  </p>
                </div>

              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <ImageWithFallback
    src="https://images.unsplash.com/photo-1486303954368-398fea0e72cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMGNhbGxpZ3JhcGh5JTIwd3JpdGluZyUyMGJydXNofGVufDF8fHx8MTc3MzM5MjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Japanese calligraphy"
    className="w-full h-[400px] object-cover"
  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0A192F] rounded-2xl p-6 hidden lg:block">
                  <span className="text-[#FF6600] text-4xl block mb-1">---</span>
                  <span className="text-white/60 text-sm">Nihongo - Japanese</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Japanese Language Courses Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Our Courses
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Japanese Language Courses
              </h2>
              <h3 className="text-xl md:text-2xl text-[#FF6600] mb-6">
                Learn Japanese at the Best Language Classes in Pune
              </h3>
              <p className="text-white/60 max-w-3xl mx-auto mb-4">
                <span className="text-white">Career Hub Technology</span> is the premier Japanese Language Training
                Institute in Pune. Japanese classes at <span className="text-white">Career Hub Technology</span>{" "}
                Academy are perfect if you want to learn Japanese culture,
                pronunciation, grammar, vocabulary, and idioms quickly and
                accurately.
              </p>
              <p className="text-white/60 max-w-3xl mx-auto">
                Learning Japanese at <span className="text-white">Career Hub Technology</span> will not only improve
                your language skills but also provide deeper insight into the
                vibrant culture and music of Japan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => {
    const Icon = course.icon;
    return <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#FF6600]/30 transition-all group"
    >
                    <div className="bg-[#FF6600]/20 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-white mb-3">{course.title}</h3>
                    <p className="text-sm text-white/50">{course.description}</p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* JLPT Course Levels Section */
  }
      <section id="levels" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                JLPT Levels
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                JLPT Course Levels
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Select a level to view detailed batch information and curriculum
                breakdown for the Japanese Language Proficiency Test
              </p>
            </div>

            {
    /* 5-Tab Navigation */
  }
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
              {levels.map((level, index) => <button
    key={level.code}
    onClick={() => setActiveLevel(index)}
    className={`relative px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all ${activeLevel === index ? "bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/25" : "bg-white border border-[#0A192F]/8 text-[#0A192F] hover:border-[#FF6600]/40 hover:shadow-md"}`}
  >
                  <span className="text-sm sm:text-base">{level.code}</span>
                </button>)}
            </div>

            {
    /* Active Level Detail Panel */
  }
            {(() => {
    const current = levels[activeLevel];
    return <div className="space-y-8">
                  {
      /* Level Header Card */
    }
                  <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex items-center gap-5">
                        <div className="bg-[#FF6600] text-white w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                          {current.code}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl text-white mb-1">
                            {current.subtitle}
                          </h3>
                          <p className="text-white/60 text-sm mt-2 max-w-lg">
                            {current.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
      to="/contact"
      className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-2.5 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors text-sm"
    >
                          Enroll in {current.code}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {
      /* Hours Summary */
    }
                  <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#FF6600] w-10 h-10 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[#0A192F] text-lg">
                          {current.totalHours}
                        </span>
                      </div>
                      <div className="h-px sm:h-8 sm:w-px bg-[#0A192F]/10" />
                      <p className="text-[#0A192F]/60 text-sm">
                        {current.hoursBreakdown}
                      </p>
                    </div>
                  </div>

                  {
      /* Outcomes (N1 only) */
    }
                  {current.outcomes && current.outcomes.length > 0 && <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 md:p-8">
                      <h4 className="text-[#0A192F] text-lg mb-4">
                        After {current.code} Level - You will be able to:
                      </h4>
                      <div className="space-y-3">
                        {current.outcomes.map((outcome, oi) => <div
      key={oi}
      className="flex items-start gap-2.5 text-sm text-[#0A192F]/70"
    >
                            <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>)}
                      </div>
                    </div>}

                </div>;
  })()}
          </div>
        </div>
      </section>

      {
    /* Certification Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Certificates You Will Earn
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, index) => {
    const Icon = cert.icon;
    return <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6600]/30 transition-all group"
    >
                    <div className="bg-[#FF6600]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-8 h-8 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-white text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-white/50">{cert.description}</p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Choose Us Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Reasons to Choose Japanese Language Classes at CHT
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => <div
    key={index}
    className="bg-white border border-[#0A192F]/6 rounded-xl p-6 flex items-start gap-4 hover:border-[#FF6600]/30 hover:shadow-md transition-all"
  >
                  <div className="bg-[#FF6600]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <p className="text-sm text-[#0A192F]/70 pt-2">{item}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

    </div>;
}
export {
  JapaneseLanguage
};
