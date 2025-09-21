import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

// 👉 Conecta aquí con tu backend real cuando lo tengas listo
export const Api = {
  async listCars() {
    // return (await api.get('/cars')).data
    return []
  },
  async getCar(id: string) {
    // return (await api.get(`/cars/${id}`)).data
    return null
  },
  async createReservation(payload: any) {
    // return (await api.post('/reservations', payload)).data
    return { ok: true }
  }
}

export default api