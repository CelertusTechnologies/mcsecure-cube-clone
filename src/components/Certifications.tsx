import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Award, FileCheck, CreditCard } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      id: "pci-dss",
      title: "PCI DSS",
      icon: CreditCard,
      description: "Payment Card Industry Data Security Standard",
      details: "Comprehensive security standards for organizations handling credit card information. Ensures secure payment processing and protects cardholder data.",
      features: [
        "Secure Network Architecture",
        "Cardholder Data Protection",
        "Vulnerability Management",
        "Access Control Implementation",
        "Regular Security Testing",
        "Information Security Policy"
      ],
      status: "Certified"
    },
    {
      id: "pci-ssf",
      title: "PCI SSF",
      icon: Shield,
      description: "PCI Software Security Framework",
      details: "Framework for secure software development practices specifically for payment software. Ensures payment applications meet industry security standards.",
      features: [
        "Secure Software Development",
        "Code Review Standards",
        "Vulnerability Testing",
        "Software Security Assessment",
        "Threat Modeling",
        "Security Training"
      ],
      status: "Certified"
    },
    {
      id: "pci-qpa",
      title: "PCI QPA",
      icon: Award,
      description: "PCI Qualified PIN Assessor",
      details: "Qualified to assess PIN entry devices and PIN transaction security. Specialized certification for secure PIN processing environments.",
      features: [
        "PIN Security Assessment",
        "Device Certification",
        "PIN Entry Device Testing",
        "Key Management Review",
        "Hardware Security Validation",
        "Compliance Verification"
      ],
      status: "Certified"
    },
    {
      id: "pci-3ds",
      title: "PCI 3DS",
      icon: FileCheck,
      description: "PCI 3-D Secure",
      details: "3-D Secure protocol implementation for secure online card transactions. Provides additional authentication layer for e-commerce transactions.",
      features: [
        "Authentication Protocol",
        "Risk-Based Authentication",
        "Frictionless Flow Support",
        "EMV 3-D Secure 2.0",
        "Mobile App Integration",
        "Liability Shift Benefits"
      ],
      status: "Certified"
    },
    {
      id: "verify",
      title: "Verify Certificate",
      icon: CheckCircle,
      description: "Certificate Verification Services",
      details: "Real-time certificate verification and validation services. Ensures the authenticity and validity of digital certificates.",
      features: [
        "Real-time Verification",
        "Certificate Chain Validation",
        "Revocation Status Checking",
        "Digital Signature Verification",
        "Time-stamp Validation",
        "Compliance Reporting"
      ],
      status: "Active"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading certifications ensuring the highest standards of security 
            and compliance for your business operations.
          </p>
        </div>

        <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <Tabs defaultValue="pci-dss" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 glass">
              {certifications.map((cert) => (
                <TabsTrigger key={cert.id} value={cert.id} className="text-sm">
                  {cert.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {certifications.map((cert, index) => (
              <TabsContent 
                key={cert.id} 
                value={cert.id}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="glass hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gradient-primary">
                        <cert.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{cert.title}</CardTitle>
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                            {cert.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg">
                          {cert.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cert.details}
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cert.features.map((feature, idx) => (
                        <div 
                          key={feature} 
                          className="flex items-center gap-2 p-3 rounded-lg bg-card/50 hover:bg-card transition-colors"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};