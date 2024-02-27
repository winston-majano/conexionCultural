import { getEvents } from '../../pages/events/eventsService.js'
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
            <div  class="col-8 col-md-8 col-lg-8 clsAddButton">
                <h6><i class="fa-solid fa-calendar-days" style="color: #63E6BE;"></i> ${events[evento].day}</h6>
                <h4><i class="fa-solid fa-quote-left" style="color: #B197FC;"></i>${events[evento].title}</h4>
                <h6><i class="fa-solid fa-location-dot" style="color: #FFD43B;"></i> ${events[evento].address}</h6>
            </div>
        </div>`;

            divContenido.innerHTML += plantilla;
            divContenedor.insertBefore(divContenido, listEventVip)

        }

        return events
    }).then((rest) => {
        
        const clsAddButton = document.querySelectorAll('.clsAddButton')
        for (let i = 0; i < clsAddButton.length; i++) {
            const btnDetailEvent = document.createElement('button');

            btnDetailEvent.textContent = "ver más";
            btnDetailEvent.dataset.bsTarget = "#detailEventModal";
            btnDetailEvent.dataset.bsToggle = "modal";
            btnDetailEvent.classList.add('btn', 'btn-primary');
            btnDetailEvent.id = rest[i].id_event

            clsAddButton[i].appendChild(btnDetailEvent)

            btnDetailEvent.addEventListener('click', (e) => {
                let img1 = document.getElementById('imgEventDetail');
                let day1 = document.getElementById('dateEventDetail');
                let nameEventDetail = document.getElementById('nameEventDetail');
                let location = document.getElementById('locationEventDetail');
                let author = document.getElementById('authorEventDetail');
                let organizer = document.getElementById('organizerEventDetail');
                let description = document.getElementById('descriptionEventDetail');
                let precio = document.getElementById('priceEventDetail');

                precio.textContent = `Precio: $${rest[i].price}.00`;
                description.textContent = "Descripcion: " + rest[i].description;
                organizer.textContent = "Organizado por: " + rest[i].organizedby;
                author.textContent = "Autor: " + rest[i].author;
                nameEventDetail.textContent = rest[i].title;
                location.textContent = "Ubicacion: " + rest[i].address;
                img1.setAttribute('src', `${rest[i].banner}`)
                day1.textContent = "Fecha: " + rest[i].day;
            })
        }
    })

}

function main() {
    showEvents()
}

document.addEventListener('DOMContentLoaded', main)