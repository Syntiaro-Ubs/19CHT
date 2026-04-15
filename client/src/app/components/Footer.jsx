import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../assets/final-logo.png";
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return <footer className="bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-12 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mb-8">
          {
    /* Company Info */
  }
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
              <img
    src={logoImg}
    alt="Career Hub Technology"
    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
  />
              <span
    className="text-xl sm:text-2xl uppercase break-words"
    style={{ fontFamily: "'Baloo 2', cursive" }}
  >
                Career Hub Technology
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering careers and global opportunities. We
              provide overseas education, training &
              certification, and business setup solutions for
              global markets.
            </p>
          </div>

          {
    /* Quick Links */
  }
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
    to="/"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Home
                </Link>
              </li>
              <li>
                <Link
    to="/about"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  About Us
                </Link>
              </li>
              <li>
                <Link
    to="/contact"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
    to="/careers"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Careers
                </Link>
              </li>
              <li>
                <Link
    to="/franchise"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Apply for Franchise
                </Link>
              </li>
            </ul>
          </div>

          {
    /* Our Services */
  }
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
    to="/overseas-education"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Overseas Education
                </Link>
              </li>
              <li>
                <Link
    to="/visa-processing"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Visa Processing
                </Link>
              </li>
              <li>
                <Link
    to="/passport-services"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Passport Services
                </Link>
              </li>
              <li>
                <Link
    to="/career-counseling"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link
    to="/business-setup-main-zone"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Business Setup in Dubai
                </Link>
              </li>
            </ul>
          </div>

          {
    /* Courses & Training */
  }
          <div>
            <h4 className="font-bold mb-4">
              Courses & Training
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
    to="/autocad-training"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Mechanical CAD
                </Link>
              </li>
              <li>
                <Link
    to="/autocad-electrical"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Electrical CAD
                </Link>
              </li>
              <li>
                <Link
    to="/civil-autocad-training"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Civil CAD
                </Link>
              </li>
              <li>
                <Link
    to="/arch-autocad-training"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Architecture Training
                </Link>
              </li>
              <li>
                <Link
    to="/japanese-language"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  Japanese Language
                </Link>
              </li>
              <li>
                <Link
    to="/german-language"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  German Language
                </Link>
              </li>
              <li>
                <Link
    to="/ielts-training"
    className="text-gray-300 hover:text-primary transition-colors"
  >
                  IELTS Training
                </Link>
              </li>
            </ul>
          </div>

          {
    /* Contact Details */
  }
          <div>
            <h4 className="font-bold mb-4">Contact Details</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Sr No 133/1, Near Gurudwara, Akurdi, Pune -
                  411035, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  +91 88882 14460
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  info@careerhubtechnology.com
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
    href="https://www.facebook.com/careerhubtech"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
  >
                <Facebook className="w-5 h-5" />
              </a>
              <a
    href="https://www.instagram.com/careerhubtech_official/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
  >
                <Instagram className="w-5 h-5" />
              </a>
              <a
    href="https://www.linkedin.com/company/career-hub-technology/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
  >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
    href="https://www.youtube.com/@careershubtechnology"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
  >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {
    /* Bottom Bar */
  }
        <div className="mt-4 pt-4 border-t border-gray-600">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-3" />
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent mb-3" />
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              Designed and Developed by{" "}
              <a
    href="https://www.syntiaro.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-teal-400 hover:text-teal-300 active:text-teal-300 transition-colors ml-1"
  >
                SYNTIARO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
