import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile(body: UpdateProfileBody) {
  await api.put('/profile', body)
}
