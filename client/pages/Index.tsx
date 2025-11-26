import { ChevronRight, Menu, X, Waves, MapPin, Star } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.2 },
  viewport: { once: true },
};

function ParallaxImage({ children, offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className="w-full h-full">
      {children}
    </motion.div>
  );
}

function ParallaxSection({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      {children}
    </motion.div>
  );
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const destinations = [
    {
      name: "Bali, Indonesia",
      image: "https://cdn.builder.io/api/v1/image/assets%2F38a0e0323de74fea99834744df0eb6e3%2F97a11d65245f4c6ea0307a7ede6c7a33?format=webp&width=800",
      description: "Crystal clear waters and pristine white sand beaches",
      rating: 4.9,
      tag: "Tropical Paradise",
    },
    {
      name: "Maldives",
      image: "https://cdn.builder.io/api/v1/image/assets%2F38a0e0323de74fea99834744df0eb6e3%2Fa5baa7ddcb9645bcbd4db3309402232a?format=webp&width=800",
      description: "Overwater bungalows with turquoise lagoons",
      rating: 5.0,
      tag: "Luxury Escape",
    },
    {
      name: "Santorini, Greece",
      image: "https://cdn.builder.io/api/v1/image/assets%2F38a0e0323de74fea99834744df0eb6e3%2F7c9fc19e980549c3afdf995b2bdf87f1?format=webp&width=800",
      description: "Stunning sunsets and golden sandy beaches",
      rating: 4.8,
      tag: "Romantic Getaway",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Travel Blogger",
      text: "COAST helped me discover hidden beach gems I never would have found otherwise. The guides are detailed and accurate.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Marcus Johnson",
      role: "Adventure Enthusiast",
      text: "The best resource for planning beach adventures. The tips on safety and preparation are incredibly helpful.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      role: "Photography Professional",
      text: "Perfect for finding beautiful beaches with amazing natural lighting. Already used 3 locations for my shoots.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-3xl font-serif font-bold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              COAST
            </motion.h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {["Home", "Destinations", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-primary transition text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 flex flex-col gap-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {["Home", "Destinations", "About", "Contact"].map((item) => (
                <a key={item} href="#" className="text-sm font-medium hover:text-primary transition">
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <ParallaxImage offset={80}>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-background to-background"></div>
        </ParallaxImage>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <motion.p
                className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Waves className="w-4 h-4" />
                EXPLORE THE COAST
              </motion.p>
              <motion.h2
                className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Discover Your Next Beach Escape
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                From pristine sandy shores to hidden coves, find the perfect beach destination for your next adventure. Whether you're seeking relaxation or adventure, the coast awaits.
              </motion.p>
              <motion.button
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all bg-primary/10 px-6 py-3 rounded-lg hover:bg-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Exploring <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <ParallaxImage offset={-40}>
              <motion.div
                className="relative h-96 md:h-full rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
                  alt="Beach waves"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ParallaxImage>
          </div>
        </div>
      </section>

      {/* Section 01 - Getting Started */}
      <ParallaxSection>
        <motion.section
          className="py-16 md:py-24 relative"
          {...staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <ParallaxImage offset={30}>
                <motion.div
                  className="relative h-80 md:h-96 rounded-lg overflow-hidden order-2 md:order-1 group"
                  {...fadeInUp}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 group-hover:from-primary/20 transition-all duration-300"></div>
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                    alt="Surfing at sunset"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </ParallaxImage>

              <motion.div className="order-1 md:order-2" {...fadeInUp}>
                <div className="text-7xl md:text-8xl font-serif font-bold text-muted/40 -mb-8 md:-mb-12">01</div>
                <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">GETTING STARTED</p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Choose Your Vibe
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  Whether you're a thrill-seeker looking for surfing opportunities, a relaxation enthusiast seeking tranquility, or an adventurer exploring hidden coves, every beach has something special to offer. Understanding what draws you to the coast is the first step in planning your perfect getaway.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  read more <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Section 02 - Beach Essentials */}
      <ParallaxSection>
        <motion.section
          className="py-16 md:py-24 relative"
          {...staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div {...fadeInUp}>
                <div className="text-7xl md:text-8xl font-serif font-bold text-muted/40 -mb-8 md:-mb-12">02</div>
                <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">BEACH ESSENTIALS</p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Pack Smart, Play Safe
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  The beauty of a beach day is that you don't need much gear. A good sunscreen with SPF protection, comfortable clothing, and a hat are essential. Bring a reusable water bottle to stay hydrated, a light cover-up, and don't forget your camera to capture those picture-perfect moments.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  read more <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>

              <ParallaxImage offset={-30}>
                <motion.div
                  className="relative h-80 md:h-96 rounded-lg overflow-hidden group"
                  {...fadeInUp}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 group-hover:from-primary/20 transition-all duration-300"></div>
                  <img
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                    alt="Beach essentials and sunscreen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </ParallaxImage>
            </div>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Section 03 - Know Before You Go */}
      <ParallaxSection>
        <motion.section
          className="py-16 md:py-24 relative"
          {...staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <ParallaxImage offset={30}>
                <motion.div
                  className="relative h-80 md:h-96 rounded-lg overflow-hidden order-2 md:order-1 group"
                  {...fadeInUp}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 group-hover:from-primary/20 transition-all duration-300"></div>
                  <img
                    src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
                    alt="Ocean waves and weather"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </ParallaxImage>

              <motion.div className="order-1 md:order-2" {...fadeInUp}>
                <div className="text-7xl md:text-8xl font-serif font-bold text-muted/40 -mb-8 md:-mb-12">03</div>
                <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">KNOW BEFORE YOU GO</p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Check the Conditions
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  Before heading out, always check the weather forecast and tide times. Download a tide app to your phone so you know what to expect. Read local beach reports, understand ocean safety guidelines, and respect warning flags. Knowing the conditions helps you plan the perfect day and stay safe.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  read more <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Featured Destinations Section */}
      <ParallaxSection>
        <motion.section
          className="py-16 md:py-24 relative"
          {...staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
            >
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                FEATURED DESTINATIONS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Explore Stunning Beaches
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover some of the world's most beautiful and accessible beach destinations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((dest, idx) => (
                <ParallaxImage key={idx} offset={idx === 1 ? 0 : 20}>
                  <motion.div
                    className="group cursor-pointer h-full flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative h-72 rounded-2xl overflow-hidden mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-border/40 group-hover:border-primary/50">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent z-10 group-hover:from-primary/50 group-hover:via-primary/10 transition-all duration-300"></div>
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        className="absolute top-4 right-4 z-20 bg-primary/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-xs font-bold text-primary-foreground tracking-wide">{dest.tag}</span>
                      </motion.div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-card via-card to-secondary/10 p-6 rounded-2xl border border-border/30 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">{dest.name}</h3>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{dest.description}</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                        <div className="flex items-center gap-1.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 transition-all ${
                                i < Math.floor(dest.rating)
                                  ? "fill-primary text-primary"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-foreground ml-1">{dest.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                </ParallaxImage>
              ))}
            </div>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Testimonials Section */}
      <ParallaxSection>
        <motion.section
          className="py-16 md:py-24 relative bg-secondary/20 rounded-xl mx-4"
          {...staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
            >
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                What Our Community Says
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-background/50 backdrop-blur p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Newsletter Section */}
      <motion.section
        className="py-16 md:py-24 relative"
        {...fadeInUp}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
              Stay Updated
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Get the latest beach guides, travel tips, and exclusive destination recommendations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <ParallaxSection>
        <motion.section
          className="py-16 md:py-24 relative"
          {...fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Browse our comprehensive guides and start planning your next beach adventure today.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Destinations <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Footer */}
      <motion.footer
        className="border-t border-border py-16 md:py-24"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary">COAST</h3>
              <p className="text-muted-foreground">
                Discover the beauty of coastal adventures. From pristine beaches to hidden coves, explore the world's most beautiful shores.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
                <ul className="space-y-2">
                  {["About Us", "Destinations", "Blog", "Contact"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-foreground">More Info</h4>
                <ul className="space-y-2">
                  {["Privacy Policy", "Terms & Conditions", "Sustainability", "Partners"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              Copyright © 2025 COAST. All rights reserved. | Built by LeeuwinDev
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
