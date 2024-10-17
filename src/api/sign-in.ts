import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

export async function signIn(body: SignInBody) {
  await api.post('/authenticate', body)
}
