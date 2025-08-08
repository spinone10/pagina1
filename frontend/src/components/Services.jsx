import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Zap, Wrench, Hammer, Paintbrush, Monitor, Shield, ArrowRight } from 'lucide-react';
import { servicios } from '../mock';

const iconMap = {
  zap: Zap,
  wrench: Wrench,
  hammer: Hammer,
  paintbrush: Paintbrush,
  monitor: Monitor,
  shield: Shield,
};

const Services = () => {
  const openWhatsApp = (servicio) => {
    const mensaje = `Hola, me interesa el servicio de ${servicio}. ¿Podrían enviarme más información?`;
    window.open(`https://wa.me/525539850615?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones <span className="text-blue-600">Profesionales</span> para Tu Hogar y Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con técnico en cada área para brindarte el mejor servicio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => {
            const IconComponent = iconMap[servicio.icono];
            
            return (
              <Card 
                key={servicio.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Calidad
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {servicio.titulo}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  
                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                      Servicios Incluidos:
                    </h4>
                    <ul className="space-y-2">
                      {servicio.serviciosIncluidos.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                      {servicio.serviciosIncluidos.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          + {servicio.serviciosIncluidos.length - 3} servicios más...
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={() => openWhatsApp(servicio.titulo)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all transform hover:scale-105 group-hover:shadow-lg"
                  >
                    Cotizar {servicio.titulo}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Necesitas Múltiples Servicios?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Ofrecemos paquetes especiales para proyectos que requieren varios servicios. 
            ¡Cotiza todo junto y ahorra!
          </p>
          <Button 
            onClick={() => openWhatsApp('Paquete de múltiples servicios')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicitar Cotización Integral
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;