import {
  Award,
  TrendingUp,
  BookOpen,
  Globe,
  Check,
  MapPin,
  ArrowRight,
  Mail,
  Briefcase,
  Users
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
function Careers() {
  const whyJoinCards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Leadership",
      description: "Work with a globally recognized training provider trusted by 7,000+ professionals."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Career advancement in training, services, and consulting across India and UAE."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Skill Development",
      description: "Continuous learning and professional certification support for all team members."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Train and guide professionals for careers worldwide - from Pune to Dubai and beyond."
    }
  ];
  const benefits = [
    "Competitive salary package",
    "Professional development opportunities",
    "Flexible work timings",
    "International exposure",
    "Health insurance coverage",
    "Career growth pathway",
    "Collaborative work environment",
    "Industry-standard training"
  ];
  const openings = [
    {
      title: "CAD Trainer - AutoCAD / Revit",
      department: "Training",
      location: "Dubai / Pune"
    },
    {
      title: "Structural Engineer - STAAD Pro",
      department: "Training",
      location: "Dubai / Pune"
    },
    {
      title: "BIM Specialist",
      department: "Training",
      location: "Dubai / Pune"
    },
    {
      title: "3D Visualization Trainer",
      department: "Training",
      location: "Dubai / Pune"
    },
    {
      title: "Career Counselor",
      department: "Placement & Guidance",
      location: "Dubai / Pune"
    },
    {
      title: "Visa & Immigration Specialist",
      department: "Services",
      location: "Dubai / Pune"
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1758691737207-e75821e080cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzMzODgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Careers at Career Hub Technology"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Careers at Career Hub Technology
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl mx-auto">
              Be part of a team that empowers professionals with world-class
              training and global career opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
    href="#openings"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
                View Openings <ArrowRight className="w-4 h-4" />
              </a>
              <a
    href="#why-join"
    className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
  >
                Why Join Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Join */
  }
      <section id="why-join" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Why Us
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Why Join Career Hub Technology?
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                A workplace where your passion for education and career
                development truly matters
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyJoinCards.map((card, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group"
  >
                  <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <span className="text-[#FF6600] group-hover:text-white transition-colors">
                      {card.icon}
                    </span>
                  </div>
                  <h3
    className="text-[#0A192F] text-lg mb-3"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#0A192F]/60">{card.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Benefits & Perks */
  }
      <section className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Perks
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Benefits & Perks
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                We take care of our people so they can take care of our students
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-xl p-5 flex items-start gap-3 hover:border-[#FF6600]/30 hover:shadow-md transition-all"
  >
                  <div className="bg-[#FF6600]/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#FF6600]" />
                  </div>
                  <span className="text-[#0A192F]/80 text-sm">{benefit}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Current Job Openings */
  }
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Open Roles
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Current Job Openings
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Explore opportunities across training, career guidance, and
                client services
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {openings.map((job, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-xl p-6 flex flex-col hover:border-[#FF6600]/30 hover:shadow-md transition-all group"
  >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="bg-[#FF6600]/10 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FF6600] transition-colors">
                      <Briefcase className="w-5 h-5 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3
    className="text-[#0A192F] text-lg mb-1"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="inline-flex items-center gap-1 text-[#FF6600]">
                          <Users className="w-3.5 h-3.5" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#0A192F]/50">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
  <Link
    to="/job-placements#application"
    className="inline-flex items-center justify-center gap-1.5 bg-[#0A192F] text-white px-3 py-1.5 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors text-sm mt-auto w-fit self-center"
  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Franchise CTA */
  }
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
    className="text-2xl md:text-3xl text-white mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Interested in Business Partnership?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Explore franchise opportunities and expand your business with
              Career Hub Technology.
            </p>
            <Link
    to="/franchise"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors"
  >
              Apply for Franchise <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {
    /* Resume CTA */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-10">
              <div className="bg-[#FF6600]/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-[#FF6600]" />
              </div>
              <h3
    className="text-2xl text-[#0A192F] mb-3"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Don't See a Matching Role?
              </h3>
              <p className="text-[#0A192F]/60 mb-2">
                Send us your resume and portfolio at
              </p>
              <a
    href="mailto:info@careerhubtechnology.com"
    className="text-[#FF6600] text-lg hover:underline transition-colors"
  >
                info@careerhubtechnology.com
              </a>
              <p className="text-[#0A192F]/50 text-sm mt-4">
                We're always looking for talented and passionate professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  Careers
};
