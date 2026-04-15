import { Users, Award, Globe, Briefcase, GraduationCap, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import founderPhoto from "../../assets/Founder-new.jpeg";
import managingDirectorPhoto from "../../assets/MD.jpeg";
import ceoPhoto from "../../assets/ChiefEOfficer.jpeg";
import hrAdminPhoto from "../../assets/HR&Admin.jpeg";
import academicHeadPimpriPhoto from "../../assets/AcedemicHead.jpeg";
import academicHeadDubaiPhoto from "../../assets/AcedemicHead3.jpg";
import academicHeadAkurdiPhoto from "../../assets/AcedemicHead2.jpg";
import trainingPlacementPhoto from "../../assets/TrainingPlacement.jpeg";
import admissionConsultantPhoto from "../../assets/AdmissionCon.jpeg";
function Teams() {
  const teamMembers = [
    {
      name: "Mr. Kailash Ravsaheb Gade",
      role: "Founder & Chairman",
      expertise: "Mechanical Engineering & CAD/CAM",
      image: founderPhoto
    },
    {
      name: "Mrs. Shweta Gade",
      role: "Managing Director",
      expertise: "Leadership & Operations",
      image: managingDirectorPhoto
    },
    {
      name: "Mr. Krushnkant Sarnaik",
      role: "Chief Executive Officer",
      expertise: "Strategy & Growth",
      image: ceoPhoto
    },
    {
      name: "Mrs. Arti Jadhav",
      role: "HR & Admin - Pimpri",
      expertise: "Human Resources & Administration",
      image: hrAdminPhoto
    },
    {
      name: "Mr. Ganesh Aneraye",
      role: "Academic Head - Pimpri",
      expertise: "Academics",
      image: academicHeadPimpriPhoto
    },
    {
      name: "Mr. Umesh Khade",
      role: "Academic Head - Dubai",
      expertise: "Academics - Dubai",
      image: academicHeadDubaiPhoto
    },
    {
      name: "Mr. Yash Sable",
      role: "Academic Head - Akurdi",
      expertise: "Academics - Akurdi",
      image: academicHeadAkurdiPhoto
    },
    {
      name: "Mr. Prasad Jadhav",
      role: "Training & Placement Officer",
      expertise: "Training & Placement",
      image: trainingPlacementPhoto
    },
    {
      name: "Mrs. Rupali Dixit",
      role: "Admission Consultant",
      expertise: "Admissions",
      image: admissionConsultantPhoto
    }
  ];
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative text-white py-20 overflow-hidden">
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwZXhwZXJ0cyUyMGJ1c2luZXNzJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM2MzI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")'
    }}
  />
        <div className="absolute inset-0 bg-[#0A192F]/75" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Team of Experts
            </h1>
            <p className="text-xl text-white/90">
              Dedicated professionals committed to transforming your career and education journey
            </p>
          </div>
        </div>
      </section>

      {
    /* Team Expertise Areas */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-accent rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certified Trainers</h3>
                <p className="text-muted-foreground">Industry-certified CAD and language instructors</p>
              </div>
              <div className="text-center p-8 bg-accent rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Immigration Experts</h3>
                <p className="text-muted-foreground">Licensed consultants for visa and immigration</p>
              </div>
              <div className="text-center p-8 bg-accent rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Advisors</h3>
                <p className="text-muted-foreground">Experienced placement and career counselors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Team Members Grid */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry veterans with decades of combined experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[3/4] w-full">
                    <ImageWithFallback
    src={member.image}
    alt={member.name}
    className="w-full h-full object-contain bg-black/5"
  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Team Values */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Our Team
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
                  <p className="text-muted-foreground">Every decision we make is focused on achieving the best outcomes for our clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
                  <p className="text-muted-foreground">We maintain the highest standards of professionalism and quality in everything we do.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Collaborative Spirit</h3>
                  <p className="text-muted-foreground">Teamwork and knowledge-sharing enable us to provide comprehensive solutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                  <p className="text-muted-foreground">International experience allows us to understand diverse markets and opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>;
}
export {
  Teams
};

