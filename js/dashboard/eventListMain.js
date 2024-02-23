

import { getEvents } from '../../pages/events/eventsService.js'

document.addEventListener('DOMContentLoaded', (event) => {

    function showEvents() {
        getEvents().then((events) => {

            //  console.log(events[0].title)
            let divContenedor = document.getElementById('contenedorListado');
            let divContenido = document.getElementById('listEvent');
            let listEventVip = document.getElementById('listEventVip');


            for (let evento = 0; evento < events.length; evento++) {
                // console.log(events[evento].id_event)

                let plantilla = `
                <div class="row p-1 my-1 mx-1  border border-success rounded">
                <div class="col-4 col-md-4 col-lg-4">
                    <img class="img-fluid rounded" src="${events[evento].banner}" alt="nombre_evento">
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <h6>${events[evento].day}</h6>
                    <h6>${events[evento].title}</h6>
                    <h6>${events[evento].address}</h6>
                </div>
            </div>`;

                divContenido.innerHTML += plantilla;
                divContenedor.insertBefore(divContenido, listEventVip)
                //divContenedor.appendChild(divContenido);

            }
        })
    }

    showEvents()

})

