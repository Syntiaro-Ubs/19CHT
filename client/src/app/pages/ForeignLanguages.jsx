import { BookOpen, Award, CheckCircle, Globe2, Users } from "lucide-react";
function ForeignLanguages() {
  const languages = [
    {
      name: "German Language",
      levels: ["A1", "A2", "B1", "B2"],
      icon: "--??",
      description: "Learn German from certified trainers and unlock opportunities in Germany, Austria, and Switzerland",
      features: [
        "Goethe Institute curriculum",
        "Native German trainers",
        "A1 to B2 certification prep",
        "Job & study abroad support",
        "Small batch sizes (8-12 students)",
        "Weekend & weekday batches"
      ],
      duration: "3-4 Months per level",
      career: "Germany, Austria, Switzerland job & study opportunities"
    },
    {
      name: "Japanese Language",
      levels: ["N5", "N4", "N3", "N2"],
      icon: "--??",
      description: "Master Japanese language for career and education opportunities in Japan",
      features: [
        "JLPT exam preparation",
        "Cultural immersion training",
        "N5 to N2 level coverage",
        "Japan work visa support",
        "Interactive learning methods",
        "Practical conversation focus"
      ],
      duration: "3-4 Months per level",
      career: "Japan work opportunities in IT, Engineering, Healthcare"
    },
    {
      name: "IELTS Training",
      levels: ["Academic", "General"],
      icon: "--??",
      description: "Comprehensive IELTS preparation for study abroad and immigration",
      features: [
        "Complete IELTS preparation",
        "Reading, Writing, Listening, Speaking",
        "Mock tests & practice sessions",
        "Study abroad counseling",
        "Score improvement guarantee",
        "Flexible batch timings"
      ],
      duration: "1-2 Months",
      career: "UK, Canada, Australia, New Zealand immigration & education"
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
              Learn Languages, Unlock Global Opportunities
            </h1>
            <p className="text-xl text-white/90">
              Certified language training for international education and career success
            </p>
          </div>
        </div>
      </section>

      {
    /* Why Learn Languages */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Learn a Foreign Language?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-accent rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Career Opportunities</h3>
                <p className="text-muted-foreground">
                  Access high-paying jobs in Germany, Japan, and English-speaking countries
                </p>
              </div>

              <div className="text-center p-8 bg-accent rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Study Abroad</h3>
                <p className="text-muted-foreground">
                  Meet language requirements for universities in Europe and beyond
                </p>
              </div>

              <div className="text-center p-8 bg-accent rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Immigration Support</h3>
                <p className="text-muted-foreground">
                  Language proficiency is key for work visas and permanent residency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Language Courses */
  }
      {languages.map((language, index) => <section key={index} className={`py-20 ${index % 2 === 0 ? "bg-accent" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl mb-4">{language.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {language.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {language.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {language.levels.map((level, idx) => <span key={idx} className="bg-primary text-white px-4 py-2 rounded-full font-semibold">
                        {level}
                      </span>)}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-5 h-5 text-primary" />
                      <span><strong>Duration:</strong> {language.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Globe2 className="w-5 h-5 text-primary" />
                      <span><strong>Career Path:</strong> {language.career}</span>
                    </div>
                  </div>

                  <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 active:bg-green-700 transition-colors">
                    Enroll Now
                  </button>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Course Features</h3>
                  <ul className="space-y-4">
                    {language.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>)}

      {
    /* Training Methodology */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Training Methodology
              </h2>
              <p className="text-xl text-muted-foreground">
                Learn effectively with our proven approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Interactive Classes</h3>
                <p className="text-sm text-muted-foreground">Engaging sessions with multimedia tools</p>
              </div>

              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Practice Sessions</h3>
                <p className="text-sm text-muted-foreground">Regular speaking & writing practice</p>
              </div>

              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Mock Tests</h3>
                <p className="text-sm text-muted-foreground">Regular assessments & feedback</p>
              </div>

              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Certification</h3>
                <p className="text-sm text-muted-foreground">Exam preparation & certification support</p>
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
              Begin Your Language Learning Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Expert trainers, proven methods, guaranteed results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent transition-colors">
                Book Free Demo Class
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white">
                View Course Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  ForeignLanguages
};
