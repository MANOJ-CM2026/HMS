import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
        <p className="text-muted-foreground">
          Generate and view hospital reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Patient Report", description: "Generate patient statistics" },
          { title: "Financial Report", description: "Revenue and expenses" },
          { title: "Lab Report", description: "Laboratory test summary" },
          { title: "Pharmacy Report", description: "Medicine inventory report" },
          { title: "Admission Report", description: "Patient admission trends" },
          { title: "Discharge Report", description: "Patient discharge summary" },
        ].map((report, idx) => (
          <Card
            key={idx}
            className="p-6 bg-white rounded-xl shadow-sm border-0 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {report.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {report.description}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full text-sm"
            >
              Generate Report
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
