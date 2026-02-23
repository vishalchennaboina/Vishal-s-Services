import { Shield, Code, Cpu, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const columns = [
  {
    icon: Shield,
    heading: "Cyber Security",
    items: [
      "Attack Surface Management",
      "Assessment",
      "Threat Hunting",
      "Threat Analysis",
    ],
  },
  {
    icon: Code,
    heading: "Enterprise Software",
    items: ["RFP Builder", "Legal AI Agent"],
  },
  {
    icon: Cpu,
    heading: "HPC & AI",
    items: [
      "Services & Consulting",
      "HPC Data Editing",
      "Deployment",
      "LLM Model Design",
    ],
  },
  {
    icon: Megaphone,
    heading: "Marketing as a Service",
    items: ["B2B Marketing"],
  },
];

const MegaServices = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            What We Do
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground">
            Enterprise Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((col, colIdx) => (
            <div
              key={col.heading}
              className={`glass-panel p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${colIdx * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <col.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-6">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 py-1 border-b border-transparent hover:border-primary/20">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MegaServices;
