import { ChevronRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif font-bold text-primary">
              COAST
            </h1>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
              <a href="#" className="hover:text-primary transition">
                About
              </a>
              <a href="#" className="hover:text-primary transition">
                Destinations
              </a>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">
                EXPLORE THE COAST
              </p>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Discover Your Next Beach Escape
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                From pristine sandy shores to hidden coves, find the perfect
                beach destination for your next adventure. Whether you're
                seeking relaxation or adventure, the coast awaits.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                Start Exploring <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
                alt="Beach waves"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 01 - Getting Started */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                alt="Surfing at sunset"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-7xl md:text-8xl font-serif font-bold text-muted/40 -mb-8 md:-mb-12">
                01
              </div>
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">
                GETTING STARTED
              </p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Choose Your Vibe
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Whether you're a thrill-seeker looking for surfing
                opportunities, a relaxation enthusiast seeking tranquility, or
                an adventurer exploring hidden coves, every beach has something
                special to offer. Understanding what draws you to the coast is
                the first step in planning your perfect getaway.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                read more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Beach Essentials */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="text-7xl md:text-8xl font-serif font-bold text-muted/40 -mb-8 md:-mb-12">
                02
              </div>
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">
                BEACH ESSENTIALS
              </p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Pack Smart, Play Safe
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                The beauty of a beach day is that you don't need much gear. A
                good sunscreen with SPF protection, comfortable clothing, and a
                hat are essential. Bring a reusable water bottle to stay
                hydrated, a light cover-up, and don't forget your camera to
                capture those picture-perfect moments.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                read more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                alt="Beach essentials and sunscreen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Know Before You Go */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
                alt="Ocean waves and weather"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-7xl md:text-8xl font-serif font-bold text-muted/40 -mb-8 md:-mb-12">
                03
              </div>
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">
                KNOW BEFORE YOU GO
              </p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Check the Conditions
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Before heading out, always check the weather forecast and tide
                times. Download a tide app to your phone so you know what to
                expect. Read local beach reports, understand ocean safety
                guidelines, and respect warning flags. Knowing the conditions
                helps you plan the perfect day and stay safe.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                read more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                COAST
              </h3>
              <p className="text-muted-foreground">
                Discover the beauty of coastal adventures. From pristine beaches
                to hidden coves, explore the world's most beautiful shores.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-foreground">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-foreground">
                  More Info
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8">
            <p className="text-muted-foreground text-sm">
              Copyright © 2024 COAST. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
