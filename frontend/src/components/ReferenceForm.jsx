import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { X, Save, Edit, Loader2 } from 'lucide-react';
import { estadosCiviles, estadosMexico } from '../mock';
import { useToast } from '../hooks/use-toast';

const ReferenceForm = ({ reference, onSave, onCancel, isEdit = false, isSaving = false }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    direccion: {
      calle: '',
      numero: '',
      colonia: '',
      ciudad: '',
      estado: '',
      codigoPostal: ''
    },
    correoElectronico: '',
    telefono: '',
    estadoCivil: '',
    rfc: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (reference) {
      setFormData(reference);
    }
  }, [reference]);

  const validateForm = () => {
    const newErrors = {};

    // Campos obligatorios
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.apellidoPaterno.trim()) newErrors.apellidoPaterno = 'El apellido paterno es obligatorio';
    if (!formData.apellidoMaterno.trim()) newErrors.apellidoMaterno = 'El apellido materno es obligatorio';
    if (!formData.direccion.calle.trim()) newErrors.calle = 'La calle es obligatoria';
    if (!formData.direccion.numero.trim()) newErrors.numero = 'El número es obligatorio';
    if (!formData.direccion.colonia.trim()) newErrors.colonia = 'La colonia es obligatoria';
    if (!formData.direccion.ciudad.trim()) newErrors.ciudad = 'La ciudad es obligatoria';
    if (!formData.direccion.estado) newErrors.estado = 'El estado es obligatorio';
    if (!formData.direccion.codigoPostal.trim()) newErrors.codigoPostal = 'El código postal es obligatorio';
    if (!formData.correoElectronico.trim()) newErrors.correoElectronico = 'El correo electrónico es obligatorio';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio';
    if (!formData.estadoCivil) newErrors.estadoCivil = 'El estado civil es obligatorio';
    if (!formData.rfc.trim()) newErrors.rfc = 'El RFC es obligatorio';

    // Validaciones específicas
    if (formData.correoElectronico && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'Ingresa un correo electrónico válido';
    }

    if (formData.telefono && !/^[\+]?[\d\s\-\(\)]{10,20}$/.test(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido';
    }

    if (formData.rfc && !/^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$/.test(formData.rfc.toUpperCase())) {
      newErrors.rfc = 'Ingresa un RFC válido (ej: GAAJ850815ABC)';
    }

    if (formData.direccion.codigoPostal && !/^[0-9]{5}$/.test(formData.direccion.codigoPostal)) {
      newErrors.codigoPostal = 'Ingresa un código postal válido (5 dígitos)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor corrige los errores antes de continuar",
        variant: "destructive"
      });
      return;
    }

    const dataToSave = {
      ...formData,
      rfc: formData.rfc.toUpperCase()
    };

    onSave(dataToSave);
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field] || errors[field.split('.')[1]]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
        [field.split('.')[1]]: ''
      }));
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center">
            {isEdit ? <Edit className="w-5 h-5 mr-2" /> : <Save className="w-5 h-5 mr-2" />}
            {isEdit ? 'Editar Referencia' : 'Nueva Referencia Personal'}
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onCancel} 
            className="text-white hover:bg-white/20"
            disabled={isSaving}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Personal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Información Personal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombre">Nombre *</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                  className={errors.nombre ? 'border-red-500' : ''}
                  placeholder="Nombre"
                  disabled={isSaving}
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>
              
              <div>
                <Label htmlFor="segundoNombre">Segundo Nombre</Label>
                <Input
                  id="segundoNombre"
                  value={formData.segundoNombre}
                  onChange={(e) => handleInputChange('segundoNombre', e.target.value)}
                  placeholder="Segundo nombre (opcional)"
                  disabled={isSaving}
                />
              </div>
              
              <div>
                <Label htmlFor="apellidoPaterno">Apellido Paterno *</Label>
                <Input
                  id="apellidoPaterno"
                  value={formData.apellidoPaterno}
                  onChange={(e) => handleInputChange('apellidoPaterno', e.target.value)}
                  className={errors.apellidoPaterno ? 'border-red-500' : ''}
                  placeholder="Apellido paterno"
                  disabled={isSaving}
                />
                {errors.apellidoPaterno && <p className="text-red-500 text-sm mt-1">{errors.apellidoPaterno}</p>}
              </div>
              
              <div>
                <Label htmlFor="apellidoMaterno">Apellido Materno *</Label>
                <Input
                  id="apellidoMaterno"
                  value={formData.apellidoMaterno}
                  onChange={(e) => handleInputChange('apellidoMaterno', e.target.value)}
                  className={errors.apellidoMaterno ? 'border-red-500' : ''}
                  placeholder="Apellido materno"
                  disabled={isSaving}
                />
                {errors.apellidoMaterno && <p className="text-red-500 text-sm mt-1">{errors.apellidoMaterno}</p>}
              </div>
            </div>
          </div>

          {/* Dirección */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Dirección</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="calle">Calle *</Label>
                <Input
                  id="calle"
                  value={formData.direccion.calle}
                  onChange={(e) => handleInputChange('direccion.calle', e.target.value)}
                  className={errors.calle ? 'border-red-500' : ''}
                  placeholder="Nombre de la calle"
                  disabled={isSaving}
                />
                {errors.calle && <p className="text-red-500 text-sm mt-1">{errors.calle}</p>}
              </div>
              
              <div>
                <Label htmlFor="numero">Número *</Label>
                <Input
                  id="numero"
                  value={formData.direccion.numero}
                  onChange={(e) => handleInputChange('direccion.numero', e.target.value)}
                  className={errors.numero ? 'border-red-500' : ''}
                  placeholder="Número"
                  disabled={isSaving}
                />
                {errors.numero && <p className="text-red-500 text-sm mt-1">{errors.numero}</p>}
              </div>
              
              <div>
                <Label htmlFor="colonia">Colonia *</Label>
                <Input
                  id="colonia"
                  value={formData.direccion.colonia}
                  onChange={(e) => handleInputChange('direccion.colonia', e.target.value)}
                  className={errors.colonia ? 'border-red-500' : ''}
                  placeholder="Colonia"
                  disabled={isSaving}
                />
                {errors.colonia && <p className="text-red-500 text-sm mt-1">{errors.colonia}</p>}
              </div>
              
              <div>
                <Label htmlFor="ciudad">Ciudad *</Label>
                <Input
                  id="ciudad"
                  value={formData.direccion.ciudad}
                  onChange={(e) => handleInputChange('direccion.ciudad', e.target.value)}
                  className={errors.ciudad ? 'border-red-500' : ''}
                  placeholder="Ciudad"
                  disabled={isSaving}
                />
                {errors.ciudad && <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>}
              </div>
              
              <div>
                <Label htmlFor="estado">Estado *</Label>
                <Select 
                  value={formData.direccion.estado} 
                  onValueChange={(value) => handleInputChange('direccion.estado', value)}
                  disabled={isSaving}
                >
                  <SelectTrigger className={errors.estado ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Selecciona estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {estadosMexico.map((estado) => (
                      <SelectItem key={estado} value={estado}>
                        {estado}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.estado && <p className="text-red-500 text-sm mt-1">{errors.estado}</p>}
              </div>
              
              <div>
                <Label htmlFor="codigoPostal">Código Postal *</Label>
                <Input
                  id="codigoPostal"
                  value={formData.direccion.codigoPostal}
                  onChange={(e) => handleInputChange('direccion.codigoPostal', e.target.value)}
                  className={errors.codigoPostal ? 'border-red-500' : ''}
                  placeholder="00000"
                  maxLength={5}
                  disabled={isSaving}
                />
                {errors.codigoPostal && <p className="text-red-500 text-sm mt-1">{errors.codigoPostal}</p>}
              </div>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Información de Contacto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="correoElectronico">Correo Electrónico *</Label>
                <Input
                  id="correoElectronico"
                  type="email"
                  value={formData.correoElectronico}
                  onChange={(e) => handleInputChange('correoElectronico', e.target.value)}
                  className={errors.correoElectronico ? 'border-red-500' : ''}
                  placeholder="correo@ejemplo.com"
                  disabled={isSaving}
                />
                {errors.correoElectronico && <p className="text-red-500 text-sm mt-1">{errors.correoElectronico}</p>}
              </div>
              
              <div>
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) => handleInputChange('telefono', e.target.value)}
                  className={errors.telefono ? 'border-red-500' : ''}
                  placeholder="+52 55 1234 5678"
                  disabled={isSaving}
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </div>
              
              <div>
                <Label htmlFor="estadoCivil">Estado Civil *</Label>
                <Select 
                  value={formData.estadoCivil} 
                  onValueChange={(value) => handleInputChange('estadoCivil', value)}
                  disabled={isSaving}
                >
                  <SelectTrigger className={errors.estadoCivil ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Selecciona estado civil" />
                  </SelectTrigger>
                  <SelectContent>
                    {estadosCiviles.map((estado) => (
                      <SelectItem key={estado} value={estado}>
                        {estado}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.estadoCivil && <p className="text-red-500 text-sm mt-1">{errors.estadoCivil}</p>}
              </div>
              
              <div>
                <Label htmlFor="rfc">RFC *</Label>
                <Input
                  id="rfc"
                  value={formData.rfc}
                  onChange={(e) => handleInputChange('rfc', e.target.value.toUpperCase())}
                  className={errors.rfc ? 'border-red-500' : ''}
                  placeholder="GAAJ850815ABC"
                  maxLength={13}
                  disabled={isSaving}
                />
                {errors.rfc && <p className="text-red-500 text-sm mt-1">{errors.rfc}</p>}
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {isEdit ? 'Actualizando...' : 'Guardando...'}
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {isEdit ? 'Actualizar Referencia' : 'Guardar Referencia'}
                </>
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel} 
              className="flex-1"
              disabled={isSaving}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReferenceForm;