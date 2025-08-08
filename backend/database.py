from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import os
from typing import Optional

class Database:
    client: Optional[AsyncIOMotorClient] = None
    database: Optional[AsyncIOMotorDatabase] = None

db = Database()

async def get_database() -> AsyncIOMotorDatabase:
    return db.database

async def connect_to_mongo():
    """Create database connection"""
    db.client = AsyncIOMotorClient(os.environ["MONGO_URL"])
    db.database = db.client[os.environ["DB_NAME"]]
    
    # Crear índices únicos para RFC y correo electrónico
    await db.database.references.create_index("rfc", unique=True)
    await db.database.references.create_index("correoElectronico", unique=True)
    await db.database.references.create_index("created_at")
    
    print("Connected to MongoDB")

async def close_mongo_connection():
    """Close database connection"""
    if db.client:
        db.client.close()
        print("Disconnected from MongoDB")