import { API_URL } from '../../js/constants'

export async function getEvents() {
  try {
    const res = await fetch(API_URL + '/events')

    if (!res.ok) {
      return []
    }

    return res.json()
  } catch (error) {}
}
