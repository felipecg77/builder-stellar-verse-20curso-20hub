import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Placeholder title="Categorías" description="Explora cursos por categorías" />} />
          <Route path="/instructors" element={<Placeholder title="Instructores" description="Conoce a nuestros expertos instructores" />} />
          <Route path="/business" element={<Placeholder title="Para Empresas" description="Soluciones corporativas de aprendizaje" />} />
          <Route path="/category/:category" element={<Placeholder title="Cursos por Categoría" description="Cursos específicos de esta categoría" />} />
          <Route path="/about" element={<Placeholder title="Acerca de" description="Conoce más sobre CursoHub" />} />
          <Route path="/careers" element={<Placeholder title="Carreras" description="Únete a nuestro equipo" />} />
          <Route path="/press" element={<Placeholder title="Prensa" description="Recursos para medios" />} />
          <Route path="/blog" element={<Placeholder title="Blog" description="Artículos y noticias" />} />
          <Route path="/help" element={<Placeholder title="Centro de Ayuda" description="Obtén ayuda y soporte" />} />
          <Route path="/contact" element={<Placeholder title="Contacto" description="Ponte en contacto con nosotros" />} />
          <Route path="/privacy" element={<Placeholder title="Política de Privacidad" description="Información sobre privacidad" />} />
          <Route path="/terms" element={<Placeholder title="Términos y Condiciones" description="Términos de uso del servicio" />} />
          <Route path="/forgot-password" element={<Placeholder title="Recuperar Contraseña" description="Restablece tu contraseña" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
