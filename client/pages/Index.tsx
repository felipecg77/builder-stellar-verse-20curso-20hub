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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          {course.bestseller && (
            <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500 text-xs">
              Bestseller
            </Badge>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
        </div>
      </div>

      <CardHeader className="pb-2 flex-1">
        <h3 className="font-semibold text-base sm:text-lg line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {course.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{course.instructor}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">{course.rating}</span>
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground truncate">
            ({course.studentCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="truncate">{course.duration}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {course.level}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-2xl font-bold">${course.price}</span>
            {course.originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
            <span className="sm:hidden">Inscribir</span>
            <span className="hidden sm:inline">Inscribirse</span>
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
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-8">
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <span className="text-lg sm:text-2xl font-bold text-primary">CursoHub</span>
              </Link>

              <nav className="hidden lg:flex items-center gap-6">
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

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar cursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 xl:w-80"
                />
              </div>

              <Link to="/login">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">
                  <span className="hidden sm:inline">Registrarse</span>
                  <span className="sm:hidden">Registro</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-3 lg:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Aprende sin límites
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Descubre miles de cursos impartidos por expertos de la industria.
            Desarrolla nuevas habilidades y avanza en tu carrera profesional.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                placeholder="¿Qué quieres aprender hoy?"
                className="pl-10 sm:pl-12 h-12 sm:h-14 text-base sm:text-lg bg-white text-foreground w-full"
              />
            </div>
            <Button size="lg" variant="secondary" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <span className="sm:hidden">Buscar</span>
              <span className="hidden sm:inline">Buscar Cursos</span>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white/80" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">+10,000 Cursos</h3>
              <p className="text-sm sm:text-base text-white/80">En más de 100 categorías diferentes</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white/80" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">+500,000 Estudiantes</h3>
              <p className="text-sm sm:text-base text-white/80">Aprenden con nosotros cada día</p>
            </div>
            <div className="text-center">
              <Star className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white/80" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Certificaciones</h3>
              <p className="text-sm sm:text-base text-white/80">Reconocidas por la industria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Explora por Categorías</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-white hover:shadow-md transition-shadow group"
                >
                  <div className={`p-3 sm:p-4 rounded-full ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-medium text-center text-sm sm:text-base">{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Cursos Destacados</h2>
            <Button variant="outline" size="sm" className="self-start sm:self-auto">
              Ver Todos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">¿Listo para comenzar?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Únete a miles de estudiantes que ya están transformando sus carreras
            con nuestros cursos de alta calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link to="/register">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                Comenzar Ahora
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                Explorar Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-xl sm:text-2xl font-bold">CursoHub</span>
              </div>
              <p className="text-background/80 text-sm sm:text-base">
                La plataforma líder en educación online con los mejores cursos
                impartidos por expertos de la industria.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Cursos</h3>
              <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base">
                <li><Link to="/category/desarrollo" className="hover:text-background transition-colors">Desarrollo Web</Link></li>
                <li><Link to="/category/diseno" className="hover:text-background transition-colors">Diseño</Link></li>
                <li><Link to="/category/marketing" className="hover:text-background transition-colors">Marketing</Link></li>
                <li><Link to="/category/negocios" className="hover:text-background transition-colors">Negocios</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Empresa</h3>
              <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base">
                <li><Link to="/about" className="hover:text-background transition-colors">Acerca de</Link></li>
                <li><Link to="/careers" className="hover:text-background transition-colors">Carreras</Link></li>
                <li><Link to="/press" className="hover:text-background transition-colors">Prensa</Link></li>
                <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Soporte</h3>
              <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base">
                <li><Link to="/help" className="hover:text-background transition-colors">Centro de Ayuda</Link></li>
                <li><Link to="/contact" className="hover:text-background transition-colors">Contacto</Link></li>
                <li><Link to="/privacy" className="hover:text-background transition-colors">Privacidad</Link></li>
                <li><Link to="/terms" className="hover:text-background transition-colors">Términos</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-background/60 text-xs sm:text-sm">
            <p>&copy; 2024 CursoHub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
