



import { getEvents } from '../../pages/events/eventsService.js'

document.addEventListener('DOMContentLoaded', (event) => {

    function showEvents() {
        getEvents().then((events) => {

            //  console.log(events[0].title)
            let divContenedor = document.getElementById('eventsContent');
            let divContenido = document.getElementById('listEvent');

            for (let evento = 0; evento < events.length; evento++) {
               // console.log(events[evento].id_event)

                let plantilla = `
            <div class="row mx-4 my-2">
                <div class="col-4">
                    <img class="img-fluid rounded" src="${events[evento].banner}" alt="nombre_evento">
                </div>
                <div class="col-8">
                    <h5>${events[evento].day}</h3>
                    <h3>${events[evento].title}</h3>
                    <h5>${events[evento].address}</h3>
                </div>
            </div>`;

                divContenido.innerHTML += plantilla;
                divContenedor.appendChild(divContenido);
               
            }
        })
    }
    
    showEvents()

})

