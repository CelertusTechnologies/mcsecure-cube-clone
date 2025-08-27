import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-slide-in">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
                <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
                <span className="text-primary font-semibold">Advanced Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Building Trust,{" "}
                <span className="text-gradient">Elevating</span>{" "}
                <span className="text-gradient-secondary">Cybersecurity</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Empowering businesses with cybersecurity excellence. We believe cybersecurity 
                is more than just technology - it's about people and processes too.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button variant="hero" size="xl" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glass" size="xl">
                  Learn More
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm">24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Global Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Expert Support</span>
                </div>
              </div>
            </div>

            {/* Stats/Features Card */}
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="glass rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose McSecure?</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Businesses Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-secondary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Security Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-secondary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-sm">Advanced Threat Detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                    <span className="text-sm">Incident Response Team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                    <span className="text-sm">Compliance Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};