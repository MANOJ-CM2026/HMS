import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SharedLayout from "./components/SharedLayout";
import Dashboard from "./pages/Dashboard";
import PatientFile from "./pages/PatientFile";
import HospitalMaster from "./pages/HospitalMaster";
import LabMaster from "./pages/LabMaster";
import LabEntry from "./pages/LabEntry";
import PharmacyMaster from "./pages/PharmacyMaster";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/dashboard"
            element={
              <SharedLayout>
                <Dashboard />
              </SharedLayout>
            }
          />
          <Route
            path="/patient-file"
            element={
              <SharedLayout>
                <PatientFile />
              </SharedLayout>
            }
          />
          <Route
            path="/hospital-master"
            element={
              <SharedLayout>
                <HospitalMaster />
              </SharedLayout>
            }
          />
          <Route
            path="/lab-master"
            element={
              <SharedLayout>
                <LabMaster />
              </SharedLayout>
            }
          />
          <Route
            path="/lab-entry"
            element={
              <SharedLayout>
                <LabEntry />
              </SharedLayout>
            }
          />
          <Route
            path="/pharmacy-master"
            element={
              <SharedLayout>
                <PharmacyMaster />
              </SharedLayout>
            }
          />
          <Route
            path="/reports"
            element={
              <SharedLayout>
                <Reports />
              </SharedLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <SharedLayout>
                <Settings />
              </SharedLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
