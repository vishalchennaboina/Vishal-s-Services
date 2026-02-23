import { Shield, Code, Cpu, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Cyber Security",
    overview: "Comprehensive protection against modern cyber threats with proactive defense strategies.",
    items: ["Attack Surface Management", "Assessment", "Threat Hunting", "Threat Analysis"],
    benefits: ["Reduced attack surface by 80%", "Real-time threat visibility", "Compliance-ready reporting"],
    technologies: ["SIEM", "EDR", "XDR", "SOAR", "Zero Trust"],
  },
  {
    icon: Code,
    title: "Enterprise Software",
    overview: "Custom enterprise applications powered by AI to streamline operations and reduce costs.",
    items: ["RFP Builder", "Legal AI Agent"],
    benefits: ["90% faster RFP responses", "AI-powered legal review", "Seamless integration"],
    technologies: ["LLMs", "RAG", "Cloud Native", "API-first"],
  },
  {
    icon: Cpu,
    title: "HPC & AI",
    overview: "High-performance computing and AI infrastructure designed for enterprise-scale workloads.",
    items: ["Services & Consulting", "HPC Data Editing", "Deployment", "LLM Model Design"],
    benefits: ["10x compute efficiency", "Custom model training", "Edge deployment"],
    technologies: ["NVIDIA", "CUDA", "PyTorch", "Kubernetes", "MLOps"],
  },
  {
    icon: Megaphone,
    title: "Marketing as a Service",
    overview: "Data-driven B2B marketing strategies that deliver qualified pipeline at scale.",
    items: ["B2B Marketing"],
    benefits: ["3x pipeline growth", "Account-based targeting", "Full-funnel analytics"],
    technologies: ["ABM", "Marketing Automation", "Intent Data", "CRM"],
  },
];

const Services = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container-enterprise">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Our Services
          </p>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Enterprise-Grade Solutions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cybersecurity to AI infrastructure, we deliver solutions that protect and propel modern organizations.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-panel p-8 md:p-12 hover-glow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-primary mb-4">Key Benefits</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">→</span> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t) => (
                      <span key={t} className="px-2 py-1 text-[10px] rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button size="lg" className="btn-uppercase glow-red-subtle hover:glow-red transition-all duration-500 px-10">
              Discuss Your Needs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;
