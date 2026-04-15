import { GraduationCap, Globe, BookOpen, ArrowRight, CheckCircle, FileText, DollarSign, Users, Award, Clock, Monitor, HeartPulse, Briefcase, Wrench, Scale, FlaskConical, UtensilsCrossed, Sprout, TrendingUp, Palette, School, ChevronDown, Star, Heart, GlobeLock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
import oversesImg from "../../assets/overses.jpg";
function OverseasEducation() {
  const destinations = [
    {
      country: "United Kingdom",
      highlights: [
        "Top-ranked Russell Group universities",
        "1-year post-study work visa",
        "Globally recognised degrees"
      ]
    },
    {
      country: "Canada",
      highlights: [
        "3-year PGWP work permit",
        "Pathway to PR & citizenship",
        "Affordable tuition fees"
      ]
    },
    {
      country: "Australia",
      highlights: [
        "World-class research institutions",
        "2-4 year graduate visa",
        "High quality of life"
      ]
    },
    {
      country: "Germany",
      highlights: [
        "Free / low-cost tuition",
        "Strong engineering programs",
        "EU work opportunities"
      ]
    },
    {
      country: "UAE / Dubai",
      highlights: [
        "Tax-free income after graduation",
        "Booming job market",
        "Close to home"
      ]
    }
  ];
  const pathways = [
    { icon: BookOpen, title: "Undergraduate Programs", description: "Bachelor's degree programs across diverse disciplines at top-ranked global universities.", duration: "3-4 Years" },
    { icon: GraduationCap, title: "Postgraduate Programs", description: "Master's and doctoral programs for specialized expertise and research opportunities.", duration: "1-2 Years" },
    { icon: FileText, title: "Diploma & Certificate", description: "Short-term professional courses for skill enhancement and career advancement.", duration: "6-12 Months" },
    { icon: Globe, title: "Language Programs", description: "Intensive language training programs to meet university admission requirements.", duration: "3-12 Months" }
  ];
  const studyFields = [
    {
      icon: Monitor,
      title: "Computer Science & Digital Technologies",
      description: "Advance your career in high-growth technology domains with globally in-demand specializations.",
      programs: ["Software Engineering", "Data Science & Business Analytics", "Cybersecurity & Ethical Hacking", "Artificial Intelligence & Machine Learning", "Cloud Computing & DevOps", "Game Design & Development", "Information Systems & Technology Management"]
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Life Sciences",
      description: "Pursue globally respected healthcare qualifications with strong academic and practical exposure.",
      programs: ["Nursing & Allied Health Sciences", "Medicine (MBBS / MD)", "Pharmacy & Pharmaceutical Sciences", "Physiotherapy & Rehabilitation Sciences", "Public Health & Healthcare Management", "Biomedical & Clinical Sciences", "Dentistry & Oral Health Sciences"]
    },
    {
      icon: Briefcase,
      title: "Business, Finance & Management",
      description: "Build leadership, strategic, and entrepreneurial capabilities for the global business ecosystem.",
      programs: ["MBA / Executive MBA Programs", "Finance, Accounting & Auditing", "Marketing & Digital Brand Strategy", "International Business & Trade", "Supply Chain & Logistics Management", "Entrepreneurship & Innovation", "Human Resource & Organizational Development"]
    },
    {
      icon: Wrench,
      title: "Engineering & Advanced Technologies",
      description: "Gain technical expertise through industry-aligned engineering programs with global recognition.",
      programs: ["Mechanical Engineering", "Civil & Structural Engineering", "Electrical & Electronics Engineering", "Chemical Engineering", "Industrial & Manufacturing Engineering", "Aerospace Engineering", "Robotics, Automation & Mechatronics"]
    },
    {
      icon: School,
      title: "Education & Teaching",
      description: "Prepare for impactful careers in education, leadership, and academic development across global institutions.",
      programs: ["Teaching & Modern Pedagogy", "Educational Leadership & Administration", "Special Education & Inclusive Learning", "Curriculum Design & Academic Planning", "TESOL / ESL (Teaching English Globally)", "Early Childhood Education"]
    },
    {
      icon: Palette,
      title: "Arts, Design & Creative Media",
      description: "Transform creativity into globally relevant careers across design, media, and visual communication industries.",
      programs: ["Graphic & Visual Communication Design", "Fine Arts & Contemporary Practices", "Fashion & Textile Design", "Digital Media, Animation & VFX", "Interior & Spatial Design", "Film, Television & Media Production"]
    },
    {
      icon: Users,
      title: "Social Sciences & Humanities",
      description: "Develop critical thinking, research, and analytical skills for careers in policy, media, and social development.",
      programs: ["Psychology & Behavioral Studies", "Sociology & Social Research", "Political Science & Governance", "International Relations & Global Affairs", "Media, Journalism & Communication", "History & Anthropology"]
    },
    {
      icon: Scale,
      title: "Law & Legal Studies",
      description: "Gain internationally recognized legal education with pathways into global law, policy, and justice systems.",
      programs: ["LLB / JD Programs", "International & Comparative Law", "Corporate & Commercial Law", "Human Rights & Public International Law", "Criminology & Criminal Justice"]
    },
    {
      icon: FlaskConical,
      title: "Natural & Pure Sciences",
      description: "Build strong scientific foundations with research-driven programs and global academic recognition.",
      programs: ["Physics & Applied Sciences", "Chemistry & Chemical Sciences", "Biology & Life Sciences", "Environmental & Earth Sciences", "Mathematics & Statistical Sciences", "Geology & Geoscience Studies"]
    },
    {
      icon: UtensilsCrossed,
      title: "Hospitality, Tourism & Events",
      description: "Enter one of the world's fastest-growing service industries with global exposure and hands-on learning.",
      programs: ["Hotel & Hospitality Management", "Tourism & Destination Management", "Event Planning & Event Operations", "Culinary Arts & Food Innovation"]
    },
    {
      icon: Sprout,
      title: "Agriculture, Food & Environmental Sciences",
      description: "Contribute to global sustainability, food security, and environmental management through advanced studies.",
      programs: ["Agricultural & Agribusiness Sciences", "Food Science & Technology", "Forestry & Environmental Management", "Sustainable Development & Climate Studies"]
    },
    {
      icon: TrendingUp,
      title: "Finance, Economics & Accounting",
      description: "Develop financial expertise for global markets, institutions, and emerging financial technologies.",
      programs: ["Economics & Applied Economics", "Investment Banking & Financial Markets", "Accounting & Auditing", "Financial Technology (FinTech)", "Risk Management & Regulatory Compliance"]
    }
  ];
  const journeySteps = [
    { step: 1, title: "Profile Evaluation", description: "We assess academic records, test scores, career objectives, and country preferences to define the right study path." },
    { step: 2, title: "University & Course Shortlisting", description: "Based on your profile, we recommend globally recognized universities and programs aligned with career outcomes." },
    { step: 3, title: "Application & Admission Management", description: "End-to-end handling of applications, statements, and submissions to secure timely and successful admissions." },
    { step: 4, title: "Documentation & Compliance", description: "Accurate preparation and verification of academic, financial, and personal documents as per university guidelines." },
    { step: 5, title: "Student Visa Processing", description: "Expert-led visa filing, documentation review, and interview preparation to ensure high approval success." },
    { step: 6, title: "Pre-Departure Orientation", description: "Comprehensive guidance on travel, accommodation, academics, culture, and compliance before departure." },
    { step: 7, title: "Career & Internship Support", description: "Assistance with internships, part-time work guidance, and long-term career planning during studies." }
  ];
  const fundingOptions = [
    { icon: Award, title: "Merit Scholarships", description: "Performance-based scholarships covering partial to full tuition fees at partner universities worldwide." },
    { icon: DollarSign, title: "Education Loans", description: "Assistance with securing education loans from leading banks with competitive interest rates and flexible repayment." },
    { icon: Users, title: "Government Grants", description: "Guidance on government-sponsored scholarships and grants like DAAD, Chevening, and Fulbright programs." },
    { icon: Clock, title: "Part-Time Work", description: "Information on legal work opportunities during studies to help support living expenses abroad." }
  ];
  const [showMore, setShowMore] = useState(false);
  const [openStep, setOpenStep] = useState(1);
  return <div className="bg-[#FAF9F6] pt-20">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYWJyb2FkJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NzMzMjY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Students studying abroad"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/75" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ lineHeight: 1.15 }}>
              Your Gateway to World-Class Education Abroad
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Expert guidance for studying at top universities across Europe, North America, Australia, and beyond. We make your international education dream a reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 transition-colors">
                Get Free Counseling
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#destinations" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/30">
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Study Abroad Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">Overseas Education</span>
                <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-6">
                  Shape Your Global Future Through International Education
                </h2>
                <p className="text-[#0A192F]/70 mb-6">
                  At Career Hub Technology, we empower students to access world-class education opportunities across leading global destinations. Our overseas education services simplify your international study journey - from selecting the right country, university, and course to managing applications, documentation, and visa processes with precision.
                </p>
                <p className="text-[#0A192F]/70">
                  We work closely with reputed universities worldwide, offering expert academic counseling, scholarship guidance, and end-to-end visa assistance - turning your educational goals into global success.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
    src={oversesImg}
    alt="International education"
    className="w-full rounded-2xl"
  />
                <div className="absolute -bottom-6 -left-6 bg-[#0A192F] text-white p-6 rounded-xl hidden md:block">
                  <p className="text-3xl text-[#FF6600]">98%</p>
                  <p className="text-sm text-white/80">Student Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Top Destinations Section */
  }
      <section id="destinations" className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">Top Destinations</span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Where Can You Study?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                We guide students to top institutions across the world's most sought-after study destinations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest, index) => <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#FF6600]/30 transition-all group"
  >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl">{dest.flag}</span>
                    <h3 className="text-xl text-white">{dest.country}</h3>
                  </div>
                  <ul className="space-y-3">
                    {dest.highlights.map((highlight, highlightIndex) => <li key={highlightIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">{highlight}</span>
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Study Pathways Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">Study Pathways</span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Choose Your Academic Path
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Whether you're starting your academic journey or advancing your career, we offer guidance across all levels of international education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {studyFields.map((field, index) => <div
    key={index}
    className="bg-white border border-[#FF6600]/10 rounded-xl p-8 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group"
  >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-[#FF6600]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <field.icon className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg text-[#0A192F]">{field.title}</h3>
                  </div>
                  <p className="text-sm text-[#0A192F]/60 mb-5">{field.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {field.programs.map((program, programIndex) => <li key={programIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#0A192F]/70">{program}</span>
                      </li>)}
                  </ul>
                  <Link
    to="/contact"
    className="inline-flex items-center gap-2 text-[#FF6600] text-sm hover:text-[#FF6600]/80 transition-colors"
  >
                    Enquire About This Program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Your Journey Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">Your Journey</span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Your Pathway to Global Education
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                A transparent 7-step framework designed to maximize admission success and ensure a smooth overseas transition.
              </p>
            </div>

            <div className="relative">
              {
    /* Accordion */
  }
              <div className="max-w-3xl mx-auto space-y-3">
                {journeySteps.map((item) => {
    const isOpen = openStep === item.step;
    return <div
      key={item.step}
      className={`border rounded-xl overflow-hidden transition-all ${isOpen ? "border-[#FF6600]/30 bg-[#FAF9F6]" : "border-[#FF6600]/10 bg-white"}`}
    >
                      <button
      onClick={() => setOpenStep(isOpen ? null : item.step)}
      className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#FAF9F6] transition-colors"
    >
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-[#FF6600] text-white" : "bg-[#FF6600]/10 text-[#FF6600]"}`}>
                          <span className="text-sm">{item.step}</span>
                        </div>
                        <h3 className="flex-1 text-[#0A192F]">{item.title}</h3>
                        <ChevronDown className={`w-5 h-5 text-[#FF6600] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div
      className="overflow-hidden transition-all"
      style={{
        maxHeight: isOpen ? "200px" : "0px",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 0.3s ease, opacity 0.2s ease"
      }}
    >
                        <div className="px-6 pb-5 pl-[4.25rem]">
                          <p className="text-sm text-[#0A192F]/60">{item.description}</p>
                        </div>
                      </div>
                    </div>;
  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Scholarships & Financial Aid Section */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {
    /* Section Header */
  }
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">Scholarships & Financial Aid</span>
              <h2 className="text-3xl md:text-4xl text-[#0A192F] mb-4">
                Smart Funding Solutions for Every Student
              </h2>
              <p className="text-[#0A192F]/60 max-w-3xl mx-auto">
                We believe cost should never be a barrier to quality education. At Career Hub Technology, we guide students through available scholarship programs, financial aid options, and funding strategies at top international institutions.
              </p>
            </div>

            {
    /* Description Block */
  }
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-[#0A192F]/70">
                Our counselors help you identify merit-based awards, need-based grants, and country-specific scholarships - reducing your study abroad investment significantly.
              </p>
            </div>

            {
    /* CTA Banner */
  }
            <div className="bg-[#0A192F] rounded-2xl p-8 md:p-10 mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FF6600]/20 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-1">Get Scholarship Guidance</h3>
                    <p className="text-white/50 text-sm">Free consultation ?? Personalized scholarship search ?? Expert-driven guidance</p>
                  </div>
                </div>
                <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-3 rounded-lg hover:bg-[#FF6600]/90 active:bg-[#FF6600]/80 transition-colors flex-shrink-0"
  >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {
    /* Scholarship Types Header */
  }
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl text-[#0A192F] mb-4">
                Scholarship Types We Help You Access
              </h3>
            </div>

            {
    /* Three Scholarship Type Cards */
  }
            <div className="grid md:grid-cols-3 gap-8">
              {
    /* Merit-Based */
  }
              <div className="border border-[#FF6600]/10 rounded-xl p-8 hover:border-[#FF6600]/30 transition-all group bg-white">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                  <Star className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg text-[#0A192F] mb-2">Merit-Based Scholarships</h4>
                <p className="text-sm text-[#0A192F]/60 mb-5">Rewarding academic excellence at top institutions worldwide.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Academic Excellence Awards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Dean's & Chancellor's Scholarships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Honors & Performance-Based Grants</span>
                  </li>
                </ul>
              </div>

              {
    /* Need-Based */
  }
              <div className="border border-[#FF6600]/10 rounded-xl p-8 hover:border-[#FF6600]/30 transition-all group bg-white">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                  <Heart className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg text-[#0A192F] mb-2">Need-Based Financial Support</h4>
                <p className="text-sm text-[#0A192F]/60 mb-5">Making quality international education accessible for all.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">University Financial Aid Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Grants & Tuition Waivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Work-Study Opportunities</span>
                  </li>
                </ul>
              </div>

              {
    /* International Student */
  }
              <div className="border border-[#FF6600]/10 rounded-xl p-8 hover:border-[#FF6600]/30 transition-all group bg-white">
                <div className="bg-[#FF6600]/10 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                  <GlobeLock className="w-6 h-6 text-[#FF6600] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg text-[#0A192F] mb-2">International Student Scholarships</h4>
                <p className="text-sm text-[#0A192F]/60 mb-5">Country and university specific funding for global learners.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">International Student Merit Awards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Cultural Diversity & Inclusion Scholarships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/70">Country-Specific Funding Programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  OverseasEducation
};
