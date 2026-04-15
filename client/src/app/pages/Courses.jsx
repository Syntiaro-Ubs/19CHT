import { Wrench, Zap, Building2, Home, BookOpen, CheckCircle, Clock, Award } from "lucide-react";
function Courses() {
  const courseCategories = [
    {
      category: "Mechanical CAD",
      icon: Wrench,
      description: "Master mechanical design and engineering software used globally",
      courses: [
        {
          name: "AutoCAD Mechanical",
          duration: "3 Months",
          level: "Beginner to Advanced",
          highlights: ["2D & 3D Design", "Industry Standards", "Project Work"]
        },
        {
          name: "CATIA V5",
          duration: "4 Months",
          level: "Intermediate to Advanced",
          highlights: ["Surface Modeling", "Assembly Design", "Real Projects"]
        },
        {
          name: "CREO Parametric",
          duration: "3-4 Months",
          level: "All Levels",
          highlights: ["Parametric Design", "Simulation", "Hands-on Training"]
        },
        {
          name: "SolidWorks",
          duration: "3 Months",
          level: "Beginner to Advanced",
          highlights: ["Part Modeling", "Assemblies", "Drawings"]
        },
        {
          name: "NX CAD",
          duration: "4 Months",
          level: "Intermediate to Advanced",
          highlights: ["Advanced Modeling", "CAM Integration", "Industry Tools"]
        },
        {
          name: "Inventor",
          duration: "3 Months",
          level: "All Levels",
          highlights: ["3D Mechanical Design", "Simulation", "Documentation"]
        },
        {
          name: "Ansys",
          duration: "2-3 Months",
          level: "Advanced",
          highlights: ["FEA Analysis", "CFD", "Structural Analysis"]
        }
      ]
    },
    {
      category: "Electrical CAD",
      icon: Zap,
      description: "Learn electrical design software for panel design and automation",
      courses: [
        {
          name: "AutoCAD Electrical",
          duration: "3 Months",
          level: "Beginner to Advanced",
          highlights: ["Electrical Schematics", "Panel Design", "Wire Numbering"]
        },
        {
          name: "EPLAN",
          duration: "3 Months",
          level: "Intermediate",
          highlights: ["Electrical Engineering", "Automation", "Documentation"]
        },
        {
          name: "ETAP",
          duration: "2 Months",
          level: "Advanced",
          highlights: ["Power Systems", "Analysis Tools", "Simulation"]
        },
        {
          name: "Dialux",
          duration: "1 Month",
          level: "Beginner",
          highlights: ["Lighting Design", "3D Visualization", "Reports"]
        },
        {
          name: "PLC & SCADA",
          duration: "4 Months",
          level: "Intermediate to Advanced",
          highlights: ["Industrial Automation", "Control Systems", "HMI Design"]
        },
        {
          name: "Panel Design",
          duration: "2 Months",
          level: "Intermediate",
          highlights: ["Control Panel Layout", "Wiring Design", "Standards"]
        }
      ]
    },
    {
      category: "Civil CAD",
      icon: Building2,
      description: "Comprehensive civil engineering and project management training",
      courses: [
        {
          name: "AutoCAD Civil 3D",
          duration: "3 Months",
          level: "Intermediate",
          highlights: ["Site Design", "Road Design", "Grading"]
        },
        {
          name: "Staad Pro",
          duration: "2 Months",
          level: "Advanced",
          highlights: ["Structural Analysis", "Steel & Concrete", "Design Codes"]
        },
        {
          name: "Primavera P6",
          duration: "2 Months",
          level: "Intermediate",
          highlights: ["Project Planning", "Scheduling", "Resource Management"]
        },
        {
          name: "MS Project",
          duration: "1 Month",
          level: "Beginner to Intermediate",
          highlights: ["Project Management", "Task Scheduling", "Reporting"]
        },
        {
          name: "Tekla Structures",
          duration: "3 Months",
          level: "Advanced",
          highlights: ["Steel Detailing", "BIM", "Shop Drawings"]
        },
        {
          name: "BIM Modeling",
          duration: "3-4 Months",
          level: "Intermediate to Advanced",
          highlights: ["Building Information", "Collaboration", "5D BIM"]
        }
      ]
    },
    {
      category: "Architecture CAD",
      icon: Home,
      description: "Advanced architectural design and visualization software",
      courses: [
        {
          name: "Revit Architecture",
          duration: "3-4 Months",
          level: "Beginner to Advanced",
          highlights: ["BIM Modeling", "Family Creation", "Documentation"]
        },
        {
          name: "3ds Max",
          duration: "3 Months",
          level: "Intermediate",
          highlights: ["3D Modeling", "Animation", "Rendering"]
        },
        {
          name: "SketchUp",
          duration: "2 Months",
          level: "Beginner to Intermediate",
          highlights: ["3D Modeling", "Quick Design", "Plugins"]
        },
        {
          name: "V-Ray Rendering",
          duration: "2 Months",
          level: "Intermediate",
          highlights: ["Photorealistic Rendering", "Lighting", "Materials"]
        },
        {
          name: "Lumion",
          duration: "1-2 Months",
          level: "Beginner to Intermediate",
          highlights: ["Real-time Rendering", "Visualization", "Animation"]
        },
        {
          name: "ArchiCAD",
          duration: "3 Months",
          level: "Intermediate",
          highlights: ["BIM for Architects", "Documentation", "Collaboration"]
        }
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
              Industry-Ready CAD Training Programs
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive courses designed to make you job-ready for global opportunities
            </p>
          </div>
        </div>
      </section>

      {
    /* Course Benefits */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Certified Training</h3>
                <p className="text-sm text-muted-foreground">Industry-recognized certificates</p>
              </div>

              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Practical Learning</h3>
                <p className="text-sm text-muted-foreground">Hands-on project-based training</p>
              </div>

              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Flexible Batches</h3>
                <p className="text-sm text-muted-foreground">Weekend & weekday options</p>
              </div>

              <div className="text-center p-6 bg-accent rounded-xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Placement Support</h3>
                <p className="text-sm text-muted-foreground">Job assistance guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Course Categories */
  }
      {courseCategories.map((category, catIndex) => <section key={catIndex} className={`py-20 ${catIndex % 2 === 0 ? "bg-white" : "bg-accent"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, index) => <div key={index} className="bg-white border-2 border-accent hover:border-primary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {course.level}
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {course.highlights.map((highlight, idx) => <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>)}
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Enroll Now
                    </button>
                  </div>)}
              </div>
            </div>
          </div>
        </section>)}

      {
    /* CTA Section */
  }
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Start Your CAD Career Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 7,000+ students who transformed their careers with our training
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent transition-colors">
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  Courses
};
