from motor.motor_asyncio import AsyncIOMotorDatabase
from models import Reference, ReferenceCreate, ReferenceUpdate
from database import get_database
from typing import List, Optional
from datetime import datetime
from bson import ObjectId
from fastapi import HTTPException
import pymongo

class ReferenceService:
    def __init__(self, database: AsyncIOMotorDatabase):
        self.database = database
        self.collection = database.references

    async def get_all_references(self) -> List[Reference]:
        """Obtener todas las referencias ordenadas por fecha de creación"""
        references = []
        cursor = self.collection.find({}).sort("created_at", pymongo.DESCENDING)
        
        async for document in cursor:
            document["_id"] = str(document["_id"])
            references.append(Reference(**document))
        
        return references

    async def get_reference_by_id(self, reference_id: str) -> Optional[Reference]:
        """Obtener referencia por ID"""
        if not ObjectId.is_valid(reference_id):
            return None
            
        document = await self.collection.find_one({"_id": ObjectId(reference_id)})
        if document:
            document["_id"] = str(document["_id"])
            return Reference(**document)
        return None

    async def create_reference(self, reference_data: ReferenceCreate) -> Reference:
        """Crear nueva referencia con validaciones"""
        
        # Verificar límite máximo de 3 referencias
        count = await self.collection.count_documents({})
        if count >= 3:
            raise HTTPException(
                status_code=400, 
                detail="No se pueden agregar más de 3 referencias personales"
            )
        
        # Verificar duplicados por RFC
        existing_rfc = await self.collection.find_one({"rfc": reference_data.rfc})
        if existing_rfc:
            raise HTTPException(
                status_code=400,
                detail="Ya existe una referencia con este RFC"
            )
        
        # Verificar duplicados por email
        existing_email = await self.collection.find_one({"correoElectronico": reference_data.correoElectronico})
        if existing_email:
            raise HTTPException(
                status_code=400,
                detail="Ya existe una referencia con este correo electrónico"
            )
        
        # Crear documento
        reference_dict = reference_data.dict()
        reference_dict["created_at"] = datetime.utcnow()
        reference_dict["updated_at"] = datetime.utcnow()
        
        result = await self.collection.insert_one(reference_dict)
        
        # Retornar referencia creada
        created_reference = await self.get_reference_by_id(str(result.inserted_id))
        return created_reference

    async def update_reference(self, reference_id: str, reference_data: ReferenceUpdate) -> Optional[Reference]:
        """Actualizar referencia existente"""
        if not ObjectId.is_valid(reference_id):
            raise HTTPException(status_code=400, detail="ID de referencia inválido")
        
        # Verificar que la referencia existe
        existing_reference = await self.get_reference_by_id(reference_id)
        if not existing_reference:
            raise HTTPException(status_code=404, detail="Referencia no encontrada")
        
        # Verificar duplicados por RFC (excluyendo la referencia actual)
        existing_rfc = await self.collection.find_one({
            "rfc": reference_data.rfc,
            "_id": {"$ne": ObjectId(reference_id)}
        })
        if existing_rfc:
            raise HTTPException(
                status_code=400,
                detail="Ya existe otra referencia con este RFC"
            )
        
        # Verificar duplicados por email (excluyendo la referencia actual)
        existing_email = await self.collection.find_one({
            "correoElectronico": reference_data.correoElectronico,
            "_id": {"$ne": ObjectId(reference_id)}
        })
        if existing_email:
            raise HTTPException(
                status_code=400,
                detail="Ya existe otra referencia con este correo electrónico"
            )
        
        # Actualizar documento
        update_dict = reference_data.dict()
        update_dict["updated_at"] = datetime.utcnow()
        
        await self.collection.update_one(
            {"_id": ObjectId(reference_id)},
            {"$set": update_dict}
        )
        
        # Retornar referencia actualizada
        return await self.get_reference_by_id(reference_id)

    async def delete_reference(self, reference_id: str) -> bool:
        """Eliminar referencia"""
        if not ObjectId.is_valid(reference_id):
            raise HTTPException(status_code=400, detail="ID de referencia inválido")
        
        # Verificar que la referencia existe
        existing_reference = await self.get_reference_by_id(reference_id)
        if not existing_reference:
            raise HTTPException(status_code=404, detail="Referencia no encontrada")
        
        result = await self.collection.delete_one({"_id": ObjectId(reference_id)})
        return result.deleted_count > 0

    async def get_references_count(self) -> int:
        """Obtener número total de referencias"""
        return await self.collection.count_documents({})


async def get_reference_service() -> ReferenceService:
    """Dependency injection para el servicio de referencias"""
    database = await get_database()
    return ReferenceService(database)