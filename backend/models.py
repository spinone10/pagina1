from pydantic import BaseModel, Field, EmailStr, validator
from typing import Optional, List
from datetime import datetime
import re

class Direccion(BaseModel):
    calle: str = Field(..., min_length=1, max_length=100)
    numero: str = Field(..., min_length=1, max_length=20)
    colonia: str = Field(..., min_length=1, max_length=50)
    ciudad: str = Field(..., min_length=1, max_length=50)
    estado: str = Field(..., min_length=1, max_length=50)
    codigoPostal: str = Field(..., min_length=5, max_length=5)
    
    @validator('codigoPostal')
    def validate_codigo_postal(cls, v):
        if not re.match(r'^\d{5}$', v):
            raise ValueError('El código postal debe tener exactamente 5 dígitos')
        return v

class ReferenceBase(BaseModel):
    nombre: str = Field(..., min_length=1, max_length=50)
    segundoNombre: Optional[str] = Field(None, max_length=50)
    apellidoPaterno: str = Field(..., min_length=1, max_length=50)
    apellidoMaterno: str = Field(..., min_length=1, max_length=50)
    direccion: Direccion
    correoElectronico: EmailStr
    telefono: str = Field(..., min_length=10, max_length=20)
    estadoCivil: str = Field(..., min_length=1)
    rfc: str = Field(..., min_length=12, max_length=13)
    
    @validator('telefono')
    def validate_telefono(cls, v):
        # Permitir números, espacios, guiones, paréntesis y el símbolo +
        if not re.match(r'^[\+]?[\d\s\-\(\)]{10,20}$', v):
            raise ValueError('Formato de teléfono inválido')
        return v
    
    @validator('rfc')
    def validate_rfc(cls, v):
        rfc_upper = v.upper()
        # RFC mexicano: 4 letras + 6 números + 3 caracteres alfanuméricos
        if not re.match(r'^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$', rfc_upper):
            raise ValueError('Formato de RFC inválido (ej: GAAJ850815ABC)')
        return rfc_upper
    
    @validator('estadoCivil')
    def validate_estado_civil(cls, v):
        estados_validos = ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre']
        if v not in estados_validos:
            raise ValueError(f'Estado civil debe ser uno de: {", ".join(estados_validos)}')
        return v

class ReferenceCreate(ReferenceBase):
    pass

class ReferenceUpdate(ReferenceBase):
    pass

class Reference(ReferenceBase):
    id: str = Field(..., alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        allow_population_by_field_name = True
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class ReferenceInDB(Reference):
    pass