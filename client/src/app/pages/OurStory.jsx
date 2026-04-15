import { Target, TrendingUp, Globe2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
function OurStory() {
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative text-white py-32">
        <div className="absolute inset-0">
          <ImageWithFallback
    src="https://images.unsplash.com/photo-1758873271824-a3216c80d1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwam91cm5leSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzM1ODQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Our Story - Career Hub Technology"
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-[#0A192F]/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Built on Purpose.<br />Driven by Impact.
            </h1>
          </div>
        </div>
      </section>

      {
    /* Main Story Content */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Career Hub Technology was founded with a vision to simplify international careers, education pathways, and business mobility. Drawing from real cross-border exposure and industry experience, the platform was created to address common challenges faced by professionals, students, and organisations navigating global systems.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                From overseas recruitment and staffing to immigration support, study abroad guidance, and business setup services, Career Hub Technology brings structured processes under one trusted umbrella - removing uncertainty and replacing it with clarity.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                What started as a focused consulting initiative has evolved into a growing global network of employers, institutions, and mobility partners. Our growth has been driven by credibility, compliance, and long-term client success rather than shortcuts or volume.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                At the core of Career Hub Technology is a commitment to ethical consulting, transparent communication, and outcome-driven solutions. We believe global opportunities should be accessible, informed, and aligned with individual goals - not complicated by misinformation or risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* Milestones Section */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                Milestones
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                From a bold vision to a globally connected consultancy
              </p>
            </div>

            {
    /* Timeline */
  }
            <div className="relative">
              {
    /* Timeline Line */
  }
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />

              {
    /* Timeline Items */
  }
              <div className="space-y-12">
                {
    /* 2015 */
  }
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-2">The Vision Takes Shape</h3>
                      <p className="text-muted-foreground">
                        Foundation started with a clear belief - global opportunities should be accessible, transparent, and achievable without borders.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:justify-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      2015
                    </div>
                  </div>
                </div>

                {
    /* 2017 */
  }
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-2">Official Establishment</h3>
                      <p className="text-muted-foreground">
                        Career Hub Technology was formally established, entering the market with structured consulting solutions for careers, education, and international mobility.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-1 flex items-center justify-start md:justify-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      2017
                    </div>
                  </div>
                </div>

                {
    /* 2018 */
  }
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-2">Expansion into the Middle East</h3>
                      <p className="text-muted-foreground">
                        Presence grew across key Middle Eastern regions, supporting overseas careers and business mobility in the UAE and beyond.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:justify-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      2018
                    </div>
                  </div>
                </div>

                {
    /* 2021 */
  }
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-2">Global Reach Expansion</h3>
                      <p className="text-muted-foreground">
                        Extended services across multiple European destinations, supporting clients with region-specific guidance and compliant global processes.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-1 flex items-center justify-start md:justify-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Looking Forward Section */
  }
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full mb-4">
                Looking Forward
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                The Story Ahead
              </h2>
              <p className="text-xl text-muted-foreground">
                Our next chapter is being written - one success story at a time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {
    /* Card 1 */
  }
              <div className="bg-accent p-8 rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  OUR MISSION CONTINUES TO EVOLVE
                </h3>
                <p className="text-muted-foreground">
                  As global landscapes change, Career Hub Technology keeps expanding into new regions and opportunities, creating stronger pathways for careers, education, and business worldwide.
                </p>
              </div>

              {
    /* Card 2 */
  }
              <div className="bg-accent p-8 rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-4">02</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  EVERY JOURNEY SHAPES OUR LEGACY
                </h3>
                <p className="text-muted-foreground">
                  Each client success becomes a meaningful chapter in our story - reflecting trust, transformation, and real global outcomes we help achieve.
                </p>
              </div>

              {
    /* Card 3 */
  }
              <div className="bg-accent p-8 rounded-2xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-4">03</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  THE FUTURE IS JUST BEGINNING
                </h3>
                <p className="text-muted-foreground">
                  With growing partnerships and limitless potential, Career Hub Technology is building the next chapters of global success, opportunity, and long-term impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
export {
  OurStory
};
