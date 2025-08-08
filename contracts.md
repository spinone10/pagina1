# Contratos de API - Sistema de Referencias Personales

## Descripción General
Sistema para gestionar referencias personales de candidatos a empleo con límites de 1-3 referencias por usuario.

## Modelos de Datos

### Reference (Referencia)
```python
{
    "id": "string",
    "nombre": "string (requerido)",
    "segundoNombre": "string (opcional)",
    "apellidoPaterno": "string (requerido)",
    "apellidoMaterno": "string (requerido)",
    "direccion": {
        "calle": "string (requerido)",
        "numero": "string (requerido)",
        "colonia": "string (requerido)",
        "ciudad": "string (requerido)",
        "estado": "string (requerido)",
        "codigoPostal": "string (requerido, 5 dígitos)"
    },
    "correoElectronico": "string (requerido, email válido)",
    "telefono": "string (requerido)",
    "estadoCivil": "string (requerido, enum: Soltero|Casado|Divorciado|Viudo|Unión libre)",
    "rfc": "string (requerido, formato RFC mexicano)",
    "created_at": "datetime",
    "updated_at": "datetime"
}
```

## Endpoints de API

### 1. Obtener todas las referencias
- **GET** `/api/references`
- **Response**: `List[Reference]`
- **Descripción**: Retorna todas las referencias guardadas

### 2. Crear nueva referencia
- **POST** `/api/references`
- **Body**: `ReferenceCreate` (sin id, created_at, updated_at)
- **Response**: `Reference`
- **Validaciones**:
  - Máximo 3 referencias por usuario
  - Todos los campos requeridos presentes
  - Email válido
  - RFC válido (formato mexicano)
  - Código postal (5 dígitos)

### 3. Actualizar referencia
- **PUT** `/api/references/{reference_id}`
- **Body**: `ReferenceUpdate`
- **Response**: `Reference`
- **Validaciones**: Mismas que crear

### 4. Eliminar referencia
- **DELETE** `/api/references/{reference_id}`
- **Response**: `{"message": "Referencia eliminada correctamente"}`

## Datos Mock a Reemplazar

En `mock.js` tenemos:
- `mockReferences`: Array con 1 referencia de ejemplo
- `estadosCiviles`: Lista de estados civiles válidos
- `estadosMexico`: Lista de estados de México

## Validaciones del Backend

### Campos obligatorios
- nombre, apellidoPaterno, apellidoMaterno
- direccion.calle, direccion.numero, direccion.colonia, direccion.ciudad, direccion.estado, direccion.codigoPostal
- correoElectronico, telefono, estadoCivil, rfc

### Formatos específicos
- **Email**: Formato email válido
- **RFC**: Formato mexicano (ej: GAAJ850815ABC)
- **Teléfono**: Formato flexible con números, espacios, guiones
- **Código Postal**: Exactamente 5 dígitos

### Reglas de negocio
- Mínimo 1 referencia requerida para continuar proceso
- Máximo 3 referencias permitidas
- No duplicados por RFC o email

## Integración Frontend-Backend

1. **Reemplazar mock.js**:
   - `mockReferences` → API calls
   - Estados y países mantener en frontend

2. **Servicios a crear**:
   - `fetchReferences()`
   - `createReference(data)`
   - `updateReference(id, data)`
   - `deleteReference(id)`

3. **Manejo de errores**:
   - Validaciones del servidor
   - Límites de referencias
   - Mensajes de error específicos

4. **Estados de carga**:
   - Loading states para operaciones CRUD
   - Optimistic updates para mejor UX

## Estructura de la Base de Datos

### Colección: `references`
```javascript
{
  _id: ObjectId,
  nombre: String,
  segundoNombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  direccion: {
    calle: String,
    numero: String,
    colonia: String,
    ciudad: String,
    estado: String,
    codigoPostal: String
  },
  correoElectronico: String,
  telefono: String,
  estadoCivil: String,
  rfc: String,
  created_at: Date,
  updated_at: Date
}
```

### Índices recomendados
- `rfc` (único)
- `correoElectronico` (único)
- `created_at` (para ordenamiento)