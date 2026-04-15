import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Deshmukh",
      role: "Mechanical Engineer",
      company: "Emirates Engineering, Dubai",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Career Hub Technology completely transformed my career. Their CATIA training was exceptional, and they helped me secure a job in Dubai within 3 months of course completion. The support from the team was outstanding!",
      rating: 5,
      initials: "RD"
    },
    {
      name: "Rohan Kumbhar",
      role: "CATIA V5 Training",
      company: "Mechanical Engineering Student",
      image: "",
      text: "Career Hub Technology is one of the best institutes for Mechanical Engineering students. CATIA training is very practical and industry-oriented. Concepts are explained clearly with real projects. Highly recommended in Akurdi, Pune.",
      rating: 5,
      initials: "RK"
    },
    {
      name: "Pushpajit Narkhede",
      role: "German Language, AutoCAD & Graphic Design",
      company: "Career Hub Training and Placement Center",
      image: "",
      text: "I had an excellent experience at Career Hub Training and Placement Center. I completed German language, AutoCAD, and Graphic Design courses here. The trainers are knowledgeable, supportive, and make learning easy. The environment is professional yet friendly. Highly recommended for anyone looking to upskill and build a successful career.",
      rating: 5,
      initials: "PN"
    },
    {
      name: "Sameer Navgahde",
      role: "CAD & German Language",
      company: "Career Hub Technology",
      image: "",
      text: "I joined this institute for CAD as well as German language. Both departments are strong. CAD training is practical and job oriented, while German classes are interactive and exam focused. Trainers are experienced and supportive. One of the few institutes where you get both technical and language training under one roof.",
      rating: 5,
      initials: "SN"
    },
    {
      name: "Abhishek Yadav",
      role: "CATIA Training",
      company: "CAD Beginner",
      image: "",
      text: "Knowledgeable trainers and a positive learning experience for beginners in CAD software like CATIA, with trainers noted for their expertise and impressive communication skills.",
      rating: 5,
      initials: "AY"
    },
    {
      name: "Arati Nikam",
      role: "Software Training",
      company: "Professional Student",
      image: "",
      text: "Highly recommend as a Software Trainer - excellent expertise in Software Training and strong commitment to student success. Truly like a professional.",
      rating: 5,
      initials: "AN"
    },
    {
      name: "Priyanka K",
      role: "German Language",
      company: "Language Student",
      image: "",
      text: "I had a great experience at the CAREER HUB TECHNOLOGY. The teachers are professional and very supportive. The course material was excellent and helped me improve my German quickly. Highly recommended for anyone serious about learning German!",
      rating: 5,
      initials: "PK"
    },
    {
      name: "Parameshwar Hivrale",
      role: "AutoCAD Training",
      company: "CAD Student",
      image: "",
      text: "The overall setup at CAREER HUB TECHNOLOGY is extremely impressive, providing a great learning environment. My trainer was Mr. Kailash Gade sir - he is highly detail-oriented, hardworking, and accommodating with class schedules. He is focused and possesses excellent communication skills, along with a solid practical understanding of AutoCAD.",
      rating: 5,
      initials: "PH"
    },
    {
      name: "Madhavi Kangle",
      role: "Advance Excel & Power BI",
      company: "Professional Development",
      image: "",
      text: "I had a great time while learning Advance Excel and POWER BI. I wanted to thank you for that class because I am going to be SO MUCH better at my job now and I truly mean that. I recommend CAREER HUB TECHNOLOGY to those who want to learn and grow their career in the field of programming, mechanical or in foreign languages like German and Japanese.",
      rating: 5,
      initials: "MK"
    },
    {
      name: "Aship Shaikh",
      role: "Career Guidance",
      company: "Student",
      image: "",
      text: "Nice office, staff and Kailash sir... Well and good guidance about learning language and career road map.",
      rating: 5,
      initials: "AS"
    },
    {
      name: "Ashok Patil",
      role: "Technical Training",
      company: "Technical Student",
      image: "",
      text: "The instructors are extremely knowledgeable and supportive, always ready to help with any doubts. The curriculum is up-to-date and industry-relevant, covering both theoretical concepts and hands-on practicals.",
      rating: 5,
      initials: "AP"
    },
    {
      name: "Madhav Patil",
      role: "CATIA V5 Training",
      company: "Mechanical Engineer",
      image: "",
      text: "We had an excellent learning experience with Er Kailash Gade sir in their Mechanical CAD Training. Their teaching methods were clear and engaging, making complex concepts easy to understand. We highly recommend Mr. Kailash Gade sir to any company, group, or individual looking to enhance their skills in CATIA V5.",
      rating: 5,
      initials: "MP"
    },
    {
      name: "Sneha Patil",
      role: "Architecture Graduate",
      company: "Now studying in Germany",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The German language training and study abroad guidance I received was world-class. They handled my visa process seamlessly, and I'm now pursuing my Master's in Germany. Highly recommended!",
      rating: 5,
      initials: "SP"
    },
    {
      name: "Amit Kulkarni",
      role: "Civil Engineer",
      company: "Al Futtaim Group, UAE",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "I enrolled for Revit and Staad Pro courses here. The trainers are industry experts and the practical approach to teaching made all the difference. Got placed in UAE within 2 months!",
      rating: 5,
      initials: "AK"
    },
    {
      name: "Priya Joshi",
      role: "Electrical Engineer",
      company: "Siemens, Oman",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Career Hub Technology helped me with both AutoCAD Electrical training and overseas job placement. Their network with employers in the Middle East is incredible. Thank you for changing my life!",
      rating: 5,
      initials: "PJ"
    },
    {
      name: "Vikram Mehta",
      role: "Design Engineer",
      company: "L&T, Dubai",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The CREO and SolidWorks training was hands-on and industry-focused. The placement assistance was genuine and professional. I'm now working with one of the top companies in Dubai!",
      rating: 5,
      initials: "VM"
    },
    {
      name: "Anjali Sharma",
      role: "Architecture Student",
      company: "Studying in Italy",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The team guided me through the entire study abroad process from university selection to visa approval. Their expertise and personal attention made everything stress-free. Grateful for their support!",
      rating: 5,
      initials: "AS"
    },
    {
      name: "Karan Sawant",
      role: "Mechanical Designer",
      company: "Petrofac, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Best decision I made was to join Career Hub Technology for NX CAD training. The instructors are knowledgeable, and the job placement support is real. Now earning great salary in UAE!",
      rating: 5,
      initials: "KS"
    },
    {
      name: "Neha Rane",
      role: "Civil Engineer",
      company: "Shapoorji Pallonji, Dubai",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczMzE4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The Primavera P6 and MS Project training was excellent. Career Hub Technology also assisted with my employment visa and relocation. Professional service from start to finish!",
      rating: 5,
      initials: "NR"
    }
  ];
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative text-white py-32 border-b border-[#FF6600]/10">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN1Y2Nlc3MlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb24lMjBkaXZlcnNlfGVufDF8fHx8MTc3MzU4NTQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Success Stories"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Success Stories From Our Students
            </h1>
            <p className="text-xl text-white/90">
              Real experiences from professionals who transformed their careers with us
            </p>
          </div>
        </div>
      </section>

      {
    /* Stats Section */
  }
      <section className="py-12 border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#FF6600] mb-2">7,000+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">Happy Students</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#FF6600] mb-2">98%</div>
                <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#FF6600] mb-2">4.9/5</div>
                <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#FF6600] mb-2">95%</div>
                <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Testimonials Grid */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <div
    key={index}
    className="group bg-[#FAF9F6] border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#FF6600]/20 transition-all"
  >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FF6600] text-[#FF6600]" />)}
                  </div>

                  <div className="relative mb-5">
                    <Quote className="absolute -top-2 -left-1 w-7 h-7 text-[#FF6600]/10" />
                    <p className="text-gray-700 leading-relaxed pl-5">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    {testimonial.image ? <ImageWithFallback
    src={testimonial.image}
    alt={testimonial.name}
    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
  /> : <div className="w-11 h-11 rounded-full bg-[#FF6600]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6600] transition-colors">
                        <span className="text-sm text-[#FF6600] group-hover:text-white transition-colors">
                          {testimonial.initials}
                        </span>
                      </div>}
                    <div>
                      <h3 className="text-gray-900 text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-[#FF6600]">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  Testimonials
};
