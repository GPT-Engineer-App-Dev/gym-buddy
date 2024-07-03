import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Dumbbell, BarChart, Settings } from "lucide-react"; // Corrected import
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Workouts from "./pages/Workouts.jsx";
import Progress from "./pages/Progress.jsx";
import SettingsPage from "./pages/Settings.jsx"; // Renamed to avoid conflict

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Workouts",
    to: "/workouts",
    icon: <Dumbbell className="h-4 w-4" />,
  },
  {
    title: "Progress",
    to: "/progress",
    icon: <BarChart className="h-4 w-4" />, // Corrected icon
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />, // Corrected icon
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="workouts" element={<Workouts />} />
              <Route path="progress" element={<Progress />} />
              <Route path="settings" element={<SettingsPage />} /> {/* Updated to use renamed component */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;