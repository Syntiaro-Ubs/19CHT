import { useRef, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    name: "Madhav Patil",
    role: "Mechanical CAD Student",
    initial: "M",
    rating: 5,
    text: "Excellent learning experience with Er Kailash Gade sir. Teaching methods were clear and engaging, making complex concepts easy to understand. Highly recommend for Catia V5 skills."
  },
  {
    name: "Aship Shaikh",
    role: "Student",
    initial: "A",
    rating: 5,
    text: "Nice office, great staff and Kailash sir. Well and good guidance about learning language and career road map. Very supportive team throughout the journey."
  },
  {
    name: "Abhishek Yadav",
    role: "CATIA Student",
    initial: "A",
    rating: 5,
    text: "Knowledgeable trainers and a positive learning experience for beginners in CAD software like CATIA, with trainers noted for their expertise and impressive communication skills."
  },
  {
    name: "Arati Nikam",
    role: "Software Training Graduate",
    initial: "A",
    rating: 5,
    text: "Highly recommend as a Software Trainer ??? excellent expertise in Software Training and strong commitment to student success. Truly like professionals."
  },
  {
    name: "Priyanka K",
    role: "German Language Student",
    initial: "P",
    rating: 5,
    text: "The teachers are professional and very supportive. The course material was excellent and helped me improve my German quickly. Highly recommended for anyone serious about learning!"
  },
  {
    name: "Rohan Kumbhar",
    role: "CATIA Student",
    initial: "R",
    rating: 5,
    text: "Career Hub Technology is one of the best institutes for Mechanical Engineering students. CATIA training is very practical and industry-oriented. Highly recommended in Akurdi, Pune."
  },
  {
    name: "Pushpajit Narkhede",
    role: "Multi-Course Graduate",
    initial: "P",
    rating: 5,
    text: "I completed German language, AutoCAD, and Graphic Design courses here. The trainers are knowledgeable, supportive, and make learning easy. Highly recommended!"
  },
  {
    name: "Sameer Navgahde",
    role: "CAD & German Student",
    initial: "S",
    rating: 5,
    text: "One of the few institutes where you get both technical and language training under one roof. CAD training is practical and job oriented, German classes are interactive."
  }
];
function Testimonials() {
  const scrollRef = useRef(null);
  
  // Continuous auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let animationFrameId;
    const scrollSpeed = 1; // Pixels per frame (adjust for speed)

    const continuousScroll = () => {
      if (container) {
        scrollPosition += scrollSpeed;
        
        // Reset when we've scrolled through half (original set)
        const halfWidth = container.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(continuousScroll);
      }
    };

    animationFrameId = requestAnimationFrame(continuousScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 420;
    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {
    /* Section Header */
  }
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-50 text-[#FF6600] px-4 py-2 rounded-full mb-4 font-bold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            What Our Students Say
          </h2>
        </div>

        {
    /* Carousel with buttons */
  }
        <div className="relative">
          {
    /* Left Button */
  }
          <button
    onClick={() => scroll("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF6600]/80 transition-colors"
  >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {
    /* Right Button */
  }
          <button
    onClick={() => scroll("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF6600]/80 transition-colors"
  >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-hidden pb-6"
    style={{ scrollBehavior: 'auto' }}
  >
            {/* Render testimonials twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => <div
    key={index}
    className="group flex-shrink-0 w-[350px] md:w-[400px] flex flex-col gap-4 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-[#FF6600]/20 transition-all duration-300"
  >
                {
    /* Author */
  }
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF6600]/10 text-[#FF6600] flex items-center justify-center font-bold text-2xl group-hover:bg-[#FF6600] group-hover:text-white transition-colors flex-shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-[#FF6600] font-medium">{testimonial.role}</div>
                    {
    /* Rating */
  }
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FF6600] text-[#FF6600]" />)}
                    </div>
                  </div>
                </div>

                {
    /* Quote */
  }
                <div className="relative flex-1 flex items-start">
                  <Quote className="absolute top-0 right-0 w-10 h-10 text-gray-200/50 group-hover:text-[#FF6600]/5 transition-colors" />
                  <p className="text-gray-600 text-base leading-relaxed font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
export {
  Testimonials
};