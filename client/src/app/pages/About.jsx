import { Target, Users, Award, Clock, Globe, Briefcase, Building2, GraduationCap, Compass, UserPlus, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function About() {
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative text-white py-32">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1721108452727-7c6f05e7fc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwcm9mZXNzaW9uYWwlMjBncm93dGglMjBjb3Jwb3JhdGUlMjBza3lsaW5lfGVufDF8fHx8MTc3MzU4MzY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="About Career Hub Technology"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Career Hub Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Empowering Careers, Transforming Lives, Building Futures Since 2013
            </p>
          </div>
        </div>
      </section>

      {
    /* Info About Company */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {
    /* Left Content */
  }
            <div>
              <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leading Career Development Institute
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Career Hub Technology is a global career and mobility consultancy offering overseas recruitment, abroad job placement, immigration support, and study abroad guidance. We help individuals, students, and organizations navigate international opportunities with clarity, compliance, and confidence.
              </p>
              <p className="text-muted-foreground mb-6">
                With over a decade of experience, we've helped thousands of students and professionals achieve their career dreams through our comprehensive recruitment services, immigration assistance, and complete visa support services.
              </p>
              <p className="text-muted-foreground mb-8">
                Our expert team, global partnerships, and industry expertise ensure you receive the highest quality guidance and support. We don't just help you apply; we prepare you for real-world success in the global marketplace.
              </p>

              {
    /* Key Points */
  }
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Mission Driven</h4>
                    <p className="text-sm text-muted-foreground">Transform careers globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Industry professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Certified</h4>
                    <p className="text-sm text-muted-foreground">International standards</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">10+ Years</h4>
                    <p className="text-sm text-muted-foreground">Proven experience</p>
                  </div>
                </div>
              </div>
            </div>

            {
    /* Right Image */
  }
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
    src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3MzU3NDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Career Hub Technology Office"
    className="w-full h-96 object-cover"
  />
              </div>

              {
    /* Stats Box */
  }
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold mb-1">5000+</div>
                <div className="text-sm opacity-90">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Our Foundation Section */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-primary px-4 py-2 rounded-full mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built on Trust & Transparency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars that define everything we do at Career Hub Technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
    /* Who We Are */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Who We Are</h3>
              <p className="text-muted-foreground">
                Career Hub Technology connects talent, education, and opportunity through overseas recruitment, immigration support, abroad jobs, and international education guidance worldwide.
              </p>
            </div>

            {
    /* Our Journey */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Journey</h3>
              <p className="text-muted-foreground">
                Founded to create transparent global pathways, Career Hub Technology evolved from real cross-border experience, addressing challenges in international hiring, migration, and education with credibility and structured processes.
              </p>
            </div>

            {
    /* Our Purpose */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h3>
              <p className="text-muted-foreground">
                We simplify complex global transitions, offering ethical guidance, clear processes, and informed decisions that reduce risk and build confidence for careers, education, and business.
              </p>
            </div>

            {
    /* Global Footprint */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Global Footprint</h3>
              <p className="text-muted-foreground">
                With an expanding international partner network, Career Hub Technology delivers region-specific guidance and global opportunities, supporting sustainable career, education, and business growth across multiple countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* Our Services Section */
  }
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Global Career & Mobility Solutions
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive global career and mobility solutions under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
    /* Overseas Recruitment */
  }
            <div className="bg-white/10 p-6 rounded-xl hover:shadow-lg transition-shadow border border-white/10">
              <div className="bg-[#FF6600] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Overseas Recruitment</h3>
              <p className="text-sm text-white/70">
                End-to-end international hiring solutions ensuring compliant, ethical, and reliable recruitment across global markets.
              </p>
            </div>

            {
    /* Staffing Services */
  }
            <div className="bg-white/10 p-6 rounded-xl hover:shadow-lg transition-shadow border border-white/10">
              <div className="bg-[#FF6600] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Staffing Services</h3>
              <p className="text-sm text-white/70">
                Flexible contract, temporary, and permanent staffing solutions aligned with your business goals.
              </p>
            </div>

            {
    /* Study in Dubai */
  }
            <div className="bg-white/10 p-6 rounded-xl hover:shadow-lg transition-shadow border border-white/10">
              <div className="bg-[#FF6600] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Study in Dubai</h3>
              <p className="text-sm text-white/70">
                Complete study-in-Dubai guidance including course selection, admissions and documentation.
              </p>
            </div>

            {
    /* Visa & Immigration */
  }
            <div className="bg-white/10 p-6 rounded-xl hover:shadow-lg transition-shadow border border-white/10">
              <div className="bg-[#FF6600] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Visa & Immigration</h3>
              <p className="text-sm text-white/70">
                Transparent visa and immigration support with accurate filing, documentation, and interview preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* Our Clients Section */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-primary px-4 py-2 rounded-full mb-4">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Whether you're an individual or an organisation, we have a solution built for you
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {
    /* Jobseekers */
  }
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Jobseekers</h3>
              <p className="text-muted-foreground">
                We support professionals and candidates in accessing safe, verified, and rewarding international career opportunities.
              </p>
            </div>

            {
    /* Employers & Corporates */
  }
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Employers & Corporates</h3>
              <p className="text-muted-foreground">
                We partner with organizations to deliver reliable global talent solutions tailored to business needs.
              </p>
            </div>

            {
    /* Students */
  }
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Students</h3>
              <p className="text-muted-foreground">
                We guide students toward international education pathways, offering expert counseling and application support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* Direction Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4">
              Direction
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {
    /* Our Vision */
  }
            <div className="bg-[#FAF9F6] p-10 rounded-2xl shadow-xl border border-gray-200">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be a globally trusted career and mobility partner, enabling individuals and organizations to access international opportunities through transparent, ethical, and future-ready solutions.
              </p>
            </div>

            {
    /* Our Mission */
  }
            <div className="bg-[#FAF9F6] p-10 rounded-2xl shadow-xl border border-gray-200">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver structured global recruitment, education, immigration, and mobility services by combining industry expertise, compliance-driven processes, and personalized guidance that ensures long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  About
};
