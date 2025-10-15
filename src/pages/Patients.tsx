import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample patient data
const samplePatients = [
  { id: 1, name: "John Doe", age: 45, disease: "Diabetes", risk: "High", lastVisit: "2025-10-10" },
  { id: 2, name: "Jane Smith", age: 52, disease: "Heart Disease", risk: "Medium", lastVisit: "2025-10-12" },
  { id: 3, name: "Mike Johnson", age: 38, disease: "Respiratory", risk: "Low", lastVisit: "2025-10-08" },
  { id: 4, name: "Sarah Williams", age: 61, disease: "Cancer", risk: "High", lastVisit: "2025-10-14" },
  { id: 5, name: "Robert Brown", age: 47, disease: "Diabetes", risk: "Medium", lastVisit: "2025-10-11" },
];

const Patients = () => {
  const [patients] = useState(samplePatients);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Patient <span className="text-gradient">Management</span>
              </h1>
              <p className="text-muted-foreground">
                Manage and track patient records efficiently
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Plus className="w-5 h-5 mr-2" />
              Add New Patient
            </Button>
          </div>

          {/* Search and Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="md:col-span-4 bg-gradient-card border-border/50">
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search patients by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {[
              { label: "Total Patients", value: patients.length, color: "text-primary" },
              { label: "High Risk", value: patients.filter(p => p.risk === "High").length, color: "text-destructive" },
              { label: "Medium Risk", value: patients.filter(p => p.risk === "Medium").length, color: "text-accent" },
              { label: "Low Risk", value: patients.filter(p => p.risk === "Low").length, color: "text-secondary-accent" },
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader className="pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Patient Table */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Patient Records
              </CardTitle>
              <CardDescription>
                Complete list of patient data and health records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>ID</TableHead>
                      <TableHead>Patient Name</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Disease</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Last Visit</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatients.map((patient) => (
                      <TableRow key={patient.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">#{patient.id}</TableCell>
                        <TableCell className="font-medium">{patient.name}</TableCell>
                        <TableCell>{patient.age}</TableCell>
                        <TableCell>{patient.disease}</TableCell>
                        <TableCell>
                          <Badge variant={getRiskColor(patient.risk) as any}>
                            {patient.risk}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{patient.lastVisit}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" className="hover:text-primary">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hover:text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Patients;
