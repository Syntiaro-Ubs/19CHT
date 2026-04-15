import { Suspense, lazy, useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLocation } from "react-router";
import { applySeo } from "./seo";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Founder = lazy(() => import("./pages/Founder").then((module) => ({ default: module.Founder })));
const OurStory = lazy(() => import("./pages/OurStory").then((module) => ({ default: module.OurStory })));
const WhyUs = lazy(() => import("./pages/WhyUs").then((module) => ({ default: module.WhyUs })));
const Teams = lazy(() => import("./pages/Teams").then((module) => ({ default: module.Teams })));
const Testimonials = lazy(() => import("./pages/Testimonials").then((module) => ({ default: module.Testimonials })));
const Gallery = lazy(() => import("./pages/Gallery").then((module) => ({ default: module.Gallery })));
const Services = lazy(() => import("./pages/Services").then((module) => ({ default: module.Services })));
const PassportServices = lazy(() => import("./pages/PassportServices").then((module) => ({ default: module.PassportServices })));
const ForeignLanguages = lazy(() => import("./pages/ForeignLanguages").then((module) => ({ default: module.ForeignLanguages })));
const Courses = lazy(() => import("./pages/Courses").then((module) => ({ default: module.Courses })));
const Franchise = lazy(() => import("./pages/Franchise").then((module) => ({ default: module.Franchise })));
const JobPlacements = lazy(() => import("./pages/JobPlacements").then((module) => ({ default: module.JobPlacements })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
const OverseasEducation = lazy(() => import("./pages/OverseasEducation").then((module) => ({ default: module.OverseasEducation })));
const VisaProcessing = lazy(() => import("./pages/VisaProcessing").then((module) => ({ default: module.VisaProcessing })));
const CareerCounseling = lazy(() => import("./pages/CareerCounseling").then((module) => ({ default: module.CareerCounseling })));
const BusinessSetupMainZone = lazy(() => import("./pages/BusinessSetupMainZone").then((module) => ({ default: module.BusinessSetupMainZone })));
const BusinessSetupFreeZone = lazy(() => import("./pages/BusinessSetupFreeZone").then((module) => ({ default: module.BusinessSetupFreeZone })));
const GermanLanguage = lazy(() => import("./pages/GermanLanguage").then((module) => ({ default: module.GermanLanguage })));
const JapaneseLanguage = lazy(() => import("./pages/JapaneseLanguage").then((module) => ({ default: module.JapaneseLanguage })));
const IeltsTraining = lazy(() => import("./pages/IeltsTraining").then((module) => ({ default: module.IeltsTraining })));
const AutocadTraining = lazy(() => import("./pages/AutocadTraining").then((module) => ({ default: module.AutocadTraining })));
const CatiaTraining = lazy(() => import("./pages/CatiaTraining").then((module) => ({ default: module.CatiaTraining })));
const CreoTraining = lazy(() => import("./pages/CreoTraining").then((module) => ({ default: module.CreoTraining })));
const SolidworksTraining = lazy(() => import("./pages/SolidworksTraining").then((module) => ({ default: module.SolidworksTraining })));
const UnigraphicsTraining = lazy(() => import("./pages/UnigraphicsTraining").then((module) => ({ default: module.UnigraphicsTraining })));
const PlasticProductDesign = lazy(() => import("./pages/PlasticProductDesign").then((module) => ({ default: module.PlasticProductDesign })));
const BiwWeldingFixture = lazy(() => import("./pages/BiwWeldingFixture").then((module) => ({ default: module.BiwWeldingFixture })));
const NxCadTraining = lazy(() => import("./pages/NxCadTraining").then((module) => ({ default: module.NxCadTraining })));
const AutocadElectrical = lazy(() => import("./pages/AutocadElectrical").then((module) => ({ default: module.AutocadElectrical })));
const EplanTraining = lazy(() => import("./pages/EplanTraining").then((module) => ({ default: module.EplanTraining })));
const CivilAutocadTraining = lazy(() => import("./pages/CivilAutocadTraining").then((module) => ({ default: module.CivilAutocadTraining })));
const EtabsTraining = lazy(() => import("./pages/EtabsTraining").then((module) => ({ default: module.EtabsTraining })));
const BimCivilArchTraining = lazy(() => import("./pages/BimCivilArchTraining").then((module) => ({ default: module.BimCivilArchTraining })));
const ExcelTraining = lazy(() => import("./pages/ExcelTraining").then((module) => ({ default: module.ExcelTraining })));
const RevitMepTraining = lazy(() => import("./pages/RevitMepTraining").then((module) => ({ default: module.RevitMepTraining })));
const EstimationCostingTraining = lazy(() => import("./pages/EstimationCostingTraining").then((module) => ({ default: module.EstimationCostingTraining })));
const StaadProTraining = lazy(() => import("./pages/StaadProTraining").then((module) => ({ default: module.StaadProTraining })));
const RevitArchitectureTraining = lazy(() => import("./pages/RevitArchitectureTraining").then((module) => ({ default: module.RevitArchitectureTraining })));
const GoogleSketchUpTraining = lazy(() => import("./pages/GoogleSketchUpTraining").then((module) => ({ default: module.GoogleSketchUpTraining })));
const VrayTraining = lazy(() => import("./pages/VrayTraining").then((module) => ({ default: module.VrayTraining })));
const ArchAutoCADTraining = lazy(() => import("./pages/ArchAutoCADTraining").then((module) => ({ default: module.ArchAutoCADTraining })));
const ArchVrayTraining = lazy(() => import("./pages/ArchVrayTraining").then((module) => ({ default: module.ArchVrayTraining })));
const ArchSketchUpTraining = lazy(() => import("./pages/ArchSketchUpTraining").then((module) => ({ default: module.ArchSketchUpTraining })));
const ArchLumionTraining = lazy(() => import("./pages/ArchLumionTraining").then((module) => ({ default: module.ArchLumionTraining })));
const Arch3dsMaxTraining = lazy(() => import("./pages/Arch3dsMaxTraining").then((module) => ({ default: module.Arch3dsMaxTraining })));
const ArchPhotoshopTraining = lazy(() => import("./pages/ArchPhotoshopTraining").then((module) => ({ default: module.ArchPhotoshopTraining })));
const Careers = lazy(() => import("./pages/Careers").then((module) => ({ default: module.Careers })));
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    applySeo(pathname);
  }, [pathname]);
  return null;
}
function Layout({ children }) {
  return <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>;
}
function PageLoader() {
  return <div className="min-h-[50vh] flex items-center justify-center bg-white">
      <p className="text-muted-foreground">Loading...</p>
    </div>;
}
function renderPage(PageComponent) {
  return <Suspense fallback={<PageLoader />}>
      <PageComponent />
    </Suspense>;
}
function NotFound() {
  return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      </div>
    </div>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>{renderPage(Home)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/about",
    element: <Layout>{renderPage(About)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/founder",
    element: <Layout>{renderPage(Founder)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/our-story",
    element: <Layout>{renderPage(OurStory)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/why-us",
    element: <Layout>{renderPage(WhyUs)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/teams",
    element: <Layout>{renderPage(Teams)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/testimonials",
    element: <Layout>{renderPage(Testimonials)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/gallery",
    element: <Layout>{renderPage(Gallery)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/services",
    element: <Layout>{renderPage(Services)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/passport-services",
    element: <Layout>{renderPage(PassportServices)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/foreign-languages",
    element: <Layout>{renderPage(ForeignLanguages)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/courses",
    element: <Layout>{renderPage(Courses)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/franchise",
    element: <Layout>{renderPage(Franchise)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/job-placements",
    element: <Layout>{renderPage(JobPlacements)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/contact",
    element: <Layout>{renderPage(Contact)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/overseas-education",
    element: <Layout>{renderPage(OverseasEducation)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/visa-processing",
    element: <Layout>{renderPage(VisaProcessing)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/career-counseling",
    element: <Layout>{renderPage(CareerCounseling)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/business-setup-main-zone",
    element: <Layout>{renderPage(BusinessSetupMainZone)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/business-setup-free-zone",
    element: <Layout>{renderPage(BusinessSetupFreeZone)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/german-language",
    element: <Layout>{renderPage(GermanLanguage)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/japanese-language",
    element: <Layout>{renderPage(JapaneseLanguage)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/ielts-training",
    element: <Layout>{renderPage(IeltsTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/autocad-training",
    element: <Layout>{renderPage(AutocadTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/catia-training",
    element: <Layout>{renderPage(CatiaTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/creo-training",
    element: <Layout>{renderPage(CreoTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/solidworks-training",
    element: <Layout>{renderPage(SolidworksTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/unigraphics-training",
    element: <Layout>{renderPage(UnigraphicsTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/plastic-product-design",
    element: <Layout>{renderPage(PlasticProductDesign)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/biw-welding-fixture",
    element: <Layout>{renderPage(BiwWeldingFixture)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/nx-cad-training",
    element: <Layout>{renderPage(NxCadTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/autocad-electrical",
    element: <Layout>{renderPage(AutocadElectrical)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/eplan-training",
    element: <Layout>{renderPage(EplanTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/civil-autocad-training",
    element: <Layout>{renderPage(CivilAutocadTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/etabs-training",
    element: <Layout>{renderPage(EtabsTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/bim-civil-arch-training",
    element: <Layout>{renderPage(BimCivilArchTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/excel-training",
    element: <Layout>{renderPage(ExcelTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/revit-mep-training",
    element: <Layout>{renderPage(RevitMepTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/estimation-costing-training",
    element: <Layout>{renderPage(EstimationCostingTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/staad-pro-training",
    element: <Layout>{renderPage(StaadProTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/revit-architecture-training",
    element: <Layout>{renderPage(RevitArchitectureTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/google-sketchup-training",
    element: <Layout>{renderPage(GoogleSketchUpTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/vray-training",
    element: <Layout>{renderPage(VrayTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-autocad-training",
    element: <Layout>{renderPage(ArchAutoCADTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-vray-training",
    element: <Layout>{renderPage(ArchVrayTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-sketchup-training",
    element: <Layout>{renderPage(ArchSketchUpTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-lumion-training",
    element: <Layout>{renderPage(ArchLumionTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-3dsmax-training",
    element: <Layout>{renderPage(Arch3dsMaxTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-photoshop-training",
    element: <Layout>{renderPage(ArchPhotoshopTraining)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/careers",
    element: <Layout>{renderPage(Careers)}</Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>
  }
]);
export {
  router
};
