import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="section-spacing">
      <div className="container-enterprise">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <h2 className="heading-display text-3xl md:text-5xl text-foreground mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Let our experts design a security strategy tailored to your
              organization's unique challenges and goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-uppercase glow-red hover:scale-105 transition-all duration-500 px-10">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
