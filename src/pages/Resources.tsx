const Resources = () => (
  <main className="pt-32 pb-20">
    <div className="container-enterprise">
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Resources</p>
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Insights & Research
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Stay ahead of the threat landscape with expert analysis, whitepapers, and industry reports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "2026 Threat Landscape Report", tag: "Report", date: "Feb 2026" },
          { title: "Zero Trust Implementation Guide", tag: "Whitepaper", date: "Jan 2026" },
          { title: "AI in Cybersecurity: What's Real", tag: "Article", date: "Jan 2026" },
          { title: "Cloud Security Best Practices", tag: "Guide", date: "Dec 2025" },
          { title: "Ransomware Defense Playbook", tag: "Playbook", date: "Nov 2025" },
          { title: "Compliance Automation Framework", tag: "Framework", date: "Oct 2025" },
        ].map((r) => (
          <div key={r.title} className="glass-panel p-8 hover-glow group cursor-pointer">
            <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 mb-4 inline-block">
              {r.tag}
            </span>
            <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {r.title}
            </h3>
            <p className="text-xs text-muted-foreground">{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Resources;
