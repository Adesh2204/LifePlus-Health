import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, TrendingUp, AlertCircle } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample data for charts
const trendData = [
  { month: 'Jan', diabetes: 45, heart: 32, cancer: 18 },
  { month: 'Feb', diabetes: 52, heart: 38, cancer: 22 },
  { month: 'Mar', diabetes: 48, heart: 35, cancer: 20 },
  { month: 'Apr', diabetes: 61, heart: 42, cancer: 25 },
  { month: 'May', diabetes: 55, heart: 45, cancer: 28 },
  { month: 'Jun', diabetes: 67, heart: 48, cancer: 30 },
];

const diseaseData = [
  { name: 'Diabetes', value: 340, color: 'hsl(180 65% 45%)' },
  { name: 'Heart Disease', value: 280, color: 'hsl(165 60% 55%)' },
  { name: 'Cancer', value: 180, color: 'hsl(10 75% 65%)' },
  { name: 'Respiratory', value: 120, color: 'hsl(210 60% 60%)' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto space-y-8">
          {/* Header */}
          <div className="fade-in">
            <h1 className="text-4xl font-bold mb-2">
              Healthcare <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">
              Real-time insights and disease trend analytics
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Total Patients", 
                value: "2,847", 
                change: "+12.5%", 
                icon: Users,
                color: "text-primary"
              },
              { 
                title: "Active Cases", 
                value: "1,234", 
                change: "+8.2%", 
                icon: Activity,
                color: "text-secondary-accent"
              },
              { 
                title: "Predictions Made", 
                value: "5,621", 
                change: "+23.1%", 
                icon: TrendingUp,
                color: "text-accent"
              },
              { 
                title: "High Risk", 
                value: "89", 
                change: "-5.4%", 
                icon: AlertCircle,
                color: "text-destructive"
              },
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="hover-lift bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-secondary-accent' : 'text-destructive'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Line Chart */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Disease Trends Over Time</CardTitle>
                <CardDescription>Monthly disease detection patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="diabetes" stroke="hsl(180 65% 45%)" strokeWidth={2} />
                    <Line type="monotone" dataKey="heart" stroke="hsl(165 60% 55%)" strokeWidth={2} />
                    <Line type="monotone" dataKey="cancer" stroke="hsl(10 75% 65%)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Disease Distribution</CardTitle>
                <CardDescription>Current patient distribution by disease type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {diseaseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card className="lg:col-span-2 bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Risk Level Analysis</CardTitle>
                <CardDescription>Patient distribution by risk categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="diabetes" fill="hsl(180 65% 45%)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="heart" fill="hsl(165 60% 55%)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="cancer" fill="hsl(10 75% 65%)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
