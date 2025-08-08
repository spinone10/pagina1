from fastapi import FastAPI, APIRouter, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import logging
from contextlib import asynccontextmanager

# Importar módulos locales
from models import Reference, ReferenceCreate, ReferenceUpdate
from services import ReferenceService, get_reference_service
from database import connect_to_mongo, close_mongo_connection

# Configuración
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Lifespan events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await connect_to_mongo()
    yield
    # Shutdown
    await close_mongo_connection()

# Crear la aplicación
app = FastAPI(lifespan=lifespan)

# Crear router con prefijo /api
api_router = APIRouter(prefix="/api")

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoints de Referencias Personales

@api_router.get("/")
async def root():
    return {"message": "Referencias Personales API"}

@api_router.get("/references", response_model=list[Reference])
async def get_all_references(
    service: ReferenceService = Depends(get_reference_service)
):
    """Obtener todas las referencias personales"""
    try:
        references = await service.get_all_references()
        logger.info(f"Retornando {len(references)} referencias")
        return references
    except Exception as e:
        logger.error(f"Error al obtener referencias: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@api_router.get("/references/{reference_id}", response_model=Reference)
async def get_reference(
    reference_id: str,
    service: ReferenceService = Depends(get_reference_service)
):
    """Obtener referencia por ID"""
    try:
        reference = await service.get_reference_by_id(reference_id)
        if not reference:
            raise HTTPException(status_code=404, detail="Referencia no encontrada")
        return reference
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error al obtener referencia {reference_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@api_router.post("/references", response_model=Reference, status_code=201)
async def create_reference(
    reference_data: ReferenceCreate,
    service: ReferenceService = Depends(get_reference_service)
):
    """Crear nueva referencia personal"""
    try:
        reference = await service.create_reference(reference_data)
        logger.info(f"Referencia creada: {reference.nombre} {reference.apellidoPaterno}")
        return reference
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error al crear referencia: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@api_router.put("/references/{reference_id}", response_model=Reference)
async def update_reference(
    reference_id: str,
    reference_data: ReferenceUpdate,
    service: ReferenceService = Depends(get_reference_service)
):
    """Actualizar referencia existente"""
    try:
        reference = await service.update_reference(reference_id, reference_data)
        logger.info(f"Referencia actualizada: {reference_id}")
        return reference
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error al actualizar referencia {reference_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@api_router.delete("/references/{reference_id}")
async def delete_reference(
    reference_id: str,
    service: ReferenceService = Depends(get_reference_service)
):
    """Eliminar referencia"""
    try:
        deleted = await service.delete_reference(reference_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Referencia no encontrada")
        
        logger.info(f"Referencia eliminada: {reference_id}")
        return {"message": "Referencia eliminada correctamente"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error al eliminar referencia {reference_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@api_router.get("/references-count")
async def get_references_count(
    service: ReferenceService = Depends(get_reference_service)
):
    """Obtener el número total de referencias"""
    try:
        count = await service.get_references_count()
        return {"count": count}
    except Exception as e:
        logger.error(f"Error al obtener conteo de referencias: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

# Incluir el router en la aplicación
app.include_router(api_router)