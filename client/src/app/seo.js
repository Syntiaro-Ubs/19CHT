const DEFAULT_SITE_NAME = "Career Hub Technology";
const DEFAULT_DESCRIPTION =
  "Career Hub Technology helps students and professionals with overseas education, career guidance, training & certification, and visa processing services across Pune (India) and Dubai (UAE).";

const SITE_URL_FALLBACK = "https://careerhubtechnology.com";

const ROUTE_META = {
  "/": {
    title: "Career Hub Technology | Overseas Education, Training & Visa Services",
    description:
      "Overseas education, training & certification, career guidance, and visa processing services across Pune (India) and Dubai (UAE)."
  },
  "/about": {
    title: "About | Career Hub Technology",
    description:
      "Learn about Career Hub Technology: our mission, global footprint, and how we support careers, education, and mobility."
  },
  "/services": {
    title: "Services | Career Hub Technology",
    description:
      "Explore our services including overseas education, visa processing, career guidance, foreign languages, and business setup support."
  },
  "/contact": {
    title: "Contact | Career Hub Technology",
    description:
      "Contact Career Hub Technology for overseas education guidance, training, and visa services. We respond within 24 hours."
  },
  "/founder": {
    title: "Founder | Career Hub Technology",
    description:
      "Meet the founder of Career Hub Technology and learn about the vision behind our global career and mobility services."
  },
  "/business-setup-main-zone": {
    title: "UAE Business Setup (Main Zone) | Career Hub Technology",
    description:
      "Mainland (Main Zone) business setup support in the UAE with guidance on licensing, compliance, and end-to-end setup."
  },
  "/business-setup-free-zone": {
    title: "UAE Business Setup (Free Zone) | Career Hub Technology",
    description:
      "Free Zone business setup support in the UAE with 100% ownership options, licensing guidance, and documentation support."
  }
};

function getSiteUrl() {
  const envUrl = import.meta?.env?.VITE_SITE_URL;
  if (envUrl && String(envUrl).trim()) return String(envUrl).replace(/\/+$/, "");
  if (typeof window !== "undefined" && window.location?.origin) return window.location.origin;
  return SITE_URL_FALLBACK;
}

function upsertMetaTag(selector, attrs) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function setCanonical(url) {
  if (typeof document === "undefined") return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(graph) {
  if (typeof document === "undefined") return;
  let script = document.getElementById("ld-json");
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("id", "ld-json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(graph);
}

function titleFromPathname(pathname) {
  if (!pathname || pathname === "/") return ROUTE_META["/"].title;
  const segment = String(pathname)
    .replace(/\/+$/, "")
    .replace(/^\//, "")
    .split("/")
    .filter(Boolean)
    .pop();
  if (!segment) return `${DEFAULT_SITE_NAME}`;
  const words = segment.split("-").filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  return `${words.join(" ")} | ${DEFAULT_SITE_NAME}`;
}

export function applySeo(pathname) {
  const siteUrl = getSiteUrl();
  const cleanPath = pathname && pathname !== "*" ? String(pathname).replace(/\/+$/, "") : "";
  const meta = ROUTE_META[cleanPath] || ROUTE_META[pathname] || null;

  const title = meta?.title || titleFromPathname(cleanPath);
  const description = meta?.description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${siteUrl}${cleanPath || "/"}`;

  if (typeof document !== "undefined") document.title = title;

  upsertMetaTag('meta[name="description"]', { name: "description", content: description });
  upsertMetaTag('meta[property="og:site_name"]', { property: "og:site_name", content: DEFAULT_SITE_NAME });
  upsertMetaTag('meta[property="og:type"]', { property: "og:type", content: "website" });
  upsertMetaTag('meta[property="og:title"]', { property: "og:title", content: title });
  upsertMetaTag('meta[property="og:description"]', { property: "og:description", content: description });
  upsertMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
  upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
  upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: description });

  setCanonical(canonicalUrl);

  const org = {
    "@type": "Organization",
    name: DEFAULT_SITE_NAME,
    url: siteUrl,
    email: "info@careerhubtechnology.com",
    telephone: "+91 88882 14460",
    sameAs: [
      "https://www.facebook.com/careerhubtech",
      "https://www.instagram.com/careerhubtech_official/",
      "https://www.linkedin.com/company/career-hub-technology/",
      "https://www.youtube.com/@careershubtechnology"
    ]
  };
  const webSite = { "@type": "WebSite", name: DEFAULT_SITE_NAME, url: siteUrl };
  const webPage = { "@type": "WebPage", name: title, url: canonicalUrl, description, isPartOf: webSite };
  setJsonLd({ "@context": "https://schema.org", "@graph": [org, webSite, webPage] });
}

