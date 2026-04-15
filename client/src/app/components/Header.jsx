import { MoreVertical, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import logoImg from "../../assets/final-logo.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };
  const goToHome = () => {
    navigate("/");
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(
      activeDropdown === dropdown ? null : dropdown
    );
  };
  const toggleMobileDropdown = (dropdown) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdown ? null : dropdown
    );
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);
  return <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {
    /* Logo */
  }
          <div
    className="flex items-center space-x-2 cursor-pointer"
    onClick={() => {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 50);
    }}
  >
            <img
    src={logoImg}
    alt="Career Hub Technology"
    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
  />
            <span
    className="text-foreground capitalize p-[2px] m-[2px] text-[18px] sm:text-[24px] lg:text-[32px] whitespace-nowrap"
    style={{ fontFamily: "'Baloo', cursive" }}
  >Career Hub Technology</span>
          </div>

          {
    /* Desktop Navigation */
  }
          <ul
    className="hidden xl:flex items-center space-x-6"
    ref={dropdownRef}
  >
            <li>
              <button
    onClick={goToHome}
    className="hover:text-primary transition-colors py-2"
  >
                Home
              </button>
            </li>

            {
    /* About Us Dropdown */
  }
            <li className="relative group">
              <button
    onMouseEnter={() => setActiveDropdown("about")}
    onClick={() => toggleDropdown("about")}
    className="flex items-center gap-1 hover:text-primary transition-colors py-2"
  >
                About Us <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "about" && <div 
    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-primary/10 py-2" 
    onMouseLeave={() => setActiveDropdown(null)}
    onClick={() => setActiveDropdown(null)}
  >
                  <Link
    to="/about"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    About CHT
                  </Link>
                  <Link
    to="/founder"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    About Founder
                  </Link>
                  <Link
    to="/our-story"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Our Story
                  </Link>
                  <Link
    to="/why-us"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Why Us
                  </Link>
                  <Link
    to="/teams"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Teams of Experts
                  </Link>
                  <Link
    to="/testimonials"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Testimonials
                  </Link>
                  <Link
    to="/gallery"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Gallery
                  </Link>
                </div>}
            </li>

            {
    /* Services Dropdown */
  }
            <li className="relative group">
              <button
    onMouseEnter={() => setActiveDropdown("services")}
    onClick={() => toggleDropdown("services")}
    className="flex items-center gap-1 hover:text-primary transition-colors py-2"
  >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && <div 
    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-primary/10 py-2 max-h-[70vh] overflow-y-auto scrollbar-hide" 
    onMouseLeave={() => setActiveDropdown(null)}
    onClick={() => setActiveDropdown(null)}
  >
                  <Link
    to="/passport-services"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Passport Services
                  </Link>
                  <Link
    to="/overseas-education"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Overseas Education
                  </Link>
                  <Link
    to="/visa-processing"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Visa Processing
                  </Link>
                  <Link
    to="/career-counseling"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Career Counseling
                  </Link>
                  <Link
    to="/business-setup-main-zone"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Business Setup (UAE) - Main Zone
                  </Link>
                  <Link
    to="/business-setup-free-zone"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Business Setup (UAE) - Free Zone
                  </Link>
                </div>}
            </li>

            {
    /* Foreign Language Dropdown */
  }
            <li className="relative group">
              <button
    onMouseEnter={() => setActiveDropdown("language")}
    onClick={() => toggleDropdown("language")}
    className="flex items-center gap-1 hover:text-primary transition-colors py-2"
  >
                Foreign Language{" "}
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "language" && <div 
    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-primary/10 py-2" 
    onMouseLeave={() => setActiveDropdown(null)}
    onClick={() => setActiveDropdown(null)}
  >
                  <Link
    to="/german-language"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    German Language
                  </Link>
                  <Link
    to="/japanese-language"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Japanese Language
                  </Link>
                  <Link
    to="/ielts-training"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    IELTS Training
                  </Link>
                </div>}
            </li>

            {
    /* All Courses Mega Menu */
  }
            <li className="relative group">
              <button
    onMouseEnter={() => setActiveDropdown("courses")}
    onClick={() => toggleDropdown("courses")}
    className="flex items-center gap-1 hover:text-primary transition-colors py-2"
  >
                All Courses <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "courses" && <div 
    className="absolute top-full right-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-primary/10 p-6 max-h-[70vh] overflow-y-auto scrollbar-hide" 
    onMouseLeave={() => setActiveDropdown(null)}
    onClick={() => setActiveDropdown(null)}
  >
                  <div className="grid grid-cols-4 gap-6">
                    {
    /* Mechanical CAD */
  }
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Mechanical CAD
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/autocad-training"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/catia-training"
    className="block py-1 hover:text-primary"
  >
                            CATIA Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/creo-training"
    className="block py-1 hover:text-primary"
  >
                            CREO Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/solidworks-training"
    className="block py-1 hover:text-primary"
  >
                            SolidWorks Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/unigraphics-training"
    className="block py-1 hover:text-primary"
  >
                            Unigraphics (NX12)
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/plastic-product-design"
    className="block py-1 hover:text-primary"
  >
                            Plastic Product Design
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/biw-welding-fixture"
    className="block py-1 hover:text-primary"
  >
                            BIW Welding Fixture
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/nx-cad-training"
    className="block py-1 hover:text-primary"
  >
                            NX-CAD Training
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {
    /* Electrical CAD */
  }
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Electrical CAD
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/autocad-electrical"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Electrical
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/eplan-training"
    className="block py-1 hover:text-primary"
  >
                            EPLAN
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {
    /* Civil CAD */
  }
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Civil CAD
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/civil-autocad-training"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/etabs-training"
    className="block py-1 hover:text-primary"
  >
                            ETABS
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/bim-civil-arch-training"
    className="block py-1 hover:text-primary"
  >
                            BIM Civil Arch.
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/excel-training"
    className="block py-1 hover:text-primary"
  >
                            Excel
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/revit-mep-training"
    className="block py-1 hover:text-primary"
  >
                            Revit MEP
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/estimation-costing-training"
    className="block py-1 hover:text-primary"
  >
                            Estimation & Costing
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/staad-pro-training"
    className="block py-1 hover:text-primary"
  >
                            Staad Pro Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/revit-architecture-training"
    className="block py-1 hover:text-primary"
  >
                            Revit Architecture
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/google-sketchup-training"
    className="block py-1 hover:text-primary"
  >
                            Google SketchUp
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/vray-training"
    className="block py-1 hover:text-primary"
  >
                            V-ray Training
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {
    /* Architecture Training */
  }
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Architecture Training
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/arch-autocad-training"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-vray-training"
    className="block py-1 hover:text-primary"
  >
                            V-ray Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-sketchup-training"
    className="block py-1 hover:text-primary"
  >
                            Google SketchUp
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-lumion-training"
    className="block py-1 hover:text-primary"
  >
                            Lumion
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-3dsmax-training"
    className="block py-1 hover:text-primary"
  >
                            3DS Max
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-photoshop-training"
    className="block py-1 hover:text-primary"
  >
                            Photoshop
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>}
            </li>

            {
    /* Careers Dropdown */
  }
            <li className="relative group">
              <button
    onMouseEnter={() => setActiveDropdown("careers")}
    onClick={() => toggleDropdown("careers")}
    className="flex items-center gap-1 hover:text-primary transition-colors py-2"
  >
                Careers <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "careers" && <div 
    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-primary/10 py-2" 
    onMouseLeave={() => setActiveDropdown(null)}
    onClick={() => setActiveDropdown(null)}
  >
                  <Link
    to="/careers"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Careers
                  </Link>
                  <Link
    to="/franchise"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Franchise Application
                  </Link>
                  <Link
    to="/job-placements"
    className="block px-4 py-2 hover:bg-accent transition-colors"
  >
                    Job Placements
                  </Link>
                </div>}
            </li>

            <li>
              <Link
    to="/contact"
    className="hover:text-primary transition-colors py-2 block"
  >
                Contact
              </Link>
            </li>
          </ul>

          {
    /* Mobile Menu Button */
  }
          <button
    className="xl:hidden p-2"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-label="Toggle menu"
  >
            {isMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
          </button>
        </div>

        {
    /* Mobile Navigation */
  }
        {isMenuOpen && <div
    className="lg:hidden mt-4 pb-4 border-t pt-4 max-h-[70vh] overflow-y-auto scrollbar-hide"
    onClick={(e) => {
      const target = e.target;
      if (target.closest("a[href]")) {
        setIsMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    }}
  >
            <ul className="flex flex-col space-y-2">
              <li>
                <button
    onClick={goToHome}
    className="w-full text-left hover:text-primary transition-colors py-2"
  >
                  Home
                </button>
              </li>

              {
    /* Mobile About Us */
  }
              <li>
                <button
    onClick={() => toggleMobileDropdown("about")}
    className="w-full text-left hover:text-primary transition-colors py-2 flex items-center justify-between"
  >
                  About Us{" "}
                  <ChevronDown
    className={`w-4 h-4 transition-transform ${activeMobileDropdown === "about" ? "rotate-180" : ""}`}
  />
                </button>
                {activeMobileDropdown === "about" && <ul className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    <li>
                      <Link
    to="/about"
    className="block py-1 hover:text-primary"
  >
                        About CHT
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/founder"
    className="block py-1 hover:text-primary"
  >
                        About Founder
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/our-story"
    className="block py-1 hover:text-primary"
  >
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/why-us"
    className="block py-1 hover:text-primary"
  >
                        Why Us
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/teams"
    className="block py-1 hover:text-primary"
  >
                        Teams of Experts
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/testimonials"
    className="block py-1 hover:text-primary"
  >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/gallery"
    className="block py-1 hover:text-primary"
  >
                        Gallery
                      </Link>
                    </li>
                  </ul>}
              </li>

              {
    /* Mobile Services */
  }
              <li>
                <button
    onClick={() => toggleMobileDropdown("services")}
    className="w-full text-left hover:text-primary transition-colors py-2 flex items-center justify-between"
  >
                  Services{" "}
                  <ChevronDown
    className={`w-4 h-4 transition-transform ${activeMobileDropdown === "services" ? "rotate-180" : ""}`}
  />
                </button>
                {activeMobileDropdown === "services" && <ul className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    <li>
                      <Link
    to="/passport-services"
    className="block py-1 hover:text-primary"
  >
                        Passport Services
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/overseas-education"
    className="block py-1 hover:text-primary"
  >
                        Overseas Education
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/visa-processing"
    className="block py-1 hover:text-primary"
  >
                        Visa Processing
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/career-counseling"
    className="block py-1 hover:text-primary"
  >
                        Career Counseling
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/business-setup-main-zone"
    className="block py-1 hover:text-primary"
  >
                        Business Setup (UAE) - Main Zone
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/business-setup-free-zone"
    className="block py-1 hover:text-primary"
  >
                        Business Setup (UAE) - Free Zone
                      </Link>
                    </li>
                  </ul>}
              </li>

              {
    /* Mobile Foreign Language */
  }
              <li>
                <button
    onClick={() => toggleMobileDropdown("language")}
    className="w-full text-left hover:text-primary transition-colors py-2 flex items-center justify-between"
  >
                  Foreign Language{" "}
                  <ChevronDown
    className={`w-4 h-4 transition-transform ${activeMobileDropdown === "language" ? "rotate-180" : ""}`}
  />
                </button>
                {activeMobileDropdown === "language" && <ul className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    <li>
                      <Link
    to="/german-language"
    className="block py-1 hover:text-primary"
  >
                        German Language
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/japanese-language"
    className="block py-1 hover:text-primary"
  >
                        Japanese Language
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/ielts-training"
    className="block py-1 hover:text-primary"
  >
                        IELTS Training
                      </Link>
                    </li>
                  </ul>}
              </li>

              {
    /* Mobile All Courses */
  }
              <li>
                <button
    onClick={() => toggleMobileDropdown("courses")}
    className="w-full text-left hover:text-primary transition-colors py-2 flex items-center justify-between"
  >
                  All Courses{" "}
                  <ChevronDown
    className={`w-4 h-4 transition-transform ${activeMobileDropdown === "courses" ? "rotate-180" : ""}`}
  />
                </button>
                {activeMobileDropdown === "courses" && <div className="pl-4 mt-2 space-y-3 border-l-2 border-primary/20">
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Mechanical CAD
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/autocad-training"
    className="hover:text-primary transition-colors"
  >
                            AutoCAD Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/catia-training"
    className="block py-1 hover:text-primary"
  >
                            CATIA Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/creo-training"
    className="block py-1 hover:text-primary"
  >
                            CREO Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/solidworks-training"
    className="block py-1 hover:text-primary"
  >
                            SolidWorks Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/unigraphics-training"
    className="block py-1 hover:text-primary"
  >
                            Unigraphics (NX12)
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/plastic-product-design"
    className="block py-1 hover:text-primary"
  >
                            Plastic Product Design
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/biw-welding-fixture"
    className="block py-1 hover:text-primary"
  >
                            BIW Welding Fixture
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/nx-cad-training"
    className="block py-1 hover:text-primary"
  >
                            NX-CAD Training
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Electrical CAD
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/autocad-electrical"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Electrical
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/eplan-training"
    className="block py-1 hover:text-primary"
  >
                            EPLAN
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Civil CAD
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/civil-autocad-training"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/etabs-training"
    className="block py-1 hover:text-primary"
  >
                            ETABS
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/bim-civil-arch-training"
    className="block py-1 hover:text-primary"
  >
                            BIM Civil Arch.
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/excel-training"
    className="block py-1 hover:text-primary"
  >
                            Excel
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/revit-mep-training"
    className="block py-1 hover:text-primary"
  >
                            Revit MEP
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/estimation-costing-training"
    className="block py-1 hover:text-primary"
  >
                            Estimation & Costing
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/staad-pro-training"
    className="block py-1 hover:text-primary"
  >
                            Staad Pro Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/revit-architecture-training"
    className="block py-1 hover:text-primary"
  >
                            Revit Architecture
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/google-sketchup-training"
    className="block py-1 hover:text-primary"
  >
                            Google SketchUp
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/vray-training"
    className="block py-1 hover:text-primary"
  >
                            V-ray Training
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-primary mb-1">
                        Architecture Training
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>
                          <Link
    to="/arch-autocad-training"
    className="block py-1 hover:text-primary"
  >
                            AutoCAD Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-vray-training"
    className="block py-1 hover:text-primary"
  >
                            V-ray Training
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-sketchup-training"
    className="block py-1 hover:text-primary"
  >
                            Google SketchUp
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-lumion-training"
    className="block py-1 hover:text-primary"
  >
                            Lumion
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-3dsmax-training"
    className="block py-1 hover:text-primary"
  >
                            3DS Max
                          </Link>
                        </li>
                        <li>
                          <Link
    to="/arch-photoshop-training"
    className="block py-1 hover:text-primary"
  >
                            Photoshop
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>}
              </li>

              {
    /* Mobile Careers */
  }
              <li>
                <button
    onClick={() => toggleMobileDropdown("careers")}
    className="w-full text-left hover:text-primary transition-colors py-2 flex items-center justify-between"
  >
                  Careers{" "}
                  <ChevronDown
    className={`w-4 h-4 transition-transform ${activeMobileDropdown === "careers" ? "rotate-180" : ""}`}
  />
                </button>
                {activeMobileDropdown === "careers" && <ul className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    <li>
                      <Link
    to="/careers"
    className="block py-1 hover:text-primary"
  >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/franchise"
    className="block py-1 hover:text-primary"
  >
                        Franchise Application
                      </Link>
                    </li>
                    <li>
                      <Link
    to="/job-placements"
    className="block py-1 hover:text-primary"
  >
                        Job Placements
                      </Link>
                    </li>
                  </ul>}
              </li>

              <li>
                <Link
    to="/contact"
    className="w-full text-left hover:text-primary transition-colors py-2 block"
  >
                  Contact
                </Link>
              </li>
            </ul>
          </div>}
      </nav>
    </header>;
}
export {
  Header
};