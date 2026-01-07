import { useState } from "react";
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Patient {
  id: string;
  name: string;
  patientId: string;
  age: number;
  gender: string;
  phone: string;
  status: "active" | "discharged" | "pending";
  lastVisit: string;
}

const patientData: Patient[] = [
  {
    id: "1",
    name: "John Doe",
    patientId: "P001",
    age: 45,
    gender: "Male",
    phone: "+91 98765 43210",
    status: "active",
    lastVisit: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    patientId: "P002",
    age: 32,
    gender: "Female",
    phone: "+91 98765 43211",
    status: "active",
    lastVisit: "2024-01-14",
  },
  {
    id: "3",
    name: "Robert Johnson",
    patientId: "P003",
    age: 58,
    gender: "Male",
    phone: "+91 98765 43212",
    status: "discharged",
    lastVisit: "2024-01-10",
  },
  {
    id: "4",
    name: "Emily Davis",
    patientId: "P004",
    age: 28,
    gender: "Female",
    phone: "+91 98765 43213",
    status: "active",
    lastVisit: "2024-01-12",
  },
  {
    id: "5",
    name: "Michael Brown",
    patientId: "P005",
    age: 55,
    gender: "Male",
    phone: "+91 98765 43214",
    status: "pending",
    lastVisit: "2024-01-16",
  },
  {
    id: "6",
    name: "Sarah Wilson",
    patientId: "P006",
    age: 35,
    gender: "Female",
    phone: "+91 98765 43215",
    status: "active",
    lastVisit: "2024-01-13",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-success/10 text-success";
    case "discharged":
      return "bg-muted text-muted-foreground";
    case "pending":
      return "bg-primary/10 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function PatientFile() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredPatients = patientData.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm);
    const matchesStatus =
      filterStatus === "all" || patient.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Patient File
          </h1>
          <p className="text-muted-foreground">
            Manage and view patient records
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-primary hover:bg-primary/90 text-white gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by patient name, ID, or phone..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <Select
            value={filterStatus}
            onValueChange={(value) => {
              setFilterStatus(value);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="discharged">Discharged</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Patient Table */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Patient ID
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Name
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Age
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Gender
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Phone
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Status
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-primary">
                      {patient.patientId}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground">
                      {patient.name}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {patient.age}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {patient.gender}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {patient.phone}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        patient.status
                      )}`}
                    >
                      {patient.status.charAt(0).toUpperCase() +
                        patient.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-muted-foreground hover:bg-muted hover:text-primary rounded transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredPatients.length)} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredPatients.length)} of{" "}
            {filteredPatients.length} patients
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-border"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Add/Edit Patient Modal */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Add New Patient</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Personal Information Card */}
            <Card className="p-6 bg-secondary/30 border-border rounded-lg">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Full Name
                  </Label>
                  <Input
                    placeholder="Enter patient name"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Age
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter age"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Gender
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Date of Birth
                  </Label>
                  <Input
                    type="date"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </Card>

            {/* Contact Information Card */}
            <Card className="p-6 bg-secondary/30 border-border rounded-lg">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    placeholder="Enter phone number"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-sm font-medium text-foreground">
                    Address
                  </Label>
                  <Input
                    placeholder="Enter address"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </Card>

            {/* Medical Information Card */}
            <Card className="p-6 bg-secondary/30 border-border rounded-lg">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Medical Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Blood Group
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary">
                      <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a+">A+</SelectItem>
                      <SelectItem value="a-">A-</SelectItem>
                      <SelectItem value="b+">B+</SelectItem>
                      <SelectItem value="b-">B-</SelectItem>
                      <SelectItem value="o+">O+</SelectItem>
                      <SelectItem value="o-">O-</SelectItem>
                      <SelectItem value="ab+">AB+</SelectItem>
                      <SelectItem value="ab-">AB-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium text-foreground">
                    Allergies
                  </Label>
                  <Input
                    placeholder="Enter known allergies"
                    className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setShowForm(false)}
              >
                Add Patient
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
