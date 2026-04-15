import { Users, BookOpen, Globe, Trophy, Briefcase, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router";
const reasons = [
  {
    icon: Users,
    title: "Expert Trainers & Mentors",
    description: "Learn from industry veterans with 10+ years of hands-on experience in their respective fields."
  },
  {
    icon: BookOpen,
    title: "Structured Learning Path",
    description: "Well-organized curriculum designed to take you from basics to industry-ready expertise."
  },
  {
    icon: Globe,
    title: "Strong Global Network",
    description: "Access to international job opportunities, universities, and business connections worldwide."
  },
  {
    icon: Trophy,
    title: "Proven 98% Success Rate",
    description: "Thousands of successful placements and admissions with a consistently high satisfaction rate."
  },
  {
    icon: Briefcase,
    title: "Industry-Relevant Curriculum",
    description: "Programs updated regularly to match the latest industry demands and employer expectations."
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description: "From enrollment to placement ??? we stay with you every step of your journey."
  }
];
function WhyChoose() {
  const navigate = useNavigate();
  return <section className="py-20 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-4">
        {
    /* Section Header */
  }
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-primary px-4 py-2 rounded-full mb-4 border border-primary/20 font-bold">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Career Hub Technology?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are more than a training institute - we are your career partner. With over 10 years of experience and 7,000+ success stories, we deliver results that matter.
          </p>
        </div>

        {
    /* Reasons Grid */
  }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
    const Icon = reason.icon;
    return <div
      key={index}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-primary/10 group"
    >
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>;
  })}
        </div>

        {
    /* Bottom CTA */
  }
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-primary/10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who trusted Career Hub Technology for their career development
          </p>
          <button
    onClick={() => navigate("/contact")}
    className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
  >
            Get Started Today
          </button>
        </div>
      </div>
    </section>;
}
export {
  WhyChoose
};