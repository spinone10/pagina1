import React from 'react';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center"> 
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-lg font-bold">
                MX
              </div>
              <span className="ml-2 font-bold text-gray-900">Multiservicios</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Servicios
              </a>
             {/*
              <a href="#galeria" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Galería
              </a>

              <a href="#testimonios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Testimonios
              </a> 
              */}
          

              <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contacto
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="tel:+52 5539850615" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors hidden sm:block"
              >
                Llamar Ahora
              </a>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <Services />
        
        {/* About Section Placeholder */}
        <section id="quienes-somos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Quiénes Somos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Multiservicios MX</strong> estamos dedicados a resolver las necesidades 
                  cotidianas de reparación y mantenimiento en Estado de México y algunas zonas aledañas.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Con más de 5 años de experiencia, nuestro equipo 
                  está comprometido con ofrecer servicios de calidad, atención rápida y precios justos.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Clientes</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">99%</div>
                    <div className="text-gray-600">Confiabilidad</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop&crop=center" 
                  alt="Equipo de trabajo"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section Placeholder 
        <section id="galeria" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Galería de Trabajos</h2>
            <p className="text-lg text-gray-600 mb-12">Algunos de nuestros trabajos más destacados</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Proyecto {i + 1}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Proyecto {i + 1}</h3>
                    <p className="text-gray-600 text-sm">Se empleo carpinteria y pintura</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}
        
        {/* Testimonials Section Placeholder 
        <section id="testimonios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Lo Que Dicen Nuestros Clientes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className="font-semibold">Cliente {i + 1}</h4>
                      <p className="text-gray-600 text-sm">Zona Coyotepec</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Excelente servicio, muy profesionales y precios justos. Los recomiendo ampliamente."
                  </p>
                  <div className="flex items-center mt-4">
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}
      

        {/* Contact Section Placeholder */}
        <section id="contacto" className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contacto</h2>
              <p className="text-xl text-blue-200">Estamos aquí para ayudarte</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-4 text-lg">
                  <p><strong>Teléfono:</strong> +52 55 39850615</p>
                  <p><strong>WhatsApp:</strong> +52 55 39850615</p>
                  <p><strong>Email:</strong> mxmultiservicios10@gmail.com</p>
                  <p><strong>Horario:</strong> Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p><strong>Cobertura:</strong> Edo Mex (Coyotepec, Teoloyucan, Zumpango, Cuautitlán , Tepotzotlán)</p>
                </div>
              </div>
              {/*
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Solicita tu Cotización</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full p-3 rounded-lg bg-white/20 placeholder-blue-200 text-white border border-blue-300"
                  />
                  <input
                    type="tel"
                    placeholder="Numero de Teléfono"
                    className="w-full p-3 rounded-lg bg-white/20 placeholder-blue-200 text-white border border-blue-300"
                  />
                  <select className="w-full p-3 rounded-lg bg-white/20 text-white border border-blue-300">
                    <option value="">Selecciona un servicio</option>
                    <option value="electricidad">Electricidad</option>
                    <option value="plomeria">Plomería</option>
                    <option value="carpinteria">Carpintería</option>
                    <option value="pintura">Pintura</option>
                    <option value="computacion">Computación</option>
                    <option value="aluminio">Aluminio y Herrería</option>
                  </select>
                  <textarea
                    placeholder="Describe tu proyecto..."
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/20 placeholder-blue-200 text-white border border-blue-300"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Enviar Solicitud
                  </button> 
                </form>
              </div>*/}


            </div>
          </div>
        </section>     
        





      </main>

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton />
      
      <Toaster />
    </div>
  );
}

export default App;