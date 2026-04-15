import { CheckCircle, ArrowRight } from "lucide-react";
const highlights = [
  "Expert Trainers & Career Mentors",
  "Transparent & Structured Learning",
  "Industry-Relevant Curriculum",
  "Strong Global Support Network"
];
function About() {
  return <section id="about" className="py-20 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-4">
        {
    /* Main About Section */
  }
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
            <div className="grid md:grid-cols-2 gap-0">
              {
    /* Left Side - Image */
  }
              <div className="relative h-64 md:h-auto">
                <img
    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    alt="Team collaboration"
    className="w-full h-full object-cover"
  />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white text-primary px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    About Us
                  </span>
                </div>
              </div>
              
              {
    /* Right Side - Content */
  }
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  A Trusted Partner for Skills, Careers & Global Opportunities
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Career Hub Technology empowers students, graduates, and working professionals with industry-relevant training, career guidance, and international exposure. Based in Akurdi, Pune, we bridge the gap between learning and real-world opportunities.
                </p>
                
                {
    /* Highlights */
  }
                <div className="space-y-3 mb-8">
                  {highlights.map((highlight, index) => <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>)}
                </div>
                
                {
    /* CTA Button */
  }
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 font-bold">
                  Learn More About Us <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
export {
  About
};