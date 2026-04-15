import {
  ArrowRight,
  Building2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { useState } from "react";
import contactUsBanner from "../../assets/contact.jpg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function Contact() {
  const apiBaseUrl =
    import.meta.env.PROD && import.meta.env.VITE_API_BASE_URL
      ? import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "")
      : "";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        const contentType = res.headers.get("content-type") || "";
        let errorMessage = "";

        if (contentType.includes("application/json")) {
          const data = await res.json().catch(() => ({}));
          errorMessage = data?.error || "";
        } else {
          const text = await res.text().catch(() => "");
          errorMessage = String(text || "").trim();
        }

        if (errorMessage.startsWith("<")) errorMessage = "";
        if (!errorMessage && res.status >= 500) {
          errorMessage =
            "Mail server error. Make sure the backend is running (in `server/`: `npm run dev`).";
        }

        throw new Error(errorMessage || "Failed to submit enquiry");
      }
      alert("Thank you for your enquiry! Our team will contact you shortly.");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      alert(err?.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const branches = [
    {
      label: "MAIN BRANCH",
      city: "AKURDI, PUNE",
      phone: "+91 88882 14460",
      address: "Sr No 133/1, Near Gurudwara, Akurdi Station, Pune - 411035, Akurdi, Maharashtra 411033",
      mapUrl: "https://maps.google.com/?q=Akurdi+Station+Pune+411035"
    },
    {
      label: "2ND MAIN BRANCH",
      city: "DUBAI, UAE",
      phone: "+971 55 936 4637",
      address: "27, 41st - Sharaf DG Metro Station, Bur Dubai, UAE",
      mapUrl: "https://maps.google.com/?q=Sharaf+DG+Metro+Station+Bur+Dubai"
    },
    {
      label: "BRANCH",
      city: "PIMPRI, PUNE",
      phone: "+91 88882 94460",
      address: "Maitri Chowk, Nagar, Pimpri Colony, Near Datta Mandir Road, Sant Tukaram Nagar, Pimpri Colony, Pune, Maharashtra 411018",
      mapUrl: "https://maps.google.com/?q=Pimpri+Colony+Pune+Maharashtra+411018"
    }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src={contactUsBanner}
    alt="Contact Career Hub Technology"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl mx-auto">
              Your gateway to global opportunities - reach out to our expert
              team across Pune and Dubai.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
    href="#contact-form"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
  >
                Send Enquiry <ArrowRight className="w-4 h-4" />
              </a>
              <a
    href="#branches"
    className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
  >
                Our Branches
              </a>
            </div>

          </div>
        </div>
      </section>

      {
    /* Our Branches */
  }
      <section id="branches" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Our Offices
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Our Branches
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Visit us at any of our offices across India and the UAE
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {branches.map((branch, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group"
  >
                  <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <Building2 className="w-5 h-5 text-[#FF6600] group-hover:text-white transition-colors" />
                  </div>
                  <span className="inline-block bg-[#0A192F]/5 text-[#0A192F]/60 px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-3">
                    {branch.label}
                  </span>
                  <h3
    className="text-[#0A192F] text-lg mb-3"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    {branch.city}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span className="text-sm text-[#0A192F]/70">
                      {branch.phone}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 mb-5">
                    <MapPin className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A192F]/60">
                      {branch.address}
                    </span>
                  </div>
                  <a
    href={branch.mapUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-[#FF6600] text-sm hover:underline"
  >
                    View on Map{" "}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Contact Details + Form */
  }
      <section id="contact-form" className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Contact Details
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Your Gateway to Global Opportunities
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Reach out and our team will respond within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {
    /* Contact Info Side */
  }
              <div className="lg:col-span-2">
                <div className="bg-[#0A192F] rounded-2xl p-8 h-full">
                  <h3
    className="text-xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    Head Office - AKURDI, PUNE
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#FF6600]/15 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <div>
                        <span className="text-white/50 text-xs uppercase tracking-wider">
                          Address
                        </span>
                        <p className="text-white/80 text-sm mt-1">
                          Sr No 133/1, Near Gurudwara, Akurdi Station, Pune -
                          411035
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#FF6600]/15 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <div>
                        <span className="text-white/50 text-xs uppercase tracking-wider">
                          Contact Number
                        </span>
                        <p className="text-white/80 text-sm mt-1">
                          +91 88882 14460
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#FF6600]/15 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <div>
                        <span className="text-white/50 text-xs uppercase tracking-wider">
                          Email Address
                        </span>
                        <p className="text-white/80 text-sm mt-1">
                          info@careerhubtechnology.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#FF6600]/15 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <div>
                        <span className="text-white/50 text-xs uppercase tracking-wider">
                          Working Hours
                        </span>
                        <p className="text-white/80 text-sm mt-1">
                          Monday - Saturday: 10:00 AM - 7:00 PM (IST)
                        </p>
                        <p className="text-white/50 text-sm">
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {
    /* Contact Form */
  }
              <div className="lg:col-span-3">
                <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8">
                  <h3
    className="text-xl text-[#0A192F] mb-2"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    Get in Touch
                  </h3>
                  <p className="text-sm text-[#0A192F]/60 mb-8">
                    Fill out the form and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[#0A192F]/70 mb-1.5">
                          Your Name <span className="text-[#FF6600]">*</span>
                        </label>
                        <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    placeholder="Enter your name"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/20 outline-none transition-colors"
  />
                      </div>
                      <div>
                        <label className="block text-sm text-[#0A192F]/70 mb-1.5">
                          Phone Number{" "}
                          <span className="text-[#FF6600]">*</span>
                        </label>
                        <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    required
    placeholder="Enter your phone"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/20 outline-none transition-colors"
  />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[#0A192F]/70 mb-1.5">
                          Email Address{" "}
                          <span className="text-[#FF6600]">*</span>
                        </label>
                        <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="Enter your email"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/20 outline-none transition-colors"
  />
                      </div>
                      <div>
                        <label className="block text-sm text-[#0A192F]/70 mb-1.5">
                          Choose Service{" "}
                          <span className="text-[#FF6600]">*</span>
                        </label>
                        <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/20 outline-none transition-colors"
  >
                          <option value="">Select a service</option>
                          <option value="mechanical-cad">
                            Mechanical CAD Training
                          </option>
                          <option value="electrical-cad">
                            Electrical CAD Training
                          </option>
                          <option value="civil-cad">Civil CAD Training</option>
                          <option value="architecture">
                            Architecture Training
                          </option>
                          <option value="foreign-language">
                            Foreign Language Course
                          </option>
                          <option value="overseas-education">
                            Overseas Education
                          </option>
                          <option value="visa-processing">Visa Processing</option>
                          <option value="passport-services">
                            Passport Services
                          </option>
                          <option value="career-counseling">
                            Career Counseling
                          </option>
                          <option value="business-setup-uae">
                            Business Setup (UAE)
                          </option>
                          <option value="job-placement">Job Placement</option>
                          <option value="franchise">Franchise Enquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#0A192F]/70 mb-1.5">
                        Your Message{" "}
                        <span className="text-[#FF6600]">*</span>
                      </label>
                      <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={5}
    placeholder="Enter your message"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/20 outline-none transition-colors resize"
  />
                    </div>

                    <button
    type="submit"
    disabled={isSubmitting}
    className="mx-auto bg-[#FF6600] text-white px-8 py-3.5 rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
  >
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}{" "}
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="text-xs text-[#0A192F]/40 text-center">
                      By submitting, you agree to be contacted by our team. We
                      respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Find Us on Map */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Find Us
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Find Us on Map
              </h2>
              <p className="text-[#0A192F]/60 max-w-xl mx-auto">
                Sr No 133/1, Near Gurudwara, Akurdi Station, Pune - 411035
              </p>
            </div>

            <div className="bg-white border border-[#0A192F]/6 rounded-2xl overflow-hidden">
              <div className="w-full h-96">
                <iframe
    title="Career Hub Technology Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.77!3d18.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzAwLjAiTiA3M8KwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF6600]/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#FF6600]" />
                  </div>
                  <span className="text-sm text-[#0A192F]/70">
                    Sr No 133/1, Near Gurudwara, Akurdi Station, Pune - 411035
                  </span>
                </div>
                <a
    href="https://maps.google.com/?q=Akurdi+Station+Pune+411035"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-[#FF6600] text-white px-6 py-2.5 rounded-lg hover:bg-[#FF6600]/90 transition-colors text-sm shrink-0"
  >
                  Open in Google Maps{" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  Contact
};

