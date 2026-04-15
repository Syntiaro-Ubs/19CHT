import { useState } from "react";
import {
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  Rocket,
  FileText,
  Handshake
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function Franchise() {
  const apiBaseUrl =
    import.meta.env.PROD && import.meta.env.VITE_API_BASE_URL
      ? import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "")
      : "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    investmentRange: "",
    experience: "",
    reason: ""
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
      const res = await fetch(`${apiBaseUrl}/api/franchise`, {
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

        throw new Error(errorMessage || "Failed to submit application");
      }
      alert(
        "Thank you for your franchise application! Our team will contact you shortly."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        investmentRange: "",
        experience: "",
        reason: ""
      });
    } catch (err) {
      alert(err?.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const whyPartner = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Established Brand",
      description: "Leverage the trusted Career Hub Technology name with 10+ years of market credibility."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Training & Support",
      description: "Comprehensive onboarding, staff training, and ongoing operational support."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proven Business Model",
      description: "A structured, tested curriculum and service framework ready to deploy."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High ROI Potential",
      description: "Growing demand for skill training, visa, and career services across India."
    }
  ];
  const steps = [
    {
      number: "01",
      icon: <FileText className="w-6 h-6" />,
      title: "Submit Application",
      description: "Fill out the franchise enquiry form with your details and investment capacity."
    },
    {
      number: "02",
      icon: <Users className="w-6 h-6" />,
      title: "Initial Discussion",
      description: "Our franchise team will contact you to understand your goals and location."
    },
    {
      number: "03",
      icon: <Handshake className="w-6 h-6" />,
      title: "Agreement & Onboarding",
      description: "Sign the franchise agreement and complete the official onboarding process."
    },
    {
      number: "04",
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch & Grow",
      description: "Open your Career Hub Technology centre and start building your business."
    }
  ];
  const stats = [
    { value: "10+", label: "Years Trusted" },
    { value: "7,000+", label: "Trained" },
    { value: "98%", label: "Success Rate" }
  ];
  return <div className="bg-[#FAF9F6]">
      {
    /* Hero Section */
  }
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F]">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFuY2hpc2UlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWkxfGVufDF8fHx8MTc3MzQwNDczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Franchise Opportunity"
    className="w-full h-full object-cover opacity-25"
  />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1
    className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
              Apply For Franchise
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl mx-auto">
              Fill out the form below and our team will contact you to discuss
              franchise opportunities.
            </p>
          </div>
        </div>
      </section>

      {
    /* Why Partner With Us */
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#FF6600] mb-3 tracking-wider uppercase text-sm">
                Why Partner With Us
              </span>
              <h2
    className="text-3xl md:text-4xl text-[#0A192F] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                Build Your Business with a Trusted Brand
              </h2>
              <p className="text-[#0A192F]/60 max-w-2xl mx-auto">
                Join India's growing network of Career Hub Technology franchise
                centres
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyPartner.map((item, idx) => <div
    key={idx}
    className="bg-white border border-[#0A192F]/6 rounded-2xl p-6 hover:border-[#FF6600]/30 hover:shadow-lg transition-all group"
  >
                  <div className="bg-[#FF6600]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6600] transition-colors">
                    <span className="text-[#FF6600] group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <h3
    className="text-[#0A192F] text-lg mb-3"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0A192F]/60">
                    {item.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* The Process */
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
                How It Works
              </h2>
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
    /* Franchise Application Form */
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
                Franchise Application Form
              </h2>
              <p className="text-[#0A192F]/60">
                All fields marked with <span className="text-[#FF6600]">*</span>{" "}
                are required
              </p>
            </div>

            <div className="bg-white border border-[#0A192F]/6 rounded-2xl p-8 md:p-10">
              {
    /* Stats Bar */
  }
              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map((stat, idx) => <div
    key={idx}
    className="bg-[#0A192F] rounded-xl p-4 text-center"
  >
                    <div
    className="text-[#FF6600] text-2xl md:text-3xl mb-1"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </div>)}
              </div>

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
    placeholder="Enter Your First Name"
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
    placeholder="Enter Your Last Name"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                </div>

                {
    /* Email & Mobile */
  }
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Email Address <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="Enter Your Email Address"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Mobile Number <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="tel"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    required
    placeholder="Enter Your Mobile Number"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                </div>

                {
    /* City & State */
  }
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      City <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="text"
    name="city"
    value={formData.city}
    onChange={handleChange}
    required
    placeholder="Enter Your City"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      State <span className="text-[#FF6600]">*</span>
                    </label>
                    <input
    type="text"
    name="state"
    value={formData.state}
    onChange={handleChange}
    required
    placeholder="Enter Your State"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                </div>

                {
    /* Investment Range & Business Experience */
  }
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Investment Range <span className="text-[#FF6600]">*</span>
                    </label>
                    <select
    name="investmentRange"
    value={formData.investmentRange}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all appearance-none"
  >
                      <option value="">Select an option</option>
                      <option value="5-10">-5 - 10 Lakhs</option>
                      <option value="10-15">-10 - 15 Lakhs</option>
                      <option value="15-20">-15 - 20 Lakhs</option>
                      <option value="20+">Above -20 Lakhs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A192F] mb-2">
                      Business Experience{" "}
                      <span className="text-[#0A192F]/40">(optional)</span>
                    </label>
                    <input
    type="text"
    name="experience"
    value={formData.experience}
    onChange={handleChange}
    placeholder="Share your relevant background (optional)"
    className="w-full px-4 py-3 rounded-lg border border-[#0A192F]/10 bg-[#FAF9F6] text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/30 outline-none transition-all"
  />
                  </div>
                </div>

                {
    /* Reason */
  }
                <div>
                  <label className="block text-sm text-[#0A192F] mb-2">
                    Why do you want this franchise?{" "}
                    <span className="text-[#FF6600]">*</span>
                  </label>
                  <textarea
    name="reason"
    value={formData.reason}
    onChange={handleChange}
    required
    rows={4}
    placeholder="Why do you want this franchise?"
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
    className="bg-transparent text-[#FF6600] border-2 border-[#FF6600] px-16 py-3.5 rounded-full hover:bg-green-600 hover:border-green-600 hover:text-white active:bg-green-700 active:border-green-700 transition-colors flex items-center justify-center gap-2 text-[11px] disabled:opacity-60 disabled:cursor-not-allowed"
  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>

                <p className="text-xs text-[#0A192F]/40 text-center">
                  By submitting, you agree to be contacted by our franchise team
                  regarding this opportunity.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  Franchise
};

