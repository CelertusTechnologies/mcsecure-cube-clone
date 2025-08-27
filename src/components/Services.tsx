import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck, Users, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing to identify and prioritize vulnerabilities in your systems.",
      features: ["Network Scanning", "Web Application Testing", "Database Security", "Risk Assessment"]
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description: "Ethical hacking services to test your defenses against real-world cyber attacks.",
      features: ["Black Box Testing", "White Box Testing", "Social Engineering", "Physical Security"]
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 monitoring and threat detection to protect your business around the clock.",
      features: ["SIEM Implementation", "Threat Intelligence", "Incident Response", "Log Analysis"]
    },
    {
      icon: FileCheck,
      title: "Compliance Services",
      description: "Ensure your organization meets industry standards and regulatory requirements.",
      features: ["PCI DSS", "ISO 27001", "GDPR Compliance", "SOX Auditing"]
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Educate your team on cybersecurity best practices and threat awareness.",
      features: ["Phishing Simulation", "Security Awareness", "Employee Training", "Policy Development"]
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response and recovery services when security incidents occur.",
      features: ["24/7 Response Team", "Forensic Analysis", "Recovery Planning", "Post-Incident Review"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Security Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your business 
            from evolving threats and ensure compliance with industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-primary w-fit group-hover:animate-pulse-glow">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="glass" className="w-full group-hover:bg-primary/20">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="cyber" size="xl" className="group">
            View All Services
            <Shield className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};