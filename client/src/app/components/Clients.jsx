import { Briefcase, Building2, GraduationCap, CheckCircle } from "lucide-react";
const segments = [
  {
    icon: Briefcase,
    title: "Jobseekers",
    description: "We support skilled professionals and aspiring candidates in accessing safe, verified, and rewarding international career opportunities.",
    services: [
      "CV Screening & Shortlisting",
      "Interview Preparation",
      "Visa Processing Support",
      "Post-Landing Assistance"
    ]
  },
  {
    icon: Building2,
    title: "Employers & Corporates",
    description: "We partner with organizations to deliver reliable global talent solutions, connecting businesses with qualified professionals.",
    services: [
      "Requirement Analysis",
      "Talent Sourcing",
      "Candidate Presentation",
      "Onboarding Support"
    ]
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "We guide students toward international education pathways, offering expert counseling to help them study at reputed institutions.",
    services: [
      "University Selection",
      "Application Assistance",
      "Student Visa Support",
      "Scholarship Guidance"
    ]
  }
];
function Clients() {
  return <section className="py-20 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-4">
        {
    /* Section Header */
  }
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-primary px-4 py-2 rounded-full mb-4 border border-primary/20 font-bold">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connecting Talent, Education, and Businesses with Global Opportunities
          </h2>
        </div>

        {
    /* Segments Grid */
  }
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
    const Icon = segment.icon;
    return <div
      key={index}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-primary/10 group"
    >
                {
      /* Icon */
    }
                <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {
      /* Title */
    }
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {segment.title}
                </h3>
                
                {
      /* Description */
    }
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {segment.description}
                </p>
                
                {
      /* Services List */
    }
                <ul className="space-y-3">
                  {segment.services.map((service, idx) => <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </li>)}
                </ul>
              </div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Clients
};