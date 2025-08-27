import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerLinks = {
    Services: [
      "Vulnerability Assessment",
      "Penetration Testing", 
      "Security Monitoring",
      "Compliance Services",
      "Incident Response"
    ],
    Company: [
      "About Us",
      "Our Team", 
      "Careers",
      "Partners",
      "News & Blog"
    ],
    Resources: [
      "Documentation",
      "Security Tips",
      "Case Studies",
      "Whitepapers",
      "Webinars"
    ],
    Support: [
      "Contact Us",
      "Help Center",
      "Emergency Response",
      "Technical Support",
      "Customer Portal"
    ]
  };

  return (
    <footer className="bg-cyber-darker border-t border-glass-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">McSecure</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading cybersecurity firm dedicated to helping organizations manage and 
              mitigate cyber risks. We protect what matters most to your business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@mcsecure.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="glass" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon" className="hover:bg-primary/20">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon" className="hover:bg-primary/20">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Secure, Stay Informed</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest cybersecurity insights, threat intelligence, and security tips 
              delivered directly to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-glass-border 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 McSecure. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};