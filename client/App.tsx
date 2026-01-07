import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
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
  );
}
