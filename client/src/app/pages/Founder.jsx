import { Award, BookOpen, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import founderPhoto from "../../assets/Founder-new.jpeg";
function Founder() {
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative text-white py-32">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1745970347703-687874c5ddbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjBleGVjdXRpdmUlMjB2aXNpb258ZW58MXx8fHwxNzczNTgzODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Founder - Career Hub Technology"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mr. Kailash Ravsaheb Gadhe
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Founder, Career Hub Technology
            </p>
          </div>
        </div>
      </section>

      {
    /* Main Content */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto" dir="ltr">
            {
    /* Left - Image */
  }
            <div className="order-1 lg:order-none lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
    src={founderPhoto}
    alt="Mr. Kailash Ravsaheb Gadhe"
    className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover object-top"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Mr. Kailash Ravsaheb Gadhe</h3>
                  <p className="text-white/90">Founder & Chief Executive</p>
                </div>
              </div>
            </div>

            {
    /* Right - Content */
  }
            <div className="order-2 lg:order-none">
              <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-6">
                About the Founder
              </span>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Kailash Ravsaheb Gadhe is a Master's qualified Mechanical Engineer specialising in <strong>Autonomous Vehicle Engineering</strong> from the prestigious <strong>University of Naples Federico II, Italy</strong>. With a strong academic foundation and a passion for advanced mobility solutions, he has developed deep expertise in automotive systems, intelligent transportation technologies, and next-generation automation.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  With valuable international exposure across <strong>Dubai, Oman, and Georgia (European Union)</strong>, he has actively contributed to innovative projects in automotive engineering and autonomous vehicle technologies. His global experience has enabled him to understand international industry standards, emerging technologies, and cross-cultural professional environments, strengthening his ability to deliver world-class technical solutions.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  He completed his foundational engineering education at <strong>D.Y. Patil College, Pune</strong>, where he built a strong base in mechanical engineering principles. His hands-on experience in mechanical systems, robotics, automation, and advanced manufacturing processes has made him a versatile and multi-dimensional engineering professional. His technical strengths include system design, vehicle dynamics, automation technologies, and practical implementation of engineering concepts in real-world applications.
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  Beyond engineering, he is also a <strong>certified German Language Trainer</strong>, dedicated to preparing students and professionals for international education and career opportunities - making him the ideal founder for Career Hub Technology.
                </p>

                {
    /* Key Highlights */
  }
                <div className="bg-accent p-8 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">
                        <strong>M.Sc. in Autonomous Vehicle Engineering</strong> - University of Naples Federico II, Italy
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">
                        International experience across <strong>Dubai, Oman & Georgia (EU)</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">
                        Expert in <strong>CAD/CAM, Robotics, Automation & Vehicle Dynamics</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">
                        <strong>Certified German Language Trainer</strong> (A1 - B2)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Statistics Section */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Courses & Programs</div>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">7,000+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  Founder
};

