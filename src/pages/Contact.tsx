import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Cyber Security",
  "Enterprise Software",
  "HPC & AI",
  "Marketing as a Service",
  "Other",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);

        // reset form
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20">
      <div className="container-enterprise">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground">
              Tell us about your security challenges. We'll respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="glass-panel p-12 text-center animate-reveal">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Message Received
              </h3>
              <p className="text-muted-foreground">
                Our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Company
                  </label>
                  <Input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="your@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Service Interest
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg bg-secondary border border-border px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary border-border focus:border-primary resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                disabled={loading}
                type="submit"
                size="lg"
                className="btn-uppercase w-full glow-red-subtle hover:glow-red transition-all duration-500"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;
