import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Configurar axios
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejo de errores
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Extraer mensaje de error del backend
    const message = error.response?.data?.detail || error.message || 'Error desconocido';
    throw new Error(message);
  }
);

export const referenceService = {
  // Obtener todas las referencias
  async getAllReferences() {
    try {
      const response = await apiClient.get('/references');
      return response.data;
    } catch (error) {
      console.error('Error al obtener referencias:', error);
      throw error;
    }
  },

  // Obtener referencia por ID
  async getReferenceById(id) {
    try {
      const response = await apiClient.get(`/references/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener referencia ${id}:`, error);
      throw error;
    }
  },

  // Crear nueva referencia
  async createReference(referenceData) {
    try {
      const response = await apiClient.post('/references', referenceData);
      return response.data;
    } catch (error) {
      console.error('Error al crear referencia:', error);
      throw error;
    }
  },

  // Actualizar referencia
  async updateReference(id, referenceData) {
    try {
      const response = await apiClient.put(`/references/${id}`, referenceData);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar referencia ${id}:`, error);
      throw error;
    }
  },

  // Eliminar referencia
  async deleteReference(id) {
    try {
      const response = await apiClient.delete(`/references/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar referencia ${id}:`, error);
      throw error;
    }
  },

  // Obtener conteo de referencias
  async getReferencesCount() {
    try {
      const response = await apiClient.get('/references-count');
      return response.data;
    } catch (error) {
      console.error('Error al obtener conteo de referencias:', error);
      throw error;
    }
  }
};