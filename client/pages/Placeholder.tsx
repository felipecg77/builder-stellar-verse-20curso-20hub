import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">CursoHub</span>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="outline">Iniciar Sesión</Button>
              <Button>Registrarse</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <BookOpen className="h-24 w-24 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{description}</p>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">¡Próximamente!</h2>
            <p className="text-muted-foreground mb-6">
              Esta sección está en desarrollo. Continúa preguntando para que
              pueda implementar el contenido específico de esta página.
            </p>
            <div className="text-sm text-muted-foreground bg-white p-4 rounded border-l-4 border-primary">
              <strong>Para desarrolladores:</strong> Esta es una página
              placeholder. Puedes solicitar que se implemente el contenido
              específico para esta ruta.
            </div>
          </div>

          <Link to="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
