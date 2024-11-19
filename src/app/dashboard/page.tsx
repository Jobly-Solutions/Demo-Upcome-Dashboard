'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range"
import { Calendar } from "@/components/ui/calendar"
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  Legend,
} from 'recharts'
import { 
  BarChart3, 
  Users, 
  Cpu, 
  TrendingUp, 
  Filter, 
  Brain, 
  Lightbulb, 
  Info,
  Download,
  Share2,
  HelpCircle,
  Calendar as CalendarIcon,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  History,
  Target,
  Settings,
  BookOpen,
  Plus
} from 'lucide-react'

// Datos de ejemplo actualizados
const overallScores = {
  strategy: 72,
  culture: 68,
  technology: 65,
  innovation: 70,
  leadership: 75,
  processes: 68,
}

const strategyData = [
  { name: 'Alineación estratégica', score: 75 },
  { name: 'Inversión en innovación', score: 70 },
  { name: 'Ejecución de proyectos', score: 68 },
  { name: 'Adaptabilidad al mercado', score: 73 },
  { name: 'Gestión del conocimiento', score: 71 },
]

const cultureData = [
  { name: 'Colaboración', score: 72 },
  { name: 'Comunicación interna', score: 70 },
  { name: 'Gestión del cambio', score: 65 },
  { name: 'Aprendizaje continuo', score: 60 },
  { name: 'Liderazgo', score: 70 },
  { name: 'Diversidad e inclusión', score: 75 },
]

const technologyData = [
  { name: 'Infraestructura digital', score: 68 },
  { name: 'Adopción de herramientas', score: 63 },
  { name: 'Seguridad de datos', score: 70 },
  { name: 'Automatización', score: 65 },
  { name: 'Análisis de datos', score: 67 },
  { name: 'Experiencia del usuario', score: 72 },
]

const radarData = [
  { subject: 'Estrategia', A: overallScores.strategy, fullMark: 100 },
  { subject: 'Cultura', A: overallScores.culture, fullMark: 100 },
  { subject: 'Tecnología', A: overallScores.technology, fullMark: 100 },
  { subject: 'Innovación', A: overallScores.innovation, fullMark: 100 },
  { subject: 'Liderazgo', A: overallScores.leadership, fullMark: 100 },
  { subject: 'Procesos', A: overallScores.processes, fullMark: 100 },
]

const implementationStages = [
  { name: 'Diseño de la encuesta', progress: 100 },
  { name: 'Comunicación del proyecto', progress: 100 },
  { name: 'Recolección de datos', progress: 75 },
  { name: 'Análisis de resultados', progress: 50 },
  { name: 'Presentación de hallazgos', progress: 25 },
  { name: 'Desarrollo del plan de acción', progress: 0 },
]

const trendData = [
  { name: 'Ene', estrategia: 65, cultura: 60, tecnologia: 58, innovacion: 62, liderazgo: 70, procesos: 63 },
  { name: 'Feb', estrategia: 68, cultura: 62, tecnologia: 60, innovacion: 65, liderazgo: 72, procesos: 65 },
  { name: 'Mar', estrategia: 70, cultura: 65, tecnologia: 62, innovacion: 68, liderazgo: 73, procesos: 66 },
  { name: 'Abr', estrategia: 72, cultura: 68, tecnologia: 65, innovacion: 70, liderazgo: 75, procesos: 68 },
  { name: 'May', estrategia: 73, cultura: 70, tecnologia: 67, innovacion: 72, liderazgo: 76, procesos: 69 },
  { name: 'Jun', estrategia: 75, cultura: 71, tecnologia: 69, innovacion: 74, liderazgo: 77, procesos: 70 },
]

const aiRecommendations = [
  {
    category: 'Estrategia',
    recommendations: [
      'Incrementar la alineación estratégica mediante reuniones trimestrales de revisión de objetivos.',
      'Aumentar la inversión en proyectos de innovación para mejorar el puntaje en Inversión en Innovación (actualmente 70%).',
      'Implementar una capacitación en adaptabilidad para el equipo de gestión, enfocada en la mejora del 73% en Adaptabilidad al Mercado.',
      'Refinar los indicadores clave de desempeño (KPIs) en la ejecución de proyectos para superar el puntaje actual de 68%.',
      'Fortalecer la gestión del conocimiento compartido con un repositorio accesible para el equipo (Gestión del Conocimiento: 71%).',
    ]
  },
  {
    category: 'Cultura',
    recommendations: [
      'Fomentar la colaboración interdepartamental para mantener y mejorar la puntuación actual de Colaboración (72%).',
      'Implementar un programa de comunicación para aumentar la efectividad interna y superar el puntaje actual de 70%.',
      'Establecer un programa de mentoría para apoyar el aprendizaje continuo, elevando el puntaje actual de 60% en esa área.',
      'Promover prácticas de liderazgo inclusivo para mantener el puntaje de Diversidad e Inclusión en 75%.',
      'Mejorar la gestión del cambio a través de talleres de adaptación al cambio, centrados en el puntaje actual de 65%.',
    ]
  },
  {
    category: 'Tecnología',
    recommendations: [
      'Optimizar la infraestructura digital mediante una revisión de los sistemas para alcanzar el puntaje deseado en Infraestructura Digital (68%).',
      'Desarrollar una estrategia para la adopción de herramientas tecnológicas, con el objetivo de superar el 63% actual.',
      'Aumentar la inversión en ciberseguridad para mantener y mejorar el puntaje de Seguridad de Datos (70%).',
      'Incorporar tecnologías de automatización para reducir la carga manual y mejorar el puntaje de Automatización (65%).',
      'Fortalecer la experiencia del usuario en herramientas internas para mantener el puntaje actual de 72%.',
    ]
  },
]

export default function Dashboard() {
  const [selectedSegment, setSelectedSegment] = useState('all')
  const [isLoading, setIsLoading] = useState(false)
  const [showTutorial, setShowTutorial] = useState(true)
  const [dateRange, setDateRange] = useState({ from: null, to: null })

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-500'
    if (score >= 70) return 'text-amber-500'
    return 'text-rose-500'
  }

  const getScoreTrend = (score, previousScore) => {
    const difference = score - previousScore
    return {
      trend: difference >= 0 ? 'positive' : 'negative',
      difference: Math.abs(difference).toFixed(1)
    }
  }

  const handleExport = async (format) => {
    setIsLoading(true)
    try {
      // Simulated export delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast({
        title: "Exportación exitosa",
        description: `El informe ha sido exportado en formato ${format}`,
      })
    } catch (error) {
      toast({
        title: "Error en la exportación",
        description: "No se pudo exportar el informe. Por favor intente nuevamente.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const MotionCard = motion(Card)

  const tutorialSteps = [
    {
      title: "Bienvenido a Upcome",
      description: "Este dashboard te ayudará a visualizar y analizar el progreso de la transformación digital en tu organización.",
      target: "dashboard-header"
    },
    {
      title: "Métricas Principales",
      description: "Aquí puedes ver los indicadores clave de rendimiento en Estrategia, Cultura y Tecnología.",
      target: "main-metrics"
    },
    // Add more tutorial steps as needed
  ]

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      {/* Enhanced Header with Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6" id="dashboard-header">
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-indigo-800">Dashboard Upcome</h1>
          <HoverCard>
            <HoverCardTrigger>
              <Badge variant="secondary" className="cursor-help">
                <HelpCircle className="w-4 h-4 mr-1" />
                Ayuda
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <h3 className="font-semibold mb-2">Acerca del Dashboard</h3>
              <p className="text-sm text-gray-600">
                Este dashboard proporciona una vista integral del progreso de transformación digital de tu organización.
                Utiliza los filtros y controles para personalizar la visualización.
              </p>
            </HoverCardContent>
          </HoverCard>
        </motion.div>

        <div className="flex gap-2 mt-4 md:mt-0">
          <DatePickerWithRange />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Configuración del Dashboard</SheetTitle>
                <SheetDescription>
                  Personaliza la visualización y las notificaciones
                </SheetDescription>
              </SheetHeader>
              {/* Add configuration options here */}
            </SheetContent>
          </Sheet>
          <Button
            variant="outline"
            onClick={() => handleExport('pdf')}
            disabled={isLoading}
          >
            <Download className="mr-2 h-4 w-4" />
            {isLoading ? 'Exportando...' : 'Exportar'}
          </Button>
        </div>
      </div>

      {/* Enhanced Filters Section */}
      <Card className="mb-6">
        <CardContent className="py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Select onValueChange={setSelectedSegment} defaultValue={selectedSegment}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Segmentar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="gender">Género</SelectItem>
                <SelectItem value="age">Rango etario</SelectItem>
                <SelectItem value="education">Nivel académico</SelectItem>
                <SelectItem value="department">Área</SelectItem>
                <SelectItem value="level">Nivel jerárquico</SelectItem>
              </SelectContent>
            </Select>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="sm">
                  <History className="mr-2 h-4 w-4" />
                  Histórico
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">Comparación Histórica</h4>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Mes anterior</span>
                      <span className="font-medium">+2.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Año anterior</span>
                      <span className="font-medium">+15.7%</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Target className="mr-2 h-4 w-4" />
                  Objetivos
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">Progreso hacia Objetivos</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Estrategia</span>
                        <span>72/80</span>
                      </div>
                      <Progress value={90} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cultura</span>
                        <span>68/75</span>
                      </div>
                      <Progress value={91} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Tecnología</span>
                        <span>65/70</span>
                      </div>
                      <Progress value={93} />
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
      </Card>

      {/* Main Metrics Cards with Enhanced Interactivity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" id="main-metrics">
        <MotionCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg font-semibold text-indigo-700">
              <div className="flex items-center">
                <BarChart3 className="mr-2" />
                Estrategia
              </div>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Índice de Estrategia</h4>
                    <p className="text-sm">Mide la alineación de la organización con los objetivos de transformación digital.</p>
                    <div className="text-sm">
                      <div className="flex justify-between">
                        <span>Objetivo actual:</span>
                        <span className="font-medium">80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Promedio del sector:</span>
                        <span className="font-medium">70%</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className={`text-3xl font-bold ${getScoreColor(overallScores.strategy)}`}>
                {overallScores.strategy}%
              </div>
              <Badge 
                variant={getScoreTrend(overallScores.strategy, 70).trend === 'positive' ? 'default' : 'destructive'}
                className="flex items-center"
              >
                {getScoreTrend(overallScores.strategy, 70).trend === 'positive' ? (
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                )}
                {getScoreTrend(overallScores.strategy, 70).difference}%
              </Badge>
            </div>
            <Progress value={overallScores.strategy} className="mt-2" />
            <p className="text-sm text-gray-600 mt-2">Alineación con objetivos de negocio</p>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            Actualizado hace 2 horas
          </CardFooter>
        </MotionCard>

        <MotionCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white shadow-lg rounded-xl"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg font-semibold text-indigo-700">
              <div className="flex items-center">
                <Users className="mr-2" />
                Cultura
              </div>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Índice de Cultura</h4>
                    <p className="text-sm">Evalúa la adaptabilidad y colaboración en la organización.</p>
                    <div className="text-sm">
                      <div className="flex justify-between">
                        <span>Objetivo actual:</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Promedio del sector:</span>
                        <span className="font-medium">65%</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className={`text-3xl font-bold ${getScoreColor(overallScores.culture)}`}>
                {overallScores.culture}%
              </div>
              <Badge 
                variant={getScoreTrend(overallScores.culture, 65).trend === 'positive' ? 'default' : 'destructive'}
                className="flex items-center"
              >
                {getScoreTrend(overallScores.culture, 65).trend === 'positive' ? (
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                )}
                {getScoreTrend(overallScores.culture, 65).difference}%
              </Badge>
            </div>
            <Progress value={overallScores.culture} className="mt-2" />
            <p className="text-sm text-gray-600 mt-2">Adaptabilidad y colaboración</p>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            Actualizado hace 2 horas
          </CardFooter>
        </MotionCard>

        <MotionCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-lg rounded-xl"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg font-semibold text-indigo-700">
              <div className="flex items-center">
                <Cpu className="mr-2" />
                Tecnología
              </div>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Índice de Tecnología</h4>
                    <p className="text-sm">Mide la adopción y uso eficiente de tecnologías en la organización.</p>
                    <div className="text-sm">
                      <div className="flex justify-between">
                        <span>Objetivo actual:</span>
                        <span className="font-medium">70%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Promedio del sector:</span>
                        <span className="font-medium">60%</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className={`text-3xl font-bold ${getScoreColor(overallScores.technology)}`}>
                {overallScores.technology}%
              </div>
              <Badge 
                variant={getScoreTrend(overallScores.technology, 60).trend === 'positive' ? 'default' : 'destructive'}
                className="flex items-center"
              >
                {getScoreTrend(overallScores.technology, 60).trend === 'positive' ? (
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                )}
                {getScoreTrend(overallScores.technology, 60).difference}%
              </Badge>
            </div>
            <Progress value={overallScores.technology} className="mt-2" />
            <p className="text-sm text-gray-600 mt-2">Adopción y uso eficiente</p>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            Actualizado hace 2 horas
          </CardFooter>
        </MotionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MotionCard
          className="col-span-full lg:col-span-1 bg-white shadow-lg rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-indigo-800">Análisis de Ejes Principales</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" stroke="#4a5568" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#4a5568" />
                <Radar name="Puntuación" dataKey="A" stroke="#6366f1" fill="#818cf8" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardDescription className="px-6 pb-4 text-sm text-gray-600">
            Este gráfico muestra el rendimiento de la empresa en seis dimensiones clave de la transformación digital. 
            Estrategia (72%) y Liderazgo (75%) son las áreas más fuertes, mientras que Tecnología (65%) y Cultura (68%) 
            presentan oportunidades de mejora.
          </CardDescription>
        </MotionCard>

        <MotionCard
          className="col-span-full lg:col-span-1 bg-white shadow-lg rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-indigo-800">Tendencia de Evolución</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#4a5568" />
                <YAxis stroke="#4a5568" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="estrategia" stroke="#6366f1" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="cultura" stroke="#10b981" />
                <Line type="monotone" dataKey="tecnologia" stroke="#f59e0b" />
                <Line type="monotone" dataKey="innovacion" stroke="#ef4444" />
                <Line type="monotone" dataKey="liderazgo" stroke="#8b5cf6" />
                <Line type="monotone" dataKey="procesos" stroke="#ec4899" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardDescription className="px-6 pb-4 text-sm text-gray-600">
            La gráfica muestra una tendencia positiva en todas las áreas durante los últimos 6 meses. 
            Destaca el crecimiento constante en Estrategia y Liderazgo, mientras que Tecnología y Cultura 
            muestran un progreso más gradual, indicando áreas de enfoque para futuras mejoras.
          </CardDescription>
        </MotionCard>
      </div>

      <MotionCard
        className="mb-6 bg-white shadow-lg rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-indigo-800">Desglose por Ejes</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="strategy">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="strategy">Estrategia</TabsTrigger>
              <TabsTrigger value="culture">Cultura</TabsTrigger>
              <TabsTrigger value="technology">Tecnología</TabsTrigger>
            </TabsList>
            <TabsContent value="strategy">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={strategyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#4a5568" />
                  <YAxis stroke="#4a5568" />
                  <Tooltip />
                  <Bar dataKey="score" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-gray-600">
                En el eje de Estrategia, la 'Alineación estratégica' (75%) y la 'Adaptabilidad al mercado' (73%) 
                son los puntos más fuertes. La 'Ejecución de proyectos' (68%) presenta la mayor oportunidad de mejora.
              </p>
            </TabsContent>
            <TabsContent value="culture">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cultureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#4a5568" />
                  <YAxis stroke="#4a5568" />
                  <Tooltip />
                  <Bar dataKey="score" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-gray-600">
                En Cultura, 'Diversidad e inclusión' (75%) y 'Colaboración' (72%) son las áreas más fuertes. 
                'Aprendizaje continuo' (60%) muestra la mayor necesidad de mejora, seguido por 'Gestión del cambio' (65%).
              </p>
            </TabsContent>
            <TabsContent value="technology">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={technologyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#4a5568" />
                  <YAxis stroke="#4a5568" />
                  <Tooltip />
                  <Bar dataKey="score" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-gray-600">
                En Tecnología, 'Experiencia del usuario' (72%) y 'Seguridad de datos' (70%) son los puntos más fuertes. 
                'Adopción de herramientas' (63%) y 'Automatización' (65%) presentan las mayores oportunidades de mejora.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </MotionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MotionCard
          className="bg-white shadow-lg rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-indigo-800">Etapas de Implementación</CardTitle>
          </CardHeader>
          <CardContent>
            {implementationStages.map((stage, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{stage.name}</span>
                  <span className="text-sm text-gray-500">{stage.progress}%</span>
                </div>
                <Progress value={stage.progress} />
              </div>
            ))}
          </CardContent>
        </MotionCard>

        <MotionCard
  className="bg-white shadow-lg rounded-xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
>
  <CardHeader>
    <CardTitle className="text-xl font-semibold text-indigo-800">Recomendaciones de IA</CardTitle>
  </CardHeader>
  <CardContent>
    <Tabs defaultValue="strategy">
      <TabsList>
        {aiRecommendations.map((category) => (
          <TabsTrigger key={category.category} value={category.category.toLowerCase()}>
            {category.category}
          </TabsTrigger>
        ))}
      </TabsList>
      {aiRecommendations.map((category, index) => (
        <TabsContent key={index} value={category.category.toLowerCase()}>
          <ul className="list-disc pl-5 space-y-2">
            {category.recommendations.map((recommendation, recIndex) => (
              <li key={recIndex} className="text-sm text-gray-600">{recommendation}</li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  </CardContent>
</MotionCard>

      </div>

      {/* Tutorial System */}
      {showTutorial && (
        <Sheet open={showTutorial} onOpenChange={setShowTutorial}>
          <SheetContent side="right" className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Bienvenido a Upcome</SheetTitle>
              <SheetDescription>
                Vamos a guiarte a través de las principales características de tu nuevo dashboard.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              {tutorialSteps.map((step, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setShowTutorial(false)}>Entendido</Button>
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Quick Action Floating Button */}
      <div className="fixed bottom-6 right-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="rounded-full shadow-lg">
              <Plus className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Acciones Rápidas</SheetTitle>
              <SheetDescription>
                Selecciona una acción para realizar
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Button className="w-full justify-start">
                <BookOpen className="mr-2 h-4 w-4" />
                Iniciar nueva encuesta
              </Button>
              <Button className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir informe
              </Button>
              <Button className="w-full justify-start">
                <Brain className="mr-2 h-4 w-4" />
                Generar insights de IA
              </Button>
              <Button className="w-full justify-start">
                <Lightbulb className="mr-2 h-4 w-4" />
                Sugerir mejoras
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}