import { useState } from "react";
import { Plus, Edit2, Trash2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const medicines = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    batch: "BAT001",
    expiry: "2025-12-31",
    stock: 150,
    price: "₹50",
    status: "normal",
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    batch: "BAT002",
    expiry: "2025-06-30",
    stock: 45,
    price: "₹80",
    status: "low",
  },
  {
    id: "3",
    name: "Ibuprofen 400mg",
    batch: "BAT003",
    expiry: "2026-03-15",
    stock: 200,
    price: "₹75",
    status: "normal",
  },
  {
    id: "4",
    name: "Metformin 500mg",
    batch: "BAT004",
    expiry: "2025-08-20",
    stock: 8,
    price: "₹120",
    status: "critical",
  },
  {
    id: "5",
    name: "Aspirin 100mg",
    batch: "BAT005",
    expiry: "2025-11-10",
    stock: 300,
    price: "₹35",
    status: "normal",
  },
];

export default function PharmacyMaster() {
  const [showForm, setShowForm] = useState(false);

  const getStockColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-success";
      case "low":
        return "text-primary";
      case "critical":
        return "text-destructive";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Pharmacy Master
          </h1>
          <p className="text-muted-foreground">
            Manage medicine inventory and stock
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-primary hover:bg-primary/90 text-white gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Medicine
        </Button>
      </div>

      {/* Stock Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-destructive/5 border-destructive/20 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Critical Stock Alert
              </p>
              <p className="text-xs text-muted-foreground">
                1 medicine needs immediate reorder
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-primary/5 border-primary/20 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Low Stock Alert
              </p>
              <p className="text-xs text-muted-foreground">
                1 medicine below threshold
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Medicines Table */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Medicine Name
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Batch No
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Expiry Date
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Stock
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Price
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr
                  key={medicine.id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground">
                      {medicine.name}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {medicine.batch}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {medicine.expiry}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${getStockColor(
                          medicine.status
                        )}`}
                      >
                        {medicine.stock}
                      </span>
                      {medicine.status !== "normal" && (
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            medicine.status === "low"
                              ? "bg-primary/10 text-primary"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {medicine.status === "low" ? "Low" : "Critical"}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground">
                      {medicine.price}
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
      </Card>

      {/* Add Medicine Modal */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Add New Medicine</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-foreground">
                Medicine Name
              </Label>
              <Input
                placeholder="Enter medicine name"
                className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Batch Number
                </Label>
                <Input
                  placeholder="e.g., BAT001"
                  className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Expiry Date
                </Label>
                <Input
                  type="date"
                  className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Stock Quantity
                </Label>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Price
                </Label>
                <Input
                  placeholder="Enter price"
                  className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-4">
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
                Add Medicine
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
