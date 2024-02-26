import { getEvents } from '../../pages/events/eventsService.js'

document.addEventListener('DOMContentLoaded', (event) => {
    function showEvents() {
        getEvents().then((events) => {
            let divContenedor = document.getElementById('contenedorListado');
            let divContenido = document.getElementById('listEvent');
            let listEventVip = document.getElementById('listEventVip');

            for (let evento = 0; evento < events.length; evento++) {
                let plantilla = `
                <div class="row p-1 my-1 mx-1  border border-success rounded">
                <div class="col-4 col-md-4 col-lg-4">
                    <img class="img-fluid rounded" src="${events[evento].banner}" alt="nombre_evento">
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <h6><i class="fa-solid fa-calendar-days" style="color: #63E6BE;"></i> ${events[evento].day}</h6>
                    <h4><i class="fa-solid fa-quote-left" style="color: #B197FC;"></i>${events[evento].title}</h4>
                    <h6><i class="fa-solid fa-location-dot" style="color: #FFD43B;"></i> ${events[evento].address}</h6>
                    <button type="button" class="btn btn-primary btn-sm">Ver mas</button>
                </div>
                
            </div>`;

                divContenido.innerHTML += plantilla;
                divContenedor.insertBefore(divContenido, listEventVip)
            }
        })
    }

    //TODO: ejecucion de funciones 
    showEvents()
})




