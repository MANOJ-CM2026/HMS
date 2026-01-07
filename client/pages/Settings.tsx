import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChevronRight } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage system settings and preferences
        </p>
      </div>

      {/* Account Settings */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <h2 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
          Account Settings
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-foreground">
                Full Name
              </Label>
              <Input
                placeholder="Admin User"
                className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                type="email"
                placeholder="admin@hospital.com"
                className="mt-2 bg-secondary/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Update Profile
          </Button>
        </div>
      </Card>

      {/* System Settings */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <h2 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
          System Settings
        </h2>
        <div className="space-y-6">
          {[
            { label: "Email Notifications", description: "Receive email updates" },
            {
              label: "Data Backup",
              description: "Auto-backup hospital data daily",
            },
            {
              label: "Two-Factor Authentication",
              description: "Enhance account security",
            },
            {
              label: "Activity Logging",
              description: "Log all user activities",
            },
          ].map((setting, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-4 border-b border-border last:border-b-0"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {setting.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch />
            </div>
          ))}
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 bg-destructive/5 border-destructive/20 rounded-xl border">
        <h2 className="text-lg font-semibold text-destructive mb-4">
          Danger Zone
        </h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-destructive/20 rounded-lg hover:bg-destructive/5 transition-colors text-left group">
            <div>
              <p className="text-sm font-medium text-foreground">
                Reset Password
              </p>
              <p className="text-xs text-muted-foreground">
                Change your account password
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-destructive" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-destructive/20 rounded-lg hover:bg-destructive/5 transition-colors text-left group">
            <div>
              <p className="text-sm font-medium text-foreground">
                Clear All Data
              </p>
              <p className="text-xs text-muted-foreground">
                Permanently delete all system data
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-destructive" />
          </button>
        </div>
      </Card>
    </div>
  );
}
