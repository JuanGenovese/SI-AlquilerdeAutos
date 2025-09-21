import { defineStore } from 'pinia'

export type Reservation = {
  id: string
  carId: string
  from: string // YYYY-MM-DD
  to: string   // YYYY-MM-DD
  name: string
  email: string
  phone: string
  total: number
}

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [] as Reservation[],
    lastId: 0
  }),
  actions: {
    create(input: Omit<Reservation, 'id'>) {
      const id = String(++this.lastId)
      const res: Reservation = { id, ...input }
      this.reservations.push(res)
      return res
    }
  }
})