import { defineStore } from 'pinia'

export type Car = {
  id: string
  brand: string
  model: string
  year: number
  image: string
  seats: number
  transmission: 'manual' | 'automatic'
  fuel: 'nafta' | 'diesel' | 'híbrido'
  pricePerDay: number
  features: string[]
}

const seed: Car[] = [
  {
    id: '1', 
    brand: 'Toyota', 
    model: 'Etios', 
    year: 2020, 
    image: 'https://i.ytimg.com/vi/ovGhPV3Vx0A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVWhjszf7ZrGcXEHa9lFWXudHeUA',
    seats: 5, 
    transmission: 'manual', 
    fuel: 'nafta', 
    pricePerDay: 35_000,
    features: ['A/C', 'USB', 'Airbag']
  },
  {
    id: '2', 
    brand: 'Chevrolet', 
    model: 'Onix', 
    year: 2021, 
    image: 'https://www.chevroletrpm.com.ar/content/dam/chevrolet/sa/ar/es/master/home/cars/onix/onix-2026/9-onix-rs/Mobile.jpg?imwidth=1920',
    seats: 5, 
    transmission: 'automatic', 
    fuel: 'nafta', 
    pricePerDay: 45_000,
    features: ['A/C', 'ABS', 'Bluetooth']
  },
  {
    id: '3', 
    brand: 'Volkswagen', 
    model: 'Gol', 
    year: 2019, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Volkswagen_Gol_Highline_2023_%2853708009248%29_%28cropped%29.jpg',
    seats: 5, 
    transmission: 'manual', 
    fuel: 'nafta', 
    pricePerDay: 30_000,
    features: ['A/C', 'USB']
  },
  {
    id: '4', 
    brand: 'Renault', 
    model: 'Logan', 
    year: 2022, 
    image: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_686a545c57034ac5960b5d384826f19c.jpg',
    seats: 5, 
    transmission: 'manual', 
    fuel: 'nafta', 
    pricePerDay: 40_000,
    features: ['A/C', 'ABS', 'Sensor de estacionamiento']
  },
  {
    id: '5', 
    brand: 'Fiat', 
    model: 'Cronos', 
    year: 2023, 
    image: 'https://autoenaccion.com.ar/wp-content/uploads/2023/12/fiat-cronos-2023-delantera-jpg.webp',
    seats: 5, 
    transmission: 'automatic', 
    fuel: 'nafta', 
    pricePerDay: 50_000,
    features: ['A/C', 'ABS', 'Apple CarPlay']
  }
]

export const useFleetStore = defineStore('fleet', {
  state: () => ({
    cars: seed as Car[],
    loading: false
  }),
  getters: {
    getById: (state) => (id: string) => state.cars.find(c => c.id === id)
  },
  actions: {
    async fetchAll() {
      // Si luego conectas a tu API, reemplaza este stub
      this.loading = true
      await new Promise(r => setTimeout(r, 300))
      this.loading = false
    }
  }
})