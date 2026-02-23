import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Cyber Security", href: "/services" },
    { label: "Enterprise Software", href: "/services" },
    { label: "HPC & AI", href: "/services" },
    { label: "Marketing", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-enterprise py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">CH</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Cyber Habibi
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Enterprise cybersecurity and technology solutions for organizations
              that demand excellence.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-foreground uppercase tracking-wider mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cyber Habibi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Twitter", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
