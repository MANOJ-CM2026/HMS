import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Beaker,
  FileText,
  Pill,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SharedLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/patient-file", label: "Patient File", icon: Users },
  { path: "/hospital-master", label: "Hospital Master", icon: Building2 },
  { path: "/lab-master", label: "Lab Master", icon: Beaker },
  { path: "/lab-entry", label: "Lab Entry", icon: FileText },
  { path: "/pharmacy-master", label: "Pharmacy Master", icon: Pill },
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function SharedLayout({ children }: SharedLayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${!sidebarOpen && "flex-col"}`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <h1 className="text-sm font-bold text-sidebar-foreground">HMS</h1>
              )}
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 hover:bg-sidebar-accent rounded-lg transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 text-sidebar-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-sidebar-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
                title={sidebarOpen ? undefined : item.label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-sidebar-border">
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors ${
              !sidebarOpen && "justify-center"
            }`}
            title={sidebarOpen ? undefined : "Logout"}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-6 shadow-sm">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground">
              Hospital Management System
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-semibold">
                  AD
                </div>
                <span className="text-sm font-medium text-foreground">Admin</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10 overflow-hidden">
                  <div className="px-4 py-3 border-b border-border">
                    <p className="text-sm font-medium text-foreground">
                      Admin User
                    </p>
                    <p className="text-xs text-muted-foreground">
                      admin@hospital.com
                    </p>
                  </div>
                  <div className="p-2 space-y-1">
                    <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors">
                      Profile
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors">
                      Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-destructive hover:bg-muted rounded transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-secondary/30">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
