import { getCategories } from '../categories/categoriesService.js'

function showCategories() {
  const categoriesTag = document.getElementById('categories')
  getCategories().then((categories) => {
    const fragment = document.createDocumentFragment()
    for (const category of categories) {
      const categoryTag = document.createElement('option')
      categoryTag.value = category.name
      categoryTag.textContent = category.name
      fragment.appendChild(categoryTag)
    }
    categoriesTag.appendChild(fragment)
  })
}

function main() {
  showCategories()
}

document.addEventListener('DOMContentLoaded', main)
