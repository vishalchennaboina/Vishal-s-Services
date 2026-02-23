import { useState, useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";

const solutions = [
  {
    title: "Zero Trust Architecture",
    description: "Implement comprehensive zero trust frameworks that verify every access request regardless of origin.",
    tech: ["Identity Management", "Micro-segmentation", "MFA"],
  },
  {
    title: "Cloud Security Posture",
    description: "Continuous monitoring and remediation of cloud misconfigurations across multi-cloud environments.",
    tech: ["AWS", "Azure", "GCP", "Terraform"],
  },
  {
    title: "AI Threat Detection",
    description: "Machine learning models trained on billions of signals to detect advanced persistent threats in real time.",
    tech: ["Neural Networks", "Behavioral Analysis", "SIEM"],
  },
  {
    title: "Managed SOC",
    description: "24/7 security operations center with expert analysts and automated incident response playbooks.",
    tech: ["SOAR", "EDR", "XDR", "Threat Intel"],
  },
  {
    title: "Compliance Automation",
    description: "Automated compliance mapping and evidence collection for SOC 2, ISO 27001, HIPAA, and more.",
    tech: ["SOC 2", "ISO 27001", "HIPAA", "GDPR"],
  },
  {
    title: "Penetration Testing",
    description: "Red team exercises and adversary simulation to identify vulnerabilities before attackers do.",
    tech: ["OWASP", "MITRE ATT&CK", "Purple Team"],
  },
];

const FeaturedSolutions = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={ref} className="section-spacing mt-24">
        <div className="container-enterprise">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Featured
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-foreground">
              Solutions & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <button
                key={sol.title}
                onClick={() => setSelected(i)}
                className={`glass-panel p-8 text-left hover-glow group cursor-pointer transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {sol.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <ExternalLink className="w-3 h-3" />
                  <span className="uppercase tracking-wider">Learn more</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-panel-strong max-w-lg w-full p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="heading-display text-2xl text-foreground mb-4">
              {solutions[selected].title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {solutions[selected].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {solutions[selected].tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedSolutions;
