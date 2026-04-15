import { Briefcase, Plane, GraduationCap, Building2, Award, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router";
const services = [
  {
    id: "career-guidance",
    icon: Briefcase,
    title: "Career Guidance",
    description: "Expert career counseling and mentorship to help you find the right direction and achieve your professional goals.",
    image: "https://images.unsplash.com/photo-1771240730126-594a8ab66be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwbWVudG9yc2hpcCUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzM1ODI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "visa-processing",
    icon: Plane,
    title: "Visa Processing",
    description: "End-to-end visa application support with expert documentation guidance for work, study, and travel visas.",
    image: "https://images.unsplash.com/photo-1760581190058-b492570add9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGJvYXJkaW5nJTIwcGFzcyUyMHRyYXZlbCUyMGludGVybmF0aW9uYWx8ZW58MXx8fHwxNzczNTgyODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "overseas-education",
    icon: GraduationCap,
    title: "Overseas Education",
    description: "Comprehensive guidance for studying abroad ??? from university selection to admission, scholarships, and student visas.",
    image: "https://images.unsplash.com/photo-1759684546919-5124743bc31f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBlZHVjYXRpb24lMjBhYnJvYWR8ZW58MXx8fHwxNzczNTgyODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "business-setup",
    icon: Building2,
    title: "Business Setup in Dubai",
    description: "Full-service support for establishing your business in Dubai ??? Free Zone or Mainland company formation.",
    image: "https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1c2luZXNzJTIwc2t5bGluZSUyMG1vZGVybiUyMG9mZmljZSUyMHRvd2VyfGVufDF8fHx8MTc3MzU4Mjg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "training-certification",
    icon: Award,
    title: "Training & Certification",
    description: "Industry-recognized certification programs in CAD, IT, languages, and more ??? designed for career advancement.",
    image: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0aW9uJTIwdHJhaW5pbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzczNTgyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "passport-services",
    icon: FileText,
    title: "Passport Services",
    description: "Quick and reliable passport assistance ??? new applications, renewals, and related documentation services.",
    image: "https://images.unsplash.com/photo-1577345848762-8b7cab61de4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMGFwcGxpY2F0aW9uJTIwZG9jdW1lbnQlMjBnb3Zlcm5tZW50JTIwc2VydmljZXxlbnwxfHx8fDE3NzM1ODI4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];
function Services() {
  return <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {
    /* Section Header */
  }
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4 font-bold">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Career & Global Mobility Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your education, career, and international aspirations
          </p>
        </div>

        {
    /* Services Grid */
  }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
    const Icon = service.icon;
    return <div
      key={service.id}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
    >
                {
      /* Image */
    }
                <div className="relative h-48 overflow-hidden">
                  <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {
      /* Content */
    }
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-2 group-hover:gap-3">
                    Learn More <ArrowRight className="w-4 h-4 transition-all" />
                  </button>
                </div>
              </div>;
  })}
        </div>

        {
    /* View All Services Button */
  }
        <div className="text-center">
          <Link to="/visa-processing" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-bold flex items-center gap-3 mx-auto w-fit">
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>;
}
export {
  Services
};
