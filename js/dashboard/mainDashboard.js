document.addEventListener("DOMContentLoaded", (event) => {

    let mainContent = document.getElementById('mainContent');
    let eventsContent = document.getElementById('eventsContent');
    let accauntContent = document.getElementById('accauntContent');
    let myEventeContent = document.getElementById('myEventeContent');
    let myWalletContent = document.getElementById('myWalletContent');
    let createEvents = document.getElementById('createEvents');
    

    eventsContent.style.display = "block";
    accauntContent.style.display = "none";
    myEventeContent.style.display = "none";
    myWalletContent.style.display = "none";
    createEvents.style.display = "none";

})


function show(id) {
    let events = document.getElementById('eventsContent');
    let accaunt = document.getElementById('accauntContent');
    let myEvente = document.getElementById('myEventeContent');
    let myWallet = document.getElementById('myWalletContent');
    let createEvent = document.getElementById('createEvents');

    switch (id) {
        case 1:
            events.style.display = "block";
            accaunt.style.display = "none";
            myEvente.style.display = "none";
            myWallet.style.display = "none";
            createEvent.style.display = "none";
            break;
        case 2:
            events.style.display = "none";
            accaunt.style.display = "block";
            myEvente.style.display = "none";
            myWallet.style.display = "none";
            createEvent.style.display = "none";
            break;
        case 3:
            events.style.display = "none";
            accaunt.style.display = "none";
            myEvente.style.display = "block";
            myWallet.style.display = "none";
            createEvent.style.display = "none";
            break;
        case 4:
            events.style.display = "none";
            accaunt.style.display = "none";
            myEvente.style.display = "none";
            myWallet.style.display = "block";
            createEvent.style.display = "none";
            break;
            case 5:
                events.style.display = "none";
                accaunt.style.display = "none";
                myEvente.style.display = "none";
                myWallet.style.display = "none";
                createEvent.style.display = "block";
                break;
        default:
            console.log("defaul expresions" + id);
    }


}






