import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useNavigate } from "react-router";
import Gal1 from "../../assets/Gal1.jpg";
import Gal2 from "../../assets/Gal2.jpg";
import Gal3 from "../../assets/Gal3.jpg";
import Gal4 from "../../assets/Gal4.jpg";
import Gal5 from "../../assets/Gal5.jpg";
import Gal6 from "../../assets/Gal6.jpeg";
import Gal7 from "../../assets/Gal7.jpeg";
import Gal8 from "../../assets/Gal8.jpeg";
import Gal9 from "../../assets/Gal9.jpeg";
import Gal10 from "../../assets/Gal10.jpg";
import WA1 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.50 PM.jpeg";
import WA2 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.51 PM (1).jpeg";
import WA3 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.51 PM (2).jpeg";
import WA4 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.51 PM (3).jpeg";
import WA5 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.51 PM.jpeg";
import WA6 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.52 PM (1).jpeg";
import WA7 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.52 PM (2).jpeg";
import WA8 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.52 PM (3).jpeg";
import WA9 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.52 PM.jpeg";
import WA10 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.53 PM (1).jpeg";
import WA11 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.53 PM (2).jpeg";
import WA12 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.53 PM (3).jpeg";
import WA13 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.53 PM.jpeg";
import WA14 from "../../assets/WhatsApp Image 2026-04-14 at 6.13.54 PM.jpeg";
function Gallery() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [pinnedItems, setPinnedItems] = useState([1, 3, 4, 5, 6, 18]); // IDs of pinned items
  const isAdmin = typeof window !== "undefined" && localStorage.getItem("isAdmin") === "true";

  const togglePin = (itemId) => {
    if (!isAdmin) return;
    setPinnedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isPinned = (itemId) => pinnedItems.includes(itemId);
  const categories = [
    { id: "all", name: "All" },
    { id: "training", name: "Training Sessions" },
    { id: "events", name: "Events & Workshops" },
    { id: "placements", name: "Placements" },
    { id: "facilities", name: "Our Facilities" },
    { id: "seminar", name: "College Seminar" }
  ];
  const galleryItems = [
    {
      id: 1,
      category: "training",
      title: "CAD Training Session",
      description: "Students learning CATIA V5 in our state-of-the-art lab",
      image: Gal1
    },
    {
      id: 2,
      category: "training",
      title: "German Language Class",
      description: "Interactive German language training session",
      image: Gal2
    },
    {
      id: 3,
      category: "events",
      title: "Career Guidance Workshop",
      description: "Expert panel discussion on overseas opportunities",
      image: Gal3
    },
    {
      id: 4,
      category: "placements",
      title: "Dubai Placement Drive",
      description: "Students receiving offer letters from UAE employers",
      image: Gal4
    },
    {
      id: 5,
      category: "facilities",
      title: "Computer Lab",
      description: "Modern CAD training facility with latest software",
      image: Gal5
    },
    {
      id: 6,
      category: "facilities",
      title: "Classroom Setup",
      description: "Spacious and well-equipped learning environment",
      image: Gal6
    },
    {
      id: 7,
      category: "events",
      title: "Success Celebration",
      description: "Celebrating student achievements and placements",
      image: Gal7
    },
    {
      id: 8,
      category: "training",
      title: "Hands-on Training",
      description: "Practical CAD design session in progress",
      image: Gal8
    },
    {
      id: 9,
      category: "placements",
      title: "Visa Approval Celebration",
      description: "Students celebrating successful visa approvals",
      image: Gal9
    },
    {
      id: 10,
      category: "events",
      title: "Workshop Session",
      description: "Interactive learning and skill development",
      image: Gal10
    },
    {
      id: 11,
      category: "seminar",
      title: "Recognition & Appreciation",
      description: "Meeting with Dr. Shirish Patil, Vice Chancellor of D.Y. Patil University, Ambi, Pune, to share our career guidance vision.",
      image: WA1
    },
    {
      id: 12,
      category: "seminar",
      title: "Seminar Team Visit",
      description: "Career Hub Technology team with D.Y. Patil University representatives during the seminar visit.",
      image: WA2
    },
    {
      id: 13,
      category: "seminar",
      title: "Seminar Stage Felicitation",
      description: "Guests and organizers on stage during the seminar recognition ceremony.",
      image: WA3
    },
    {
      id: 14,
      category: "seminar",
      title: "Faculty Recognition",
      description: "A token of appreciation being presented during the seminar outreach visit.",
      image: WA4
    },
    {
      id: 15,
      category: "seminar",
      title: "Appreciation Ceremony",
      description: "Recognition moment with university leadership during the seminar engagement.",
      image: WA5
    },
    {
      id: 16,
      category: "seminar",
      title: "Seminar Courtesy Meeting",
      description: "A seminar appreciation visit with faculty members and Career Hub Technology representatives.",
      image: WA6
    },
    {
      id: 17,
      category: "seminar",
      title: "Faculty Felicitation",
      description: "Presenting a token of gratitude to faculty members who supported the seminar.",
      image: WA7
    },
    {
      id: 18,
      category: "seminar",
      title: "University Group Photo",
      description: "Participants, faculty, and the Career Hub Technology team gathered outside D.Y. Patil University, Pune.",
      image: WA8
    },
    {
      id: 19,
      category: "seminar",
      title: "Seminar Highlights Poster",
      description: "Event poster capturing key appreciation moments and recognition during the seminar.",
      image: WA9
    },
    {
      id: 20,
      category: "seminar",
      title: "Seminar Appreciation Collage",
      description: "A collage featuring felicitation moments and the library contribution initiative.",
      image: WA10
    },
    {
      id: 21,
      category: "seminar",
      title: "Seminar Session in Progress",
      description: "Students attending the live seminar session and presentation.",
      image: WA11
    },
    {
      id: 22,
      category: "seminar",
      title: "Stage Recognition Group",
      description: "A group recognition photo taken on stage during the seminar program.",
      image: WA12
    },
    {
      id: 23,
      category: "seminar",
      title: "Recognition Poster",
      description: "A designed seminar poster highlighting appreciation and academic collaboration.",
      image: WA13
    },
    {
      id: 24,
      category: "seminar",
      title: "Registrar Interaction",
      description: "A recognition and appreciation poster documenting the registrar interaction during the seminar.",
      image: WA14
    }
  ];
  const filteredItems = activeCategory === "all" 
    ? galleryItems.slice().sort((a, b) => {
        const aPinned = isPinned(a.id);
        const bPinned = isPinned(b.id);
        if (aPinned && !bPinned) return -1;
        if (!aPinned && bPinned) return 1;
        return 0;
      })
    : galleryItems.filter((item) => item.category === activeCategory).sort((a, b) => {
        const aPinned = isPinned(a.id);
        const bPinned = isPinned(b.id);
        if (aPinned && !bPinned) return -1;
        if (!aPinned && bPinned) return 1;
        return 0;
      });
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Moments That Matter
            </h1>
            <p className="text-xl text-white/90">
              A glimpse into our training sessions, events, and student success stories
            </p>
          </div>
        </div>
      </section>

      {
    /* Category Filter */
  }
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => <button
    key={category.id}
    onClick={() => setActiveCategory(category.id)}
    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeCategory === category.id ? "bg-primary text-white shadow-lg" : "bg-accent text-foreground hover:bg-primary/10"}`}
  >
                  {category.name}
                </button>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Gallery Grid */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => <div
    key={item.id}
    className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer ${isPinned(item.id) ? 'border-4 border-primary' : ''}`}
  >
                  {isPinned(item.id) && <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Featured
                    </div>}
                  {isAdmin && <button
    onClick={(e) => {
      e.stopPropagation();
      togglePin(item.id);
    }}
    className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-primary p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
    title={isPinned(item.id) ? "Unpin this image" : "Pin this image"}
  >
                    {isPinned(item.id) ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    )}
                  </button>}
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>

            {filteredItems.length === 0 && <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No images found in this category</p>
              </div>}
          </div>
        </div>
      </section>
    </div>;
}
export {
  Gallery
};
