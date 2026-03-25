import { useState, useRef } from "react";
import {
  FileText,
  Search,
  Users,
  Briefcase,
  ArrowRight,
  Upload,
  Wrench,
  Building2,
  Landmark,
  HeartPulse,
  Monitor,
  Hotel,
  Languages,
  Truck,
  Factory,
  Banknote,
  GraduationCap,
  ShoppingBag
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
function JobPlacements() {
  const apiBaseUrl =
    import.meta.env.PROD && import.meta.env.VITE_API_BASE_URL
      ? import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "")
      : "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    message: ""
  });
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    setFileName(file?.name || "");
  };
  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!resumeFile) {
      alert("Please upload your resume (PDF, DOC, or DOCX).");
      return;
    }
    if (resumeFile.size > 5 * 1024 * 1024) {
      alert("Resume must be 5 MB or less.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await readFileAsDataUrl(resumeFile);
      const dataUrl = typeof result === "string" ? result : "";
      const match = dataUrl.match(/^data:(.*?);base64,(.*)$/);
      const resumeContentType = match?.[1] || resumeFile.type || "";
      const resumeBase64 = match?.[2];
      if (!resumeBase64) throw new Error("Failed to read resume file.");

      const res = await fetch(`${apiBaseUrl}/api/job-placement`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          resumeFileName: resumeFile.name,
          resumeContentType,
          resumeBase64
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit application");
      }

      alert(
        "Thank you for your application! Our placement team will contact you within 24 hours."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        education: "",
        message: ""
      });
      setFileName("");
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      alert(err?.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const stats = [
    { value: "98%", label: "Placement Success Rate" },
    { value: "15+", label: "Countries Covered" },
    { value: "7,000+", label: "Professionals Placed" },
    { value: "10+", label: "Years of Experience" }
  ];
  const steps = [
    {
      number: "01",
      icon: <FileText className="w-6 h-6" />,
      title: "Submit Application",
      description: "Fill out the placement form with your details, education, and upload your resume."
    },
    {
      number: "02",
      icon: <Search className="w-6 h-6" />,
      title: "Profile Review",
      description: "Our placement team reviews your profile and matches it with suitable opportunities."
    },
    {
      number: "03",
      icon: <Users className="w-6 h-6" />,
      title: "Interview Prep",
      description: "We prepare you with mock interviews, resume coaching, and career guidance sessions."
    },
    {
      number: "04",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Get Placed",
      description: "We connect you directly with employers and support until you land your dream job."
    }
  ];
  const industries = [
    { icon: <Wrench className="w-5 h-5" />, name: "Mechanical Engineering" },
    { icon: <Building2 className="w-5 h-5" />, name: "Civil & Construction" },
    {
      icon: <Landmark className="w-5 h-5" />,
      name: "Architecture & Interior"
    },
    { icon: <HeartPulse className="w-5 h-5" />, name: "Healthcare & Nursing" },
    { icon: <Monitor className="w-5 h-5" />, name: "IT & Software" },
    { icon: <Hotel className="w-5 h-5" />, name: "Hospitality & Tourism" },
    {
      icon: <Languages className="w-5 h-5" />,
      name: "German / Japanese Industry"
    },
    {
      icon: <Truck className="w-5 h-5" />,
      name: "Logistics & Supply Chain"
    },
    { icon: <Factory className="w-5 h-5" />, name: "Manufacturing" },
    { icon: <Banknote className="w-5 h-5" />, name: "Banking & Finance" },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      name: "Education & Training"
    },
    { icon: <ShoppingBag className="w-5 h-5" />, name: "Retail & Sales" }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwbGFjZW1lbnQlMjBwcm9mZXNzaW9uYWwlMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzczNDA1NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Job Placement Services"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Job Placement Services
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl mx-auto">
              We provide comprehensive job placement assistance to help you
              secure your ideal career opportunity - in India, UAE, and beyond.
            </p>
          </div>
        </div>
      </section>

      {
    /* Stats Section */
  }
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 text-center hover:border-[#FF6600]/30 hover:shadow-lg transition-all"
  >
                <div
    className="text-3xl md:text-4xl text-[#FF6600] mb-2"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                  {stat.value}
                </div>
                <div className="text-sm text-[#0A192F]/60">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {
    /* How Placement Works */
  }
      <section className="py-20 bg-[#0A192F]/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                The Process
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                How Placement Works
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Four simple steps from application to your dream job
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 relative hover:border-[#FF6600]/30 hover:shadow-lg transition-all group"
  >
                  <span
    className="text-5xl text-[#FF6600]/10 absolute top-4 right-5"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    {step.number}
                  </span>
                  <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <span className="text-[#FF6600] group-hover:text-white transition-colors">
                      {step.icon}
                    </span>
                  </div>
                  <h3
    className="text-[#0A192F] text-lg mb-3"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#0A192F]/60">
                    {step.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Industries We Cover */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Industries We Cover
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                We Place Across All Sectors
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                From CAD engineering to healthcare, we have placement networks in
                every major industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-xl p-5 flex items-center gap-3 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group cursor-pointer"
  >
                  <div className="bg-[#FF6600]/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#FF6600] transition-colors">
                    <span className="text-[#FF6600] group-hover:text-white transition-colors">
                      {industry.icon}
                    </span>
                  </div>
                  <span className="text-sm text-[#0A192F]">
                    {industry.name}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Job Placement Application Form */
  }
      <section id="application" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Get Started
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Job Placement Application
              </h2>
              <p className="text-[#0A192F]/60">
                All fields marked with{" "}
                <span className="text-[#FF6600]">*</span> are required
              </p>
            </div>

            <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {
    /* Full Name */
  }
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      First Name <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="text"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    required
    placeholder="Enter your first name"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Last Name <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="text"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    required
    placeholder="Enter your last name"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                </div>

                {
    /* Email & Phone */
  }
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Email <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="Enter your email address"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Phone <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    required
    placeholder="Enter your phone number"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                </div>

                {
    /* Education & Upload Resume */
  }
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Education <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="text"
    name="education"
    value={formData.education}
    onChange={handleChange}
    required
    placeholder="Enter your highest education qualification"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Upload Resume <span className="text-[#FF6600]">*</span>
                    </label>
                    <div
    onClick={() => fileInputRef.current?.click()}
    className="w-full px-4 py-2.5 rounded-lg border border-dashed border-[#0A192F]/15 bg-[#FAF9F6] text-[#0A192F] cursor-pointer hover:border-[#FF6600]/40 transition-all flex items-center gap-3"
  >
                      <div className="bg-[#FF6600]/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        <Upload className="w-4 h-4 text-[#FF6600]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-[#0A192F] truncate">
                          {fileName || "Click to upload"}
                        </p>
                        <p className="text-xs text-[#0A192F]/40">
                          PDF, DOC, DOCX - Max 5 MB
                        </p>
                      </div>
                    </div>
                    <input
    ref={fileInputRef}
    type="file"
    accept=".pdf,.doc,.docx"
    onChange={handleFileChange}
    className="hidden"
  />
                  </div>
                </div>

                {
    /* Message */
  }
                <div>
                  <label className="block text-sm text-[#0A192F] mb-2">
                    Message{" "}
                    <span className="text-[#0A192F]/40">(optional)</span>
                  </label>
                  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows={4}
    placeholder="Any additional information you'd like to share"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all resize min-h-[120px] min-w-[200px] max-w-full"
  />
                </div>

                {
    /* Submit */
  }
                <div className="flex justify-center">
                  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-transparent text-[#FF6600] border-2 border-[#FF6600] px-16 py-3.5 rounded-full hover:bg-green-600 hover:border-green-600 hover:text-white active:bg-green-700 active:border-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>

                <p className="text-xs text-[#0A192F]/40 text-center">
                  By submitting, you consent to our team reviewing your profile
                  for placement opportunities.
                </p>
              </form>
            </div>

            {
    /* View Job Listings Link */
  }
            <div className="text-center mt-10">
              <p className="text-[#0A192F]/60 mb-3">
                Want to browse current openings instead?
              </p>
              <Link
    to="/careers"
    className="inline-flex items-center gap-2 text-[#FF6600] hover:text-[#FF6600]/80 transition-colors"
  >
                View All Job Listings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  JobPlacements
};
