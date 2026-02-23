import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="container-enterprise relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="animate-reveal flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 glass-panel px-4 py-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Enterprise Security
              </span>
            </div>
          </div>

          <h1 className="animate-reveal animate-reveal-delay-1 heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Defend What Matters.{" "}
            <span className="text-gradient-red">Trust What's Next.</span>
          </h1>

          <p className="animate-reveal animate-reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Advanced cybersecurity, enterprise AI, and infrastructure solutions
            for modern organizations.
          </p>

          <div className="animate-reveal animate-reveal-delay-3 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="btn-uppercase glow-red-subtle hover:glow-red transition-all duration-500 px-8">
                Talk to an Expert
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="btn-uppercase px-8 border-border hover:border-primary hover:text-primary transition-all duration-500"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
