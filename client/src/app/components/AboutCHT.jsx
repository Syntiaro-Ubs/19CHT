import { Target, Users, Award, Clock, Globe, BookOpen, Briefcase, MapPin, Phone, Mail, ArrowRight, CheckCircle, Building2, GraduationCap, HeartHandshake, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
function AboutCHT() {
  return <div className="bg-white">
      {
    /* Hero Section */
  }
      <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Career Hub Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Empowering Careers, Transforming Lives, Building Futures Since 2013
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="font-bold text-2xl">10+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="font-bold text-2xl">5000+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="font-bold text-2xl">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Info About Company */
  }
      <section id="about" className="py-20 bg-white">
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
                Career Hub Technology is Dubai's premier training and career development institute, dedicated to empowering individuals with industry-relevant skills and global opportunities.
              </p>
              <p className="text-muted-foreground mb-6">
                With over a decade of experience, we've helped thousands of students and professionals achieve their career dreams through our comprehensive CAD training programs, foreign language courses, and complete visa assistance services.
              </p>
              <p className="text-muted-foreground mb-8">
                Our expert instructors, state-of-the-art facilities, and industry partnerships ensure you receive the highest quality education and support. We don't just train you; we prepare you for real-world success in the global marketplace.
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
    src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzMyMDQ4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Built on Strong Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission, vision, and core values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {
    /* Mission */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower individuals with world-class training and global career opportunities, transforming lives through education, skill development, and comprehensive support services.
              </p>
            </div>

            {
    /* Vision */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading global platform for career development, recognized for excellence in technical training, language education, and international career placement services.
              </p>
            </div>

            {
    /* Values */
  }
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Excellence in Education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Student Success First</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Integrity & Trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Innovation & Growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {
    /* Our Services Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your career development and global mobility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
    /* CAD Training */
  }
            <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">CAD Training</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Industry-leading courses in Mechanical, Electrical, Civil, and Architecture CAD software
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>??? CATIA, CREO, SolidWorks</li>
                <li>??? AutoCAD, Revit</li>
                <li>??? Staad Pro, Primavera</li>
              </ul>
            </div>

            {
    /* Foreign Languages */
  }
            <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Foreign Languages</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Master international languages for global career opportunities
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>??? German Language</li>
                <li>??? Japanese Language</li>
                <li>??? IELTS Preparation</li>
              </ul>
            </div>

            {
    /* Visa Assistance */
  }
            <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Visa Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete support for international visa processing and documentation
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>??? Student Visa</li>
                <li>??? Work Visa</li>
                <li>??? Passport Services</li>
              </ul>
            </div>

            {
    /* Career Guidance */
  }
            <div className="bg-accent p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Career Guidance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert counseling and placement support for your dream career
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>??? Career Counseling</li>
                <li>??? Job Placement</li>
                <li>??? Interview Preparation</li>
              </ul>
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
              Our Valued Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve diverse segments of learners and professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {
    /* Students & Graduates */
  }
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Students & Graduates</h3>
              <p className="text-muted-foreground">
                Fresh graduates looking to enhance their skills and secure their first career opportunity in global markets
              </p>
            </div>

            {
    /* Working Professionals */
  }
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Working Professionals</h3>
              <p className="text-muted-foreground">
                Experienced professionals seeking career advancement, skill upgradation, or international job opportunities
              </p>
            </div>

            {
    /* Corporate Teams */
  }
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Corporate Teams</h3>
              <p className="text-muted-foreground">
                Organizations looking to upskill their workforce with specialized training programs and certification courses
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {
    /* Left - Info */
  }
            <div>
              <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Find Your Way to Success
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Located in the heart of Pune, our modern training facility is easily accessible and equipped with state-of-the-art technology to enhance your learning experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Our Address</h4>
                    <p className="text-muted-foreground">
                      Sr No 133/1, Near Gurudwara, Akurdi<br />
                      Pune ??? 411035, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+91 88882 14460</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">info@careerhubtechnology.com</p>
                  </div>
                </div>
              </div>
            </div>

            {
    /* Right - Image */
  }
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
    src="https://images.unsplash.com/photo-1668864840122-8bdaf2a87e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzJTIwZGlyZWN0aW9uJTIwbmF2aWdhdGlvbnxlbnwxfHx8fDE3NzMzMTc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Direction to Career Hub Technology"
    className="w-full h-96 object-cover"
  />
            </div>
          </div>
        </div>
      </section>

      {
    /* Ready to Start Your Journey */
  }
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful professionals who transformed their careers with Career Hub Technology. Your global future starts here.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white transition-colors flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white">
                Explore Courses
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2">10+ Years</h4>
                <p className="text-white/80">Industry Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2">5000+</h4>
                <p className="text-white/80">Students Trained</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Globe className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2">98%</h4>
                <p className="text-white/80">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  AboutCHT
};
