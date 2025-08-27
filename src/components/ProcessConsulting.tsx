import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileCheck, 
  Shield, 
  Database, 
  MapPin, 
  Settings, 
  Award,
  Users,
  Lock,
  Globe,
  Zap,
  Eye,
  Target
} from "lucide-react";

export const ProcessConsulting = () => {
  const consultingServices = [
    {
      icon: Award,
      title: "ISO 27001",
      category: "Information Security",
      description: "Information Security Management System implementation and certification support.",
      features: ["ISMS Implementation", "Risk Assessment", "Policy Development", "Certification Support"],
      color: "primary"
    },
    {
      icon: Eye,
      title: "IS Audit",
      category: "Security Auditing", 
      description: "Comprehensive information security audit and assessment services.",
      features: ["Security Assessment", "Compliance Review", "Gap Analysis", "Remediation Planning"],
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Data Location Audit",
      category: "Data Governance",
      description: "Data residency and location compliance auditing for regulatory requirements.",
      features: ["Data Mapping", "Residency Compliance", "Cross-border Transfer", "Privacy Assessment"],
      color: "accent"
    },
    {
      icon: Shield,
      title: "SEMI CSCRF",
      category: "Semiconductor Security",
      description: "Semiconductor supply chain risk framework implementation and assessment.",
      features: ["Supply Chain Security", "Risk Framework", "Vendor Assessment", "Compliance Monitoring"],
      color: "primary"
    },
    {
      icon: FileCheck,
      title: "ISO 22301",
      category: "Business Continuity",
      description: "Business Continuity Management System implementation and certification.",
      features: ["BCP Development", "Risk Analysis", "Recovery Planning", "Testing & Training"],
      color: "secondary"
    },
    {
      icon: Settings,
      title: "SAP Audit",
      category: "Enterprise Systems",
      description: "SAP security configuration and compliance auditing services.",
      features: ["Access Control Review", "Configuration Assessment", "Segregation of Duties", "Compliance Check"],
      color: "accent"
    },
    {
      icon: Database,
      title: "NEST Framework",
      category: "Financial Services",
      description: "Network and Electronic Security Technology framework compliance.",
      features: ["Network Security", "Electronic Trading", "Risk Management", "Regulatory Compliance"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "GDPR Compliance",
      category: "Data Protection",
      description: "General Data Protection Regulation compliance assessment and implementation.",
      features: ["Privacy Impact Assessment", "Data Mapping", "Consent Management", "Breach Response"],
      color: "secondary"
    },
    {
      icon: Target,
      title: "SOX Compliance",
      category: "Financial Controls",
      description: "Sarbanes-Oxley Act compliance for financial reporting and internal controls.",
      features: ["ITGC Assessment", "Application Controls", "Process Documentation", "Testing Procedures"],
      color: "accent"
    },
    {
      icon: Lock,
      title: "NIST Framework",
      category: "Cybersecurity",
      description: "NIST Cybersecurity Framework implementation and maturity assessment.",
      features: ["Framework Mapping", "Maturity Assessment", "Gap Analysis", "Roadmap Development"],
      color: "primary"
    },
    {
      icon: Users,
      title: "COBIT Implementation",
      category: "IT Governance",
      description: "Control Objectives for Information and related Technology framework implementation.",
      features: ["IT Governance", "Risk Management", "Process Optimization", "Performance Measurement"],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Cloud Security Assessment",
      category: "Cloud Computing",
      description: "Comprehensive cloud security posture assessment and optimization.",
      features: ["Multi-cloud Assessment", "Configuration Review", "Identity Management", "Data Protection"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-gradient-primary text-white';
      case 'secondary':
        return 'bg-gradient-secondary text-white';
      case 'accent':
        return 'bg-gradient-cyber text-white';
      default:
        return 'bg-gradient-primary text-white';
    }
  };

  return (
    <section id="process-consulting" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Process <span className="text-gradient">Consulting</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert consulting services for compliance frameworks, security standards, 
            and process optimization across various industries and regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {consultingServices.map((service, index) => (
            <Card 
              key={service.title}
              className="glass hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit group-hover:animate-pulse-glow ${getColorClasses(service.color)}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 text-xs">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-in" style={{ animationDelay: '1.2s' }}>
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Custom Consulting?</h3>
            <p className="text-muted-foreground mb-6">
              Our expert consultants can help you with custom frameworks, industry-specific 
              compliance requirements, and tailored security assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="glass" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};