import { Shield, Target, Users, Zap } from "lucide-react";

const values = [
  { icon: Shield, title: "Security First", description: "Every decision we make is grounded in protecting our clients' most critical assets." },
  { icon: Target, title: "Precision", description: "We deliver targeted solutions, never one-size-fits-all approaches." },
  { icon: Users, title: "Partnership", description: "We embed with your team, becoming an extension of your security operations." },
  { icon: Zap, title: "Innovation", description: "We leverage cutting-edge AI and automation to stay ahead of evolving threats." },
];

const About = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container-enterprise">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            About Us
          </p>

          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Defending the Digital Frontier
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cyber Habibi is a global cybersecurity and technology consulting firm trusted by enterprises, governments, and high-growth organizations worldwide.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass-panel p-8"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
                e.currentTarget.style.setProperty("--rotateX", `${rotateX}deg`);
                e.currentTarget.style.setProperty("--rotateY", `${rotateY}deg`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("--rotateX", `0deg`);
                e.currentTarget.style.setProperty("--rotateY", `0deg`);
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <v.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {v.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
