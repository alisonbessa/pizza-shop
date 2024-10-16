import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(body: RegisterRestaurantBody) {
  await api.post('/authenticate', body)
}
