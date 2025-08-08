import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Edit, Trash2, User, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

const ReferenceCard = ({ reference, onEdit, onDelete }) => {
  const fullName = `${reference.nombre} ${reference.segundoNombre ? reference.segundoNombre + ' ' : ''}${reference.apellidoPaterno} ${reference.apellidoMaterno}`;
  const fullAddress = `${reference.direccion.calle} ${reference.direccion.numero}, ${reference.direccion.colonia}, ${reference.direccion.ciudad}, ${reference.direccion.estado} ${reference.direccion.codigoPostal}`;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{fullName}</h3>
              <Badge variant="outline" className="mt-1">
                {reference.estadoCivil}
              </Badge>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(reference)}
              className="hover:bg-blue-50 hover:border-blue-300"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(reference.id)}
              className="hover:bg-red-50 hover:border-red-300 text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start space-x-2">
            <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-600">Correo electrónico</p>
              <p className="text-gray-900 font-medium break-all">{reference.correoElectronico}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-600">Teléfono</p>
              <p className="text-gray-900 font-medium">{reference.telefono}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 md:col-span-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-600">Dirección</p>
              <p className="text-gray-900 font-medium">{fullAddress}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <CreditCard className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-600">RFC</p>
              <p className="text-gray-900 font-medium font-mono">{reference.rfc}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferenceCard;