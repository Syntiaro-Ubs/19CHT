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
  MessageSquare,
  Calendar,
  Video,
  Shield,
  FileText,
  ChevronDown,
  Plane
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import Gal13 from "../../assets/Gal13.jpeg";
import Gal14 from "../../assets/Gal14.jpeg";
import Gal15 from "../../assets/Gal15.jpeg";
import Gal16 from "../../assets/Gal16.jpeg";
import Gal17 from "../../assets/Gal17.jpeg";
import Gal18 from "../../assets/Gal18.jpeg";
import Gal19 from "../../assets/Gal19.jpeg";
import Gal20 from "../../assets/Gal20.jpeg";
import Gal21 from "../../assets/Gal21.jpeg";
import Gal22 from "../../assets/Gal22.jpeg";
import Gal23 from "../../assets/Gal23.jpeg";
import Gal24 from "../../assets/Gal24.jpeg";
import germanBrochurePdf from "../../assets/GermanLanguageBrochure-5.pdf";
function GermanLanguage() {
  const [activeLevel, setActiveLevel] = useState(0);
  const scrollRef = useRef(null);
  const visaPhotos = [Gal13, Gal14, Gal15, Gal16, Gal17, Gal18, Gal19, Gal20, Gal21, Gal22, Gal23, Gal24];
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;
    const autoScroll = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, scrollInterval);
    return () => clearInterval(autoScroll);
  }, []);
  const levels = [
    {
      code: "A1",
      title: "Beginner",
      subtitle: "A1 Level - Beginner",
      description: "Start your German journey. Learn basic phrases, grammar, and everyday conversation skills with a structured foundation.",
      totalHours: "140 Hours Total",
      hoursBreakdown: "40 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        }
      ]
    },
    {
      code: "A2",
      title: "Elementary",
      subtitle: "A2 Level - Elementary",
      description: "Build practical communication skills for travel, daily routines, and workplace basics.",
      totalHours: "140 Hours Total",
      hoursBreakdown: "40 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        },
        {
          id: 5,
          type: "Weekend Intensive",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    },
    {
      code: "B1",
      title: "Intermediate",
      subtitle: "B1 Level - Intermediate",
      description: "Improve confidence for discussions, formal writing, and exam-focused communication.",
      totalHours: "140 Hours Total",
      hoursBreakdown: "40 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        },
        {
          id: 5,
          type: "Weekend Intensive",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: "Grammar + Course Books + Exam Prep"
        }
      ]
    },
    {
      code: "B2.1",
      title: "Upper Intermediate I",
      subtitle: "B2.1 Level - Upper Intermediate",
      description: "Develop advanced fluency and strengthen comprehension for professional and academic settings.",
      totalHours: "140 Hours Total",
      hoursBreakdown: "40 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        },
        {
          id: 5,
          type: "Weekend Intensive",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: ""
        }
      ]
    },
    {
      code: "B2.2",
      title: "Upper Intermediate II",
      subtitle: "B2.2 Level - Upper Intermediate+",
      description: "Polish advanced grammar and high-level speaking with real exam-style practice.",
      totalHours: "140 Hours Total",
      hoursBreakdown: "40 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        },
        {
          id: 5,
          type: "Weekend Intensive",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: ""
        }
      ]
    },
    {
      code: "C1.1",
      title: "Advanced I",
      subtitle: "C1.1 Level - Advanced",
      description: "Reach strong command of German with formal communication and advanced writing formats.",
      totalHours: "150 Hours Total",
      hoursBreakdown: "50 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        },
        {
          id: 5,
          type: "Weekend Intensive",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: ""
        }
      ]
    },
    {
      code: "C1.2",
      title: "Advanced II",
      subtitle: "C1.2 Level - Advanced+",
      description: "Finish the advanced track with exam-focused precision, fluent speaking, and strong comprehension.",
      totalHours: "150 Hours Total",
      hoursBreakdown: "50 Hours Grammar + 60 Hours Course Books + 40 Hours Exam Preparation",
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
          daily: "5 Hours",
          duration: "1 Month 15 Days",
          coverage: "Grammar Included"
        },
        {
          id: 4,
          type: "Super Fast-Track",
          daily: "Weekdays: 5 Hrs / Weekends: 3 Hrs",
          duration: "1 Month 1 Week",
          coverage: "Grammar Included"
        },
        {
          id: 5,
          type: "Weekend Intensive",
          daily: "3 Hours",
          duration: "4-5 Months",
          coverage: ""
        }
      ]
    }
  ];
  const programHighlights = [
    {
      icon: GraduationCap,
      title: "Certified Trainers",
      description: "Learn from Goethe-certified and native German-speaking trainers with years of teaching experience."
    },
    {
      icon: Video,
      title: "Live Online & Offline Classes",
      description: "Flexible learning with both classroom and live online sessions to suit your schedule and preferences."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Access curated study materials, practice tests, audio resources, and grammar workbooks for every level."
    },
    {
      icon: Target,
      title: "Exam-Focused Training",
      description: "Structured preparation for Goethe, telc, TestDaF, and ??SD exams with mock tests and feedback sessions."
    },
    {
      icon: MessageSquare,
      title: "Conversational Practice",
      description: "Regular speaking sessions, role-plays, and group discussions to build real-world communication confidence."
    },
    {
      icon: Award,
      title: "Course Completion Certificate",
      description: "Receive a recognized course completion certificate from Career Hub Technology upon finishing each level."
    }
  ];
  const experts = [
    {
      name: "Dr. Markus Weber",
      role: "Senior German Trainer",
      experience: "12+ Years Experience",
      specialization: "Goethe & TestDaF Specialist"
    },
    {
      name: "Sarah M??ller",
      role: "German Language Coach",
      experience: "8+ Years Experience",
      specialization: "Conversational German Expert"
    },
    {
      name: "Prof. Klaus Fischer",
      role: "Academic German Trainer",
      experience: "15+ Years Experience",
      specialization: "University Admission Prep"
    },
    {
      name: "Anna Schmidt",
      role: "German Language Instructor",
      experience: "10+ Years Experience",
      specialization: "Business German Specialist"
    }
  ];
  const examPrep = [
    {
      exam: "Goethe-Zertifikat",
      levels: "A1 - C2",
      description: "Globally recognized German proficiency certificate issued by the Goethe-Institut, accepted by universities and employers worldwide.",
      features: [
        "Full-length mock tests",
        "Section-wise strategy training",
        "Speaking & writing feedback",
        "Previous year paper analysis"
      ]
    },
    {
      exam: "telc Deutsch",
      levels: "A1 - C1",
      description: "Widely accepted European language certificate for visa, work permits, and university admissions across Germany and Europe.",
      features: [
        "Exam-pattern practice sessions",
        "Timed mock examinations",
        "Personalized score analysis",
        "Grammar & vocabulary drills"
      ]
    },
    {
      exam: "TestDaF",
      levels: "B2 - C1",
      description: "The Test Deutsch als Fremdsprache, required for admission to German universities. Tests reading, listening, writing, and speaking.",
      features: [
        "TDN 3-5 level preparation",
        "Academic writing workshops",
        "Listening comprehension drills",
        "Oral expression coaching"
      ]
    },
    {
      exam: "??SD Zertifikat",
      levels: "A1 - C2",
      description: "Austrian German language diploma recognized internationally for study, work, and immigration purposes in German-speaking countries.",
      features: [
        "Complete exam simulation",
        "Integrated skills training",
        "Real exam condition practice",
        "Expert result evaluation"
      ]
    }
  ];
  const batchSchedule = [
    {
      batch: "Morning Batch",
      time: "9:00 AM - 11:00 AM",
      days: "Mon - Fri",
      mode: "Online & Offline",
      level: "A1 - B1",
      startDate: "April 5, 2026",
      seats: "12 Seats Left"
    },
    {
      batch: "Afternoon Batch",
      time: "1:00 PM - 3:00 PM",
      days: "Mon - Fri",
      mode: "Online & Offline",
      level: "A1 - B2",
      startDate: "April 10, 2026",
      seats: "8 Seats Left"
    },
    {
      batch: "Evening Batch",
      time: "6:00 PM - 8:00 PM",
      days: "Mon - Fri",
      mode: "Online Only",
      level: "A1 - C1",
      startDate: "April 15, 2026",
      seats: "15 Seats Left"
    },
    {
      batch: "Weekend Batch",
      time: "10:00 AM - 1:00 PM",
      days: "Sat & Sun",
      mode: "Online & Offline",
      level: "A1 - B2",
      startDate: "April 12, 2026",
      seats: "10 Seats Left"
    }
  ];
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[580px] md:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1714733709596-936ffae7ba5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwQmVybGluJTIwbGFuZG1hcmslMjBlZHVjYXRpb258ZW58MXx8fHwxNzczMzg1ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="German language education"
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
              Learn German with Career Hub Technology
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-10">
              Master the German language from A1 to C1 with certified trainers,
              exam-focused curriculum, and flexible learning options. Your
              gateway to study, work, and live in Germany.
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
                View Levels
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Levels Available Section */
  }
      <section id="levels" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Course Levels
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                German Language Levels
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Select a level to view detailed batch information and curriculum
                breakdown
              </p>
            </div>

            {
    /* 7-Tab Navigation */
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
      /* Available Batches Table */
    }
                  <div className="bg-white border border-[#0A192F]/6 rounded-2xl overflow-hidden">
                    <div className="bg-[#0A192F] px-6 md:px-8 py-5 flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#FF6600]" />
                      <h3 className="text-white text-lg">Available Batches</h3>
                    </div>

                    {
      /* Desktop Table */
    }
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[#0A192F]/6">
                            <th className="text-left text-xs text-[#0A192F]/40 px-8 py-4 w-12">
                              #
                            </th>
                            <th className="text-left text-xs text-[#0A192F]/40 px-4 py-4">
                              Batch Type
                            </th>
                            <th className="text-left text-xs text-[#0A192F]/40 px-4 py-4">
                              Daily
                            </th>
                            <th className="text-left text-xs text-[#0A192F]/40 px-4 py-4">
                              Duration
                            </th>
                            <th className="text-left text-xs text-[#0A192F]/40 px-4 py-4 pr-8">
                              Coverage
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {current.batches.map((batch) => <tr
      key={batch.id}
      className="border-b border-[#0A192F]/4 last:border-b-0 hover:bg-[#FF6600]/3 transition-colors"
    >
                              <td className="px-8 py-4">
                                <span className="bg-[#FF6600]/10 text-[#FF6600] w-7 h-7 rounded-md flex items-center justify-center text-sm">
                                  {batch.id}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-sm text-[#0A192F]">
                                {batch.type}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                                {batch.daily}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                                {batch.duration}
                              </td>
                              <td className="px-4 py-4 pr-8">
                                {batch.coverage ? <span className="inline-flex items-center gap-1.5 text-sm text-[#0A192F]/60">
                                    <CheckCircle className="w-3.5 h-3.5 text-[#FF6600]" />
                                    {batch.coverage}
                                  </span> : <span className="text-sm text-[#0A192F]/30">
                                    -
                                  </span>}
                              </td>
                            </tr>)}
                        </tbody>
                      </table>
                    </div>

                    {
      /* Mobile Cards */
    }
                    <div className="md:hidden p-4 space-y-4">
                      {current.batches.map((batch) => <div
      key={batch.id}
      className="bg-[#FAF9F6] rounded-xl p-5 space-y-3"
    >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="bg-[#FF6600]/10 text-[#FF6600] w-7 h-7 rounded-md flex items-center justify-center text-sm">
                                {batch.id}
                              </span>
                              <span className="text-[#0A192F] text-sm">
                                {batch.type}
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-[#0A192F]/40 text-xs block mb-1">
                                Daily
                              </span>
                              <span className="text-[#0A192F]/70">
                                {batch.daily}
                              </span>
                            </div>
                            <div>
                              <span className="text-[#0A192F]/40 text-xs block mb-1">
                                Duration
                              </span>
                              <span className="text-[#0A192F]/70">
                                {batch.duration}
                              </span>
                            </div>
                          </div>
                          {batch.coverage && <div className="flex items-center gap-1.5 text-sm text-[#0A192F]/60">
                              <CheckCircle className="w-3.5 h-3.5 text-[#FF6600]" />
                              {batch.coverage}
                            </div>}
                        </div>)}
                    </div>

                    {
      /* Enroll CTA inside table card */
    }
                    <div className="border-t border-[#0A192F]/6 px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF9F6]">
                      <p className="text-sm text-[#0A192F]/50">
                        Choose a batch that fits your schedule and start
                        learning.
                      </p>
                    </div>
                  </div>
                </div>;
  })()}
          </div>
        </div>
      </section>

      {
    /* Program Highlights Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Program Highlights
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Why Learn German at Career Hub Technology?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Our German language program is designed to provide a complete,
                immersive learning experience from beginner to advanced levels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programHighlights.map((item, index) => {
    const Icon = item.icon;
    return <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#FF6600]/30 transition-all group"
    >
                    <div className="bg-[#FF6600]/20 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.description}</p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* Language Experts at CHT */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Supported by Expert German Trainers
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
    {
      icon: GraduationCap,
      title: "Experienced Trainers",
      description: "Certified trainers delivering structured training from A1 to C2 levels."
    },
    {
      icon: Video,
      title: "Live & Interactive",
      description: "Real-time communication and continuous interaction between trainers and students."
    },
    {
      icon: Shield,
      title: "Dedicated Support",
      description: "Student support team available from 8:30 AM to 12:00 midnight year-round."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Groups",
      description: "Direct connection with trainers for instant updates and doubt resolution."
    },
    {
      icon: Mic,
      title: "Speaking Sessions",
      description: "Regular practice sessions to build confidence and fluency."
    },
    {
      icon: FileText,
      title: "Exam Guidance",
      description: "End-to-end assistance for examination and admission processes."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Multiple batch timings from morning to late night for global students."
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Well-structured grammar notes and study material for all levels."
    }
  ].map((item, index) => {
    const Icon = item.icon;
    return <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#FF6600]/30 transition-all group"
    >
                    <div className="bg-[#FF6600]/20 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.description}</p>
                  </div>;
  })}
            </div>
          </div>
        </div>
      </section>

      {
    /* Exam Preparation Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Exam Preparation
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Specialized Exam Prep Batches
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Specialized batches for admission exams and certifications
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
    /* Goethe Exam Prep */
  }
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl overflow-hidden hover:border-[#FF6600]/30 transition-all group">
                <div className="bg-[#0A192F] px-6 py-5">
                  <h3 className="text-white text-lg">Goethe Exam Prep</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Schedule</span>
                    <span className="text-sm text-[#0A192F]">Sat-Sun, 2 Hours/Day</span>
                    <span className="block text-xs text-[#FF6600] mt-1">Weekend Batch</span>
                  </div>
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Subjects</span>
                    <span className="text-sm text-[#0A192F]">Maths & German Language</span>
                  </div>
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Duration</span>
                    <span className="text-sm text-[#0A192F]">2 Months</span>
                  </div>
                </div>
              </div>

              {
    /* Telc Preparation */
  }
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl overflow-hidden hover:border-[#FF6600]/30 transition-all group">
                <div className="bg-[#0A192F] px-6 py-5">
                  <h3 className="text-white text-lg">Telc Preparation</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Schedule</span>
                    <span className="text-sm text-[#0A192F]">Sat-Sun, 2 Hours/Day</span>
                    <span className="block text-xs text-[#FF6600] mt-1">Weekend Batch</span>
                  </div>
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Subjects</span>
                    <span className="text-sm text-[#0A192F]">English</span>
                  </div>
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Duration</span>
                    <span className="text-sm text-[#0A192F]">1.5 Months</span>
                  </div>
                </div>
              </div>

              {
    /* Free Counseling Seminar */
  }
              <div className="bg-white border border-[#0A192F]/6 rounded-2xl overflow-hidden hover:border-[#FF6600]/30 transition-all group">
                <div className="bg-[#0A192F] px-6 py-5">
                  <h3 className="text-white text-lg">Free Counseling Seminar</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Schedule</span>
                    <span className="text-sm text-[#0A192F]">Sat-Sun, 2 Hours/Day</span>
                    <span className="block text-xs text-[#FF6600] mt-1">Weekend Batch</span>
                  </div>
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Subjects</span>
                    <span className="text-sm text-[#0A192F]/30">-</span>
                  </div>
                  <div>
                    <span className="text-[#0A192F]/40 text-xs block mb-1">Duration</span>
                    <span className="text-sm text-[#0A192F]/30">-</span>
                  </div>
                </div>
              </div>
            </div>

            {
    /* CTA */
  }
            <div className="mt-12 text-center">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-7 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                Register for Exam Prep
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {
    /* Live Batch Schedule Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Schedule
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Online Live Batches
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Regular lectures start from the 1st week of every month - demo
                lectures run on weekends.
              </p>
            </div>

            <div className="bg-white border border-[#0A192F]/6 rounded-2xl overflow-hidden">
              {
    /* Desktop Table */
  }
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0A192F] border-b border-[#0A192F]">
                      <th className="text-left text-xs text-white/70 px-6 py-4">
                        Batch Type
                      </th>
                      <th className="text-left text-xs text-white/70 px-4 py-4">
                        Time Slot
                      </th>
                      <th className="text-left text-xs text-white/70 px-4 py-4">
                        Days
                      </th>
                      <th className="text-left text-xs text-white/70 px-4 py-4">
                        Daily Hours
                      </th>
                      <th className="text-left text-xs text-white/70 px-4 py-4">
                        Duration
                      </th>
                      <th className="text-left text-xs text-white/70 px-4 py-4 pr-6">
                        Coverage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
    /* Regular Batches Group Header */
  }
                    <tr className="bg-[#FF6600] border-b border-[#FF6600]">
                      <td
    colSpan={6}
    className="px-6 py-3 text-white text-sm"
  >
                        Regular Batches - Mon to Fri
                      </td>
                    </tr>
                    {[
    {
      time: "7:00 AM - 8:00 AM",
      days: "Mon - Fri",
      hours: "2 Hours / Day",
      duration: "50 Working Days",
      coverage: "Grammar + Course Books + Exam Prep"
    },
    {
      time: "8:00 AM - 9:00 AM",
      days: "Mon - Fri",
      hours: "2 Hours / Day",
      duration: "50 Working Days",
      coverage: "Grammar + Course Books + Exam Prep"
    },
    {
      time: "9:00 AM - 10:00 AM",
      days: "Mon - Fri",
      hours: "2 Hours / Day",
      duration: "50 Working Days",
      coverage: "Grammar + Course Books + Exam Prep"
    }
  ].map((batch, i) => <tr
    key={`regular-${i}`}
    className="border-b border-[#0A192F]/4 hover:bg-[#FF6600]/3 transition-colors"
  >
                        <td className="px-6 py-4 text-sm text-[#0A192F]">
                          Regular Batch
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.time}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.days}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.hours}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.duration}
                        </td>
                        <td className="px-4 py-4 pr-6">
                          <span className="inline-flex items-center gap-1.5 text-sm text-[#0A192F]/60">
                            <CheckCircle className="w-3.5 h-3.5 text-[#FF6600]" />
                            {batch.coverage}
                          </span>
                        </td>
                      </tr>)}

                    {
    /* Demo Batches Group Header */
  }
                    <tr className="bg-[#FF6600] border-b border-[#FF6600]">
                      <td
    colSpan={6}
    className="px-6 py-3 text-white text-sm"
  >
                        Demo Batches - Saturday & Sunday (Free)
                      </td>
                    </tr>
                    {[
    {
      time: "7:00 AM - 8:00 AM",
      days: "Sat & Sun",
      hours: "1 Hour / Session",
      duration: "Introductory",
      coverage: "Free of Charge"
    },
    {
      time: "8:00 AM - 9:00 AM",
      days: "Sat & Sun",
      hours: "1 Hour / Session",
      duration: "Introductory",
      coverage: "Free of Charge"
    },
    {
      time: "9:00 AM - 10:00 AM",
      days: "Sat & Sun",
      hours: "1 Hour / Session",
      duration: "Introductory",
      coverage: "Free of Charge"
    }
  ].map((batch, i) => <tr
    key={`demo-${i}`}
    className="border-b border-[#0A192F]/4 last:border-b-0 hover:bg-[#FF6600]/3 transition-colors"
  >
                        <td className="px-6 py-4 text-sm text-[#0A192F]">
                          Demo Lecture
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.time}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.days}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.hours}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#0A192F]/70">
                          {batch.duration}
                        </td>
                        <td className="px-4 py-4 pr-6">
                          <span className="bg-[#FF6600]/20 text-[#FF6600] px-3 py-1 rounded-full text-xs">
                            {batch.coverage}
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>

              {
    /* Mobile Cards */
  }
              <div className="lg:hidden p-4 space-y-3">
                {
    /* Regular Batches Header */
  }
                <div className="bg-[#FF6600] rounded-lg px-4 py-3">
                  <span className="text-white text-sm">
                    Regular Batches - Mon to Fri
                  </span>
                </div>
                {[
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM"
  ].map((time, i) => <div
    key={`mobile-regular-${i}`}
    className="bg-[#FAF9F6] rounded-xl p-5 space-y-3"
  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#0A192F] text-sm">Regular Batch</span>
                      <span className="text-[#0A192F]/50 text-xs">Mon - Fri</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Time Slot
                        </span>
                        <span className="text-[#0A192F]/70">{time}</span>
                      </div>
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Daily Hours
                        </span>
                        <span className="text-[#0A192F]/70">2 Hours / Day</span>
                      </div>
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Duration
                        </span>
                        <span className="text-[#0A192F]/70">50 Working Days</span>
                      </div>
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Coverage
                        </span>
                        <span className="text-[#0A192F]/70">
                          Grammar + Books + Exam
                        </span>
                      </div>
                    </div>
                  </div>)}

                {
    /* Demo Batches Header */
  }
                <div className="bg-[#FF6600] rounded-lg px-4 py-3 mt-2">
                  <span className="text-white text-sm">
                    Demo Batches - Saturday & Sunday (Free)
                  </span>
                </div>
                {[
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM"
  ].map((time, i) => <div
    key={`mobile-demo-${i}`}
    className="bg-[#FAF9F6] rounded-xl p-5 space-y-3"
  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#0A192F] text-sm">Demo Lecture</span>
                      <span className="bg-[#FF6600]/20 text-[#FF6600] px-3 py-1 rounded-full text-xs">
                        Free of Charge
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Time Slot
                        </span>
                        <span className="text-[#0A192F]/70">{time}</span>
                      </div>
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Daily Hours
                        </span>
                        <span className="text-[#0A192F]/70">
                          1 Hour / Session
                        </span>
                      </div>
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Days
                        </span>
                        <span className="text-[#0A192F]/70">Sat & Sun</span>
                      </div>
                      <div>
                        <span className="text-[#0A192F]/40 text-xs block mb-1">
                          Duration
                        </span>
                        <span className="text-[#0A192F]/70">Introductory</span>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>

            {
    /* Bottom CTA */
  }
            <div className="mt-16 bg-[#FF6600]/10 border border-[#FF6600]/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl text-white mb-4">
                Start Your German Language Journey Today
              </h3>
              <p className="text-white/60 max-w-xl mx-auto mb-8">
                Join thousands of students who have successfully learned German
                with Career Hub Technology. Enroll now and take the first step
                towards your future in Germany.
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
                  href={germanBrochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#FF6600] px-7 py-3.5 rounded-lg border border-white/20 hover:bg-white/90 transition-colors"
                >
                  Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Visa & Immigration Image Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Visa Assistance
              </span>
            </div>

            {
    /* Auto-Scrolling Gallery */
  }
            <div className="mt-12">
              <h3 className="text-2xl text-[#0A192F] mb-8 text-center">Gallery</h3>
              <div
    ref={scrollRef}
    className="flex gap-4 overflow-hidden"
    style={{
      scrollBehavior: "auto"
    }}
  >
                {
    /* Duplicate images for seamless loop */
  }
                {[...visaPhotos, ...visaPhotos].map((image, index) => <div
    key={index}
    className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg group"
  >
                    <img
    src={image}
    alt={`Visa gallery ${index % 12 + 1}`}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
                  </div>)}
              </div>
            </div>

            {
    /* Visa Process Steps */
  }
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
    { step: "01", title: "Language Certification", description: "Complete A1-B2 level German certification with our expert trainers." },
    { step: "02", title: "Document Preparation", description: "We help you prepare all required documents for your visa application." },
    { step: "03", title: "Visa Application", description: "End-to-end guidance for visa filing, appointment booking, and submission." },
    { step: "04", title: "Pre-Departure Support", description: "Travel briefing, accommodation guidance, and cultural orientation." }
  ].map((item) => <div
    key={item.step}
    className="bg-white border border-[#0A192F]/6 rounded-xl p-6 hover:border-[#FF6600]/30 transition-all group"
  >
                  <span className="text-3xl text-[#FF6600]/20 group-hover:text-[#FF6600]/40 transition-colors">
                    {item.step}
                  </span>
                  <h4 className="text-[#0A192F] mt-3 mb-2">{item.title}</h4>
                  <p className="text-sm text-[#0A192F]/60">{item.description}</p>
                </div>)}
            </div>

            {
    /* CTA */
  }
            <div className="mt-12 text-center">
              <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-7 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                Get Visa Assistance
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  GermanLanguage
};

