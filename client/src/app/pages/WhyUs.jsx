import { Briefcase, Building2, CheckCircle, Globe2, GraduationCap, Heart, Lightbulb, Settings, Shield, Target, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function WhyUs() {
  const [activeBenefitTab, setActiveBenefitTab] = useState("corporates");
  const navigate = useNavigate();
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative text-white py-32">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwaGFuZHNoYWtlJTIwdHJ1c3QlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzczNTg1Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Why Choose Career Hub Technology"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose<br />Career Hub Technology?
            </h1>
            <p className="text-xl text-white/90">
              Experts in Global Careers, Education & Mobility Solutions
            </p>
          </div>
        </div>
      </section>

      {
    /* Introduction Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Career Hub Technology, we go beyond consulting - we act as a <strong>long-term global partner</strong> for careers, education, and business mobility. Built on structured processes and real cross-border expertise, we support professionals, students, families, and organisations in achieving international goals with clarity, compliance, and confidence.
            </p>
          </div>
        </div>
      </section>

      {
    /* Who We Serve */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
                Our Clients
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Who We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Tailored solutions for every type of global journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">For Corporates</h3>
                <p className="text-muted-foreground">
                  We deliver reliable overseas recruitment, staffing, and mobility solutions that help organisations build compliant, high-performing global teams efficiently.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">For Professionals & Jobseekers</h3>
                <p className="text-muted-foreground">
                  We support your international career journey through profile evaluation, job matching, interview preparation, visa assistance, and smooth relocation guidance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">For Students & Families</h3>
                <p className="text-muted-foreground">
                  We provide end-to-end study abroad and migration support - covering admissions, visas, documentation, and settlement planning for a confident global transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Track Record Stats */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
                Our Track Record
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Measurable Results. Trusted Global Impact.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Since our establishment, Career Hub Technology has consistently delivered reliable outcomes across careers, education, recruitment, and mobility - earning long-term trust from clients and partners worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-accent p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground font-semibold">Years of Expertise</div>
              </div>
              <div className="bg-accent p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground font-semibold">Successful Outcomes</div>
              </div>
              <div className="bg-accent p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground font-semibold">Countries Served</div>
              </div>
              <div className="bg-accent p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">120+</div>
                <div className="text-muted-foreground font-semibold">Global Partners</div>
              </div>
              <div className="bg-accent p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground font-semibold">Client Satisfaction</div>
              </div>
              <div className="bg-accent p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">96%</div>
                <div className="text-muted-foreground font-semibold">Visa Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Benefits to You */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Benefits to You
              </h2>
              <p className="text-xl text-muted-foreground">
                Practical advantages designed to support your global career, education, and business objectives
              </p>
            </div>

            {
    /* Tab Navigation */
  }
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
    onClick={() => setActiveBenefitTab("corporates")}
    className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeBenefitTab === "corporates" ? "bg-primary text-white shadow-lg" : "bg-white text-foreground hover:bg-primary/10"}`}
  >
                For Corporates
              </button>
              <button
    onClick={() => setActiveBenefitTab("professionals")}
    className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeBenefitTab === "professionals" ? "bg-primary text-white shadow-lg" : "bg-white text-foreground hover:bg-primary/10"}`}
  >
                For Professionals
              </button>
              <button
    onClick={() => setActiveBenefitTab("students")}
    className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeBenefitTab === "students" ? "bg-primary text-white shadow-lg" : "bg-white text-foreground hover:bg-primary/10"}`}
  >
                For Students
              </button>
            </div>

            {
    /* Tab Content */
  }
            {activeBenefitTab === "corporates" && <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Strategic Workforce Solutions</h3>
                  <p className="text-muted-foreground">
                    Customized overseas recruitment and staffing aligned with your operational goals and compliance requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">End-to-End Mobility & Documentation Support</h3>
                  <p className="text-muted-foreground">
                    Complete handling of visa, immigration, and regulatory processes with accuracy and efficiency.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Access to Global Talent Networks</h3>
                  <p className="text-muted-foreground">
                    Qualified professionals sourced from multiple international markets and industry sectors.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Technology-Driven Hiring Processes</h3>
                  <p className="text-muted-foreground">
                    Streamlined recruitment using modern tools for faster, smarter talent acquisition.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Ethical & Transparent Engagement</h3>
                  <p className="text-muted-foreground">
                    Clear communication, honest practices, and compliance-focused operations at every stage.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Post-Placement Workforce Support</h3>
                  <p className="text-muted-foreground">
                    Ongoing assistance to ensure workforce stability and long-term performance.
                  </p>
                </div>
              </div>}

            {activeBenefitTab === "professionals" && <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Personalized Career Consultation</h3>
                  <p className="text-muted-foreground">
                    One-on-one guidance aligned with your skills, experience, and international career goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Global-Ready Profile Development</h3>
                  <p className="text-muted-foreground">
                    Resume enhancement and profile positioning tailored for overseas employers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Interview Preparation & Coaching</h3>
                  <p className="text-muted-foreground">
                    Structured interview training to build confidence and improve selection outcomes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">International Job Search Support</h3>
                  <p className="text-muted-foreground">
                    Access to relevant global opportunities through trusted employer networks.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Visa & Immigration Assistance</h3>
                  <p className="text-muted-foreground">
                    Expert guidance across documentation, applications, and approval processes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Relocation & Pre-Departure Support</h3>
                  <p className="text-muted-foreground">
                    Practical assistance for travel planning, accommodation, and settling abroad.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Continued Support After Placement</h3>
                  <p className="text-muted-foreground">
                    Dedicated support throughout your overseas career journey.
                  </p>
                </div>
              </div>}

            {activeBenefitTab === "students" && <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Academic & Career Pathway Guidance</h3>
                  <p className="text-muted-foreground">
                    Strategic advice to choose the right course, country, and institution.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">University Shortlisting & Admissions Support</h3>
                  <p className="text-muted-foreground">
                    Step-by-step assistance from applications to confirmed offers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Scholarship & Financial Guidance</h3>
                  <p className="text-muted-foreground">
                    Support in identifying funding options and education financing opportunities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Student Visa & Documentation Support</h3>
                  <p className="text-muted-foreground">
                    Accurate and compliant handling of student visa processes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Pre-Departure & Settlement Assistance</h3>
                  <p className="text-muted-foreground">
                    Guidance on travel, accommodation, and adapting to international life.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Post-Study Career Pathways</h3>
                  <p className="text-muted-foreground">
                    Advisory on work permits, career opportunities, and long-term mobility options.
                  </p>
                </div>
              </div>}
          </div>
        </div>
      </section>

      {
    /* Our Differentiators */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Differentiators
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Career Hub Technology, our approach combines expertise, ethics, and execution to deliver meaningful global outcomes for careers, education, and business mobility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">CLIENT-CENTRIC SOLUTIONS</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized strategies aligned with individual goals, business objectives, and region-specific requirements.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">GLOBAL INDUSTRY EXPERTISE</h3>
                <p className="text-sm text-muted-foreground">
                  In-depth understanding of international markets, recruitment trends, education systems, and mobility regulations.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">STRUCTURED EVALUATION PROCESSES</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous screening and verification ensuring quality, credibility, and dependable results.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">PARTNERSHIP-DRIVEN ENGAGEMENT</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term relationships built on trust, transparency, and shared global success.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">TECHNOLOGY-ENABLED OPERATIONS</h3>
                <p className="text-sm text-muted-foreground">
                  Smart tools and streamlined systems for improved efficiency, accuracy, and faster outcomes.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">INCLUSIVE GLOBAL OPPORTUNITIES</h3>
                <p className="text-sm text-muted-foreground">
                  Ethical practices promoting equal access across cultures, regions, and professional backgrounds.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">ADAPTIVE SERVICE MODELS</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible solutions designed to evolve with changing needs and global compliance standards.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">CONTINUED POST-ENGAGEMENT SUPPORT</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing assistance beyond placement, admission, or approvals to ensure sustained success.
                </p>
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
              Ready to Choose the Right Partner?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let Career Hub Technology guide you to the right global opportunity - with clarity, compliance, and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
    className="bg-[#FF6600] text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 active:bg-green-700 transition-colors"
    onClick={() => navigate("/contact")}
  >
                Get Free Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
    WhyUs
};
