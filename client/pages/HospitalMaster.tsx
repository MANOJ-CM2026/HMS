import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HospitalMaster() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Hospital Master
        </h1>
        <p className="text-muted-foreground">
          Configure hospital information and settings
        </p>
      </div>

      <Card className="p-8 bg-white rounded-xl shadow-sm border-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-sm font-medium text-foreground">
              Hospital Name
            </Label>
            <Input
              placeholder="Enter hospital name"
              className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground">
              Branch
            </Label>
            <Input
              placeholder="Enter branch name"
              className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div className="md:col-span-2">
            <Label className="text-sm font-medium text-foreground">
              Address
            </Label>
            <Input
              placeholder="Enter hospital address"
              className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground">
              Phone
            </Label>
            <Input
              placeholder="Enter phone number"
              className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Enter email address"
              className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Save
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </Card>
    </div>
  );
}
