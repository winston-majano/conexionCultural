import { API_URL } from '../../js/constants.mjs'

export async function getCategories() {
  try {
    const res = await fetch(API_URL + '/categories')

    if (!res.ok) {
      return []
    }

    return res.json()
  } catch (error) {}
}
