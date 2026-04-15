import { FileText, Search, MessageSquare, FileCheck, File, Plane, MapPin, HandHeart, Users, UserCheck, ClipboardCheck, Award, DollarSign, Briefcase, School, Send, Rocket } from "lucide-react";
import { useState } from "react";
const processes = {
  jobseekers: [
    {
      icon: FileText,
      title: "Submit Your CV",
      description: "Share your resume and personal details for initial profile assessment."
    },
    {
      icon: Search,
      title: "Screening & Shortlisting",
      description: "Profiles are reviewed and matched with suitable international opportunities."
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      description: "Expert guidance to help you perform confidently in employer interviews."
    },
    {
      icon: FileCheck,
      title: "Offer & Acceptance",
      description: "Assistance reviewing offers and making informed decisions."
    },
    {
      icon: File,
      title: "Documentation",
      description: "Preparation and verification of required employment and visa documents."
    },
    {
      icon: Plane,
      title: "Visa Processing",
      description: "Professional support for accurate and timely visa application processing."
    },
    {
      icon: MapPin,
      title: "Pre-Departure Guidance",
      description: "Orientation before your international relocation."
    },
    {
      icon: HandHeart,
      title: "Post-Landing Support",
      description: "Continued assistance to help you settle smoothly at your destination."
    }
  ],
  employers: [
    {
      icon: ClipboardCheck,
      title: "Requirement Analysis",
      description: "Understanding workforce needs, roles, and skill expectations."
    },
    {
      icon: Users,
      title: "Talent Sourcing",
      description: "Identifying qualified and suitable candidates from our global network."
    },
    {
      icon: UserCheck,
      title: "Candidate Presentation",
      description: "Sharing pre-screened profiles aligned with your hiring criteria."
    },
    {
      icon: MessageSquare,
      title: "Interview Facilitation",
      description: "Coordinating and managing interview schedules and processes."
    },
    {
      icon: Award,
      title: "Evaluation & Selection",
      description: "Supporting final assessments and candidate selection decisions."
    },
    {
      icon: DollarSign,
      title: "Offer Negotiation",
      description: "Assistance with offer terms and candidate expectations."
    },
    {
      icon: Briefcase,
      title: "Documentation & Onboarding",
      description: "Handling documentation and ensuring smooth candidate onboarding."
    }
  ],
  students: [
    {
      icon: Search,
      title: "Profile Evaluation",
      description: "Assessment of academic background, goals, and study preferences."
    },
    {
      icon: School,
      title: "University Selection",
      description: "Guidance in selecting institutions aligned with your profile."
    },
    {
      icon: Send,
      title: "Application & Admission",
      description: "Support with applications and securing confirmed admissions."
    },
    {
      icon: File,
      title: "Documentation",
      description: "Preparation of academic, financial, and personal documents."
    },
    {
      icon: Plane,
      title: "Visa Processing",
      description: "End-to-end assistance with student visa applications."
    },
    {
      icon: MapPin,
      title: "Pre-Departure Guidance",
      description: "Final preparation before beginning your international education journey."
    },
    {
      icon: Rocket,
      title: "Career Arrangements",
      description: "Guidance for internships, part-time work, and future career opportunities."
    }
  ]
};
const tabs = [
  { id: "jobseekers", label: "For Jobseekers" },
  { id: "employers", label: "For Employers" },
  { id: "students", label: "For Students" }
];
function Process() {
  const [activeTab, setActiveTab] = useState("jobseekers");
  const steps = processes[activeTab];
  return <section className="py-20 bg-gradient-to-br from-white to-accent">
      <div className="container mx-auto px-4">
        {
    /* Section Header */
  }
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-primary px-4 py-2 rounded-full mb-4 border border-primary/20 font-bold">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process designed to deliver results at every stage
          </p>
        </div>

        {
    /* Tabs */
  }
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => <button
    key={tab.id}
    onClick={() => setActiveTab(tab.id)}
    className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === tab.id ? "bg-primary text-white shadow-lg" : "bg-white text-foreground hover:bg-primary/10 border border-primary/20"}`}
  >
              {tab.label}
            </button>)}
        </div>

        {
    /* Process Steps */
  }
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
    const Icon = step.icon;
    return <div
      key={index}
      className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-primary/10"
    >
                {
      /* Step Number */
    }
                <div className="absolute -top-3 -left-3 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                <div className="bg-accent w-14 h-14 rounded-xl flex items-center justify-center mb-4 mt-2">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Process
};