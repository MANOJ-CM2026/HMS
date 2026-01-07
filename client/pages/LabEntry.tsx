import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LabEntry() {
  const [selectedStatus, setSelectedStatus] = useState("pending");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Lab Entry
        </h1>
        <p className="text-muted-foreground">
          Enter laboratory test results
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Patient Selection */}
          <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Patient Selection
            </h3>
            <div>
              <Label className="text-sm font-medium text-foreground">
                Select Patient
              </Label>
              <Select>
                <SelectTrigger className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary">
                  <SelectValue placeholder="Choose a patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p001">P001 - John Doe</SelectItem>
                  <SelectItem value="p002">P002 - Jane Smith</SelectItem>
                  <SelectItem value="p003">P003 - Robert Johnson</SelectItem>
                  <SelectItem value="p004">P004 - Emily Davis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* Lab Test Selection */}
          <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Lab Test Selection
            </h3>
            <div className="space-y-3">
              {[
                { id: "cbc", name: "Complete Blood Count" },
                { id: "lft", name: "Liver Function Test" },
                { id: "kft", name: "Kidney Function Test" },
                { id: "tp", name: "Thyroid Profile" },
              ].map((test) => (
                <label
                  key={test.id}
                  className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary/30 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border text-primary"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {test.name}
                  </span>
                </label>
              ))}
            </div>
          </Card>

          {/* Result Entry */}
          <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Result Entry
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Test Value
                </Label>
                <Input
                  placeholder="Enter test result value"
                  className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Comments/Notes
                </Label>
                <textarea
                  placeholder="Add any notes or observations"
                  className="w-full mt-2 p-3 border border-border rounded-lg bg-secondary/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                ></textarea>
              </div>
            </div>
          </Card>

          {/* Submit */}
          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Submit Results
            </Button>
            <Button variant="outline">Clear</Button>
          </div>
        </div>

        {/* Status Indicator */}
        <div>
          <Card className="p-6 bg-white rounded-xl shadow-sm border-0 sticky top-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Status
            </h3>
            <div className="space-y-4">
              <div>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div
                className={`p-4 rounded-lg text-center font-semibold text-sm ${
                  selectedStatus === "pending"
                    ? "bg-primary/10 text-primary"
                    : selectedStatus === "completed"
                      ? "bg-success/10 text-success"
                      : "bg-accent/10 text-accent"
                }`}
              >
                {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3">
                  Last Updated
                </p>
                <p className="text-sm font-medium text-foreground">
                  Jan 16, 2024 - 2:30 PM
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
