// Mock data para Multiservicios MX
export const servicios = [
  {
    id: 1,
    titulo: 'Electricidad',
    descripcion: 'Instalación de lámparas, reparación de fallas eléctricas, solución de cortos circuitos y mantenimiento eléctrico general.',
    icono: 'zap',
    serviciosIncluidos: ['Instalación de lámparas', 'Fallas eléctricas', 'Cortos circuitos', 'Tableros eléctricos', 'Contactos y apagadores']
  },
  {
    id: 2,
    titulo: 'Plomería',
    descripcion: 'Reparación de fugas, cambio de sanitarios, destapes de drenaje, instalación y mantenimiento de tinacos.',
    icono: 'wrench',
    serviciosIncluidos: ['Reparación de fugas', 'Cambio de sanitarios', 'Destapes de drenaje', 'Instalación de tinacos', 'Tuberías']
  },
  {
    id: 3,
    titulo: 'Carpintería',
    descripcion: 'Fabricación de muebles a medida, reparación de puertas, diseño e instalación de cocinas integrales.',
    icono: 'hammer',
    serviciosIncluidos: ['Muebles a medida', 'Reparación de puertas', 'Cocinas integrales', 'Closets', 'Restauración']
  },
  {
    id: 4,
    titulo: 'Pintura',
    descripcion: 'Pintura de interiores y exteriores, impermeabilización de techos y fachadas.',
    icono: 'paintbrush',
    serviciosIncluidos: ['Pintura interiores', 'Pintura exteriores', 'Impermeabilización', 'Texturas', 'Acabados especiales']
  },
  {
    id: 5,
    titulo: 'Computación',
    descripcion: 'Reparación de PC y laptops, instalación de redes, configuración de cámaras de seguridad y soporte técnico.',
    icono: 'monitor',
    serviciosIncluidos: ['Reparación PC/Laptop', 'Instalación de redes', 'Cámaras de seguridad', 'Soporte técnico', 'Configuración equipos']
  },
  {
    id: 6,
    titulo: 'Aluminio y Herrería',
    descripcion: 'Fabricación e instalación de puertas, ventanas, protecciones y estructuras metálicas.',
    icono: 'shield',
    serviciosIncluidos: ['Puertas de aluminio', 'Ventanas', 'Protecciones', 'Estructuras metálicas', 'Herrería artística']
  }
];

export const testimonios = [
  {
    id: 1,
    nombre: 'María González',
    ubicacion: 'Polanco, CDMX',
    comentario: 'Excelente servicio de plomería. Llegaron puntual, resolvieron la fuga rápidamente y dejaron todo limpio. Muy profesionales.',
    rating: 5,
    servicio: 'Plomería'
  },
  {
    id: 2,
    nombre: 'Carlos Hernández',
    ubicacion: 'Satelite, Edo. México',
    comentario: 'Contraté sus servicios de electricidad para mi negocio. Trabajo impecable y precios muy justos. Los recomiendo ampliamente.',
    rating: 5,
    servicio: 'Electricidad'
  },
  {
    id: 3,
    nombre: 'Ana Martínez',
    ubicacion: 'Roma Norte, CDMX',
    comentario: 'Me hicieron una cocina integral hermosa. Cumplieron con los tiempos y el resultado superó mis expectativas.',
    rating: 5,
    servicio: 'Carpintería'
  },
  {
    id: 4,
    nombre: 'Roberto Silva',
    ubicacion: 'Narvarte, CDMX',
    comentario: 'Pintaron mi casa completa. Muy ordenados, usaron materiales de calidad y el precio fue muy accesible.',
    rating: 5,
    servicio: 'Pintura'
  }
];

export const galeriaTrabajos = [
  {
    id: 1,
    titulo: 'Instalación Eléctrica Completa',
    categoria: 'Electricidad',
    imagen: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop&crop=center',
    descripcion: 'Instalación completa de sistema eléctrico en oficina corporativa'
  },
  {
    id: 2,
    titulo: 'Reparación Sistema Plomería',
    categoria: 'Plomería',
    imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
    descripcion: 'Reparación y actualización de sistema de plomería residencial'
  },
  {
    id: 3,
    titulo: 'Cocina Integral Moderna',
    categoria: 'Carpintería',
    imagen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
    descripcion: 'Diseño y fabricación de cocina integral con acabados de lujo'
  },
  {
    id: 4,
    titulo: 'Pintura Exterior Edificio',
    categoria: 'Pintura',
    imagen: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&crop=center',
    descripcion: 'Pintura exterior e impermeabilización de edificio residencial'
  },
  {
    id: 5,
    titulo: 'Red de Seguridad Empresarial',
    categoria: 'Computación',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
    descripcion: 'Instalación de cámaras de seguridad y red empresarial'
  },
  {
    id: 6,
    titulo: 'Protecciones de Aluminio',
    categoria: 'Aluminio y Herrería',
    imagen: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop&crop=center',
    descripcion: 'Fabricación e instalación de protecciones residenciales'
  }
];

export const contactInfo = {
  telefono: '+52 55 3985 0615',
  whatsapp: '+525539850615',
  email: 'contacto@multiservicios-mx.com',
  horario: 'Lunes a Sábado: 8:00 AM - 6:00 PM',
  cobertura: 'CDMX y Zona Metropolitana',
  direccion: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX'
};