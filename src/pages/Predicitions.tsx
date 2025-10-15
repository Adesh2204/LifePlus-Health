import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Upload, TrendingUp, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Predictions = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handlePredict = () => {
    setIsAnalyzing(true);
    // Simulate AI prediction
    setTimeout(() => {
      setResult({
        disease: "Type 2 Diabetes",
        risk: "High",
        confidence: 87.5,
        recommendations: [
          "Regular blood glucose monitoring recommended",
          "Consultation with endocrinologist advised",
          "Lifestyle modifications: diet and exercise",
          "Consider preventive medication options"
        ]
      });
      setIsAnalyzing(false);
      toast({
        title: "Prediction Complete",
        description: "AI analysis has been completed successfully.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          {/* Header */}
          <div className="fade-in text-center">
            <h1 className="text-4xl font-bold mb-2">
              AI Disease <span className="text-gradient">Prediction</span>
            </h1>
            <p className="text-muted-foreground">
              Advanced machine learning models for accurate disease risk assessment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Patient Data Input
                </CardTitle>
                <CardDescription>
                  Enter patient information for disease risk prediction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="disease-type">Disease Type</Label>
                    <Select>
                      <SelectTrigger id="disease-type">
                        <SelectValue placeholder="Select disease type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diabetes">Diabetes</SelectItem>
                        <SelectItem value="heart">Heart Disease</SelectItem>
                        <SelectItem value="cancer">Cancer</SelectItem>
                        <SelectItem value="respiratory">Respiratory Disease</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="45" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bmi">BMI</Label>
                      <Input id="bmi" type="number" placeholder="25.5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bp">Blood Pressure</Label>
                      <Input id="bp" placeholder="120/80" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Key Symptoms</Label>
                    <Input id="symptoms" placeholder="e.g., fatigue, frequent urination" />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Medical Records (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, CSV, or Excel files
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handlePredict}
                  disabled={isAnalyzing}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="w-5 h-5 mr-2 animate-pulse" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Generate Prediction
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Prediction Results
                </CardTitle>
                <CardDescription>
                  AI-powered disease risk assessment and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6 animate-fade-in">
                    {/* Risk Level */}
                    <div className="p-6 rounded-xl bg-gradient-primary/10 border border-primary/20">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{result.disease}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          result.risk === 'High' 
                            ? 'bg-destructive/20 text-destructive' 
                            : 'bg-secondary-accent/20 text-secondary-accent'
                        }`}>
                          {result.risk} Risk
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Confidence Level</span>
                          <span className="font-semibold">{result.confidence}%</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                            style={{ width: `${result.confidence}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-accent" />
                        AI Recommendations
                      </h3>
                      <ul className="space-y-3">
                        {result.recommendations.map((rec: string, index: number) => (
                          <li 
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-semibold text-primary">
                                {index + 1}
                              </span>
                            </div>
                            <p className="text-sm">{rec}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      Export Report
                    </Button>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center py-12">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto">
                        <Brain className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">No Prediction Yet</p>
                        <p className="text-sm text-muted-foreground">
                          Enter patient data and click "Generate Prediction" to see results
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Predictions;
