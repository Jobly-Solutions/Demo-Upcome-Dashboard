'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { ClipboardList, Star, User } from 'lucide-react'

const departments = [
  "Tecnología",
  "Recursos Humanos",
  "Marketing",
  "Ventas",
  "Operaciones",
  "Finanzas",
  "Dirección"
]

const educationLevels = [
  "Secundaria",
  "Técnico",
  "Universitario",
  "Postgrado",
  "Doctorado"
]

const ageRanges = [
  "18-25",
  "26-35",
  "36-45",
  "46-55",
  "56+"
]

const hierarchyLevels = [
  "Colaborador",
  "Supervisor",
  "Gerente",
  "Director",
  "Ejecutivo"
]

export default function SurveyForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    department: '',
    age: '',
    education: '',
    hierarchyLevel: '',
    gender: '',

    // Ratings
    strategy: {
      alignment: 0,
      investment: 0,
      execution: 0,
      marketAdaptability: 0,
      knowledgeManagement: 0
    },
    culture: {
      collaboration: 0,
      communication: 0,
      changeManagement: 0,
      continuousLearning: 0,
      leadership: 0,
      diversity: 0
    },
    technology: {
      digitalCapabilities: 0,
      toolAdoption: 0,
      dataSecurity: 0,
      automation: 0,
      dataAnalysis: 0,
      userExperience: 0
    },

    // Comments
    strengths: '',
    improvements: '',
    suggestions: ''
  })

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNestedInputChange = (category: string, field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 3))
  }

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí iría la lógica para enviar los datos
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-2">Tu opinión nos importa</h1>
          <h2 className="text-xl text-center text-gray-600 mb-8">Encuesta de Satisfacción</h2>
        </motion.div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-indigo-700">
              <ClipboardList className="h-6 w-6" />
              Encuesta de Satisfacción
            </CardTitle>
            <CardDescription>
              Ayúdanos a mejorar compartiendo tu experiencia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-8">
              <div className={`flex flex-col items-center ${step === 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm">Información Personal</span>
              </div>
              <div className={`flex flex-col items-center ${step === 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2">
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-sm">Valoraciones</span>
              </div>
              <div className={`flex flex-col items-center ${step === 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <span className="text-sm">Comentarios</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Departamento</Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => handleInputChange('department', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu departamento" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Rango de Edad</Label>
                      <Select
                        value={formData.age}
                        onValueChange={(value) => handleInputChange('age', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu rango de edad" />
                        </SelectTrigger>
                        <SelectContent>
                          {ageRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Género</Label>
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) => handleInputChange('gender', value)}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="masculino" id="masculino" />
                          <Label htmlFor="masculino">Masculino</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="femenino" id="femenino" />
                          <Label htmlFor="femenino">Femenino</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="otro" id="otro" />
                          <Label htmlFor="otro">Otro</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-indigo-800">Estrategia</h3>
                      {Object.entries({
                        alignment: 'Alineación estratégica',
                        investment: 'Inversión en innovación',
                        execution: 'Ejecución de proyectos',
                        marketAdaptability: 'Adaptabilidad al mercado',
                        knowledgeManagement: 'Gestión del conocimiento'
                      }).map(([key, label]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between">
                            <Label>{label}</Label>
                            <span className="text-sm text-gray-500">
                              {formData.strategy[key as keyof typeof formData.strategy]}%
                            </span>
                          </div>
                          <Slider
                            value={[formData.strategy[key as keyof typeof formData.strategy]]}
                            onValueChange={([value]) => handleNestedInputChange('strategy', key, value)}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-indigo-800">Cultura</h3>
                      {Object.entries({
                        collaboration: 'Colaboración',
                        communication: 'Comunicación interna',
                        changeManagement: 'Gestión del cambio',
                        continuousLearning: 'Aprendizaje continuo',
                        leadership: 'Liderazgo',
                        diversity: 'Diversidad e inclusión'
                      }).map(([key, label]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between">
                            <Label>{label}</Label>
                            <span className="text-sm text-gray-500">
                              {formData.culture[key as keyof typeof formData.culture]}%
                            </span>
                          </div>
                          <Slider
                            value={[formData.culture[key as keyof typeof formData.culture]]}
                            onValueChange={([value]) => handleNestedInputChange('culture', key, value)}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-indigo-800">Tecnología</h3>
                      {Object.entries({
                        digitalCapabilities: 'Capacidades digitales',
                        toolAdoption: 'Adopción de herramientas',
                        dataSecurity: 'Seguridad de datos',
                        automation: 'Automatización',
                        dataAnalysis: 'Análisis de datos',
                        userExperience: 'Experiencia del usuario'
                      }).map(([key, label]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between">
                            <Label>{label}</Label>
                            <span className="text-sm text-gray-500">
                              {formData.technology[key as keyof typeof formData.technology]}%
                            </span>
                          </div>
                          <Slider
                            value={[formData.technology[key as keyof typeof formData.technology]]}
                            onValueChange={([value]) => handleNestedInputChange('technology', key, value)}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="strengths">¿Cuáles consideras que son las principales fortalezas de la organización?</Label>
                      <Textarea
                        id="strengths"
                        value={formData.strengths}
                        onChange={(e) => handleInputChange('strengths', e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="improvements">¿Qué aspectos crees que necesitan mayor atención o mejora?</Label>
                      <Textarea
                        id="improvements"
                        value={formData.improvements}
                        onChange={(e) => handleInputChange('improvements', e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="suggestions">¿Tienes alguna sugerencia específica para mejorar la transformación digital?</Label>
                      <Textarea
                        id="suggestions"
                        value={formData.suggestions}
                        onChange={(e) => handleInputChange('suggestions', e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={step === 1}
                >
                  Anterior
                </Button>
                {step < 3 ? (
                  <Button type="button" onClick={handleNext}>
                    Siguiente
                  </Button>
                ) : (
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                    Enviar Encuesta
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}