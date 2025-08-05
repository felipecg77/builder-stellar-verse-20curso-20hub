import { useState } from "react";
import { Search, Star, Users, Clock, PlayCircle, BookOpen, Code, Palette, Camera, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  studentCount: number;
  duration: string;
  thumbnail: string;
  category: string;
  level: string;
  bestseller?: boolean;
}

const featuredCourses: Course[] = [
  {
    id: "1",
    title: "Desarrollo Web Completo con React y Node.js",
    instructor: "María González",
    price: 49.99,
    originalPrice: 99.99,
    rating: 4.8,
    studentCount: 15420,
    duration: "32.5 horas",
    thumbnail: "/api/placeholder/400/225",
    category: "Desarrollo Web",
    level: "Intermedio",
    bestseller: true
  },
  {
    id: "2",
    title: "Diseño UX/UI Desde Cero hasta Experto",
    instructor: "Carlos Ruiz",
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.9,
    studentCount: 8930,
    duration: "28 horas",
    thumbnail: "/api/placeholder/400/225",
    category: "Diseño",
    level: "Principiante"
  },
  {
    id: "3",
    title: "Python para Data Science y Machine Learning",
    instructor: "Ana Martínez",
    price: 59.99,
    originalPrice: 119.99,
    rating: 4.7,
    studentCount: 12350,
    duration: "45 horas",
    thumbnail: "/api/placeholder/400/225",
    category: "Data Science",
    level: "Intermedio",
    bestseller: true
  },
  {
    id: "4",
    title: "Fotografía Digital Profesional",
    instructor: "Luis Herrera",
    price: 34.99,
    originalPrice: 69.99,
    rating: 4.6,
    studentCount: 5670,
    duration: "18 horas",
    thumbnail: "/api/placeholder/400/225",
    category: "Fotografía",
    level: "Principiante"
  },
  {
    id: "5",
    title: "Marketing Digital y Redes Sociales",
    instructor: "Sandra López",
    price: 44.99,
    originalPrice: 89.99,
    rating: 4.8,
    studentCount: 9820,
    duration: "25 horas",
    thumbnail: "/api/placeholder/400/225",
    category: "Marketing",
    level: "Intermedio"
  },
  {
    id: "6",
    title: "Inteligencia Artificial con TensorFlow",
    instructor: "Diego Pérez",
    price: 69.99,
    originalPrice: 139.99,
    rating: 4.9,
    studentCount: 4230,
    duration: "52 horas",
    thumbnail: "/api/placeholder/400/225",
    category: "IA",
    level: "Avanzado",
    bestseller: true
  }
];

const categories = [
  { name: "Desarrollo Web", icon: Code, color: "bg-blue-100 text-blue-700" },
  { name: "Diseño", icon: Palette, color: "bg-pink-100 text-pink-700" },
  { name: "Data Science", icon: Brain, color: "bg-purple-100 text-purple-700" },
  { name: "Fotografía", icon: Camera, color: "bg-green-100 text-green-700" },
  { name: "Marketing", icon: TrendingUp, color: "bg-orange-100 text-orange-700" },
  { name: "IA", icon: Brain, color: "bg-red-100 text-red-700" }
];

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          {course.bestseller && (
            <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500">
              Bestseller
            </Badge>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground">{course.instructor}</p>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({course.studentCount.toLocaleString()} estudiantes)
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
          <Badge variant="secondary" className="text-xs">
            {course.level}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">${course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="ml-auto">
            Inscribirse
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">CursoHub</span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categorías
                </Link>
                <Link to="/instructors" className="text-muted-foreground hover:text-foreground transition-colors">
                  Instructores
                </Link>
                <Link to="/business" className="text-muted-foreground hover:text-foreground transition-colors">
                  Para Empresas
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar cursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              
              <Button variant="outline">Iniciar Sesión</Button>
              <Button>Registrarse</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Aprende sin límites
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Descubre miles de cursos impartidos por expertos de la industria. 
            Desarrolla nuevas habilidades y avanza en tu carrera profesional.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="¿Qué quieres aprender hoy?"
                className="pl-12 h-14 text-lg bg-white text-foreground"
              />
            </div>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold">
              Buscar Cursos
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">+10,000 Cursos</h3>
              <p className="text-white/80">En más de 100 categorías diferentes</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">+500,000 Estudiantes</h3>
              <p className="text-white/80">Aprenden con nosotros cada día</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">Certificaciones</h3>
              <p className="text-white/80">Reconocidas por la industria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explora por Categorías</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="flex flex-col items-center p-6 rounded-lg bg-white hover:shadow-md transition-shadow group"
                >
                  <div className={`p-4 rounded-full ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-medium text-center">{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Cursos Destacados</h2>
            <Button variant="outline">Ver Todos</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya están transformando sus carreras 
            con nuestros cursos de alta calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Comenzar Ahora
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Explorar Cursos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-8 w-8" />
                <span className="text-2xl font-bold">CursoHub</span>
              </div>
              <p className="text-background/80">
                La plataforma líder en educación online con los mejores cursos 
                impartidos por expertos de la industria.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/category/desarrollo" className="hover:text-background transition-colors">Desarrollo Web</Link></li>
                <li><Link to="/category/diseno" className="hover:text-background transition-colors">Diseño</Link></li>
                <li><Link to="/category/marketing" className="hover:text-background transition-colors">Marketing</Link></li>
                <li><Link to="/category/negocios" className="hover:text-background transition-colors">Negocios</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/about" className="hover:text-background transition-colors">Acerca de</Link></li>
                <li><Link to="/careers" className="hover:text-background transition-colors">Carreras</Link></li>
                <li><Link to="/press" className="hover:text-background transition-colors">Prensa</Link></li>
                <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/help" className="hover:text-background transition-colors">Centro de Ayuda</Link></li>
                <li><Link to="/contact" className="hover:text-background transition-colors">Contacto</Link></li>
                <li><Link to="/privacy" className="hover:text-background transition-colors">Privacidad</Link></li>
                <li><Link to="/terms" className="hover:text-background transition-colors">Términos</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 CursoHub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
