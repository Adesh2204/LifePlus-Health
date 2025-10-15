import { Brain, Database, TrendingUp, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Advanced machine learning models analyze patterns to predict disease outcomes with high accuracy.",
    color: "text-primary"
  },
  {
    icon: Database,
    title: "Secure Data Management",
    description: "Store and manage patient data securely with enterprise-grade encryption and compliance.",
    color: "text-secondary-accent"
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Monitor health trends and disease patterns with live dashboards and interactive visualizations.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Built with healthcare regulations in mind, ensuring patient privacy and data security.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Get immediate AI-generated summaries and recommendations for quick decision-making.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Comprehensive CRUD operations for efficient patient data and medical record management.",
    color: "text-secondary-accent"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="text-gradient">Modern Healthcare</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to transform healthcare data into actionable insights
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="hover-lift group border-border/50 hover:border-primary/30 transition-all duration-300 bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
