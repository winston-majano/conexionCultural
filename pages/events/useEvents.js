import { getEvents } from '../events/eventsService.js'

function showEvents() {
  getEvents().then((events) => {
    console.log(events)
  })
}

function main() {
  showEvents()
}

document.addEventListener('DOMContentLoaded', main)
