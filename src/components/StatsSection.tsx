import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "SOC Monitoring" },
  { value: "50M+", label: "Threats Blocked Daily" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-spacing border-y border-border">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Why Cyber Habibi
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground">
            Trusted at Scale
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="heading-display text-5xl md:text-6xl text-gradient-red mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
