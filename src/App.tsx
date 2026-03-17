import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WaitlistProvider } from "@/context/WaitlistContext";
import Index from "./pages/Index";
import SampleReport from "./pages/SampleReport";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import PolitykaCookies from "./pages/PolitykaCookies";
import Regulamin from "./pages/Regulamin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WaitlistProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sample-report" element={<SampleReport />} />
            <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
            <Route path="/polityka-cookies" element={<PolitykaCookies />} />
            <Route path="/regulamin" element={<Regulamin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WaitlistProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
