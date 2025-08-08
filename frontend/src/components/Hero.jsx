import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageCircle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/525539850615?text=Hola, me gustaría solicitar información sobre sus servicios', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Servicios Profesionales
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                ¡Tu hogar y negocio en buenas manos!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Multiservicios MX resuelve necesidades de <strong>reparación y mantenimiento</strong> con atención rápida, buen servicio y precios accesibles.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Atención de lunes a viernes</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Buen Servicio</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Precios Accesibles</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-blue-700">
              <p className="text-blue-200 text-sm mb-4">Cobertura en EdoMex y algunas Zonas aledañas</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-blue-200 text-xs">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-blue-200 text-xs">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-blue-200 text-xs">Servicios Especializados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10hr/5 dias</div>
                  <div className="text-blue-200 text-xs">Atención Disponible</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:flex lg:justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold mb-2">MX</div>
                  <div className="text-lg md:text-xl font-semibold">Multiservicios</div>
                  <div className="text-sm md:text-base opacity-90">Soluciones Profesionales</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg" style={{ animationDelay: '1s' }}>
                <Phone className="w-10 h-10 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;