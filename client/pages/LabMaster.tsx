import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const labTests = [
  {
    id: "1",
    name: "Complete Blood Count",
    category: "Hematology",
    range: "4.5-11.0",
    unit: "10^9/L",
    price: "₹300",
    status: "active",
  },
  {
    id: "2",
    name: "Liver Function Test",
    category: "Biochemistry",
    range: "7.0-56.0",
    unit: "U/L",
    price: "₹500",
    status: "active",
  },
  {
    id: "3",
    name: "Kidney Function Test",
    category: "Biochemistry",
    range: "0.7-1.3",
    unit: "mg/dL",
    price: "₹400",
    status: "active",
  },
  {
    id: "4",
    name: "Thyroid Profile",
    category: "Endocrinology",
    range: "0.4-4.0",
    unit: "mIU/L",
    price: "₹600",
    status: "inactive",
  },
];

export default function LabMaster() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Lab Master
          </h1>
          <p className="text-muted-foreground">
            Manage laboratory tests and parameters
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-primary hover:bg-primary/90 text-white gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Test
        </Button>
      </div>

      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Test Name
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Category
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Normal Range
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Unit
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                  Price
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
              {labTests.map((test) => (
                <tr
                  key={test.id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground">
                      {test.name}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {test.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {test.range}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {test.unit}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground">
                      {test.price}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        test.status === "active"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {test.status.charAt(0).toUpperCase() +
                        test.status.slice(1)}
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

      {/* Add Test Modal */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Add New Lab Test</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-foreground">
                Test Name
              </Label>
              <Input
                placeholder="Enter test name"
                className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-foreground">
                Category
              </Label>
              <Input
                placeholder="Enter category"
                className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Normal Range
                </Label>
                <Input
                  placeholder="e.g., 4.5-11.0"
                  className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Unit
                </Label>
                <Input
                  placeholder="e.g., 10^9/L"
                  className="mt-2 bg-white border-border focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
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
                Add Test
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
