import { ArrowRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import herosec3Img from "../../assets/herosec3.jpg";
import herosec5Img from "../../assets/herosec5.webp";
import palmisland2Img from "../../assets/palmisland2.png";
function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [herosec3Img, herosec5Img, palmisland2Img];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  return <section id="home" className="relative pt-20 min-h-[90vh] flex items-center">
      {
    /* Background Image */
  }
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Career Hub Technology"
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            } object-cover`}
            style={img === herosec3Img ? { objectPosition: '50% -10%' } : {}}
          />
        ))}
        {
    /* Dark Overlay */
  }
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
        
        {
    /* Navigation Dots */
  }
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {
    /* Content */
  }
      <div className="container mx-auto px-4 relative z-10 py-20 h-full">
        <div className="flex flex-col items-center justify-between min-h-[70vh]">
          {
    /* Top Content - Centered */
  }
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            {
    /* Badge */
  }
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm text-white">You Dream It - We Make It</span>
            </div>
            
            {
    /* Subheadline */
  }
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
              Unlock Your Career Potential in Dubai & Beyond
            </h2>
            
            {
    /* Description */
  }
            <p className="text-base md:text-lg text-white/80 max-w-3xl mb-6">
              At Career Hub Technology, we empower you with globally-recognized skills training, career guidance, and overseas opportunities - from IELTS and foreign languages to visa processing and international placements.
            </p>
          </div>
          
          {
    /* Tagline - Bottom */
  }
          <div className="mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif text-center -mt-4 italic">
              Skills That Matter. Careers That Grow.<br />Futures That Go Global.
            </p>
          </div>
          
          {
    /* CTA Buttons - Bottom */
  }
          <div className="flex flex-col sm:flex-row gap-4">
            <button
    onClick={scrollToContact}
    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 hover:border-green-600 hover:text-green-400 active:border-green-600 active:text-green-400 transition-all border-2 border-white/30 flex items-center justify-center gap-2 font-bold"
  >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button
    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border-2 border-white/30 flex items-center justify-center gap-2 font-bold"
  >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>;
}
export {
  Hero
};
