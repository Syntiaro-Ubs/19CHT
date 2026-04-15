import { Users, Plane, UserCheck, GraduationCap, FileText, HardHat, Heart, UtensilsCrossed, Factory, Truck, Cpu, ShoppingCart } from "lucide-react";
const industries = [
  {
    icon: Users,
    title: "Unskilled Workers",
    color: "bg-accent text-primary"
  },
  {
    icon: Plane,
    title: "Travels & Tourism",
    color: "bg-accent text-primary"
  },
  {
    icon: UserCheck,
    title: "Recruitment and Staffing",
    color: "bg-accent text-primary"
  },
  {
    icon: GraduationCap,
    title: "Education and Training",
    color: "bg-accent text-primary"
  },
  {
    icon: FileText,
    title: "Immigration and Visa",
    color: "bg-accent text-primary"
  },
  {
    icon: HardHat,
    title: "Construction",
    color: "bg-accent text-primary"
  },
  {
    icon: Heart,
    title: "Healthcare",
    color: "bg-accent text-primary"
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    color: "bg-accent text-primary"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    color: "bg-accent text-primary"
  },
  {
    icon: Truck,
    title: "Logistics",
    color: "bg-accent text-primary"
  },
  {
    icon: Cpu,
    title: "IT and Telecom",
    color: "bg-accent text-primary"
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    color: "bg-accent text-primary"
  }
];
function Industries() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {
    /* Section Header */
  }
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Diverse Industry Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering skilled talent and workforce solutions across diverse industry sectors
          </p>
        </div>

        {
    /* Industries Grid */
  }
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
    const Icon = industry.icon;
    return <div
      key={index}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-primary/10 group text-center"
    >
                <div className={`${industry.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground">
                  {industry.title}
                </h3>
              </div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Industries
};