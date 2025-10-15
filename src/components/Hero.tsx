import { Button } from "@/components/ui/button";
import { Activity, TrendingUp, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/placeholder.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animated-gradient" />
      
      {/* Hero image overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Healthcare Technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">AI-Powered Healthcare Analytics</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Predict Health Trends with{" "}
            <span className="text-gradient-hero">AI Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform healthcare data into actionable insights. Analyze disease patterns, 
            predict outcomes, and make data-driven decisions for better patient care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/dashboard">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:opacity-90 transition-all hover-lift text-lg px-8 py-6"
              >
                <Brain className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Started
              </Button>
            </Link>
            <Link to="/predictions">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5 text-lg px-8 py-6"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Predictions
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            {[
              { value: "99.2%", label: "Accuracy Rate" },
              { value: "50K+", label: "Patients Analyzed" },
              { value: "15+", label: "Disease Models" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="slide-in-right glass rounded-xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default Hero;
