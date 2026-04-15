import { ArrowRight, Briefcase, Building, CheckCircle, FileText, Globe2, GraduationCap, Plane } from "lucide-react";
import { useNavigate } from "react-router";
function Services() {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  const services = [
    {
      icon: FileText,
      title: "Passport Services",
      description: "Complete assistance with passport applications, renewals, and documentation for international travel.",
      features: [
        "New passport application support",
        "Passport renewal assistance",
        "Document verification",
        "Fast-track processing guidance"
      ]
    },
    {
      icon: GraduationCap,
      title: "Overseas Education",
      description: "Expert guidance for studying abroad in top universities across Europe, Middle East, and beyond.",
      features: [
        "University selection & admission",
        "Course guidance & counseling",
        "Scholarship assistance",
        "Pre-departure orientation"
      ]
    },
    {
      icon: Plane,
      title: "Visa Processing",
      description: "Comprehensive visa services for work, study, and immigration to various countries worldwide.",
      features: [
        "Work visa & employment permits",
        "Student visa processing",
        "Family visa assistance",
        "Visa extension & renewal"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Professional career counseling and overseas job placement services for skilled professionals.",
      features: [
        "Resume building & optimization",
        "Interview preparation",
        "Job matching & placement",
        "Career roadmap planning"
      ]
    },
    {
      icon: Building,
      title: "Main Business Setup (UAE)",
      description: "Complete support for establishing mainland companies in the United Arab Emirates.",
      features: [
        "Company registration & licensing",
        "Trade name reservation",
        "Commercial space solutions",
        "PRO services & documentation"
      ]
    },
    {
      icon: Globe2,
      title: "Free Zone Setup (UAE)",
      description: "Streamlined business setup in UAE Free Zones with 100% ownership and tax benefits.",
      features: [
        "Free zone company formation",
        "License procurement",
        "Visa allocation support",
        "Office space arrangement"
      ]
    }
  ];
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Career & Mobility Solutions
            </h1>
            <p className="text-xl text-white/90">
              From education to immigration, from training to placement - we've got you covered
            </p>
          </div>
        </div>
      </section>

      {
    /* Services Grid */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => <div key={index} className="bg-white border-2 border-accent hover:border-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Choose Our Services */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry-leading expertise and commitment to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Expert Consultation</h3>
                <p className="text-muted-foreground">
                  Our experienced team provides personalized guidance tailored to your specific needs and goals. We understand that every journey is unique.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">End-to-End Support</h3>
                <p className="text-muted-foreground">
                  From initial consultation to final placement, we handle every aspect of your journey with professionalism and care.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Transparent Process</h3>
                <p className="text-muted-foreground">
                  No hidden fees, no surprises. We believe in complete transparency and keep you informed at every step of the process.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  With 98% success rate and 7,000+ satisfied clients, our results speak for themselves. Your success is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Process Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple, transparent, and efficient
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">Free initial assessment and guidance</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">Prepare and verify all required documents</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Processing</h3>
                <p className="text-sm text-muted-foreground">Handle applications and follow-ups</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Success</h3>
                <p className="text-sm text-muted-foreground">Achieve your goals with our support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* CTA Section */
  }
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a free consultation with our experts today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={goToContact} className="bg-[#FF6600] text-white px-8 py-4 rounded-lg font-bold hover:!bg-green-600 active:!bg-green-700 transition-colors flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
    Services
};
