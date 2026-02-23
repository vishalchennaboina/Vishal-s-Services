import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Solutions = () => (
  <main className="pt-32 pb-20">
    <div className="container-enterprise">
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Solutions</p>
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Tailored for Your Industry
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We design security architectures and technology strategies that align with your industry's unique threat landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Financial Services", "Healthcare", "Government", "Energy & Utilities", "Technology", "Manufacturing"].map((industry) => (
          <div key={industry} className="glass-panel p-8 hover-glow group">
            <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{industry}</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Purpose-built security and technology solutions for {industry.toLowerCase()} organizations.
            </p>
            <span className="text-xs text-primary uppercase tracking-wider flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/contact">
          <Button size="lg" className="btn-uppercase glow-red-subtle hover:glow-red transition-all duration-500 px-10">
            Get a Custom Strategy
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </main>
);

export default Solutions;
