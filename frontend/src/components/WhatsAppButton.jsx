import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first-time visitors
      const hasSeenTooltip = localStorage.getItem('whatsapp_tooltip_seen');
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        localStorage.setItem('whatsapp_tooltip_seen', 'true');
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const mensaje = "Hola! Me gustaría solicitar información sobre sus servicios de Multiservicios MX.";
    window.open(`https://wa.me/525539850615?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-lg shadow-xl border p-4 transform transition-all duration-300 animate-pulse">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">¡Cotiza Gratis!</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    Envíanos un mensaje y recibe una cotización sin compromiso
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={openWhatsApp}
            className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
            style={{ animation: 'bounce 2s infinite' }}
          >
            <MessageCircle className="w-8 h-8" />
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          </button>

          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            1
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-15px);
          }
          70% {
            transform: translateY(-7px);
          }
          90% {
            transform: translateY(-3px);
          }
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;